---
qid: vq_ccd8623529__fp__local
question: Suppose we have a series of 9 Mapreduce Jobs, then how many Disk I/Os are
  needed in total?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 184
output_tokens: 323
total_tokens: 507
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:56:39-05:00'
sources: []
---

In MapReduce the fundamental unit of work is a *job*:  
1. **Read** all input records from HDFS (or another storage) into memory for the mapper.  
2. **Write** every output record produced by the reducer back to HDFS.

Those two actions are the only disk I/Os that a job performs; the framework itself does not read or write anything else unless you add custom logic.  
Therefore, for *n* independent jobs the total number of distinct disk‑to‑disk transfers is  

\[
2n \quad(\text{reads} + \text{writes}) .
\]

With 9 MapReduce jobs:

\[
2\times9 = 18
\]

So you will incur **18 disk I/Os** in total.

*Non‑obvious insight:*  
If the output of one job is fed directly to the next, those intermediate files are still written once and read once. The framework does not “merge” them automatically; each stage pays its own read/write cost. Only when you chain jobs within a single *pipeline* (e.g., by using `ChainMapper`/`ChainReducer`) can you eliminate one pair of I/Os, but that requires explicit design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
