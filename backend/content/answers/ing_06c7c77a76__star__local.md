---
qid: ing_06c7c77a76__star__local
question: 'Explain: In-sync replicas — Kafka Acks Explained'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 335
total_tokens: 570
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:42:33-05:00'
sources: []
---

**Situation:**  
In my last role, our streaming pipeline was ingesting sensor data from 120 IoT devices into Kafka. Every hour we hit a spike of 50 % more messages, and downstream analytics started falling behind by an average of 2 minutes.

**Task:**  
I had to reduce the lag so that the real‑time dashboard stayed within 30 seconds of live data without sacrificing durability.

**Action:**  
First I examined the broker metrics: `replica_lag` was peaking at 200 kB per partition. I realized we were running with `acks=1`, meaning producers only waited for the leader to write, while replicas lagged behind. I changed the topic config to `acks=all` and increased the replication factor from 3 to 4 to give more redundancy. Then I tuned the `min.insync.replicas` setting to 2 so that a write would still succeed if at least two replicas acknowledged. Finally, I rebalanced partitions across brokers with higher throughput capacity and added a dedicated producer thread pool.

**Result:**  
The average end‑to‑end latency dropped from 120 s to under 20 s, keeping the dashboard within real time. The system also gained stronger consistency guarantees: any message that was acknowledged by producers was guaranteed to survive broker failures. I learned that balancing `acks`, replication factor, and in‑sync replica settings is key to achieving both performance and fault tolerance in Kafka.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
