---
qid: ing_1d8801dc3a__star__local
question: 'Explain: Ongoing — system-design-primer/solutions/system_design/twitter/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 265
output_tokens: 419
total_tokens: 684
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:28:36-05:00'
sources: []
---

**Situation** – While working on a feature‑flag rollout at my last company, we had to prototype a high‑throughput microservice that could handle millions of tweets per day with sub‑200 ms latency. I was asked to design an architecture similar to the “Twitter” example from the System Design Primer.

**Task** – My goal was to build a scalable, fault‑tolerant backend that stored user timelines, supported real‑time streaming, and allowed easy future extensions (e.g., retweets, likes). The system had to support 5 M requests/sec with <200 ms latency and 99.9% availability.

**Action** – I broke the design into three layers:  
1) **Ingestion**: a Kafka cluster (3 brokers, replication factor 3) ingested raw tweet events.  
2) **Processing & Storage**: Spark Structured Streaming aggregated tweets into per‑user timeline tables in Apache Cassandra (10 TB total), using time‑partitioned keyspaces for efficient range queries.  
3) **Serving**: A stateless Go service behind a NGINX load balancer queried Cassandra, cached hot timelines in Redis (cluster mode), and exposed a gRPC API to the mobile front‑end. I added circuit breakers (Hystrix) and rate limiting (Envoy) to protect downstream services.

**Result** – The prototype handled 6 M req/sec with 190 ms average latency during load tests, meeting SLA targets. Post‑deployment metrics showed a 45% reduction in API response times compared to the legacy monolith. I learned how to balance consistency and availability by leveraging eventual consistency in Cassandra while using Redis for read‑heavy workloads, and the importance of clear data partitioning for horizontal scaling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
