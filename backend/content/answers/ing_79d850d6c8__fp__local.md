---
qid: ing_79d850d6c8__fp__local
question: 'Explain: p95 time-to-first-token on answers regressed from 1.2 s to 3 s
  after a release. Walk me through finding and fixing it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 785
total_tokens: 978
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:23:32-05:00'
sources: []
---

### Why the 95 %‑ile matters

The **p95 time‑to‑first‑token (TTFT)** is the delay before a model starts emitting output for 95 % of requests. It is the *critical path* that users feel; if it jumps from 1.2 s to 3 s, a large fraction of interactions stall longer than acceptable.

---

## 1. Formulate the problem as an optimization constraint

We want to minimize **expected TTFT** while satisfying a latency budget \(L_{\max}\). The TTFT is the sum of:

| Component | Typical contribution |
|-----------|---------------------|
| Warm‑up (kernel launch, JIT) | 0.4–0.6 s |
| Token‑generation loop (GPU compute + communication) | 0.5–1.0 s |
| Model‑state fetch & cache miss | 0.2–0.8 s |

A regression indicates that one or more terms have increased.

---

## 2. Instrumentation & data collection

1. **High‑resolution timers** inside the inference engine (e.g., CUDA events, `std::chrono` on CPU). Log start/end of:
   * Model loading
   * First kernel launch
   * Token loop entry/exit
2. **Cache statistics**: GPU L1/L2 hit rates, PCIe transfer sizes.
3. **Resource usage**: GPU occupancy, memory bandwidth.

Run a representative load (≈ 2000 requests) and capture the 95 % quantile per component.

---

## 3. Identify the culprit

After logging:

| Component | Before | After |
|-----------|--------|-------|
| Warm‑up | 0.5 s | 1.6 s |
| Token loop | 0.7 s | 0.8 s |
| Cache miss | 0.0 s | 0.6 s |

The **warm‑up** spike (from 0.5 s to 1.6 s) dominates the regression.

*Why?*  
The new release introduced a larger *model state* that is now lazily loaded from disk on each request, triggering a costly PCIe transfer. The previous version kept the entire model resident in GPU memory.

---

## 4. Fixing it

1. **Persist the model across requests**  
   * Move the full model to GPU once at service start (`torch::cuda::set_device`).  
   * Avoid re‑loading from disk; keep a shared CUDA context.
2. **Use pinned host memory for any required CPU↔GPU copy**  
   * Eliminates page‑fault induced stalls.
3. **Profile kernel launch overhead**  
   * If JIT compilation is the source, pre‑compile kernels at startup (`torch::jit::script`).

Re‑measure: TTFT drops to 1.25 s, matching the original baseline.

---

## 5. One non‑obvious insight

*The p95 is sensitive to **rare but expensive cache misses**.*  
Even if the median TTFT remains low, a single large transfer (e.g., loading a rarely used layer) can push the 95 %ile up dramatically. Therefore, always monitor *tail‑latency components*, not just averages.

---

### Takeaway

Treat latency as an **optimization problem with tail constraints**. By decomposing TTFT into measurable stages, you pinpoint regressions, then apply targeted memory‑management or pre‑warming fixes to restore the 95 %ile performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
