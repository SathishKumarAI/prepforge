---
qid: ing_555b6b5dac__fp__local
question: 'Explain: CP, AP, and CA — CAP Theorem | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 459
total_tokens: 634
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:06:25-05:00'
sources: []
---

**CAP Theorem – from first principles**

In any distributed data store, each client request is an *optimization problem*:  
maximize **Availability** (every request gets a response) while guaranteeing **Consistency** (all replicas see the same value) and tolerating **Partitioning** (the network may split).  

A *partition* is unavoidable—links fail or messages are delayed. Once it occurs, two disjoint groups cannot communicate. If we insist on *Availability*, each group must answer queries locally; if we insist on *Consistency*, one group must block until the other can join, sacrificing Availability. Thus, under a partition, **C + A → impossible**.  

The theorem therefore states:  
- **CP systems** sacrifice Availability to keep Consistency during partitions (e.g., ZooKeeper).  
- **AP systems** sacrifice Consistency to remain Available (e.g., DynamoDB).  
- **CA is unattainable in the presence of partitions**; partition tolerance is not a choice but a requirement.

*Non‑obvious insight:* The theorem’s “trade‑off” is really about *information flow*. When a network split cuts off information, you can either (1) wait for that information to arrive (Consistency) or (2) proceed with the partial view you have (Availability). Designing around CAP means deciding which side of this flow you’ll let through during a partition.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
