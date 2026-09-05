---
qid: ing_b57908bfcc__star__local
question: 'Explain: When PySpark starts to feel slow — PySpark for Beginners: Building
  Intermediate-Level Skills'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 368
total_tokens: 614
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:34:21-05:00'
sources: []
---

**Situation**  
I was working on a nightly batch job that processed 350 GB of click‑stream data in Spark on an EMR cluster. The previous week the job finished in ~12 minutes, but last night it stalled at about 45% progress for over 30 minutes.

**Task**  
I had to identify why the pipeline was slowing and bring the runtime back under 15 minutes without changing the business logic or data volume.

**Action**  
First, I ran `spark‑history-server` to inspect stages; stage 3 (a wide shuffle) was taking 10× longer than expected. I checked executor metrics: CPU usage spiked at 95% while memory stayed below 70%, indicating a CPU bottleneck. I then:

1. Repartitioned the RDD before the shuffle from 200 to 400 partitions, reducing task skew.
2. Changed the join strategy for the user‑profile lookup to broadcast hash join (broadcast size ~150 MB) after profiling its cardinality.
3. Enabled Tungsten’s whole-stage code generation by setting `spark.sql.codegen.wholeStage=true` and increased `spark.executor.memory=4g`.
4. Tuned the shuffle buffer with `spark.shuffle.file.buffer=64k` to reduce disk I/O.

**Result**  
The job completed in 13 minutes, a 45% speed‑up. The cluster now uses only 60% CPU on average, and the new configuration has been promoted to production. I learned that profiling Spark UI early can pinpoint whether CPU or shuffle is the culprit, and that modest repartitioning plus broadcast joins often yield the biggest gains without code rewrites.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
