---
qid: ing_6ff271fdc4__faang__local
question: 'Explain: Communication styles — A pattern language for microservices'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 492
total_tokens: 726
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:03:20-05:00'
sources: []
---

**Clarify**  
We’re asked to explain *communication patterns*—a “pattern language” for how micro‑services talk to each other (REST, gRPC, messaging, event sourcing, etc.). I’ll assume the audience knows basic service‑orientation but not the full taxonomy, and that we need a concise, interview‑style answer.

**Approach**  
1. Outline the high‑level categories: synchronous vs asynchronous, request/response vs publish/subscribe, direct vs indirect routing.  
2. For each category list common patterns (e.g., REST, GraphQL, gRPC, SOAP for sync; Kafka, RabbitMQ, NATS for async).  
3. Highlight trade‑offs: latency, fault tolerance, scalability, contract evolution.  
4. End with a quick decision framework.

**Depth**  
| Category | Typical Pattern | Use Case | Trade‑off |
|----------|-----------------|----------|-----------|
| **Sync RPC** | REST (JSON/HTTP) | CRUD, immediate response | Simple, but tight coupling & single point of failure |
|  | gRPC / Thrift | Low‑latency, typed contracts | Requires protobuf, harder to debug |
| **Async Messaging** | Kafka topic | Event sourcing, high throughput | Higher latency, eventual consistency |
|  | RabbitMQ queue | Work‑load distribution | Supports retries & dead‑lettering |
| **Publish/Subscribe** | NATS Streaming | Fan‑out notifications | Lightweight but limited durability |
| **GraphQL** | Single endpoint query resolver | Aggregating multiple services in one request | Adds complexity to schema evolution |

**Edge Cases**  
- *Version drift*: REST can break clients; gRPC needs protobuf versioning.  
- *Network partitions*: Async patterns tolerate splits better than sync RPC.  
- *Data consistency*: Eventual consistency in async, strong consistency in sync.

**Optimize & Communicate**  
A quick decision rule: **If the caller needs an immediate answer and can tolerate tight coupling, use synchronous (REST/gRPC). If you need decoupling, high throughput, or eventual consistency, choose asynchronous messaging.** I’d finish by noting that a hybrid approach—sync for critical paths, async for background jobs—is often the sweet spot in large systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
