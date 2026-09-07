---
qid: vq_0ceb12afd6__aws__local
question: How to display Date in DD-MON-YYYY table?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 471
total_tokens: 703
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:38:35-05:00'
sources: []
---

**Situation (S)**  
While migrating our customer‑engagement data lake from on‑prem to AWS, the downstream analytics team complained that dates were stored as `YYYYMMDD` strings in an Amazon Athena table, making dashboards hard to read and slowing query performance.

**Task (T)**  
I owned the redesign of the date column so it appeared as `DD-MON-YYYY` in all downstream reports without adding storage overhead or breaking existing queries.

**Action (A)**  
1. **Dive Deep** – I inspected the Glue crawler schema, identified that the source field was a string, and confirmed its 8‑character format (`20240607`).  
2. **AWS Design** – Created an AWS Glue job using PySpark to cast the column to `date` type and then format it with `date_format(col('raw_date'), 'dd-MMM-yyyy')`. The transformed data was written back to S3 in Parquet, preserving compression and partitioning on year/month for Athena.  
3. **Bias for Action** – Updated the Glue crawler to pick up the new schema automatically. Added an Athena view that references the formatted column, keeping backward compatibility.  
4. **Deliver Results** – Post‑deployment, dashboard load time dropped 35 % (from 12 s to 7.8 s) and user satisfaction scores rose from 78 % to 92 %.  

**Result (R)**  
By owning the end‑to‑end pipeline, I simplified data consumption for analysts while reducing storage costs by 18 % through efficient Parquet partitioning.

---

### Leadership Principles Highlighted
- **Ownership** – Took full responsibility from ingestion to presentation.  
- **Dive Deep** – Thoroughly analyzed schema and performance metrics.  

*Bar‑raiser cues:* clear ownership, data‑driven impact (35 % faster dashboards), technical depth (Glue PySpark, Athena view, Parquet partitioning), and learning: initial mis‑guess of using string manipulation in Athena was replaced with a more robust Glue transformation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
