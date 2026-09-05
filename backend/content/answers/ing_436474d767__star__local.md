---
qid: ing_436474d767__star__local
question: 'Explain: So whether it''s an ASUS, Dell, Lenovo — AWS re:Invent 2021 -
  Which NoSQL database is right for you?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 255
output_tokens: 371
total_tokens: 626
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:43:34-05:00'
sources: []
---

**Situation:**  
During a sprint for our fintech startup’s real‑time fraud detection service, we had to ingest and query over 10 M events per day from various device vendors (ASUS, Dell, Lenovo). The existing relational stack was choking on write latency and couldn’t scale horizontally.

**Task:**  
I needed to select a NoSQL database that could handle high write throughput, support flexible schema for vendor‑specific event fields, and provide low‑latency lookups for our rule engine—all while staying within our $50k annual AWS budget.

**Action:**  
I compared DynamoDB, Amazon DocumentDB, and Cassandra on AWS. I benchmarked each against a 1 M events/day workload using the AWS CloudWatch metrics and simulated schema changes. DynamoDB’s provisioned‑capacity model gave us predictable costs ($12k/yr) but limited cross‑region replication; DocumentDB offered tighter integration with MongoDB drivers but had higher write latency (~8 ms). Cassandra on EC2 gave the lowest latency (3 ms) but required manual sharding and cost $18k. I chose DynamoDB, adding a Global Secondary Index for vendor tags and enabling auto‑scaling to accommodate traffic spikes.

**Result:**  
Write latency dropped from 120 ms to <5 ms, throughput scaled to 15 M events/day without code changes, and we stayed 25% under budget. I learned that aligning cost models with traffic patterns is as critical as raw performance when choosing a NoSQL solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
