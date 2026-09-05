---
qid: ing_fdc96e1954__star__local
question: 'Explain: Non-Functional Requirements: — Design a Distributed Job Scheduler
  - System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 345
total_tokens: 588
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:56:16-05:00'
sources: []
---

**Situation:**  
In my last role at a fintech startup, we were building an automated risk‑assessment pipeline that ran nightly across 12 regions. The existing single‑node scheduler kept the system on a tight deadline but was hitting latency spikes and had no graceful failover during maintenance windows.

**Task:**  
I was tasked with designing a distributed job scheduler that met strict non‑functional requirements: sub‑second response for job triggers, 99.9% uptime, horizontal scalability, and strong consistency in job state across nodes.

**Action:**  
I chose a microservices architecture on Kubernetes, using Kafka as the event bus for decoupling producers (data ingestion services) from workers. Redis Streams stored job metadata with optimistic locking to avoid race conditions. The scheduler exposed a REST API backed by etcd for distributed locks and used Prometheus + Grafana for real‑time monitoring. I implemented leader election via Raft, so only one node dispatched jobs while others stayed in standby, ensuring zero downtime during upgrades. Load balancing was handled by Kubernetes HPA, scaling the worker pool based on queue depth.

**Result:**  
The new scheduler cut job dispatch latency from 2 s to <200 ms and achieved 99.97% uptime over a year of production traffic, reducing manual intervention by 70%. I learned that marrying event‑driven architecture with strong consistency primitives is key for reliable distributed scheduling in ML pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
