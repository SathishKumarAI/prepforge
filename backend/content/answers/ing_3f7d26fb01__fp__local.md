---
qid: ing_3f7d26fb01__fp__local
question: 'Explain: Hello everyone. My name is Deepak and — AWS re:Invent 2021 - Which
  NoSQL database is right for you?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 189
output_tokens: 491
total_tokens: 680
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:19:22-05:00'
sources: []
---

### Choosing a NoSQL store – the “right” one

At its core, a NoSQL system is an **optimization problem**: how to store, retrieve and update data so that the *expected* query cost (latency + throughput) stays below a target while respecting budget and consistency constraints.  
The first step is to formalise the workload:

| Operation | Typical cost in a key‑value store | In a document store | In a graph store |
|-----------|----------------------------------|---------------------|-------------------|
| Single‑record read/write | *O(1)* (hash lookup) | *O(1)* (key lookup + JSON parse) | *O(k)* (k hops to reach neighbours) |

If your application is “lookup‑heavy” and can tolerate eventual consistency, a key‑value store such as **Amazon DynamoDB** solves the problem with minimal index overhead: the key is hashed to a partition; reads are constant time, writes are cheap, and scaling is automatic.  

When you need richer queries (e.g., range scans or ad‑hoc filters on nested fields) but still want flexible schemas, a **document store** like **Amazon DocumentDB / MongoDB** is optimal: it indexes the JSON tree, turning a *range* query into a *B‑tree walk*.  

If relationships dominate—think social graphs or recommendation engines—a **graph database** (e.g., Amazon Neptune) turns traversal into a linear scan over edges, which beats a relational join in many‑hop scenarios.

> **Non‑obvious insight:**  
> **Consistency is the hidden cost driver.**  
> A system that guarantees strong consistency (ACID) typically incurs higher read latency or lower write throughput because it must coordinate replicas. In contrast, “eventually consistent” stores can shard more aggressively and serve millions of requests per second with sub‑10 ms latencies. For many ML pipelines where a slight staleness in feature values is tolerable, choosing an eventually consistent NoSQL store yields far higher scale for the same cost.

So, *match the workload’s access pattern to the index structure, then pick the consistency model that keeps the optimization objective (latency/throughput) within bounds.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
