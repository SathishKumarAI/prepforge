---
qid: vq_d09f6997f3__aws__local
question: Is it possible to modify a Datatype of a column when column contains data
  ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 390
total_tokens: 626
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:15:26-05:00'
sources: []
---

**Situation & Task**  
At a fast‑growth fintech I was asked to change the datatype of a “balance” column in our PostgreSQL analytics warehouse (currently `numeric(18,2)`) to `bigint` for cost savings. The table holds ~1 B rows and is read by 200+ BI dashboards.

**Action**  
I *owned* the migration by first performing a **dive‑deep** analysis:  
- Queried distribution (`SELECT max(balance), min(balance)`), confirming all values fit in `bigint`.  
- Built an **AWS Glue job** that reads the source table, casts to `bigint`, writes to a new staging table (S3 + Redshift Spectrum).  
- Deployed a **Redshift COPY** with `COMPUPDATE OFF` and `TRUNCATECOLUMNS` to avoid downtime.  
- Ran unit tests on 10 % of data; ran the job in parallel using **Redshift Concurrency Scaling** to keep latency <5 min.

I scheduled the switch during a planned maintenance window, used **Amazon RDS Parameter Groups** to toggle `max_connections`, and added a **CloudWatch alarm** for any failed rows.  

**Result**  
The migration completed with 0 data loss, reduced storage cost by 15 % ($12k/yr), and cut query latency on dashboards from 2.3 s to 1.7 s (22 % improvement). I documented the process in Confluence for future teams—demonstrating *ownership* and enabling repeatable change.  

**Bar‑raiser cues**: clear ownership, quantitative impact, deep technical justification, learning loop (post‑mortem with rollback plan).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
