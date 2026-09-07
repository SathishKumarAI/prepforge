---
qid: vq_46cba13478__aws__local
question: HOW DO YOU USE THE WHERE CLAUSE IN SQL?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 482
total_tokens: 713
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:49:15-05:00'
sources: []
---

**Situation** – In my last role I had to rewrite a legacy analytics query that pulled millions of rows per day from an Athena‑backed data lake for the marketing team. The report was slow (≈30 min) and cost‑prohibitive because it scanned every partition.

**Task** – Reduce runtime to <2 min and cut costs by 70 % while still delivering accurate daily metrics.

**Action**  
1. **Customer Obsession & Ownership** – I spoke with the marketing stakeholders to clarify that they only needed data for the past 30 days, a specific campaign ID range, and revenue > $10k.  
2. **Dive Deep** – Using `EXPLAIN` I saw Athena was scanning every partition (`WHERE` clause wasn’t filtering early).  
3. **Design** – I rewrote the query to include a tight `WHERE` clause:  

   ```sql
   SELECT campaign_id,
          SUM(revenue) AS total_rev,
          COUNT(*)      AS impressions
   FROM   marketing_events
   WHERE  event_date BETWEEN date_add('day', -30, current_date)
                        AND current_date
     AND  campaign_id IN (12345, 67890, 24680)
     AND  revenue > 10000
   GROUP BY campaign_id;
   ```

4. **AWS Services** – Leveraged Athena with partitioned Parquet tables and S3 lifecycle policies to archive older data. Added a Glue crawler to maintain the catalog.  
5. **Scalability & Cost** – The `WHERE` clause limits the scan to ~2 % of the table, reducing bytes read from 10 TB to 200 GB, cutting query cost from $15 to <$1 and runtime from 30 min to 90 seconds.

**Result** – Achieved a 93 % reduction in cost, 95 % improvement in latency, and received “Outstanding” feedback from marketing. Learned that early, precise filtering is the first lever for performance at scale.  

*Bar‑raiser notes:* clear ownership of business need, deep dive into execution plan, quantified impact, and iterative learning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
