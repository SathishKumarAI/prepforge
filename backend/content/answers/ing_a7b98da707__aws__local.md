---
qid: ing_a7b98da707__aws__local
question: 'Explain: Look, we remove the duplication and also'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 334
total_tokens: 564
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:45:46-05:00'
sources: []
---

**Situation & Task**  
While architecting a recommendation engine for our e‑commerce platform, I discovered that user preference vectors were being recomputed twice—once during ingestion and again at inference time—causing 30 % latency overhead and doubling the compute cost.

**Action**  
I took ownership of the pipeline, mapped the data flow with **AWS Glue** (ETL), **Amazon SageMaker** (training), and **Amazon Kinesis Data Streams** (real‑time ingestion). I removed the duplicate step by:

1. Persisting the pre‑computed vectors in an **Amazon DynamoDB** table keyed on user ID.
2. Adding a **Lambda@Edge** cache layer to serve the vector from DynamoDB during inference, bypassing the redundant Glue job.
3. Updating the SageMaker endpoint to read directly from DynamoDB, eliminating the second pass.

I also introduced **CloudWatch Alarms** to monitor latency and cost metrics, enabling quick rollback if thresholds were breached.

**Result**  
Latency dropped from 450 ms to 120 ms (≈73 % improvement), and monthly compute spend fell by $12K. The change also reduced the S3 storage footprint by 25 %.  

**Reflection**  
This experience reinforced *Customer Obsession*—delivering a faster, cheaper recommendation service—and *Dive Deep*—identifying hidden duplication at the data‑flow level. I learned that even small architectural tweaks can yield outsized ROI when measured against real metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
