---
qid: vq_112f3e4d74__aws__local
question: what is output committer?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 558
total_tokens: 784
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:39:23-05:00'
sources: []
---

**Answer (Amazon Way)**  

> **Leadership Principles:** *Customer Obsession* – ensuring reliable data for downstream analytics; *Dive Deep* – understanding the internals of a distributed file system.  

**S – Situation**  
While leading a migration of our nightly ETL pipeline from on‑prem Hadoop to Amazon EMR, I noticed that 12 % of job runs failed due to corrupted output files in S3, causing downstream dashboards to show stale metrics.

**T – Task**  
I had to guarantee atomicity of task outputs so that consumers never read partial data, without incurring high costs or latency on the new platform.

**A – Action**  
1. **Research & Design:** I studied Hadoop’s `OutputCommitter` interface and identified the *FileOutputCommitter* as the default implementation used by EMR.  
2. **Implementation:**  
   - Configured each mapper to write to a temporary sub‑folder (`_temporary/<attempt_id>/`) in S3.  
   - On task success, the committer renamed the temp folder to the final destination atomically (S3’s `CopyObject` with `MetadataDirective=REPLACE`).  
   - Added a retry policy and an eventual consistency check using `HeadObject`.  
3. **AWS Services:** EMR (Spark/MapReduce), S3 (object storage), Lambda (cleanup stale temp folders).  

**R – Result**  
- Reduced output corruption from 12 % to <0.1 %.  
- Cut pipeline failures by 95 %, saving ~$20k/month in re‑runs.  
- Improved consumer SLA from 24 h to 4 h for fresh metrics.

---

### What a bar‑raiser looks for

| Trait | Why it matters |
|-------|----------------|
| **Ownership** | I took end‑to‑end responsibility, from diagnosing the root cause to deploying a production‑ready fix. |
| **Dive Deep** | I dissected Hadoop’s commit logic and mapped it onto S3 semantics, ensuring correctness at scale. |
| **Quantified Impact** | Measured failure reduction and cost savings with concrete numbers. |
| **Learning from Failure** | The incident taught me to validate output consistency before exposing data downstream; now we run a health check job nightly. |

> *“When you’re delivering results in a distributed system, make sure the data you hand off is as clean as the code that produced it.”*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
