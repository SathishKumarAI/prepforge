---
qid: ing_077448f411__aws__local
question: 'Explain: Kafka Streams API — data-engineering/DataProcessing/KafkaStreams/Readme.md
  at main \u00b7 Anshul619/data-engineering \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 259
output_tokens: 446
total_tokens: 705
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:42:45-05:00'
sources: []
---

**Situation & Task**  
In my last role I led a migration of our real‑time fraud detection pipeline from a batch Spark job to a low‑latency stream processor on AWS. The goal was to reduce the end‑to‑end latency from 15 min to under 1 s while keeping cost < 20% of the legacy spend.

**Action**  
I chose **Kafka Streams API** for its pure Java, stateful processing model and tight integration with Kafka’s fault tolerance. I built a topology that:

- Consumes from `transactions` topic (10k msgs/s)  
- Joins with user profile data in an external KTable (`user‑profiles`)  
- Applies a lightweight ML inference model loaded into a **KStream** via a custom processor

For stateful caching, I used the *RocksDB* store backed by **EFS‑mounted EC2 Spot instances** to keep local disk costs low. To guarantee **high availability**, each Kafka Streams instance ran in an Auto Scaling group across two AZs; the topology was replicated with `replicationFactor=3`. 

I also added a **KSQL** layer for quick ad‑hoc analytics, and used **AWS Managed Streaming for Apache Kafka (MSK)** to offload operational overhead. The whole solution cost $2k/month versus the previous $12k, while latency dropped from 15 min to ~800 ms.

**Result**  
The new pipeline processed 10M+ transactions/day with a 99.9% success rate and delivered fraud alerts in real time, cutting false positives by 30%. The project earned an internal “Innovation Award” and I documented the architecture for cross‑team adoption.

> **Leadership Principles:** *Customer Obsession* (real‑time alerts improve user trust) & *Ownership* (I drove end‑to‑end delivery).  
> **Bar‑raiser focus:** depth of Kafka Streams knowledge, cost/latency trade‑offs, and measurable business impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
