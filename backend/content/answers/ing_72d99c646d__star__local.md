---
qid: ing_72d99c646d__star__local
question: 'Explain: Coordinator — Design a Distributed Job Scheduler - System Design
  Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 338
total_tokens: 577
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:17:18-05:00'
sources: []
---

**Situation**  
In my last role I was tasked with scaling our nightly data‑pipeline that processed terabytes of log files. The existing single‑node scheduler could only run about a dozen jobs, and as we added more analytics tasks the queue time ballooned to over an hour.

**Task**  
I had to design a distributed job scheduler that could dynamically allocate compute resources across a cluster, enforce task dependencies, and guarantee fault tolerance while keeping latency under 10 seconds for high‑priority jobs.

**Action**  
I chose Apache Mesos as the underlying resource manager because of its fine‑grained CPU/Memory offers. I built a lightweight coordinator service in Go that exposes a REST API for job submission and uses protobuf messages to describe DAGs. For scheduling, I implemented a two‑phase algorithm: first, a global “resource offer” queue pulls tasks from Mesos; second, an internal priority scheduler reorders the queue based on SLA tags and estimated runtimes (derived from historical metrics). To handle failures, each task reports heartbeats to etcd; if a node dies, its jobs are rescheduled automatically. I also added a simple UI with Grafana dashboards to monitor queue depth and job health.

**Result**  
After deployment the average queue time dropped from 45 minutes to 7 seconds for critical jobs, throughput increased by 4×, and we eliminated manual intervention during node failures. The project taught me how to blend existing distributed systems (Mesos, etcd) with custom scheduling logic to meet strict SLAs while keeping the architecture maintainable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
