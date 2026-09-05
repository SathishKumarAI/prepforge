---
qid: ing_5376b0cd77__star__local
question: 'Explain: Step 1 - Transport Layer — SQL Statement Execution in Database'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 359
total_tokens: 599
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:15:05-05:00'
sources: []
---

**Situation**  
During a migration of our recommendation engine from on‑prem SQL Server to Azure Synapse, the data pipeline was hitting timeouts and the nightly ETL job stalled at the “Execute Query” step.

**Task**  
I had to re‑engineer how we executed the heavy analytics queries so they would finish within the 30‑minute window while keeping latency low for downstream ML inference services.

**Action**  
First, I profiled the existing SQL with `SET STATISTICS IO ON` and found that our joins were scanning millions of rows because the proper indexes weren’t in place. I added a composite index on `(user_id, event_timestamp)` and rewrote the query to use Common Table Expressions (CTEs) for incremental aggregation. Next, I leveraged Azure’s distributed SQL engine: I split the job into two phases—Phase 1 executed a lightweight pre‑filtering query via `EXECUTE AS CALLER` over the Transport Layer, pushing only 5% of rows to the compute pool; Phase 2 ran the full aggregation on Synapse Spark pools. Finally, I wrapped both calls in a single stored procedure and scheduled it with an Azure Data Factory pipeline that monitored the job’s status through REST API callbacks.

**Result**  
The query runtime dropped from 1 hour 45 minutes to under 18 minutes, meeting our SLA. The data freshness improved by 20%, allowing the ML model to serve recommendations in near real‑time. I learned how Transport Layer optimization—indexing, query refactoring, and distributed execution—can dramatically reduce latency for large analytical workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
