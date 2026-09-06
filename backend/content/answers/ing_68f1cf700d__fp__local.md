---
qid: ing_68f1cf700d__fp__local
question: 'Explain: Total Latency — Inference Pipeline'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 533
total_tokens: 701
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:47:33-05:00'
sources: []
---

**Total Latency – the end‑to‑end time a request spends in an AI inference pipeline**

*Why it matters.*  
An inference system solves the optimization problem: *minimise the expected time to produce a prediction subject to accuracy and resource constraints*. The total latency is the objective that the scheduler, compiler, and hardware must optimise.

*Derivation from first principles.*  

1. **Request arrival** – A client emits an input \(x\) at time \(t_0\).  
2. **Pre‑processing** – Transformations (tokenisation, resizing, normalisation) run on CPU/GPU; their duration is \(\tau_{\text{prep}}\).  
3. **Model execution** – The neural network executes a directed acyclic graph of operators. Each operator \(i\) incurs a kernel time \(\kappa_i\) plus data movement \(\delta_i\); the sum over all operators gives \(\tau_{\text{exec}}=\sum_i (\kappa_i+\delta_i)\).  
4. **Post‑processing** – Decoding, de‑normalisation, etc., cost \(\tau_{\text{post}}\).  
5. **Queuing delay** – If the system is busy, the request waits for \(q\), which depends on the arrival process and scheduler policy.

Thus  
\[
L_{\text{total}} = (t_0 + q) - t_0
= q + \tau_{\text{prep}} + \tau_{\text{exec}} + \tau_{\text{post}} .
\]

*Deeper principle.*  
Latency is the **first‑passive‑response time** of a stochastic queueing network with deterministic service times per operator. Optimising it reduces to balancing parallelism (pipeline depth) against contention (bandwidth, memory). The total latency equals the *critical path length* of the execution DAG plus queuing.

*Non‑obvious insight.*  
Many practitioners treat \(\tau_{\text{exec}}\) as fixed once a model is frozen. In reality, **operator fusion and cache locality can change the critical path dramatically**: merging two consecutive convolutions into one fused kernel shortens the path by removing an intermediate memory write, reducing both \(\kappa_i\) and \(\delta_i\). Thus latency is not merely a sum of per‑layer times but depends on how those layers are scheduled together.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
