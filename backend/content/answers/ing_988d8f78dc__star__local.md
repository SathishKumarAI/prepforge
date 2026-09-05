---
qid: ing_988d8f78dc__star__local
question: 'Explain: System API Design — Design a Distributed Job Scheduler - System
  Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 349
total_tokens: 590
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:37:36-05:00'
sources: []
---

**Situation** – At my previous company we had a nightly data‑processing pipeline that ran hundreds of ETL jobs across three regions. The monolithic scheduler crashed whenever a node failed and the latency from job submission to start was 15 minutes, which broke our SLA for downstream analytics.

**Task** – I was tasked with building a fault‑tolerant, low‑latency distributed job scheduler that could handle 10k concurrent jobs, automatically retry failed tasks, and expose a simple REST API for clients.

**Action** – I chose a microservice architecture: an API gateway (NGINX) in front of a Go service that accepted job definitions and pushed them into a Kafka topic. A worker pool spun up Docker containers on Kubernetes; each worker subscribed to the topic, pulled jobs, and reported status back via gRPC to a central state store in Redis (using RedLock for distributed locking). I added leader election with etcd so only one coordinator queued jobs. For retries I implemented exponential back‑off with a maximum of 5 attempts. Monitoring used Prometheus + Grafana; alerting triggered on job timeouts.

**Result** – The new scheduler reduced job start latency from 15 min to <30 seconds, handled 20× the throughput, and increased overall uptime from 92% to 99.9%. I learned that decoupling scheduling logic from execution via a message queue and using distributed locks is key for scalability and resilience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
