---
qid: ing_34abc2237e__aws__local
question: 'Explain: A. Cassandra Setup — Building a Performant API using Go and Cassandra'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 517
total_tokens: 753
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:24:04-05:00'
sources: []
---

**Situation / Task**

I was hired by an e‑commerce startup to expose their product catalog through a low‑latency REST API. The catalog had 35 M items, each with hundreds of attributes, and we needed <10 ms read latency for 99.9 % of requests while supporting daily write bursts of 1.2 k ops/sec.

**Action**

1. **Choose the right store** – I evaluated DynamoDB, Aurora, and Apache Cassandra. Cassandra’s tunable consistency and horizontal scalability made it a natural fit for our high‑write, low‑latency read pattern.  
2. **Schema & Partitioning** – I designed a *wide‑row* key: `PK=product_id`, `SK=attribute_name`. This allows all attributes of a product to be fetched in one partition scan. To avoid hotspotting we salted the first 4 characters of the ID and distributed writes across 24 nodes.  
3. **API Layer** – Built with Go (performance, static binaries). I used gRPC‑style HTTP/2 endpoints, connection pooling, and context timeouts to guarantee sub‑10 ms RTT.  
4. **Caching & Backpressure** – Added a Redis cache (TTL 5 min) for the hottest 1% of products. For write bursts we used a rate‑limiting token bucket per node, backed by Kafka, ensuring no single node was overwhelmed.  
5. **Observability** – Instrumented with OpenTelemetry; deployed Prometheus/Grafana dashboards to track read latency, error rates, and Cassandra repair progress.

**Result**

- Read latency dropped from 45 ms (MongoDB baseline) to **7 ms average**, 99.9 % below the SLA.  
- Daily writes handled without throttling, even during flash sales (up to 3× traffic).  
- Operational cost was 30 % lower than a DynamoDB‑only solution due to cheaper VM instances and reduced read capacity.

**Reflection**

I owned every layer: from schema design to deployment pipeline, continuously iterating on metrics. I *dive deep* into Cassandra’s compaction logs to preempt hot spots, learning that a simple salting scheme saved us from 15 % CPU spikes. This project exemplified **Ownership**, **Dive Deep**, and **Deliver Results**—the core leadership principles we value at Amazon.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
