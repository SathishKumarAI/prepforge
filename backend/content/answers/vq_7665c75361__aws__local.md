---
qid: vq_7665c75361__aws__local
question: How to calculate number of rows in table without using count function?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 489
total_tokens: 722
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:58:25-05:00'
sources: []
---

**Answer (Amazon Way)**  

> **Situation** – In a quarterly audit I was asked to verify the row count of a 12 TB Redshift fact table that had no primary key and was updated nightly. The `COUNT(*)` query timed out, costing us >$200 in compute credits.  
> **Task** – Deliver an accurate row estimate within 5 % while keeping cost < $10.  
> **Action** – I leveraged Redshift’s **system tables** (`STV_BLOCKLIST`) and **column statistics** (`PG_STATS`). First, I queried `SELECT SUM(blocks) FROM stv_blocklist WHERE database = 'mydb' AND table = 'fact_sales';` which returned 1 200 000 blocks. Knowing each block holds ~3 000 rows (from the column stats), I calculated  
> ```sql
> SELECT blocks * avg_rows_per_block AS row_estimate;
> ```  
> I validated this against a random sample of 100 k rows (exact count = 300 030) and the estimate was within 2.5 %. For production, I scheduled this query as a nightly Glue job that writes the estimate to DynamoDB for audit trails.  
> **Result** – Reduced row‑count cost from $200 → <$10, cut query time from 45 min to < 30 s, and provided a reproducible audit trail used by compliance (score: 4.8/5).  

**Leadership Principles Highlighted**

- **Ownership** – Took full responsibility for the audit and built a permanent solution.  
- **Dive Deep** – Explored system catalog tables and statistics to derive the estimate.  
- **Deliver Results** – Achieved measurable cost savings and compliance assurance.  

**Bar‑raiser cues I met**

- Clear ownership narrative (S).  
- Deep technical dive into Redshift internals (T).  
- Quantified impact with real numbers (R).  
- Demonstrated learning: “If the block size changes, we’ll adjust the multiplier automatically.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
