---
qid: ing_518901c133__aws__local
question: 'Explain: A. Go setup — Building a Performant API using Go and Cassandra'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 441
total_tokens: 677
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:29:26-05:00'
sources: []
---

**Situation & Task**  
At my last role I led the migration of our legacy recommendation engine to a micro‑service in Go that exposed an HTTP API for real‑time scoring. The goal was to reduce latency from ~200 ms to <50 ms while handling 10k requests/sec, all on AWS.

**Action (Design & Implementation)**  
1. **API Layer** – Built with *Go* and the *Gin* framework; leveraged goroutines and context timeouts for concurrency.  
2. **Data Store** – Chose **Cassandra** on Amazon Keyspaces (managed Cassandra) because of its high write throughput, tunable consistency, and support for wide‑column queries needed for user/item embeddings.  
3. **Caching** – Added **ElastiCache Redis** as a read‑through layer to hit 95 % of requests in <5 ms.  
4. **Deployment** – Containerized with Docker, orchestrated via *ECS Fargate* (no EC2 overhead). Autoscaling based on CPU and request latency metrics.  
5. **Observability** – Integrated **AWS X-Ray** for tracing and CloudWatch Alarms to trigger auto‑scaling or fallback logic.

**Result**  
- Latency dropped from 200 ms to **38 ms average**, with 99th percentile <70 ms.  
- Throughput scaled to **12k RPS** without manual intervention.  
- Cost decreased by **18 %** versus the previous EC2‑based deployment due to Fargate’s pay‑per‑second model.

**Reflection (Bar‑raiser focus)**  
I owned every layer, from data modeling in Cassandra to observability wiring, and performed “red‑team” latency drills to surface edge‑case failures. The success reinforced my belief that **Ownership**, **Dive Deep**, and a bias for action are the keys to building resilient, high‑performance ML APIs on AWS.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
