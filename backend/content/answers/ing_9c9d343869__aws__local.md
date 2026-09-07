---
qid: ing_9c9d343869__aws__local
question: 'Explain: Multiple Tables and Window Logic: All Three Correct, One Much
  Slower'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 437
total_tokens: 672
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:18:48-05:00'
sources: []
---

**Situation / Task**  
At a previous fintech startup we had to generate daily risk‑score reports for 200 k users. Three SQL queries returned the same data set but one used a `WINDOW` function on a denormalised table, while the other two joined three normalised tables and performed aggregation in the application layer. The window query ran **12× slower** (≈30 min vs. <3 min).  

**Action**  
1. **Dive Deep** – profiled each query with PostgreSQL’s `EXPLAIN ANALYZE`, identified that the window function forced a full sort on 200 M rows.  
2. Re‑engineered the data pipeline:  
   * Created an Amazon Redshift Spectrum table over the raw logs in S3 (columnar, compressed).  
   * Built an incremental materialised view (`daily_user_stats`) using Redshift `DISTSTYLE KEY` and `SORTKEY`.  
   * Implemented a Lambda nightly job that populates the view via `INSERT … SELECT` instead of a heavy window calculation.  
3. Added **Cost‑Optimisation** by turning off the auto‑scale feature during peak hours and reserved instances for the 24/7 workload.  

**Result**  
- Query runtime dropped from 30 min to **2 min** (≈15× faster).  
- Cost per report decreased from $0.45 to $0.07, saving ~$1,500/month.  
- The new pipeline handled a 3× increase in user base with no SLA impact.

**Leadership Principles**  
*Customer Obsession*: Delivered accurate risk scores on time, improving compliance audit confidence by 98%.  
*Ownership*: Took full responsibility for end‑to‑end performance and cost, iterating until metrics met targets.  

**Bar‑raiser notes** – I demonstrated ownership, deep technical analysis, quantified impact, and a learning loop (post‑mortem with the data team).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
