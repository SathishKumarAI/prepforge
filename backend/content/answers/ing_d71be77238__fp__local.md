---
qid: ing_d71be77238__fp__local
question: 'Q: How would you design infrastructure for 1M LLM queries per day?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 524
total_tokens: 700
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:37:34-05:00'
sources: []
---

**Designing a 1 M‑query/day LLM platform**

The fundamental problem is *throughput*: we must deliver an inference for each query within its latency budget while keeping cost bounded.  
Let \(T\) be the average token‑generation time on a single GPU, \(L\) the target latency, and \(Q=10^6\) the daily query count.  
A single GPU can serve at most \(\frac{86400}{T}\) queries per day; to meet \(Q\) we need  

\[
N_{\text{GPU}}=\left\lceil\frac{Q\,T}{86400}\right\rceil .
\]

This equation is the *resource‑latency trade‑off*—it emerges from queuing theory: a server’s capacity must exceed the arrival rate to keep waiting times negligible.  

**Layered scaling**

1. **Model partitioning (model‑parallelism)**  
   Split the transformer into shards that fit on 16 GB GPUs. This keeps \(T\) small by avoiding off‑chip memory traffic, which is the dominant cost in inference.

2. **Dynamic batching**  
   Aggregate requests of similar length; each batch reduces per‑token compute by a factor \(\sqrt{b}\), where \(b\) is batch size. Batching turns latency into an *elastic* variable: we can delay a few milliseconds to gain 10–20 % speedup.

3. **Cache‑driven pre‑computation**  
   Store embeddings of frequent prompts in RAM; the cost of recomputing them dominates for short, high‑frequency queries. This is an application of *information locality*—the entropy of prompt distribution dictates cache size.

4. **Autoscaling microservices**  
   Deploy stateless inference pods behind a load balancer that respects the queuing bound above. Each pod runs \(k\) GPUs; horizontal scaling follows the demand curve derived from the Poisson arrival process.

**Non‑obvious insight:**  
Because token generation is *autoregressive*, the variance of \(T\) across queries is high. By modeling this variance and pre‑allocating a buffer of “spare” GPUs during predicted spikes (using a lightweight Kalman filter on recent traffic), we avoid queuing delays without overprovisioning, turning latency guarantees into a probabilistic resource allocation problem rather than a rigid capacity plan.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
