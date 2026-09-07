---
qid: ing_1a85987af9__aws__local
question: 'Explain: How to prepare — Databricks'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 473
total_tokens: 701
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:26:24-05:00'
sources: []
---

**Situation** – I was tasked to launch a production‑grade ML pipeline that ingests 10 TB of streaming log data daily and produces real‑time fraud alerts for an e‑commerce platform.

**Task** – Build a cost‑effective, highly available architecture that guarantees < 5 s latency from ingestion to alert while scaling linearly as traffic grows.

**Action**  
1. **Data ingestion** – Used **Amazon Kinesis Data Streams** (shards tuned to 200 MB/s) and **AWS Glue** for schema discovery.  
2. **Processing** – Deployed **Databricks on AWS EMR** with *Spark Structured Streaming* for real‑time transformations. Leveraged Databricks’ auto‑scaling clusters (minimum 4 workers, max 32) to keep CPU utilization at ~70 % under peak load.  
3. **Model inference** – Stored the trained XGBoost model in **S3** and served it via a **Databricks Runtime ML** cluster; used **MLflow** for experiment tracking.  
4. **Alert delivery** – Emitted predictions to an **Amazon SNS topic**, which triggers a Lambda that writes alerts to DynamoDB (partition key = user‑id) and pushes notifications to the front‑end via WebSocket.  
5. **Observability** – Integrated **Databricks notebooks** with **CloudWatch** logs and **Prometheus/Grafana** dashboards for end‑to‑end latency monitoring.

**Result** – The pipeline handled 12 TB/day, reduced alert latency from 30 s to 4.2 s (a 86 % improvement), and cut infrastructure cost by 28 % compared to a monolithic Spark cluster. Post‑deployment A/B testing showed fraud detection accuracy increased from 82 % to 94 %.  

**Reflection** – I took full ownership, dove deep into Kinesis shard sizing, and iterated on the Databricks auto‑scaling policy after an initial “hot spot” failure. The bar‑raiser will note my quantified impact, end‑to‑end visibility, and learning from that early scaling issue.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
