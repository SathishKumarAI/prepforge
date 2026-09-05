---
qid: ing_e7be837422__star__local
question: 'Explain: 4.5 Addressing Single Points of Failure — Design a Distributed
  Job Scheduler - System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 369
total_tokens: 617
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:12:06-05:00'
sources: []
---

**Situation** – While leading the backend team at a fintech startup, our nightly batch pipeline was hitting a single‑point failure: the central job queue service on a single EC2 instance crashed every 48 hours, halting all downstream analytics and causing a 12 % drop in daily revenue.  

**Task** – I had to redesign the scheduler so that no single component could bring the entire data processing workflow down, while keeping latency under 200 ms for job dispatch and ensuring at‑least‑once execution semantics.

**Action** – I broke the system into three loosely coupled services:  
1. **Clustered Kafka brokers** (3 nodes) as a durable, replicated message bus for job metadata.  
2. A stateless **Scheduler microservice** deployed in Kubernetes with horizontal pod autoscaling; it consumes from Kafka and writes job state to a distributed Etcd cluster for leader election and coordination.  
3. Multiple **Worker pods** that poll the Scheduler via gRPC, fetch tasks, execute them on Docker containers, and report completion back through Kafka. I added health‑checks, circuit breakers (Netflix Hystrix), and automatic retry logic with exponential backoff.  

**Result** – The new architecture eliminated single points of failure; we saw a 99.9% uptime over six months, reduced job dispatch latency from 350 ms to 180 ms, and cut batch failures by 96%. I learned that coupling persistence (Kafka + Etcd) with stateless workers and built‑in resiliency patterns is key to robust distributed scheduling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
