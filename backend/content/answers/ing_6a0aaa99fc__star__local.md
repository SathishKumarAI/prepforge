---
qid: ing_6a0aaa99fc__star__local
question: 'Explain: automaxprocs — Uber Engineering \u2014 Where the Digital World
  Meets the Physical One'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 315
total_tokens: 562
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:59:42-05:00'
sources: []
---

**Situation:** At my previous role at a ride‑sharing company, we had a fleet of microservices running on Kubernetes that each spawned CPU‑intensive ML inference workers. When pods were scheduled on nodes with many vCPUs, the workers would spin up more threads than the node could handle, causing context switching spikes and 20 % higher latency during peak hours.

**Task:** I was tasked with stabilizing CPU usage across all inference services while keeping latency under our SLA of 120 ms. The goal was to dynamically cap thread counts per pod based on the actual CPU capacity available at runtime.

**Action:** I implemented Uber’s *automaxprocs* pattern: each container queried the cgroup CPU quota exposed by Kubernetes, calculated the number of logical CPUs it could safely use, and set `GOMAXPROCS` (for Go) or equivalent thread‑pool size before launching the inference workers. We wrapped this logic in a lightweight init process that ran on pod start, so every service automatically respected node limits without manual configuration.

**Result:** After rollout, CPU utilization dropped by 35 %, and average request latency fell from 180 ms to 110 ms during surge periods. The system now scales gracefully across heterogeneous nodes, and I learned how introspecting runtime resource constraints can eliminate hard‑coded thread limits that otherwise become bottlenecks in distributed ML workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
