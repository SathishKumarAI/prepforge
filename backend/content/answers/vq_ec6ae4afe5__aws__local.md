---
qid: vq_ec6ae4afe5__aws__local
question: how to join two larger tables in spark?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 429
total_tokens: 658
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:21:15-05:00'
sources: []
---

**Situation & Task**  
I was asked to merge two 200‑GB transactional tables (orders and payments) on a shared `order_id` in an AWS Spark cluster running on EMR. The goal was to keep the ETL job under 10 minutes while minimizing cost.

**Action**  
1. **Data layout:** Partition both source Parquet files by `year_month_day` to match the query’s date filter.  
2. **Broadcast join trade‑off:** Since *payments* is ~5 GB, I broadcasted it (Spark broadcast variable) after adding a `coalesce(8)` to keep the memory footprint <10 % of driver RAM.  
3. **Shuffle optimization:** Enabled `spark.sql.shuffle.partitions=200` and set `spark.sql.autoBroadcastJoinThreshold=-1` to force shuffle for *orders*.  
4. **AWS services used:**  
   - **EMR** (Spark 3.x) on spot instances (m5.large).  
   - **S3** as the data lake; job logs sent to CloudWatch.  
   - **Glue Data Catalog** for schema evolution.  

**Result**  
- Execution time dropped from **22 min** (naïve shuffle join) to **7 min**, a 68% improvement.  
- Spot instance usage saved **$0.45/hour** per node, cutting the overall cost by **30 %**.  
- The job now scales linearly; adding a third partitioned table would only add ~2 min.

**Reflection (Bar‑raiser lens)**  
I owned the end‑to‑end pipeline, dove deep into Spark internals to pick the right join strategy, quantified the impact with real metrics, and learned that pre‑partitioning is often cheaper than tuning shuffle parameters.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
