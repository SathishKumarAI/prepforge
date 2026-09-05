---
qid: ing_9144ec4c31__star__local
question: 'Explain: Worker Nodes — Design a Distributed Job Scheduler - System Design
  Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 341
total_tokens: 581
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:23:23-05:00'
sources: []
---

**Situation**  
At my last company we ran nightly batch training pipelines on a Kubernetes cluster with ~120 GPU worker nodes. The existing cron‑based scheduler often left idle GPUs while some jobs queued up for hours, hurting our SLA of 4 h turnaround.

**Task**  
I was tasked to design a distributed job scheduler that dynamically allocates workers, balances load across zones, and guarantees that high‑priority models finish within their deadlines while keeping utilization above 85%.

**Action**  
I built a lightweight service using Go and gRPC. Workers register themselves with a central etcd store, advertising GPU count, memory, and zone. The scheduler consumes a priority queue of job manifests (YAML) published to Kafka. For each incoming job it runs a weighted round‑robin algorithm that prefers same‑zone workers to reduce cross‑link latency, then falls back to the least‑used node globally. I added a lease mechanism: if a worker fails to renew within 30 s, its jobs are preempted and requeued. To avoid starvation, I capped the number of consecutive low‑priority jobs per node.

**Result**  
After deployment we saw GPU utilization jump from 68 % to 92 %, average job latency dropped from 3 h 45 min to 2 h 15 min, and high‑priority SLA compliance rose from 78 % to 99.5 %. I learned that coupling lightweight service discovery with a simple weighted scheduler can deliver robust performance in a dynamic ML environment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
