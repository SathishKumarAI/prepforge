---
qid: ing_b8c0c1f207__star__local
question: 'Explain: Storage and Infrastructure Considerations'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 331
total_tokens: 563
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:40:49-05:00'
sources: []
---

**Situation:**  
When I joined a fintech startup, we were building a real‑time fraud detection model that had to process millions of transaction logs per day. The existing on‑prem database was a single MySQL instance and could only handle about 10 k TPS before latency spiked.

**Task:**  
I needed to design an architecture that would scale horizontally, provide low‑latency data ingestion for the model, and keep storage costs under $50K/month while ensuring compliance with PCI‑DSS.

**Action:**  
I evaluated several options: a sharded PostgreSQL cluster, a managed Kafka + Snowflake pipeline, and a time‑series database (InfluxDB). I chose to implement an AWS Kinesis Data Stream for ingestion, storing raw events in S3 using lifecycle policies to tier older data to Glacier. For real‑time analytics I spun up an Amazon Timestream instance with automated retention policies. The model itself ran on a spot EC2 cluster orchestrated by ECS, scaling based on CloudWatch metrics. To keep costs down we used serverless Lambda functions for ETL and leveraged AWS Cost Explorer alerts.

**Result:**  
Through this setup we achieved 200 k TPS ingestion with sub‑50 ms query latency during peak hours, and overall storage cost dropped to $35K/month. The fraud detection accuracy improved by 12% due to richer data availability. I learned that choosing the right mix of managed services and lifecycle policies can dramatically reduce operational overhead while meeting strict performance requirements.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
