---
qid: vq_326de68252__star__local
question: Difference between schema on read vs schema on write?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 350
total_tokens: 586
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:54:26-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup, we had a real‑time fraud detection pipeline that ingested millions of transaction logs per day. Our data lake was built on S3 and Athena, while downstream analytic workloads used Redshift for reporting.

**Task** – The product team asked me to reduce the time it took to generate daily risk dashboards from 30 minutes to under 10 minutes without sacrificing data quality or auditability.

**Action** – I evaluated two approaches. For *schema on write*, we added a transformation step that validated and applied a strict JSON schema before writing each batch to Parquet in S3, storing the schema in AWS Glue catalog. This ensured downstream queries always had a fixed structure, so Athena could push down predicates efficiently.  
For *schema on read*, I kept the raw logs in Avro without upfront validation and let Redshift Spectrum infer schemas at query time, but we then had to add complex type‑casting logic in every SQL job. I benchmarked both: schema‑on‑write reduced query latency by 45 % and cut our Glue catalog maintenance cost by 20 %.  

**Result** – Switching to schema on write lowered dashboard generation from 30 minutes to 8 minutes, improved data consistency, and freed the data team from writing repetitive type logic. I learned that while schema on read offers flexibility, for high‑volume, regulated workloads a well‑managed schema on write layer pays off in performance and governance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
