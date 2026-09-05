---
qid: ing_46b48d278b__star__local
question: 'Explain: Query and compute engines — What Is a Data Architecture? | IBM'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 306
total_tokens: 547
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:50:02-05:00'
sources: []
---

**Situation:**  
At my previous employer, we were migrating a legacy analytics platform to a cloud‑native stack. The existing monolithic system couldn’t keep up with the quarterly sales reports; dashboards lagged by minutes and our data engineers spent hours rewriting queries.

**Task:**  
I was tasked with designing a new data architecture that could separate query processing from heavy compute workloads, reduce latency for end users, and allow analysts to run complex models without stepping on each other’s toes.

**Action:**  
I introduced a two‑tier approach: a lightweight *query engine* (Presto) for ad‑hoc BI queries against the lakehouse, and a dedicated *compute engine* (Spark) for batch ML training jobs. We built an orchestrated data pipeline in Airflow that staged raw logs into Delta Lake tables, then exposed those tables through Presto’s catalog while Spark jobs pulled from the same lineage. I also implemented role‑based access controls so analysts could run fast queries without triggering costly compute.

**Result:**  
Dashboard response times dropped from 3 minutes to under 10 seconds, and ML model training time fell by 60%. The separation of concerns also freed up our data team to focus on feature engineering rather than maintenance. I learned that a clear demarcation between query and compute layers is essential for scalable, maintainable data architectures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
