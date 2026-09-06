---
qid: ing_cfa5ca3cf2__fp__local
question: 'Explain: Design the scheduler for a continuous-batching inference engine.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 415
total_tokens: 587
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:21:45-05:00'
sources: []
---

**Designing a Scheduler for Continuous‑Batch Inference**

The core problem is *maximizing throughput while keeping latency bounded* in a stream of short inference requests that must be batched to exploit GPU parallelism.  
Let each request arrive at time \(t_i\) with size \(s_i\). The scheduler chooses a batch \(\mathcal{B}\) and a service time \(T_{\text{serv}}\) such that:

1. **Stability**: the expected queue length does not diverge.  
2. **Latency constraint**: each request’s waiting time \(w_i = T_{\text{serv}}-t_i\) ≤ \(L_{\max}\).  
3. **Cost minimization**: total GPU usage (≈ ∑\(s_i\)·\(T_{\text{serv}}\)) is minimized.

Formulate this as a *convex optimization* over batch composition and timing, with constraints that the batch size never exceeds the GPU memory \(M\). The Lagrangian introduces a multiplier for latency; its optimality condition yields a **dynamic threshold**: add requests to the current batch until either (a) the cumulative size reaches a *critical mass* \(S^*\), or (b) the head‑of‑line waiting time would exceed \(L_{\max}\).  

A key insight is that the optimal policy is **threshold‑based in queue length, not request count**. Because GPU kernel launch overhead grows sublinearly with batch size, waiting to accumulate more requests yields diminishing returns; the threshold naturally balances this trade‑off.

Implementation: maintain a min‑heap of arrival times; at each service tick, pop until cumulative size ≥ \(S^*\) or latency bound is hit. This simple rule provably approaches the optimal throughput–latency frontier while being trivial to implement in production systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
