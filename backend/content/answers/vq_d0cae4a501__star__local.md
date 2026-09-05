---
qid: vq_d0cae4a501__star__local
question: ) what happens when two clients tries to access same file in Hdfs?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 356
total_tokens: 597
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:20:44-05:00'
sources: []
---

**Situation:**  
During a migration of our nightly ETL pipeline from local storage to HDFS, two of our data‑science teams started writing their own incremental fact tables into the same HDFS directory. The job logs began showing “FileAlreadyExistsException” and occasional “BlockMissingException” errors.

**Task:**  
I had to ensure that both clients could write without corrupting each other’s files, while keeping the pipeline’s 4‑hour SLA intact.

**Action:**  
First, I introduced a lightweight lock service using ZooKeeper: before writing, each job creates an exclusive znode for its target path. If the znode exists, the job waits or retries with exponential back‑off. Next, I switched to HDFS’ atomic rename semantics by having each process write to a temporary file (e.g., `fact_2024-09-04.tmp`) and then atomically rename it to the final name (`fact_2024-09-04`). This guarantees that readers never see partially written files. Finally, I updated our job orchestration in Airflow to serialize the two tasks using a task group dependency, so only one writes at a time when necessary.

**Result:**  
After deployment, we saw a 0 % drop‑in file corruption rate and the pipeline stayed within its 4‑hour window. The lock pattern also reduced HDFS block allocation conflicts by ~30%. I learned that leveraging ZooKeeper for fine‑grained coordination and HDFS’ atomic rename can turn what looks like a race condition into a predictable, fault‑tolerant workflow.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
