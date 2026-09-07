---
qid: ing_aae088cef7__faang__local
question: Why does continuous batching outperform static batching for LLM serving?
  What are the tradeoffs?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 536
total_tokens: 776
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:21:54-05:00'
sources: []
---

**Clarify**  
We’re comparing *static* (fixed‑size) batches sent to a language‑model inference engine versus *continuous* (dynamic, streaming) batching that aggregates requests on the fly. The goal: maximize throughput while keeping latency within SLA limits.

---

**Approach**  
1. Identify key metrics: GPU utilization, request latency, and queueing delay.  
2. Model how batch size influences kernel launch overhead vs. compute‑to‑memory ratio.  
3. Evaluate trade‑offs in a realistic traffic mix (high‑volume bursts + low‑rate tail).

---

**Depth**  
- **Static batching** fixes a size \(B\). All \(B\) requests must arrive before launching the kernel, guaranteeing optimal GPU utilization but incurring *wait* time. For sparse arrivals, latency spikes and throughput falls below peak.  
- **Continuous batching** aggregates as many ready requests as possible within a short window (e.g., 1 ms). It keeps GPU busy with variable \(b \le B\), reducing queueing delay for tail traffic while still exploiting parallelism. The kernel launch overhead is amortized over the dynamic batch, but per‑request cost increases when \(b\) is small because of sub‑optimal occupancy and higher launch latency.

**Complexity**:  
- Static: \(O(1)\) scheduling overhead; throughput ≈ \(B \times\) (GPU FLOPs / token).  
- Continuous: \(O(k)\) for maintaining a min‑heap of pending requests, but amortized per request cost is lower in high‑traffic regimes.

---

**Edge Cases**  
- *Burst traffic*: static batching may starve GPU, continuous keeps it busy.  
- *Very low arrival rate*: both suffer; continuous still better due to shorter wait.  
- *Model size variance*: larger models need larger batches for efficiency; continuous can adapt batch size per model.

---

**Optimize & Communicate**  
Implement a two‑tier queue: a fast “micro‑batch” buffer (≤ 16 requests) for ultra‑low latency, and a slower “macro‑batch” (≥ 64) for throughput. Use adaptive window sizing based on real‑time latency SLA. Communicate trade‑offs to stakeholders by showing a *latency‑throughput Pareto frontier* that continuous batching expands relative to static batching. This narrative demonstrates structured reasoning, clear assumptions, and actionable engineering insight—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
