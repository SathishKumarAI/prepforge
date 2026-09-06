---
qid: ing_a3cf06ea03__think__local
question: 'Explain: Weak consistency — GitHub - donnemartin/system-design-primer:
  Learn how to design large-scale systems. Prep for the system design interview.  Includes
  Anki flashcards. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 225
output_tokens: 596
total_tokens: 821
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T11:54:30-05:00'
sources: []
---

**Weak Consistency (Eventual Consistency)**  
In a distributed system, *weak consistency*—often called **eventual consistency**—is the guarantee that if no new updates are made to a data item, all replicas will eventually converge to the same value. Unlike strong consistency, there is no requirement that reads immediately after a write return the latest value; clients may see stale data for an indeterminate period.

Key points:

| Feature | Weak (Eventual) Consistency | Strong Consistency |
|---------|-----------------------------|--------------------|
| **Read latency** | Low – can read from any replica. | Higher – usually requires coordination with a leader or quorum. |
| **Write latency** | Low – update is accepted locally and propagated asynchronously. | Higher – must be replicated synchronously to all replicas before acknowledging success. |
| **Fault tolerance** | High – system continues to serve requests even if some nodes are down. | Lower – failures can block writes until the majority of replicas recover. |
| **Use cases** | Social media feeds, caching layers, configuration data that tolerates brief inconsistencies. | Banking systems, inventory management, any scenario where stale reads could cause errors. |

**How it works in practice**

1. **Write Phase** – A client writes to a local node (often called the *primary* or *leader*). The write is acknowledged immediately.
2. **Propagation** – The primary asynchronously pushes the update to secondary replicas via background tasks, gossip protocols, or log replication.
3. **Read Phase** – Subsequent reads may hit any replica. If they read from a stale replica, they’ll see an older value until the update propagates.

Because updates are eventually propagated, the system *converges*—all nodes will reflect the latest write after some finite but unspecified time. This model is a core part of many NoSQL databases (e.g., DynamoDB with eventual consistency mode, Cassandra’s default consistency level) and large‑scale caching systems (Redis Cluster in read‑your‑own‑writes mode).

**Trade‑offs**

- *Pros*: Low latency, high availability, simple write path.
- *Cons*: Clients must handle stale data; may need conflict resolution strategies (last‑write‑wins, vector clocks, CRDTs) if concurrent updates occur.

Understanding weak consistency is essential for system‑design interviews because it helps interviewees explain why a design trades correctness guarantees for performance and availability, and how to mitigate the downsides with application logic or additional consistency controls.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
