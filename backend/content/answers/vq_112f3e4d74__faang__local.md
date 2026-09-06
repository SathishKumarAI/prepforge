---
qid: vq_112f3e4d74__faang__local
question: what is output committer?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 438
total_tokens: 667
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T17:58:11-05:00'
sources: []
---

**Clarify**  
*Question:* “What is an Output Committer?”  
Assumptions I’d confirm:  
1. We’re talking about Hadoop/HDFS, not Spark or other frameworks.  
2. The context is a MapReduce job that writes intermediate/ final output to HDFS.

**Approach**  
Explain the role of the output committer in the MapReduce lifecycle, why it matters for fault‑tolerance, and how it works with task attempts and HDFS.

**Depth**  

An *Output Committer* is a pluggable component that governs how a MapReduce job writes its final results to HDFS.  
- **Stage 1 – Task output:** Each map/reduce task writes to a private temporary directory (e.g., `/user/hadoop/tmp/_temporary/<taskid>`).  
- **Stage 2 – Commit/Abort:** When all attempts finish, the framework calls `OutputCommitter.commitJob()` or `commitTask()`. The committer then atomically moves these temp files into the job’s output directory.  
- **Fault tolerance:** If a task fails, `abortTask()` deletes its temp data so it does not pollute the final output.  
- **Common implementations:** *FileOutputCommitter* (default) performs rename operations; *MultipleTextOutputFormat* can commit per‑partition files.  

**Edge Cases**  
- HDFS rename failure → job aborts, leaving no partial output.  
- Large numbers of temp files → potential `ENOSPC` on local disk or name node overload.  
- Custom committer mis‑implemented could leak data or create stale temp dirs.

**Optimize & Communicate**  
I’d highlight that choosing the right committer (e.g., *FileOutputCommitter* vs *LazyOutputFormat*) balances performance and safety, and I’d explain how to profile commit time against task output size. This shows clear trade‑off reasoning and aligns with FAANG’s emphasis on structured, depth‑first answers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
