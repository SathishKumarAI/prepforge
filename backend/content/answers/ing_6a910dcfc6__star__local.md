---
qid: ing_6a910dcfc6__star__local
question: 'Explain: Reference — Dynamodbvsmongodbvscasandra'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 335
total_tokens: 574
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:00:40-05:00'
sources: []
---

**Situation:** In the last quarter our product team was rolling out a real‑time recommendation engine for a streaming service that needed to handle millions of concurrent users while keeping latency below 50 ms.

**Task:** I had to choose the right NoSQL database for storing user interaction logs and feature vectors, balancing throughput, consistency, and cost. The options on the table were DynamoDB, MongoDB Atlas, and Cassandra.

**Action:** I started by profiling our write patterns: about 1 M events per hour with a burst of 10 k writes/sec during peak hours. For reads we expected heavy aggregation queries over time windows. Using AWS X‑Ray I measured that DynamoDB’s provisioned capacity could comfortably meet the burst with auto‑scaling, and its managed nature meant no operational overhead. MongoDB Atlas offered flexible secondary indexes but had higher latency for massive write bursts. Cassandra provided linear scalability, yet required a dedicated cluster and complex tuning for consistency levels. I created a cost–benefit matrix, ran a 24‑hour pilot on DynamoDB with adaptive read/write capacity, and monitored CPU, latency, and throughput.

**Result:** Switching to DynamoDB reduced average read latency from 120 ms (Mongo) to 35 ms, kept write costs under $12k/month versus $18k for Cassandra, and eliminated the need for a separate cluster team. The lesson: evaluate real traffic patterns against each engine’s strengths—managed throughput for bursty writes vs. self‑tuned scalability—and let metrics guide the decision.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
