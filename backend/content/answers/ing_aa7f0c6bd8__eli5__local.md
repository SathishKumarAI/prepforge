---
qid: ing_aa7f0c6bd8__eli5__local
question: 'Explain: A Spark job that joins a 2 TB fact table to a 50 GB dimension
  table has one straggler task running 100× longer than the rest. Diagnose and fix
  it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 187
output_tokens: 316
total_tokens: 503
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:08:02-05:00'
sources: []
---

Think of the Spark job like a relay race where two teams—one with 2 TB of runners (the fact table) and one with 50 GB of runners (the dimension table)—pass a baton at every mile marker. Most runners finish their legs in about the same time, but one runner on the long team takes 100 times longer than the others. That single slow runner is the **straggler**; it holds up the whole race because Spark waits for all tasks to finish before moving forward.

Why did that runner stall? In a join, each task pulls a chunk of the fact table and looks up matching rows in the dimension table using a hash or sort key. If one partition contains many duplicate keys or a very uneven distribution, its lookup becomes a giant “haystack” search, while other partitions only sift through a small “needle.” The result: one task gets stuck.

**Fix it**  
1. **Repartition the fact data by the join key** so each task sees a balanced set of rows.  
2. If the dimension table is tiny (50 GB), broadcast it to every executor, turning lookups into cheap hash‑table searches and eliminating skew.  
3. Verify that no single partition now dominates; if it still does, inspect the data for duplicate keys or missing values.

With balanced partitions and a broadcasted small table, all runners finish together and the job completes in the expected time.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
