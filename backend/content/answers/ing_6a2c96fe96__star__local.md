---
qid: ing_6a2c96fe96__star__local
question: 'Explain: How to Choose the Number of Topics/Partitions in a Kafka Cluster?
  | Confluent'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 412
total_tokens: 658
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:59:57-05:00'
sources: []
---

**Situation** – In my last role I was leading the migration of our real‑time analytics platform from on‑prem to Confluent Cloud. The legacy system had 12 partitions per topic, but after a spike in traffic we were seeing 15 % slower consumer lag and occasional broker overloads.

**Task** – My goal was to re‑evaluate the number of partitions for each Kafka topic so that we could balance throughput, latency, and resource usage while staying within the Confluent Cloud quota limits.

**Action** – I started by collecting metrics from JMX (bytes‑in/out per second, consumer lag, broker CPU). Using a simple linear regression on the lag vs. partition count data, I identified diminishing returns after 24 partitions for high‑volume topics. I then applied Kafka’s “partition scaling” best practices:  
1. **Topic-level cardinality** – split highly active topics (orders) into two logical streams to avoid hot partitions.  
2. **Producer key design** – ensured keys were uniformly hashed to prevent skew.  
3. **Broker capacity** – aligned partition count with the number of brokers, aiming for at least one replica per broker.  
4. **Confluent Cloud limits** – verified that the new total partition count stayed under the 100‑partition per topic limit and within our plan’s throughput budget.

I rolled out the changes incrementally, monitored consumer lag in Confluent Control Center, and adjusted the replication factor for a few critical topics to 3 for fault tolerance.

**Result** – After reconfiguration, we reduced average consumer lag from 2.5 s to under 0.8 s, increased throughput by ~30%, and freed up 15% of broker CPU capacity. I learned that data‑driven partition sizing, coupled with careful key design and broker alignment, is far more effective than “just bumping partitions” blindly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
