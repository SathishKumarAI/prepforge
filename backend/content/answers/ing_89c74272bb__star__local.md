---
qid: ing_89c74272bb__star__local
question: 'Explain: High Availability — Apache Kafka'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 321
total_tokens: 554
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:08:28-05:00'
sources: []
---

**Situation**  
At my last job we were migrating a real‑time analytics pipeline from RabbitMQ to Apache Kafka. The existing system had a 99.5 % uptime target, but our test cluster kept dropping partitions during load spikes.

**Task**  
I was tasked with designing a high‑availability architecture that would keep data flowing without loss and meet the SLA while keeping cost under budget.

**Action**  
First I set up a multi‑AZ Kafka cluster: three brokers per zone, each with mirrored ISR (in‑sync replicas) of five. I enabled automatic leader election and configured `min.insync.replicas=2` to ensure writes required two ACKs before succeeding. For fault tolerance I added a ZooKeeper ensemble across the same AZs for quorum stability. To handle broker failures quickly, I scripted rolling restarts with a health‑check probe that waited for `kafka-assigner` to finish rebalancing before resuming traffic. Finally, I turned on Kafka’s compacted topic for critical control messages and set up Prometheus alerts for lag > 100ms.

**Result**  
After deployment we achieved 99.97 % uptime over a month‑long stress test with 10× the production load. The system tolerated two broker crashes without data loss, and latency stayed under 20 ms on average. I learned that balancing replication factor, ISR settings, and infrastructure placement is key to true high availability in Kafka.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
