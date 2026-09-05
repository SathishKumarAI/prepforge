---
qid: ing_ba17aeeeec__star__local
question: 'Explain: Data Caching — PySpark for Beginners: Building Intermediate-Level
  Skills'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 343
total_tokens: 584
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:43:12-05:00'
sources: []
---

**Situation:**  
During a month‑long analytics sprint at my last company, we had to generate daily sales reports from a 3 TB transactional dataset stored in HDFS. The Spark job read the same raw data twice—once for computing total sales and again for calculating per‑region trends—which caused our nightly ETL to run over two hours instead of the target one hour.

**Task:**  
I needed to cut the runtime by at least 30 % while keeping memory usage within our cluster limits, so that the reports would be ready before the finance team’s morning meeting.

**Action:**  
I introduced a fine‑grained caching strategy. First, I converted the raw DataFrame into a *persisted* `MEMORY_AND_DISK_SER` format after the initial read, because the data was heavily skewed and serialization saved space. Next, I partitioned the cached table by `region_id` to exploit locality when filtering for regional metrics. Finally, I used Spark’s `cache()` method only on the sub‑DataFrames that were reused (total sales and region summaries) and cleared the cache with `unpersist()` immediately after each job segment finished.

**Result:**  
The ETL runtime dropped from 120 min to 75 min—an 38 % improvement. Memory consumption stayed below 70 % of the available nodes, avoiding spill‑over. I learned that selective persistence combined with partitioning can dramatically reduce shuffle overhead in PySpark, and I now routinely audit cache usage before scaling jobs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
