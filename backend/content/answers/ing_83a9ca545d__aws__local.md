---
qid: ing_83a9ca545d__aws__local
question: 'Explain: Express Your Application as a SQL Statement ¶'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 501
total_tokens: 731
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:22:45-05:00'
sources: []
---

**Situation & Task**  
At my last role I was tasked to expose our recommendation engine’s inference results as a *single* SQL view so that BI analysts could query them without touching the ML pipeline. The goal was to reduce latency from 3 s to < 200 ms and cut the operational cost of ad‑hoc ETL jobs by 40 %.  

**Action**  
I owned the solution end‑to‑end:  

1. **Model output** – Stored in an S3 bucket as Parquet, partitioned by `event_date`.  
2. **Data catalog** – Used AWS Glue to crawl the bucket and create a Hive‑compatible table.  
3. **SQL abstraction** – Created an Athena view that *joins* the recommendation table with the user profile table (stored in RDS MySQL). The view is written as:  

   ```sql
   CREATE OR REPLACE VIEW customer_recs AS
   SELECT u.user_id,
          r.item_id,
          r.score,
          p.segment,
          p.join_date
   FROM glue_catalog.recommendations r
   JOIN mysqldb.users u ON r.user_id = u.id
   JOIN mysqldb.profiles p ON u.id = p.user_id
   WHERE r.event_date BETWEEN date_add('day', -30, current_date)
   ORDER BY r.score DESC;
   ```  

4. **Performance tuning** – Added Athena workgroup with 10 GB query cache and enabled result reuse.  
5. **Cost control** – Leveraged Athena’s pay‑per‑query model; estimated $0.01 per TB scanned → <$50/month after caching.

**Result**  
BI users now run ad‑hoc queries in < 200 ms, eliminating the 3 s ETL job. Monthly cost dropped from $120 to $70 (≈40 % savings). The solution also scaled automatically; Athena handled a 5× spike during holiday sales without any manual intervention.  

**Leadership Principles**  
- **Customer Obsession** – Delivered instant insights for analysts, directly improving decision speed.  
- **Ownership & Dive Deep** – Took full responsibility from data ingestion to query performance, iterating on metrics until we hit the target latency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
