---
qid: ing_52ac0dfe37__aws__local
question: 'Explain: Specialized Index Types — Indexing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 470
total_tokens: 701
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:31:53-05:00'
sources: []
---

**Situation & Task**  
I was hired by a fintech startup to rebuild its fraud‑detection pipeline that ingests ~10 M daily transaction records. The existing MySQL table suffered 20 s query times for “most recent fraudulent transactions” because the `transaction_id` and `merchant_id` columns were not indexed appropriately.

**Action – Design & AWS Services**  
1. **Schema Dive‑Deep**: I profiled queries with EXPLAIN, discovering that `WHERE transaction_date > :last_week AND fraud_flag = 1` was the bottleneck.  
2. **Choose Specialized Index**: Implemented a *composite B‑tree* on `(fraud_flag, transaction_date)` in Amazon Aurora PostgreSQL (Aurora Serverless v2 for cost control). The composite index allows the engine to skip non‑fraud rows and seek directly into the recent window.  
3. **Secondary Search Layer**: Added an Amazon OpenSearch domain with a *keyword* field on `merchant_id` and a *date_histogram* aggregation for quick merchant‑level fraud summaries. Data is streamed from Aurora via AWS DMS, ensuring near‑real‑time sync.  
4. **Scalability & Availability**: Aurora’s multi‑AZ replicas provide 99.99 % availability; OpenSearch has auto‑scaling node groups to handle spikes.  
5. **Cost & Trade‑offs**: The composite index adds ~10 % storage overhead but cuts query cost by 95 %. DMS costs are amortized over the 2× performance gain.

**Result**  
- Query latency dropped from **20 s → <200 ms** for fraud lookups.  
- Real‑time fraud dashboards now refresh every 5 seconds instead of 30 minutes, improving risk mitigation response time by **70%**.  
- Monthly operating cost decreased by **$1.8K** due to fewer Aurora read replicas.

**Reflection (Bar‑raiser notes)**  
I owned the problem from root cause to solution, deeply understood index mechanics, quantified impact with real metrics, and learned that sometimes a single composite index can replace an entire secondary search layer if properly aligned with query patterns.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
