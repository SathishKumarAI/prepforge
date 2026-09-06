---
qid: ing_c2d7d213d9__fp__local
question: 'Explain: Measuring Latency — Latency vs Throughput vs Bandwidth | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 459
total_tokens: 636
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:56:17-05:00'
sources: []
---

**Latency, throughput and bandwidth are three sides of the same “rate–time” triangle that governs any data‑centric system.**

*Fundamental problem:* a machine learning model must consume input \(x\) and produce output \(y\) as fast as possible while keeping memory and compute resources bounded. The *delay* from request to response is latency; the *volume of work done per unit time* is throughput; the *maximum data that can be moved per unit time* is bandwidth.

*Why these measures must coexist.*  
- Latency \(L\) = \(\frac{\text{time}}{\text{request}}\). It captures the cost of a single inference, including queuing, serialization and kernel launch.  
- Throughput \(T\) = \(\frac{\text{requests}}{\text{time}}\). By definition \(T=\frac{1}{L}\) only when every request is served back‑to‑back with no idle time; otherwise queueing or resource contention makes \(T < 1/L\).  
- Bandwidth \(B\) = \(\frac{\text{bytes}}{\text{time}}\). It limits how fast data can be streamed into the accelerator. If a model requires more input bytes per inference than the bus can deliver, latency will be dominated by I/O rather than compute.

*Deep insight.*  
Throughput is not simply the reciprocal of latency because systems are rarely fully saturated; queueing theory shows that \(T = \frac{C}{L+Q}\), where \(C\) is core count and \(Q\) is average queuing delay. Thus, optimizing for low latency alone may hurt throughput if the scheduler does not balance load across cores.

*Non‑obvious takeaway.*  
Bandwidth constraints can create a *latent bottleneck* invisible in pure compute profiling: a model with trivial arithmetic but heavy input size will have high latency even on an idle GPU. Therefore, end‑to‑end evaluation must include data transfer rates, not just kernel execution times.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
