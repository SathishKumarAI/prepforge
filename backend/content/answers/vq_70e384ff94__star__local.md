---
qid: vq_70e384ff94__star__local
question: Explain Execution Plan.?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 351
total_tokens: 581
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:04:04-05:00'
sources: []
---

**Situation:**  
In my last role at a fintech startup, we were shipping daily batch jobs that transformed raw transaction logs into analytical tables for the risk team. One night the nightly job started taking twice as long as usual and the pipeline failed on a few days.

**Task:**  
I needed to diagnose why the execution was slowness, pinpoint bottlenecks in our Spark jobs, and propose a fix so the ETL could run within its 4‑hour window again.

**Action:**  
First I pulled the Spark UI and examined the physical plan for the problematic job. By expanding each stage I noticed an expensive `SortMergeJoin` on a 30 GB dataset that was spilling to disk because of insufficient executor memory. I then ran `explain(true)` in the driver code, which gave me the logical, optimized, and physical plans; the Catalyst optimizer had chosen a broadcast hash join instead of a shuffle hash join but our configuration disabled broadcasting for that table size. I updated the Spark config (`spark.sql.autoBroadcastJoinThreshold`) to allow a 200 MB broadcast and added a `cache()` on the smaller lookup dimension to avoid recomputation. Finally, I rewrote the query to use partition pruning by filtering early on the date column.

**Result:**  
The job runtime dropped from 6 hours to 2 hours, eliminating failures during peak hours. The risk team now receives fresh data every morning with a 25% lower cost per run. I learned that inspecting the execution plan is essential for spotting hidden shuffle and spill costs—and that small configuration tweaks can yield big performance gains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
