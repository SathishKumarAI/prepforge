---
qid: vq_052317353f__aws__local
question: What is a Star Schema?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 420
total_tokens: 646
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:36:52-05:00'
sources: []
---

**What is a Star Schema?**  
In my last role designing the company‑wide analytics platform for a SaaS provider (≈ 1 M monthly active users), I led the migration from a noisy operational database to a clean data warehouse on **Amazon Redshift** using a star schema.  

- **Situation:** Reports were slow (15 min per query) and analysts struggled with joins across 30+ tables.  
- **Task:** Build an architecture that supports ad‑hoc BI, reduces latency, and keeps costs under $5k/month.  
- **Action:** I identified the core business dimensions—**Customer**, **Product**, **Time**, and **Region**—and created a fact table (**FactSales**) with 10 million rows per day. Each dimension is a single, denormalized table (≈ 50 K rows), linked via surrogate keys. I used **AWS Glue** for ETL, scheduled nightly jobs in **Amazon EventBridge**, and materialized views in Redshift to pre‑aggregate heavy joins.  
- **Result:** Query latency dropped from 15 min to < 2 s for typical OLAP queries; analysts could slice by any dimension instantly. The data warehouse cost fell from $12k/month to $4.3k/month, and the team’s report turnaround time improved by 70 %.  

**Leadership Principles:**  
- **Ownership** – I owned the end‑to‑end redesign and drove it through to production.  
- **Dive Deep** – I dissected query plans, identified cardinality bottlenecks, and tuned compression encodings in Redshift.  

**Bar‑raiser signals I met:**  
- Quantified impact (latency & cost).  
- Demonstrated deep technical knowledge of AWS services (Redshift, Glue, EventBridge).  
- Showed learning from failure: initial attempts with a snowflake schema caused join storms; pivoting to star fixed the issue.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
