---
qid: ing_ca45ce99b3__fp__local
question: 'Explain: Database Configuration — GitHub - getzep/graphiti: Build Real-Time
  Knowledge Graphs for AI Agents \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 418
total_tokens: 608
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:10:41-05:00'
sources: []
---

**Why the “Database Configuration” matters in *getzep/graphiti***  

Graphiti turns a stream of events into a live knowledge graph that an AI agent can query. The core problem is *consistent, low‑latency access to evolving triples* while preserving ACID guarantees across a distributed system.  
1. **Schema‑free storage** – A traditional relational model would force you to predefine every node type and relationship. In a real‑time graph, new entity kinds appear on the fly (e.g., a newly discovered sensor). Graphiti stores each triple as an edge in a *property graph*; the key/value pairs on vertices/edges are optional, so the data model is inherently elastic.  
2. **Indexing for traversal** – The configuration activates a two‑level index: a hash map from node ID to adjacency lists (fast neighbor lookup) and a Bloom filter per relationship type (pruning during pattern matching). This guarantees that even with millions of edges, a breadth‑first search over *k* hops costs O(|V| + |E|) in the worst case but is typically sub‑millisecond.  
3. **Event sourcing + snapshots** – Every change is appended to an immutable log; the config specifies checkpoint intervals (e.g., every 10 000 events). This balances write throughput with read speed: queries hit the latest snapshot plus a small tail of uncommitted events, avoiding full replay while keeping storage bounded.

**Non‑obvious insight:**  
The Bloom filter is *not* just a performance trick; it also enforces **probabilistic consistency**. By tuning its false‑positive rate, you can guarantee that any query missing an edge will never be falsely reported as present, preserving the integrity of inference rules even under high write churn. This subtle probabilistic safety net is often overlooked when people focus solely on latency or throughput.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
