---
qid: vq_f103abf758__star__local
question: Which classes are used by the Hive to Read and Write HDFS Files ?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 485
total_tokens: 726
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:26:16-05:00'
sources: []
---

**Situation**  
In a recent migration from a legacy data lake to Hive on EMR I noticed that query times for the sales fact table jumped from 2 min to over 20 min after we switched to ORC. The team suspected something was wrong with how Hive read and wrote the HDFS files.

**Task**  
I had to pinpoint which Hadoop classes Hive was actually invoking for reading and writing so I could tweak the configuration and confirm the performance bottleneck.

**Action**  
First, I inspected the job’s task logs and turned on `set hive.debug.mode=true`. That exposed the underlying InputFormat/OutputFormat used: `org.apache.hadoop.hive.ql.io.orc.OrcInputFormat` for reads and `org.apache.hadoop.hive.ql.io.orc.OrcOutputFormat` for writes. I also verified that the FileSinkOperator was calling `FileOutputFormat.setOutputPath()` with the correct partition directories. To isolate the issue, I replaced ORC with `TextInputFormat`/`TextOutputFormat`, reran the job, and saw a 5‑fold speedup—confirming the ORC classes were not properly configured for our block size. I then tuned `orc.block.size` to 256 MB and enabled vectorized reads (`set hive.vectorized.execution.enabled=true`). 

**Result**  
After applying those changes, query times dropped back below 3 min, a 90% reduction. I learned that understanding the exact Hadoop classes Hive delegates to—especially InputFormat/OutputFormat—is critical for diagnosing performance issues in big‑data pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
