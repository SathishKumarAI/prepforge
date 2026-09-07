---
qid: ing_f0fbb0e90c__aws__local
question: 'Explain: Data catalogs — What Is a Data Architecture? | IBM'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 463
total_tokens: 696
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:21:55-05:00'
sources: []
---

**Situation / Task**  
I was hired by a fintech startup to replace its ad‑hoc data lake with a production‑grade catalog so that data scientists could find, understand and trust the data they needed for ML models.

**Action**  
*Owned* the end‑to‑end solution: I scoped requirements (data lineage, security, multi‑tenant access), then designed a **serverless data architecture** on AWS.  
- **Amazon S3** for immutable lake storage with bucket policies and versioning.  
- **AWS Glue Data Catalog** as the single source of truth; crawlers auto‑populate schemas from Parquet/CSV.  
- **Lake Formation** to enforce fine‑grained IAM permissions per dataset.  
- **Athena** + **Amazon QuickSight** for ad‑hoc queries and dashboards.  
I implemented **data lineage** via Glue workflows, added automated data quality checks (Glue Jobs), and integrated **AWS CloudTrail** logs for auditability.

*Delivered Results* – reduced data discovery time from 3 days to <2 hours, increased ML model turnaround by 35%, and cut storage costs by 20% through lifecycle policies.  

**Result**  
The catalog achieved >99.9 availability, supported 1M+ rows per query with sub‑second latency, and cost‑optimized at $0.12/GB/month.

---

### Leadership Principles Anchored
- **Customer Obsession** – built a self‑serve portal that data scientists love.  
- **Ownership** – drove the project from concept to production without hand‑offs.  

### Bar‑raiser Takeaway
Bar‑raisers look for *deep ownership* (I led all phases), *dive deep* (understood Glue, Lake Formation internals), quantified impact (35 % faster ML cycle), and lessons learned (initially missed IAM granularity → added Lake Formation to fix).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
