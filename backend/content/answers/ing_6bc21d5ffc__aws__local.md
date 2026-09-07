---
qid: ing_6bc21d5ffc__aws__local
question: 'Explain: Partial or Filtered Indexes — Indexing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 474
total_tokens: 708
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:27:36-05:00'
sources: []
---

**S – Situation (Customer Obsession & Ownership)**  
When I led the data‑engineering team for a SaaS analytics platform, our click‑stream tables grew to 5 TB daily. Queries that filtered on `event_type='signup'` or `country='US'` were 10× slower than expected, hurting our real‑time dashboards.

**T – Task (Dive Deep & Bias for Action)**  
I was tasked with reducing query latency to <200 ms while keeping cost ≤$5k/month.

**A – Actions (Invent & Simplify, Deliver Results)**  

| Step | Design Choice | AWS Service |
|------|---------------|-------------|
| 1 | Created **partial indexes** on `event_type` and `country` using PostgreSQL’s `CREATE INDEX ... WHERE` syntax. | RDS Aurora PostgreSQL |
| 2 | Implemented **filtered materialized views** for the most frequent combinations (`signup, US`). Scheduled nightly refreshes with minimal I/O impact. | Amazon Redshift Spectrum |
| 3 | Added **Amazon CloudWatch metrics** to auto‑scale read replicas when query load spikes. | Aurora Auto Scaling |

- **Scalability:** Index size remained <5 % of table size; materialized view refreshed in 12 s, keeping data fresh.  
- **Availability:** Replicas ensured zero downtime during maintenance.  
- **Cost:** Savings of 68 % on query spend (from $18k to $6k/month) and avoided an extra RDS instance.

**R – Result (Quantified Impact & Learning)**  
Query latency dropped from 2.4 s → 0.15 s, a 94 % reduction, enabling real‑time dashboards for 200+ concurrent users. The team documented the index strategy in our engineering playbook; we now ship similar optimizations as reusable modules across services.

*Bar‑raiser notes:* ownership of end‑to‑end performance, deep dive into PostgreSQL internals, clear metrics, and a lesson that “indexing is not magic—proper sizing & refresh cadence are key.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
