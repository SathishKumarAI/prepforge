---
qid: ing_08f9d84e1d__fp__local
question: 'Explain: Kibana Deployment ¶ — ELK Stack + Kafka End to End Practice \u2014
  Log Consolidation with ELK Stack 1.2 documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 435
total_tokens: 627
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:24:49-05:00'
sources: []
---

## Why a “Kibana‑only” deployment makes sense for log consolidation

When you ingest logs into the **ELK stack** (Elasticsearch, Logstash, Kibana), the heavy lifting is split across three layers:

| Layer | Function | What it *must* do |
|-------|----------|------------------|
| **Kafka** | Decoupled, durable message bus | Accepts a continuous stream of events from heterogeneous producers, guarantees at‑least‑once delivery and back‑pressure handling. |
| **Logstash** | Ingestion pipeline | Parses, enriches, transforms and forwards records to Elasticsearch; it must be stateless so that any instance can process the same data. |
| **Elasticsearch** | Search & analytics engine | Stores documents in a distributed index; it must provide low‑latency queries over terabytes of time‑series data. |
| **Kibana** | Visualisation layer | Only reads from Elasticsearch, never writes or transforms data. |

Because Kibana is *purely read‑only*, the deployment can be drastically simplified:

1. **No Logstash or Kafka nodes are required for Kibana** – they only serve the index; Kibana merely consumes it.
2. **Security hardening** – you expose a single HTTPS endpoint instead of multiple internal services, reducing attack surface.
3. **Scalability** – each component scales independently: Kafka brokers for ingestion throughput, Logstash workers for CPU‑bound parsing, Elasticsearch shards for query load, and Kibana pods for concurrent users.

### One non‑obvious insight

When you think “Kibana‑only”, you might miss that **the same Kibana instance can be shared across multiple deployments** (e.g., dev, prod) by pointing its `elasticsearch.hosts` to different clusters. This eliminates the need for separate visualisation tiers and lets you audit all environments from a single UI—an architectural pattern that leverages Kibana’s *read‑only* nature to achieve multi‑tenant observability without extra infrastructure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
