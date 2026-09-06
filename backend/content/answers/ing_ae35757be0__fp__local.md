---
qid: ing_ae35757be0__fp__local
question: 'Explain: Improving Throughput — Latency vs Throughput vs Bandwidth | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 422
total_tokens: 599
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:15:03-05:00'
sources: []
---

**Throughput‑centric design: why latency, bandwidth and queueing matter**

At its core a machine‑learning inference service is a **stochastic pipeline** that maps an input request \(x\) to an output \(y=f(x)\).  
The *throughput* \(\lambda\) (requests per second) equals the **arrival rate** divided by the **service time**.  From Little’s Law, the expected queue length is
\(L=\lambda W\), where \(W\) is the average waiting time (latency).  Thus, to raise \(\lambda\) we must reduce \(W\)—not merely increase raw bandwidth.

Bandwidth (\(B\)) supplies data‑rate capacity, but it is *orthogonal* to service time: a high‑bandwidth link can still bottleneck if the GPU kernel stalls.  Optimizing throughput therefore requires balancing:

1. **Compute parallelism** – batch size \(b\) multiplies GPU utilisation, but larger \(b\) inflates per‑request latency linearly.
2. **Queue discipline** – a *fair* scheduler (e.g., weighted round robin) keeps queues short for low‑latency clients while still exploiting batching for high‑throughput jobs.
3. **Resource isolation** – pinning cores, using NUMA‑aware memory allocation prevents cache thrashing that would otherwise increase \(W\).

The subtle insight often missed: **bandwidth is a *capacity* constraint; latency is the *shape* of the workload distribution**.  A system can be bandwidth‑rich yet throughput‑poor if its queue discipline and batch sizing create long tails in service time.  Thus, improving throughput boils down to reshaping the service‑time distribution—shortening the tail—rather than merely adding more pipes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
