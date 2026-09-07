---
qid: ing_cbf9c3537e__faang__local
question: 'Explain: Backend — The WhatsApp Architecture Facebook Bought For $19\u00a0Billion
  - High Scalability -'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 625
total_tokens: 872
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:33:36-05:00'
sources: []
---

**Clarify**  
WhatsApp’s backend must support > 2 B users, delivering ~50 M messages/sec with < 1 s latency and minimal data loss. We’ll assume the question asks for the key architectural choices that enabled this scalability after Facebook’s $19 B acquisition.

**Approach**  
Explain the layered stack: client → load‑balancer → message routers → storage & messaging queues → persistence layers, highlighting the protocols (XMPP‑based), sharding, replication, and fault tolerance. Then discuss operational practices: horizontal scaling, auto‑recovery, monitoring, and data locality.

**Depth**  

| Layer | Design | Rationale |
|-------|--------|-----------|
| **Ingress** | Elastic load balancers + HAProxy on EC2 instances | Evenly distributes traffic, supports 10k+ concurrent connections per node. |
| **Routing** | `MessageRouter` nodes (Python/Go) using consistent hashing to shard users by phone number → each router owns ~10M users. | Keeps per‑user state in memory; O(1) lookup for destination device. |
| **Queueing** | Apache Kafka topic per shard, 64 partitions, replicated 3×. | Guarantees ordering per user, decouples send/receive, supports backpressure. |
| **Persistence** | RocksDB + Cassandra: metadata (contacts, groups) in Cassandra; message payloads in RocksDB on each router. | Low‑latency local reads, strong consistency for metadata, eventual consistency for messages. |
| **Push** | WebSocket/TCP long‑polling to devices; fallback to push notification if offline. | Minimizes server load and battery drain. |
| **Observability** | Prometheus + Grafana dashboards; automated failover scripts. | Detects hotspots and auto‑scales routers. |

*Complexity*: Routing O(1), Kafka read/write amortized O(log N) per partition, Cassandra reads O(1).  
*Trade‑offs*: Local RocksDB reduces latency but duplicates data; Kafka provides durability at cost of higher write latency.

**Edge Cases**  

- **Device churn**: routers must handle rapid online/offline transitions; use heartbeat checks.  
- **Message bursts**: Kafka partitions prevent bottlenecks; backpressure propagates to senders.  
- **Data loss**: replicated queues + ack protocol ensure at‑least‑once delivery.

**Optimize & Communicate**  

Future improvements could involve migrating to a serverless microservice for low‑traffic users, or adopting a vector‑based sharding scheme (e.g., HyperLogLog) for more granular load distribution. I’d explain these ideas by mapping each change to the scalability metric it improves (latency, throughput, or fault tolerance), ensuring interviewers see both technical depth and strategic thinking.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
