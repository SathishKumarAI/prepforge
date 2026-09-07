---
qid: vq_6422da4a7c__aws__local
question: What are the types of tables in Hive?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 516
total_tokens: 745
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:54:32-05:00'
sources: []
---

**Situation & Task**  
When I joined the data platform team at a fast‑growing fintech, our analytics layer was lagging behind production pipelines. The interview asked me to explain Hive table types—an opportunity to show *Ownership* and *Dive Deep*.  

**Action**  
I first mapped every table in our EMR cluster:  
| Type | Description | Use‑case | AWS Service |
|------|-------------|----------|-------------|
| **Managed (default)** | Hive owns storage; dropping the table removes data. | One‑time ETL results that can be safely purged. | EMR, S3 (via EMRFS) |
| **External** | Schema lives in Hive; data stays on S3. | Persisted raw logs or shared datasets across teams. | EMR, Athena, Glue Crawler |
| **Transactional (ACID)** | Requires ORC + ACID support (`transactional=TRUE`). | OLTP‑style updates for customer profiles. | EMR with Hive 2.x, DynamoDB for transaction log |
| **View** | Logical representation; no storage. | Quick joins across raw & processed tables. | Athena (serverless) |
| **Materialized View** | Cached query result stored in S3. | Speed‑up frequent ad‑hoc analytics. | EMR + Glue Catalog |

I then designed a *data‑catalog* workflow: every new external table is auto‑crawled by Glue, tagged with ownership metadata, and audited via CloudTrail. This reduced data discovery time from **3 days to 4 hours** (≈ 90 % faster) and cut S3 storage costs by **12 %** through deduplication.

**Result**  
The platform now delivers fresh analytics in under an hour, supports 200+ concurrent queries with < 5 s latency, and the engineering team reports a 25 % reduction in data‑related incidents.  

*Learning*: I realized that the right table type is not just about storage; it’s about aligning with business ownership and cost‑efficiency—exactly what Amazon expects from a *bar‑raiser*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
