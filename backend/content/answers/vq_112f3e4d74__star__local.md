---
qid: vq_112f3e4d74__star__local
question: what is output committer?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 358
total_tokens: 590
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:48:30-05:00'
sources: []
---

**Situation**  
In my last role I was refactoring a nightly ETL that ingested terabytes of log data into HDFS. The job used the default FileOutputCommitter, but we were seeing sporadic “file not found” errors in downstream analytics when the cluster ran out of memory during task cleanup.

**Task**  
I had to make the output writing more resilient so that partial writes wouldn’t corrupt our final Parquet tables and reduce the failure rate below 0.5 % while keeping latency under the 2‑hour SLA.

**Action**  
I switched from the default FileOutputCommitter to a *LazyOutputCommitter* in Hadoop 3.x, which delays committing intermediate files until the task finishes successfully. I also added a custom commit policy that checks for checksum consistency before moving the temporary file into the final directory. In code, I set `mapreduce.fileoutputcommitter.marksuccessfuljobs` to false and wrapped the job with a `CommitterHook` that logs any failed commits to an alerting dashboard. Finally, I tuned the task memory by reducing the number of reducers from 48 to 32 to avoid OOM crashes.

**Result**  
After deployment, job failures dropped from 3 % to 0.2 %, and the average output latency improved from 1h55m to 1h42m. I learned that choosing the right committer type can drastically reduce data corruption risk without sacrificing performance, and that coupling it with custom checksums provides an extra safety net for production pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
