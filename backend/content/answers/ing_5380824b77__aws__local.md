---
qid: ing_5380824b77__aws__local
question: 'Explain: Simplify your stream processing architecture'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 361
total_tokens: 589
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:33:31-05:00'
sources: []
---

**Situation & Task (Customer Obsession)**  
At my previous role I built a real‑time fraud detection pipeline that ingested ~1 M events/sec from POS terminals. The architecture had three Kafka clusters, multiple Spark jobs, and a manual alerting dashboard. Latency hit 4 s on peak days, causing 12 % of fraudulent transactions to slip through before the next batch.

**Action (Dive Deep & Ownership)**  
I mapped every data path with a cost/latency heat‑map and identified duplicated transformations and idle connectors. I replaced Kafka + Spark with **Amazon Kinesis Data Streams + Lambda** for ingestion, **AWS Glue** for schema evolution, and **Amazon EventBridge** to trigger downstream microservices. The single stream now carries all raw events; Lambda functions de‑duplicate and enrich in under 200 ms. I also consolidated the alerting logic into a single CloudWatch metric and SNS topic.

**Result (Deliver Results)**  
Latency dropped from 4 s to <250 ms, catching fraud 35 % earlier. Operational cost fell by **$48k/month** due to fewer EC2 instances and no Spark cluster maintenance. The simplified pipeline reduced alert noise by 22 %, improving analyst efficiency.

**Learnings (Bias for Action & Invent & Simplify)**  
I learned that a “one‑stream‑per‑use‑case” model scales better than siloed Kafka topics, and that AWS managed services can replace complex open‑source stacks when you quantify the trade‑offs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
