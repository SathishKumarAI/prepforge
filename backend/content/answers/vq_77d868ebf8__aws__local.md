---
qid: vq_77d868ebf8__aws__local
question: How can I eliminate duplicate values in a table?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 456
total_tokens: 686
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:58:51-05:00'
sources: []
---

**Situation & Task (S)**  
While revamping our customer‑profile data lake on Amazon Aurora MySQL, I discovered that the `customers` table contained ~3 M duplicate rows—each representing a separate ingestion from third‑party feeds. The duplicates inflated storage by 12 GB and caused stale analytics downstream.

**Action (A)**  
1. **Dive Deep** – I queried the cluster with `SELECT email, COUNT(*) FROM customers GROUP BY email HAVING COUNT(*) > 1` to quantify the problem.  
2. **Design & Ownership** – I wrote a single‑statement delete using a Common Table Expression (CTE) that keeps only the most recent row per `email`:  

```sql
WITH ranked AS (
  SELECT *,
         ROW_NUMBER() OVER(PARTITION BY email ORDER BY updated_at DESC) rn
  FROM customers
)
DELETE FROM customers
WHERE id IN (SELECT id FROM ranked WHERE rn > 1);
```

3. **AWS Services** – Executed in Aurora Serverless v2 to avoid downtime, with a snapshot for rollback.  
4. **Bias for Action & Cost‑Savings** – Ran the job during off‑peak hours; it completed in ~4 min, freeing 12 GB (≈$0.48/month on RDS) and improving query latency by 35 %.  

**Result (R)**  
Post‑cleanup, data quality metrics improved: duplicate rate dropped from 9 % to <0.01 %, and downstream BI dashboards now load 30 % faster. I also documented the process in our ops playbook, enabling future teams to replicate the cleanup without re‑engineering.

**Leadership Principles Highlighted**  
- **Ownership** – Took full responsibility for data integrity and cost control.  
- **Dive Deep & Deliver Results** – Thorough analysis led to a precise, high‑impact solution that directly benefited customers’ experience through faster insights.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
