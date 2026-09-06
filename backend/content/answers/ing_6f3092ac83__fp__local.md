---
qid: ing_6f3092ac83__fp__local
question: 'Explain: A prospective customer runs their workload on H100s. Talk me through
  when you would tell them not to move.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 184
output_tokens: 550
total_tokens: 734
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:00:53-05:00'
sources: []
---

**When to stay put with NVIDIA H100 GPUs**

1. **Peak performance envelope**  
   The H100’s 80‑Tflop/s (FP16/TF32) and 400 GB/s memory bandwidth are the highest in the data‑center line‑up. If your workload is *bandwidth‑bound* (e.g., large transformer training, high‑resolution rendering), shifting to a lower‑tier GPU would reduce throughput proportionally, while still incurring migration costs.

2. **Cost‑per‑performance ratio**  
   The H100’s amortized cost per FLOP is already near the optimum for dense matrix kernels. For workloads that hit > 70 % of peak compute or memory usage, the incremental price of an H100 is offset by a proportional speed‑up—moving to a cheaper GPU would actually *increase* total spend (more instances needed, longer job times).

3. **Software stack lock‑in**  
   If you rely on CUDA‑specific libraries (cublasLt, TensorRT) tuned for the Hopper architecture, migration forces re‑optimization. The law of diminishing returns kicks in: a 10 % speed gain from new hardware often costs > 20 % more engineering effort.

4. **Thermal and power envelope**  
   H100s are designed to run at high TDP (~700 W). If your data center already operates near its cooling budget, adding or swapping to another GPU model may trigger a *cascade* of infrastructure upgrades that outweigh the performance benefit.

5. **Risk‑aversion for regulated workloads**  
   For workloads subject to strict SLAs (e.g., financial trading), the proven stability of the H100’s firmware and deterministic latency are critical. Introducing a new GPU adds an unknown variable; unless you have a compelling throughput win, staying with the tested platform is safer.

---

### Non‑obvious insight
**The “law of marginal utility for GPUs”**: In many real workloads, the *marginal* performance gain from upgrading to a higher‑tier GPU drops sharply after the first 10–15 % of peak utilization. Thus, if your current job already saturates the H100’s compute or memory pipeline, moving to a cheaper model will not only waste money but can actually increase latency due to added context switches and orchestration overhead.

In short, stay with the H100 whenever you’re operating near its performance ceiling, when cost‑per‑FLOP is optimal, or when software/hardware stability outweighs marginal speed gains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
