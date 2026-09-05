---
qid: ing_8ead421a8e__star__local
question: 'Explain: Functional Requirements: — Design a Distributed Job Scheduler
  - System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 342
total_tokens: 583
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:18:05-05:00'
sources: []
---

**Situation:**  
At my previous company we had a monolithic batch system that ran nightly data‑pipeline jobs across hundreds of workers. It hit a bottleneck when the number of tasks grew beyond 2,000 per day – queue times spiked to over 45 minutes and SLA drifted past our 1‑hour window.

**Task:**  
I was tasked with designing a distributed job scheduler that could scale horizontally, guarantee at-least-once execution, and keep latency under 30 seconds for critical jobs while still handling the bulk of routine tasks.

**Action:**  
I chose a microservice architecture built on Kubernetes. For task distribution I used a sharded Redis queue per priority level; each worker subscribed to its shard via Lua scripts that atomically claimed a job ID. Workers ran in Docker containers and reported status back through a lightweight gRPC API. To avoid duplicate work, I implemented optimistic locking with versioned timestamps and retried failed jobs up to three times before flagging them for manual review. I also added a Prometheus‑based metrics dashboard to monitor queue depth, worker health, and execution time per job type.

**Result:**  
The new scheduler cut average latency from 45 minutes to 12 seconds for high‑priority tasks and kept bulk jobs within the 30‑second SLA. Throughput increased by 4×, allowing us to add a 25% growth in data volume without additional hardware. I learned that decoupling task assignment with a lock‑free queue and monitoring real‑time metrics is key to building resilient distributed schedulers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
