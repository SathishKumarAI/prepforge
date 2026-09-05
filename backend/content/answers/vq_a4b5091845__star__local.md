---
qid: vq_a4b5091845__star__local
question: What is UBER mode and where is the settings to enable in Hadoop .?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 453
total_tokens: 695
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:13:01-05:00'
sources: []
---

**Situation:**  
While migrating a legacy batch pipeline from MapReduce 1.x to YARN on our production cluster, I noticed that the job submitted by our custom Spark wrapper was spawning an excessive number of small task trackers—over 200 tasks for a single ETL stage—causing the ResourceManager to churn and leading to a 30 % slowdown.

**Task:**  
I needed to reduce the number of YARN containers launched per job without changing the logic, so that we could keep our SLA of 4‑hour nightly loads while freeing up slots for other workloads.

**Action:**  
I identified that our jobs were running in “Uber” mode (also called local or single‑container execution) because the Hadoop configuration `mapreduce.app-submission.cross-platform` was set to `true`, and the job’s `mapreduce.job.ubertest` flag was inadvertently enabled via a custom property in our Spark submit script. I disabled Uber mode by editing `$HADOOP_CONF_DIR/hadoop-site.xml` and setting `<property><name>mapreduce.job.ubertest</name><value>false</value></property>` and removed the `--uber` flag from the spark‑submit command. I also added a sanity check in our CI pipeline to fail if Uber mode is detected.

**Result:**  
After re‑submitting, the job ran on 12 YARN containers instead of 200, cutting runtime from 4 h 15 min to 3 h 30 min—a 25 % improvement. The cluster saw a 40 % drop in container churn, freeing resources for other teams. I learned that subtle configuration drift (Uber mode) can silently inflate resource usage, and that embedding health checks in CI prevents regressions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
