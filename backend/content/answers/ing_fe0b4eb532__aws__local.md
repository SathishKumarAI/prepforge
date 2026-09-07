---
qid: ing_fe0b4eb532__aws__local
question: 'Explain: Reducing redundancy — What Is a Data Architecture? | IBM'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 404
total_tokens: 638
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:52:34-05:00'
sources: []
---

**Answer – Amazon Interview Style**

**Leadership Principles:** *Ownership* & *Dive Deep*

**Situation / Task (S):**  
At my last role I led a migration of the company’s legacy ML pipeline from on‑prem Hadoop to AWS. The data lake was riddled with duplicate records, inflating storage costs by 35 % and slowing downstream model training.

**Action (A):**  
I scoped a “data architecture” that introduced **deduplication layers** and a **single source of truth** using **Amazon S3** + **AWS Glue Catalog**.  
1. **Ingest** → *Kinesis Data Firehose* streams raw logs into S3 in `raw/`.  
2. **ETL** → *Glue Jobs* run nightly, applying a **hash‑based deduplication UDF** and writing clean data to `clean/` partitions keyed by date.  
3. **Metadata** → Glue Catalog maintains schema; Athena queries the cleaned tables directly.  
4. **Governance** → Lake Formation enforces fine‑grained IAM policies.

The architecture also leveraged **AWS Lambda** for real‑time duplicate detection and **Amazon DynamoDB** to store a cache of recent hashes, cutting latency by 70 %.

**Result (R):**  
- Storage costs dropped from $120k/month to $75k/month.  
- Model training time decreased from 12 hrs to 4 hrs.  
- Data freshness improved: new data available within 2 minutes of ingestion.

**Learning:** I realized that a robust data architecture is not just about storage; it’s an end‑to‑end pipeline that enforces integrity, reduces noise, and scales with minimal operational overhead—exactly what Amazon expects from an owner.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
