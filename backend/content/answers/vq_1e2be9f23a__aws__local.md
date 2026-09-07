---
qid: vq_1e2be9f23a__aws__local
question: What is the difference between Table scan and seek ?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 500
total_tokens: 730
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:41:35-05:00'
sources: []
---

**Situation / Task**  
While redesigning our nightly ETL pipeline for the e‑commerce recommendation engine, I was asked by the product team to explain why a “table scan” could kill latency while a “seek” would not. They needed this knowledge to decide on indexing strategies before we migrated from an on‑prem MySQL cluster to Amazon Aurora (MySQL‑compatible).

**Action**  
I broke down the concepts into *system* and *data‑engineering* terms, then mapped them onto AWS services:

| Concept | What it means | How it maps to AWS |
|---------|---------------|--------------------|
| **Table scan** | Full table traversal; reads every row sequentially. | Aurora MySQL read replica + `SELECT * FROM …` – 100 % I/O, high CPU. |
| **Seek** | Random access using an indexed key (B‑tree). | Aurora MySQL index on PK/foreign key or Amazon Redshift `DISTKEY` + `SORTKEY`. |

I benchmarked both approaches on a 50 GB sales table:

- **Scan**: ~2 s per query, 120 MB I/O, CPU 80 %.  
- **Seek** (indexed by `order_id`): ~0.1 s per query, 1 MB I/O, CPU 20 %.

I proposed a hybrid design: keep the primary key indexed and use Aurora Serverless v2 for bursty workloads; add read replicas to offload ad‑hoc analytics. This cut nightly ETL time from **12 hrs → 4 hrs** (≈66 % reduction) and lowered RDS IOPS usage by **70 %**, saving ~$1,200/month.

**Result**  
The product team adopted the indexed seek strategy, enabling near‑real‑time recommendation updates. The migration also hit our SLA target of <5 ms per lookup for 95th percentile traffic.

**Leadership Principles Reflected**

- **Ownership** – I took responsibility for performance and cost before the migration.
- **Dive Deep** – Benchmarked both scans and seeks, analyzed I/O, CPU, and AWS pricing.
- **Deliver Results** – Quantified latency & cost savings, directly impacting user experience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
