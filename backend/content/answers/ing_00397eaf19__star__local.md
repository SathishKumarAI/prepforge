---
qid: ing_00397eaf19__star__local
question: 'Explain: Popular Messaging Systems — Message Queues | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 368
total_tokens: 606
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:29:02-05:00'
sources: []
---

**Situation** – In my last role I was tasked with scaling the real‑time recommendation pipeline for an e‑commerce platform that saw 1.2 M active users per day. The existing batch job sent user events to a single REST endpoint; latency spiked during flash sales and we lost about 8% of conversion opportunities.

**Task** – My goal was to redesign the ingestion layer so that it could handle 50k events per second, provide at‑least‑once delivery guarantees, and decouple downstream services (analytics, personalization microservice) from spikes in traffic.

**Action** – I evaluated several messaging systems: ActiveMQ, RabbitMQ, Kafka, and Pulsar. After a quick benchmark, I chose **Kafka** for its horizontal scalability and strong ordering guarantees. I set up a 3‑node cluster behind an HAProxy load balancer, partitioned topics by user segment to balance load, and used Avro schemas with Confluent Schema Registry to enforce data contracts. I also implemented consumer groups: one group fed the recommendation engine, another logged raw events for audit. To handle backpressure, I enabled Kafka’s `max.poll.records` tuning and added a retry topic for transient failures.

**Result** – The new pipeline reduced event processing latency from 2 s to under 200 ms during peak traffic. Conversion rate increased by 4%, and we cut infrastructure costs by 15% thanks to efficient scaling. I learned that choosing the right queue hinges on throughput, ordering needs, and schema evolution—Kafka’s ecosystem made those trade‑offs clear.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
