---
qid: ing_28520b7317__fp__local
question: 'Explain: Appendix – Cost calculations — Uncovering Kafka\u2019s Hidden
  Infrastructure Costs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 463
total_tokens: 641
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:31:04-05:00'
sources: []
---

## Appendix – Cost Calculations: Uncovering Kafka’s Hidden Infrastructure Costs

When a team buys a *Kafka* cluster they often pay only for the brokers themselves.  
Yet every byte that streams through is a **resource‑driven transaction**:

1. **Disk I/O** – Every write must be flushed to disk (log compaction, segment rollover).  
2. **Network bandwidth** – Producers and consumers exchange messages over TCP; each message carries header overhead and serialization cost.  
3. **CPU cycles** – Compression/decompression, checksum calculation, and record batching are CPU‑bound.  

Treating the cluster as a *stateless* key–value store ignores that Kafka is a **stream processing engine**: its throughput \(T\) (bytes/s) is bounded by the minimum of disk write speed, network capacity, and CPU budget:

\[
T \leq \min\{D_{\text{write}},\, B_{\text{net}},\, C_{\text{cpu}}\}.
\]

Cost per GB can be expressed as

\[
C = \frac{\alpha}{D_{\text{write}}} + \frac{\beta}{B_{\text{net}}} + \frac{\gamma}{C_{\text{cpu}}},
\]

where \(\alpha,\beta,\gamma\) are the unit costs of disk, bandwidth, and CPU respectively.  
By measuring real‑world \(T\) under load (e.g., using `kafka-run-class kafka.tools.JmxTool` to scrape metrics), we can back‑solve for each term, revealing that *network* often dominates in high‑throughput deployments—an insight many overlook because they assume disk is the bottleneck.

**Non‑obvious takeaway:** The *latency* of a single message is not just a function of broker response time; it scales with the **queue length** on the network buffer, which grows linearly with producer burstiness. Hence, to keep costs predictable, you must shape traffic (e.g., using backpressure or throttling) as much as you provision hardware.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
