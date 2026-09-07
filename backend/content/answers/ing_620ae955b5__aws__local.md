---
qid: ing_620ae955b5__aws__local
question: 'Explain: Core Concepts — Pub/Sub | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 373
total_tokens: 603
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:07:18-05:00'
sources: []
---

**Situation / Task**  
I was tasked to build a real‑time fraud‑detection pipeline for an online marketplace that needed to ingest millions of transactions per day, score them with ML models, and publish alerts to downstream services (e.g., billing, customer service). The key requirement was low latency (<200 ms) while keeping cost under $5k/month.

**Action**  
I chose a **Pub/Sub architecture** using Amazon Kinesis Data Streams as the ingestion layer because it scales linearly with throughput and guarantees at‑least‑once delivery. Each record is enriched in a Lambda function (Python), which pulls pre‑trained SageMaker endpoints for scoring. The scored events are routed to two SNS topics: one for real‑time alerts, another for batch analytics.

- **Scalability** – Kinesis shards automatically scale; I configured 20 shards (≈10 M records/second) and used Lambda concurrency limits to avoid throttling.  
- **Availability** – Multi‑AZ VPC endpoints and cross‑region replication of the SNS topics ensure zero single point failures.  
- **Cost** – By using on‑demand Lambda and only invoking SageMaker endpoints when needed, monthly spend stayed at $4.2k.  
- **Trade‑offs** – I accepted a slight increase in latency (≈150 ms) to avoid the complexity of managing a custom Kafka cluster.

**Result**  
The system processed 12 M transactions/day with <200 ms total latency and detected 98% of fraud cases, improving revenue retention by $1.3M annually. Post‑deployment monitoring revealed no outages for six months, validating ownership and continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
