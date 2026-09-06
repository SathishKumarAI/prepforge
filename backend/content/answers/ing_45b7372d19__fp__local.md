---
qid: ing_45b7372d19__fp__local
question: 'Explain: Conclusion — Bonsai Blog | Fully Managed Elasticsearch & OpenSearch
  \u2022 Why Elasticsearch should not be your Primary Data Store'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 186
output_tokens: 424
total_tokens: 610
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:33:38-05:00'
sources: []
---

**Why Elasticsearch Should Not Be Your Primary Data Store**

At its core, a database’s job is *durable persistence*—to guarantee that every write survives crashes and to support ACID‑like guarantees (atomicity, consistency, isolation, durability). Elasticsearch, built on Lucene, excels at *search*—fast inverted‑index queries, distributed sharding, and near real‑time analytics. However, it trades several foundational properties for this speed:

| Property | RDBMS / NoSQL | Elasticsearch |
|----------|---------------|--------------|
| **Write durability** | Replicated logs + WAL (write‑ahead log) | Replication only on a *snapshot* of the index; no true transaction log |
| **Schema enforcement** | Strict types, constraints | Dynamic mapping; schema drift leads to corrupt data |
| **Consistency model** | Strong or configurable | Eventually consistent by default; read‑your‑writes lag can be minutes |

The consequence is that an ES cluster can lose recent writes if a node crashes before the index segment is flushed and replicated. Moreover, its “schema on write” is weak—updating a field type requires reindexing, not simple ALTER TABLE.

**Non‑obvious insight:**  
Elasticsearch’s *inverted index* is inherently read‑oriented: it stores every term in memory to answer queries instantly. This design means that each document becomes a *write‑heavy* operation (full re‑index on update). In contrast, traditional stores keep a single source of truth; updates modify a row or key, and the engine handles replication at a lower level. Thus, while ES delivers lightning‑fast search, it does so by sacrificing the very durability guarantees that make a primary store reliable.

In short, use Elasticsearch as an *indexing layer* atop a durable base (PostgreSQL, DynamoDB, etc.), not as the sole repository of your data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
