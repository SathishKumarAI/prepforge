---
qid: ing_d3fd90bfc6__star__local
question: 'Explain: This would have a length of 5 — Google Maps System Design Interview
  Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 403
total_tokens: 646
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:33:33-05:00'
sources: []
---

**Situation:**  
When I joined the mapping team at my last company, we were tasked with redesigning our route‑planning service to support real‑time traffic updates for millions of users in a single city. The existing monolith was hitting 250 ms latency under peak load and struggled with data consistency.

**Task:**  
I had to design a distributed system that could ingest live traffic feeds, compute optimal routes within 100 ms, and scale horizontally while keeping the architecture fault‑tolerant.

**Action:**  
I started by decomposing the problem into three layers: ingestion, processing, and serving. For ingestion I used Kafka streams to buffer incoming GPS pings and sensor data; this gave us backpressure handling and replayability. In the processing layer I built a stateless microservice cluster on Kubernetes that applied a modified Dijkstra algorithm with edge weights updated in real time from the stream. To keep state, we persisted the graph snapshots in a distributed key‑value store (Redis Cluster) and used CRDTs to merge concurrent updates. For serving, I exposed a gRPC API behind an Envoy load balancer; each request was routed to the nearest zone using consistent hashing so that latency stayed below 90 ms.

**Result:**  
After launch, our routing latency dropped from 250 ms to 75 ms during rush hour, and traffic‑aware route suggestions reduced average commute times by 12% citywide. The system handled a 3× increase in concurrent users without any downtime, and the modular design allowed us to add new data sources (e.g., bike lanes) with minimal code changes. I learned that breaking a monolith into well‑defined streaming pipelines and using eventual consistency primitives can deliver both speed and resilience at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
