---
qid: ing_7f6ac83dc4__aws__local
question: 'Explain: Covering Indexes — Indexing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 515
total_tokens: 747
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:13:16-05:00'
sources: []
---

**Situation** – While leading a data‑analytics team for a media startup, our reporting layer was pulling 12 M rows per day from an Amazon Aurora PostgreSQL cluster. Query latency hit 8 s on average, and the OLAP dashboard cost over **$3k/month** in I/O credits.

**Task** – Reduce query latency to <2 s while cutting monthly I/O costs by ≥30 % without disrupting existing applications.

**Action** –  
1. *Dive Deep* into execution plans: identified that 87 % of the slow queries scanned the same `user_id, event_date, metric_type` columns.  
2. Created a **covering index** (`CREATE INDEX ON events (user_id, event_date, metric_type) INCLUDE (value, timestamp)`), which allowed PostgreSQL to satisfy the query entirely from the index page cache.  
3. Migrated the index to **Amazon Aurora Serverless v2**, leveraging its automatic scaling and per‑second billing.  
4. Added a read replica on **RDS Multi‑AZ** for heavy reporting traffic, ensuring high availability.  
5. Instrumented CloudWatch metrics and set up an SNS alarm when cache hit ratio fell below 95 %.  

**Result** – Query latency dropped from 8 s to **1.3 s** (77 % improvement). I/O credits fell by **38 %**, saving ~$1,200/month. The read replica maintained 99.999 % availability during peak traffic.

---

### What a bar‑raiser listens for  
| Signal | Why it matters |
|--------|----------------|
| Ownership & end‑to‑end ownership of performance & cost | Shows you can take initiative and deliver results |
| Deep dive into execution plans & metrics | Demonstrates analytical depth (Dive Deep) |
| Quantified impact (latency, cost savings) | Provides measurable success |
| Learning from failure – e.g., initial trial with a non‑covering index caused temp table bloat, leading to the final design choice | Shows resilience and continuous improvement |

**Leadership Principles invoked:**  
- **Customer Obsession** – faster dashboards improve user experience for internal stakeholders.  
- **Ownership** – I owned the entire performance loop from analysis to deployment and monitoring.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
