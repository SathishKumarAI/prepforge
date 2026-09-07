---
qid: ing_178b4334b7__aws__local
question: 'Explain: Built on Hadoop — Apache HBase'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 434
total_tokens: 663
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:18:57-05:00'
sources: []
---

**Situation & Task**  
When I joined the data‑science squad at a fintech start‑up, our legacy model training pipeline was stuck in an on‑prem Hadoop cluster that stored raw logs in **Apache HBase**. The system could not ingest new feature sets fast enough for daily retraining, and we were missing real‑time scoring.

**Action (Design)**  
I re‑architected the workflow to keep HBase as the immutable source of truth while moving compute into **Amazon EMR** with Spark MLlib. I added a lightweight **S3 landing zone** for raw events; an EMR step pulls data via HBase’s REST API, transforms it in Spark, and writes parquet back to S3.  
For model training I launched a **SageMaker notebook** that consumes the parquet, trains with XGBoost, and registers the best checkpoint in SageMaker Model Registry. Finally, I exposed the endpoint through an **API Gateway + Lambda** chain so latency stayed < 50 ms.

**Result**  
- Training time dropped from 12 hrs to **45 min** (≈80 % faster).  
- The new pipeline handled a 3× data volume spike without downtime.  
- Cost was reduced by 35 % annually by leveraging spot EMR instances and S3 lifecycle policies.

**Leadership Principles Reflected**  
*Customer Obsession*: I delivered near‑real‑time scoring that improved fraud detection accuracy by 12 %.  
*Ownership & Dive Deep*: I dissected HBase’s read latency, tuned compaction, and documented the end‑to‑end data flow.  

**Bar‑raiser Takeaway**  
I own the full stack from ingestion to serving, quantify every change, and iterate based on real metrics—exactly what Amazon expects when building scalable ML solutions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
