---
qid: ing_7934da3277__fp__local
question: 'Explain: Latency vs Throughput vs Bandwidth | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 439
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:22:14-05:00'
sources: []
---

**Latency, throughput and bandwidth are three orthogonal axes that capture how a machine‑learning system trades speed against scale.**

| Concept | What it measures | Why it matters for ML |
|---------|------------------|-----------------------|
| **Latency** | Time from request to first byte of response (or first inference). | Determines user‑experience; low latency is essential for online recommendation, autonomous driving, or any real‑time decision. |
| **Throughput** | Number of requests processed per second. | Governs the system’s capacity to serve many users simultaneously; critical in batch training pipelines and high‑volume inference services. |
| **Bandwidth** | Amount of data that can be transmitted over a link (bytes/sec). | Sets the upper bound for both latency and throughput: you cannot deliver more data faster than the channel allows. |

In practice, these metrics are linked by *queueing theory* and *information‑theoretic limits*. A system’s **effective throughput** \(T\) satisfies  
\( T \leq \frac{B}{L_{\text{avg}}} \), where \(B\) is bandwidth and \(L_{\text{avg}}\) the average request size. Likewise, latency is bounded by the *service time* of the slowest component plus queuing delay:  
\( L = S + \frac{1}{\mu - \lambda} \).  

**Non‑obvious insight:** *Latency is not merely a “speed” metric; it is a bottleneck that limits throughput through queuing. Optimizing for lower latency (e.g., via model pruning or faster hardware) can actually increase overall throughput, because the queue clears more quickly and the system stays below its saturation point.*  

Thus, a well‑designed ML pipeline balances these three: it keeps the service time short enough that the arrival rate \(\lambda\) never exceeds the processing capacity \(\mu\), while ensuring that the network bandwidth \(B\) is not the limiting factor.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
