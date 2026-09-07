---
qid: ing_aa7f0c6bd8__faang__local
question: 'Explain: A Spark job that joins a 2 TB fact table to a 50 GB dimension
  table has one straggler task running 100× longer than the rest. Diagnose and fix
  it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 262
output_tokens: 508
total_tokens: 770
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:20:33-05:00'
sources: []
---

**Clarify**  
We’re joining a **2 TB fact** (large, many partitions) with a **50 GB dimension** (small but not tiny). A single task takes ~100× longer than its peers—likely due to data skew or bad partitioning. I’d confirm: which column is the join key? How many partitions does each side have? Are any keys extremely hot?

**Approach**  
1. Inspect partition stats and shuffle read/write sizes.  
2. Identify the offending task’s input size / key distribution.  
3. Check for *broadcast* vs *shuffle* join; ensure broadcast dimension is used.  
4. If skew persists, apply **salting** or **map-side combine** to redistribute hot keys.

**Depth**  
- Use `explain(true)` and Spark UI to see the task’s input size (likely > 200 GB).  
- Verify that the 50 GB table is broadcast (`spark.sql.autoBroadcastJoinThreshold` > 50 GB) or manually broadcast with `broadcast(dfDim)`.  
- If not broadcast, repartition both tables on the join key with a reasonable number of partitions (`repartitionByRange`).  
- For skew: add a random salt to the key in both sides (`key + rand(0, N)`), perform the join, then drop the salt. Complexity: extra column but linear time; reduces max task size from O(N) to O(N/k).  

**Edge cases**  
- Keys with nulls or empty strings can create a single huge partition.  
- If dimension is truly small (< 10 GB), broadcasting may be cheaper than shuffle.  
- Over‑salting can increase data volume; pick `N` so each salted bucket ≈ 1–2 GB.

**Optimize & Communicate**  
Explain that the root cause was a *hot key* causing one task to read/merge >200 GB, while others handled <5 GB. By broadcasting the dimension (or salting) we rebalance the load, cut shuffle size, and reduce runtime from hours to minutes. Mention trade‑offs: broadcast memory usage vs shuffle cost, and that salting adds a small join overhead but scales well for repeated jobs. This structured diagnosis shows clear reasoning, actionable fixes, and complexity awareness—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
