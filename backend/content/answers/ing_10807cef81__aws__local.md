---
qid: ing_10807cef81__aws__local
question: 'Explain: Where Checksums Are Used — Checksums | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 462
total_tokens: 695
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:02:37-05:00'
sources: []
---

**Situation / Task**  
In my last role I led the migration of our on‑prem data lake to Amazon S3 and Glue for an ML pipeline that ingests terabytes of sensor logs daily. The key requirement was end‑to‑end data integrity: downstream models must never train on corrupted records.

**Action**  
I introduced a **checksum strategy** that satisfies both *Customer Obsession* (data quality drives model accuracy) and *Ownership* (I owned the solution from design to deployment).  

1. **Checksum Generation** – Each producer writes an SHA‑256 hash of every record into a sidecar column in Parquet before uploading to S3.  
2. **Validation Service** – A Lambda function, triggered by S3 `ObjectCreated` events, pulls the object, recomputes the hash, and compares it to the embedded value. If mismatched, the object is quarantined in an “invalid” bucket and a CloudWatch alarm is sent.  
3. **Integration with Glue & SageMaker** – The Glue crawler only catalogs objects that pass validation; the ML training job pulls data exclusively from those tables.  

AWS services used: S3 (Object Lifecycle), Lambda, CloudWatch, Glue, SageMaker, IAM for fine‑grained access.  

**Result**  
After deployment, our pipeline processed **1 PB/month** with a checksum error rate of **<0.001 %**, down from the previous 0.02 %. Model accuracy (AUC) improved by **3 pp** because noisy data was eliminated before training. The cost impact was <5 % of the overall ML spend, and latency added was <200 ms per object—well within SLA.

**Bar‑raiser notes**  
- Demonstrated *Dive Deep* by selecting SHA‑256 for cryptographic strength while balancing compute overhead.  
- Quantified impact on both data quality and model performance.  
- Showed learning: initial prototype used MD5, which was too weak; switched to SHA‑256 after a security audit.  

This design illustrates how simple checksums, when orchestrated with AWS services, can provide robust, scalable data integrity for ML workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
