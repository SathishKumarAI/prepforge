---
qid: ing_e2cdc72dc6__fp__local
question: 'Explain: Latency — System Design was HARD until I Learned these 30 Concepts'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 389
total_tokens: 565
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:02:01-05:00'
sources: []
---

**Why latency feels like a hard system‑design puzzle**

At its core, *latency* is the time between an input event and the observable output. In a distributed ML service this interval is governed by **four coupled constraints**:

1. **Data movement** – moving tensors across network hops incurs both deterministic propagation delay (speed of light) and stochastic queueing latency.  
2. **Computation scheduling** – each GPU or TPU core has a finite compute budget; overlapping kernels reduces idle time but introduces contention for shared memory, which is an instance of the *congestion* problem in queuing theory.  
3. **Model inference pipeline** – layers are not independent: early errors propagate and may trigger fallback paths (e.g., model distillation), adding conditional branches that break the assumption of a linear pipeline.  
4. **System feedback loops** – autoscaling, dynamic batching, or adaptive precision alter the workload distribution in real time, turning latency into a *control‑system* problem where the controller’s own actions feed back into the delay.

A non‑obvious insight: **batch size is not a free variable**. Larger batches amortize kernel launch overhead but increase queueing and memory contention, while smaller batches reduce per‑sample wait but raise scheduling overhead. The optimum batch size emerges from solving a *convex trade‑off* between these two forces—an optimization problem that is often solved empirically rather than analytically.

Understanding latency thus demands treating the ML stack as an end‑to‑end **information‑processing system** where geometry (data layout), probability (queueing), and control theory (autoscaling) intertwine. Once you formalize it this way, each “hard” design choice becomes a predictable consequence of fundamental limits.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
