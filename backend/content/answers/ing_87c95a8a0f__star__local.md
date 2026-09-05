---
qid: ing_87c95a8a0f__star__local
question: 'Explain: Job Submission Service — Design a Distributed Job Scheduler -
  System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 378
total_tokens: 619
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:04:10-05:00'
sources: []
---

**Situation:**  
At my last company we ran a nightly ETL pipeline that processed terabytes of log data from our mobile app. The previous cron‑based scheduler caused 30 % of jobs to miss their SLA windows because it didn’t account for cluster load or job dependencies.

**Task:**  
I was tasked with designing a distributed, fault‑tolerant job scheduler that could dynamically allocate resources, enforce dependency graphs, and guarantee a 99.5 % on‑time completion rate across our three regional clusters.

**Action:**  
I built the scheduler on top of Kubernetes for container orchestration, using Argo Workflows to encode DAGs. Jobs were queued in Kafka topics; a lightweight worker service pulled messages, performed health checks against Prometheus metrics, and spun up pods with resource limits from the cluster autoscaler. I added an adaptive back‑off strategy that re‑queued failed jobs after a cooldown period, and integrated ML‑based load prediction to pre‑allocate nodes for peak periods. All state was persisted in etcd for consistency, and we exposed a REST API for operators to pause/resume pipelines.

**Result:**  
Within two months of deployment, job completion times dropped from an average of 4 h to 2.5 h, and SLA adherence rose from 68 % to 99.7 %. The system also cut idle cluster time by 22 %, saving us roughly $15k/month in infrastructure costs. I learned that coupling container orchestration with a lightweight, event‑driven scheduler can turn a brittle cron stack into a resilient, data‑centric workflow engine.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
