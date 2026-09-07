---
qid: ing_946246d01f__aws__local
question: 'Explain: the major components over here but instead'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 435
total_tokens: 664
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:01:26-05:00'
sources: []
---

**Situation & Task**  
In my last role I was tasked with building a real‑time fraud detection pipeline for an e‑commerce platform that handled 2 M transactions/day. The goal was to reduce false positives by 30% while keeping latency under 200 ms.

**Action**  
*Architecture*:  
- **Data Ingestion** – Kinesis Data Streams (sharded) → Lambda for feature extraction.  
- **Feature Store** – DynamoDB + Amazon SageMaker Feature Store for low‑latency read/write.  
- **Model Serving** – SageMaker Endpoint on a GPU instance (ml.g5.xlarge), auto‑scaling with CloudWatch metrics.  
- **Batch Retraining** – Glue ETL nightly → S3 → SageMaker Training job (distributed training on 8 p4d.2xlarge).  

*Design Decisions*:  
- Chose **Kinesis** for its sub‑second latency and horizontal scalability; Lambda keeps the system serverless, reducing ops overhead.  
- DynamoDB provides <10 µs read/write, essential for real‑time scoring.  
- SageMaker’s managed inference reduces maintenance and automatically handles A/B testing of models.

*Results*:  
- False positives dropped from 12% to **8.4%** (≈30% improvement).  
- Latency stayed at **120 ms avg**, well below the SLA.  
- Cost decreased by **18%** compared with a monolithic EC2 solution due to pay‑as‑you‑go scaling.

**Reflection (Bar‑raiser lens)**  
I owned the end‑to‑end pipeline, dove deep into latency metrics, and quantified impact with real numbers. The biggest learning was that feature store consistency matters; we resolved eventual‑consistency issues by adding a secondary cache in ElastiCache, which reduced score variance by 4%. This iteration exemplifies *Ownership* and *Dive Deep*, key Amazon leadership principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
