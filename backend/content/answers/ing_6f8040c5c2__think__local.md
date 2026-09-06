---
qid: ing_6f8040c5c2__think__local
question: 'Explain: Non-Functional Requirements — Distributed Counter System Design
  - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 608
total_tokens: 801
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T08:21:09-05:00'
sources: []
---

**1. Clarify the ask and state assumptions**  
   • Identify what “non‑functional requirements” (NFRs) mean in this context: performance, scalability, consistency, availability, fault tolerance, etc.  
   • Ask whether the focus is on a specific tech stack or purely architectural concepts.  
   • Assume we need to design a counter that can be incremented concurrently by many clients and read with acceptable latency.

**2. Pick a mental model / framework**  
   • Use the *CAP theorem* to reason about consistency vs. availability.  
   • Apply *distributed systems patterns*: sharding, partitioning, replication, eventual consistency, leader‑follower, gossip protocols.  
   • Leverage the *microservices* or *event‑driven* architecture for loose coupling.

**3. Step‑by‑step reasoning**  
   1. **Define functional spec** – increment API, read API, reset optional.  
   2. **Identify NFRs** – throughput (e.g., 10k ops/sec), latency (<50 ms reads), durability, high availability, horizontal scalability.  
   3. **Choose a data model** – use a counter per key stored in a distributed key‑value store (Redis Cluster, DynamoDB, Cassandra).  
   4. **Select consistency level** – eventual for reads, strong for writes if latency critical; or use optimistic concurrency with versioning.  
   5. **Design sharding strategy** – hash key to shard, each shard owns a subset of counters.  
   6. **Add replication** – synchronous multi‑master or asynchronous follower replicas per shard.  
   7. **Handle failures** – automatic failover, quorum reads/writes, retry logic, dead‑letter queues for lost increments.  
   8. **Measure and iterate** – instrument latency, error rates, load patterns; adjust replication factor or sharding.

**4. Common traps to avoid**  
   • Assuming “eventual consistency” is always acceptable—check business impact of stale reads.  
   • Over‑sharding leading to high cross‑node traffic for aggregations.  
   • Ignoring write amplification when using append‑only logs for counters.  
   • Forgetting about clock skew in distributed increments.

**5. Sanity‑check & communicate**  
   • Summarize the trade‑offs: “We choose eventual consistency for writes to meet 10k ops/sec, with read quorum to keep latency <50 ms.”  
   • Highlight how each NFR is addressed: scalability via sharding, availability via replication, fault tolerance via automatic failover.  
   • Invite questions on any assumption or trade‑off you made.

By following this structured approach, you can confidently explain the design of a distributed counter system that meets non‑functional requirements.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
