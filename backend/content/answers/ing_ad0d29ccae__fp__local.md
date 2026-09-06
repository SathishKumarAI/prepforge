---
qid: ing_ad0d29ccae__fp__local
question: 'Explain: Graphiti vs. GraphRAG — GitHub - getzep/graphiti: Build Real-Time
  Knowledge Graphs for AI Agents \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 580
total_tokens: 775
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:12:43-05:00'
sources: []
---

**Graphiti vs. GraphRAG – the architecture that turns static data into a live, query‑able knowledge graph**

At its core both projects tackle the same problem: *how to let an LLM answer questions about a domain it has never seen before.*  
The fundamental requirement is **fast, deterministic retrieval of relevant facts** so that the model can condition on them instead of hallucinating.  

| Feature | Graphiti | GraphRAG |
|---------|----------|----------|
| **Data ingestion** | Incremental streaming from any source (SQL, CSV, REST) → a Neo4j‑style graph; updates are applied as events. | Bulk ETL: ingest once, build a static knowledge graph in memory or on disk. |
| **Query engine** | Cypher‑like graph traversal exposed via an HTTP API; can be called at runtime by the LLM’s prompt. | Retrieval is done offline: pre‑compute embeddings for subgraphs and serve nearest‑neighbor lookups. |
| **Latency profile** | Near‑real‑time (≤ 50 ms) because it queries a running graph database; suitable for conversational agents that need up‑to‑date facts. | Batch‑oriented; best for cold‑start scenarios where the knowledge base is stable and can be pre‑indexed. |
| **Scalability** | Horizontal scaling by sharding the graph or using Neo4j Enterprise; handles millions of nodes with sub‑second traversals. | Scales by increasing embedding index size; retrieval cost grows logarithmically but memory consumption can spike. |

### Why Graphiti works “the way it does”

1. **Graph theory guarantees locality** – a traversal from a node to its neighbors is O(1) for most graph DBs, so the model can request *exact* evidence rather than a noisy embedding match.  
2. **Event‑driven updates preserve consistency** – every change becomes an immutable edge; no stale data leaks into responses.  
3. **Cypher’s declarative syntax maps cleanly to prompt templates**, letting developers write “SELECT facts WHERE entity = X” inside the LLM prompt without custom parsers.

### Non‑obvious insight

Most people treat knowledge graphs as static backbones, but **the real power lies in their *temporal expressiveness***. Graphiti’s event log can be queried for *when* a fact was added or last updated, enabling LLMs to answer “Is this still true?” questions—something traditional embeddings cannot capture without re‑training.

In short, use Graphiti when you need a live, up‑to‑date graph that an LLM can interrogate on the fly; choose GraphRAG for heavy‑lifting offline retrieval in domains where data is relatively static.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
