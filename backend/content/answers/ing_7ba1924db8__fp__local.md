---
qid: ing_7ba1924db8__fp__local
question: 'Explain: Three producers, 3x async replication — Benchmarking Apache Kafka:
  2 Million Writes Per Second (On Three Cheap Machines) | LinkedIn Engineering'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 460
total_tokens: 652
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:28:03-05:00'
sources: []
---

### Why the “Three‑Producer, 3× Async Replication” setup matters for Kafka

**The core problem:**  
A distributed log must keep *durable* records while delivering *high throughput*. Durability is achieved by replicating each message to multiple brokers; throughput is limited by how fast those replicas can acknowledge writes.  

**Why three producers and 3× async replication work together:**

1. **Parallelism across partitions** – Each producer publishes to a distinct set of partitions, so the write load is spread over all brokers. With *three* producers you can saturate roughly one‑third of the cluster’s I/O bandwidth at any instant, which mirrors real workloads where many clients publish concurrently.

2. **Asynchronous replication (async)** – The leader broker accepts a record and immediately acknowledges it to the producer; replicas are updated in the background. This removes the *write‑latency bottleneck* that would otherwise limit throughput to the slowest replica’s round‑trip time.

3. **Three‑fold replication** – Kafka’s default “replication factor = 3” ensures fault tolerance while keeping the per‑record write cost modest: each record is written once on the leader and two times asynchronously, so I/O scales linearly with the replication factor but latency remains bounded by the leader’s single write.

**Deeper principle:**  
The benchmark implicitly tests **throughput ≈ (number of producers × partitions) × write‑rate / replication‑factor**, because async replication turns the system into a *pipeline*: producers → leaders → background replica threads. The bottleneck shifts from network latency to CPU and disk throughput, allowing 2 M writes/s on three inexpensive machines.

**Non‑obvious insight:**  
Async replication alone does **not** guarantee high write rates; the key is *partition granularity*. If all producers targeted the same partition, the leader would become a serial bottleneck even with async replicas. Thus, the benchmark’s design—three producers each covering distinct partitions—is essential to expose the true scalability of Kafka’s storage engine.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
