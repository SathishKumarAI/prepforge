---
qid: ing_e2575a20cd__fp__local
question: What are the methods of database sharding?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 426
total_tokens: 594
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:01:03-05:00'
sources: []
---

## Sharding a Database from First Principles  

At its core, sharding solves **scalability vs consistency**: we want many nodes to handle more data and queries, but still present the illusion of a single logical table.  
The fundamental constraint is that each row must reside on exactly one shard so that reads are O(1) and writes do not require coordination across all machines.  

| Method | Principle | Key Insight |
|--------|-----------|-------------|
| **Horizontal (Range) Sharding** | *Deterministic partitioning by key value* – a monotonic hash or range cut guarantees each row’s shard is known without lookup. | The non‑obvious fact: if you use a **sorted** range (e.g., timestamp), you can answer “last N rows” locally, but the trade‑off is hot‑spot risk when many inserts target one boundary. |
| **Hash Sharding** | *Uniform hashing of partition key* distributes load evenly and avoids hotspots. | Insight: a good hash function turns an adversarial access pattern into random walk, turning worst‑case O(n) to expected O(1). |
| **Directory‑Based (Lookup) Sharding** | Maintains a lookup table mapping keys → shard. Allows arbitrary, non‑deterministic placement. | Non‑obvious: the directory itself can become a bottleneck; replicating it or sharding it is essential for true horizontal scaling. |
| **Composite (Hybrid) Sharding** | Combines hash and range (e.g., hash on user ID, then range on timestamp). | Insight: you trade off locality vs uniformity—range keeps related rows together while hash balances load. |

Each method is a manifestation of the same optimization principle: **minimize cross‑node coordination while ensuring deterministic placement**. The subtlety lies in choosing the right mix for your workload’s read/write pattern and hot‑spot characteristics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
