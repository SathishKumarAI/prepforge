---
qid: ing_667ea4f8a9__aws__local
question: 'Explain: A. Creating Users — Building a Performant API using Go and Cassandra'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 421
total_tokens: 657
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:16:51-05:00'
sources: []
---

**Situation & Task**  
At my last role I was tasked to expose a *Create‑User* endpoint that would handle >200 K users/day while keeping latency <50 ms. The existing Java stack was hitting GC pauses and Cassandra read/write throughput dropped below SLA.

**Action – Design & Implementation**  
- **Language:** Switched the microservice to Go (goroutine per request, zero‑alloc JSON handling).  
- **Data store:** Re‑architected the schema for single‑partition writes: `user_id PK`, `email` as a secondary index. Used Cassandra’s *Batch* API with light‑weight transactions (`IF NOT EXISTS`) to guarantee idempotence.  
- **AWS services:** Deployed on **Amazon ECS Fargate** (no infra ops), used **Amazon Keyspaces** (managed Cassandra) for high availability and auto‑scaling, and **Amazon CloudWatch Alarms** to trigger a Lambda that adds read replicas when write latency >30 ms.  
- **Performance tuning:** Added a 64‑MB LRU cache per container using Go’s `groupcache` to warm hot users; reduced Cassandra roundtrips by 35 %.  

**Result**  
- Latency dropped from 120 ms to 28 ms (–77 %).  
- Throughput increased to 350 K writes/sec with <0.1 % error rate.  
- Operational cost fell 22 % due to Fargate’s pay‑per‑second model and reduced Cassandra nodes.

**Reflection & Learning**  
I *owned* the failure points by diving deep into GC logs, Cassandra metrics, and request traces. The lesson: early adoption of Go + Keyspaces + serverless orchestration can deliver measurable gains while keeping ops light—exactly what Amazon expects from a bar‑raiser.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
