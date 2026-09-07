---
qid: ing_4b06a77eba__faang__local
question: 'Explain: Cassandra vs. MongoDB: ACID Transactions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 652
total_tokens: 886
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:39:04-05:00'
sources: []
---

**Clarify**  
We’re comparing the transactional guarantees of **Cassandra** (wide‑column store) and **MongoDB** (document store). Key points to confirm:  
- Are we only interested in *single‑node* vs *multi‑node* semantics?  
- Do we need full ACID (Atomicity, Consistency, Isolation, Durability) or just a subset?  
- What workload patterns (writes heavy, read heavy, update frequency) will influence the choice?

**Approach**  
1. Define each database’s default consistency model.  
2. Map that to ACID properties.  
3. Highlight any extensions (e.g., MongoDB transactions, Cassandra lightweight transactions).  
4. Summarize trade‑offs.

**Depth**  

| Property | Cassandra (default) | Cassandra (LWT) | MongoDB (single‑doc) | MongoDB (multi‑doc txn) |
|----------|---------------------|-----------------|----------------------|------------------------|
| **Atomicity** | Single partition write is atomic; cross‑partition updates are not. | Yes, via Paxos on a per‑row basis. | Guaranteed for single document writes/updates. | Guaranteed across multiple documents/collections (since 4.0). |
| **Consistency** | Tunable: *eventual* by default; can be *strong* with `QUORUM` reads/writes but still *tunable*. | Strong per‑row with LWT, but still eventual for other rows. | Consistent at the collection level; uses read/write concerns to tune. | Provides serializable isolation across the transaction scope. |
| **Isolation** | No multi‑row isolation; writes can interleave (write‑skew). | Provides *serializable* isolation per LWT operation. | Single‑document operations are isolated; concurrent updates merge via last‑writer wins. | Full serializable isolation for all ops in txn. |
| **Durability** | Write is persisted after `N` replicas acknowledge (`W`). | Same, but with additional Paxos commit log. | Acknowledged when data reaches majority of replica set or as per write concern. | Same as single‑doc; durability guaranteed once transaction commits. |

**Edge Cases**  
- **Cassandra LWT**: High latency (Paxos round‑trips) and limited to 1‑row changes—use only for counters, unique constraints.  
- **MongoDB multi‑doc txn**: Requires replica set or sharded cluster; overhead grows with document count and size—avoid for high‑throughput workloads.

**Optimize & Communicate**  
Explain that Cassandra excels in write‑heavy, horizontally scalable scenarios where *eventual* consistency is acceptable; MongoDB shines when you need flexible schema, ad‑hoc queries, and robust ACID guarantees on a per‑document or small set of documents. Emphasize the trade‑off between performance (Cassandra’s tunable consistency) and strict transactional semantics (MongoDB’s serializable transactions). This structured comparison showcases deep understanding while keeping the explanation concise.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
