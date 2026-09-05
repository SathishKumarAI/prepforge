---
qid: ing_3fa3a68f88__fp__local
question: How Grab store and process millions of orders daily?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 635
total_tokens: 804
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:19:43-05:00'
sources: []
---

### The fundamental problem  
Grab must accept, route, and fulfil **millions of orders per day** while keeping latency low, ensuring reliability, and scaling cost‑effectively. That boils down to two core constraints:

1. **Throughput vs. Consistency** – each order is a write that must be durable, but the system also needs to serve read traffic (e.g., ETA, price) in real time.
2. **Elasticity vs. Cost** – resources should expand or contract automatically with demand spikes (holidays, promos).

### Architecture that satisfies those constraints  

| Layer | Design principle | Why it works |
|-------|------------------|--------------|
| **Ingress** | *Load‑balanced API gateways* + *rate limiting* | Distributes traffic evenly and protects downstream services. |
| **Service layer** | *Microservices + Event‑Sourcing (CQRS)* | Each domain (order, payment, driver) owns its own data store; events are appended rather than updated, guaranteeing auditability and enabling replay for failures. |
| **Messaging backbone** | *Kafka / Pulsar* | Provides durable, partitioned streams that act as the single source of truth while decoupling producers from consumers. |
| **Data stores** | *Hybrid: strong‑consistency (PostgreSQL) + eventual‑consistency (DynamoDB)* | Writes go to a strongly consistent store; read replicas and materialised views are refreshed asynchronously, trading consistency for latency. |
| **Cache & CDN** | *Edge caching + Redis* | Reduces database load for high‑cardinality queries (e.g., driver proximity). |
| **Observability** | *Distributed tracing + metrics* | Detects bottlenecks in real time, feeding auto‑scaling policies. |

### Deeper principle  

The system is an **optimization of the CAP theorem**: it accepts eventual consistency for read‑heavy workloads while guaranteeing atomicity on the critical order write path. The event‑sourced logs form a *temporal database* that can be queried at any point in time, enabling instant rollback or fraud analysis.

### Non‑obvious insight  

Most people think scaling is all about adding servers. In Grab’s case, **the real scalability comes from *decoupling the read and write models* (CQRS)**. By writing once to an immutable event log and deriving multiple projections for different consumers, the system can serve billions of queries without ever touching the original transaction store again. This pattern turns what would be a linear cost in storage into a logarithmic one, because each projection is tailored to its query workload rather than duplicated data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
