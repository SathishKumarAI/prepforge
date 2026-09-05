---
qid: vq_8649091629__star__local
question: Why bigdata on cloud preferred these days?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 327
total_tokens: 562
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:07:50-05:00'
sources: []
---

**Situation:**  
When I joined a fintech startup last year, our analytics team was still crunching nightly ETL jobs on an on‑prem Hadoop cluster that cost us $15k/month in hardware and maintenance. The data volume had doubled in six months, yet we were lagging behind competitors who offered real‑time insights.

**Task:**  
I was tasked with redesigning the pipeline to reduce costs by 40% while cutting data latency from 12 hours to under an hour, so the product team could deliver instant risk scores to traders.

**Action:**  
I evaluated cloud services and chose AWS Glue for serverless ETL, combined with Redshift Spectrum for querying S3‑stored raw logs. I rewrote our Spark jobs in PySpark, added partition pruning, and leveraged Spot Instances for batch processing. To keep data fresh, I set up Kinesis Data Streams feeding into a Lambda that ingested events directly into DynamoDB, then triggered Glue crawlers to update the Redshift catalog automatically.

**Result:**  
The new architecture cut infrastructure spend to $8k/month (47% savings) and slashed query latency from 12 h to 45 min. Real‑time risk scores were delivered within 10 seconds, improving trading throughput by 30%. I learned that the elasticity of cloud services, coupled with managed data warehouses, can transform both cost structure and product value when you architect for scale from day one.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
