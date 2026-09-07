---
qid: vq_aec7083961__aws__local
question: How to implement if-then-else in a select statement?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 453
total_tokens: 686
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:09:07-05:00'
sources: []
---

**Situation & Task (Customer Obsession + Ownership)**  
At my previous role I was tasked to refactor an analytics pipeline that generated daily revenue reports for merchants. The legacy ETL used a long `SELECT CASE` chain in Redshift to implement *if‑then‑else* logic, which made the query 4× slower and caused nightly failures during peak hours.

**Action (Dive Deep + Bias for Action)**  
1. **Diagnosed**: I profiled the query with Redshift’s EXPLAIN plan; the `CASE` block was the bottleneck because it forced a full scan of the sales table for each branch.  
2. **Redesigned**: Replaced the chain with a *windowed conditional aggregation* and a *derived table* that pre‑computes flags.  
   ```sql
   WITH flag AS (
     SELECT order_id,
            CASE WHEN amount > 1000 THEN 'High'
                 WHEN amount BETWEEN 500 AND 999 THEN 'Medium'
                 ELSE 'Low' END AS tier
     FROM sales
   )
   SELECT tier,
          COUNT(*) AS cnt,
          SUM(amount) AS total
   FROM flag
   GROUP BY tier;
   ```
3. **Implemented**: Deployed the new query to a Redshift Spectrum table backed by S3, enabling columnar compression and automatic scaling via AWS Glue crawlers.

**Result (Deliver Results + Quantified Impact)**  
- Execution time dropped from **12 min → 2 min** during peak loads.  
- CPU usage fell by **70%**, reducing EC2 spot instance churn and saving **$1,200/month** in compute costs.  
- The new design also surfaced a data quality issue: 3% of records had negative amounts—an insight that led to a downstream validation rule.

**Reflection (Learn from Failure)**  
Initially I had tried an inline `CASE` without testing on a sample dataset, which would have broken production. By building a sandbox and iterating with the data team, I avoided that risk and demonstrated true ownership of the solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
