---
qid: vq_e63d6f4e73__star__local
question: where do we run job in spark?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 351
total_tokens: 585
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:24:49-05:00'
sources: []
---

**Situation:**  
During the rollout of our new customer‑segmentation pipeline, the nightly Spark jobs were hitting the cluster’s memory limits and causing frequent OOM errors on the YARN resource manager.

**Task:**  
I needed to re‑architect where and how we ran these jobs so they completed reliably within the allocated 12 hour window without over‑provisioning resources.

**Action:**  
First, I profiled the job with Spark UI and found that the heavy transformations were running on a single executor group. I switched from the default YARN “client” mode to “cluster” mode, allowing us to set `--deploy-mode cluster` and use the Yarn‑scheduler’s fair scheduling. Then I added the `spark.executor.memoryOverhead` flag and increased the number of executors to 12 with a fixed memory size (4 GB each). To further reduce contention, I split the job into two stages: an ETL stage that ran on local Spark on a dedicated “ETL” node pool, followed by a machine‑learning stage that leveraged the YARN cluster. Finally, I automated the submission via Airflow DAGs with retries and dynamic resource requests based on historical runtime.

**Result:**  
The job now finishes in 3 hours, 80% faster than before, and memory errors dropped to zero. The cluster utilization improved from 35% to 68%, freeing up resources for other teams. I learned that choosing the right deploy mode and tuning executor settings are critical when balancing performance and cost on a shared Spark/YARN infrastructure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
