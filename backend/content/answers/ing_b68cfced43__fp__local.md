---
qid: ing_b68cfced43__fp__local
question: 'Explain: Quick Start — GitHub - getzep/graphiti: Build Real-Time Knowledge
  Graphs for AI Agents \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 459
total_tokens: 649
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:32:09-05:00'
sources: []
---

**Why a “real‑time knowledge graph” matters in ML**

When an AI agent talks, it implicitly reasons about entities and their relations. The *knowledge graph* is the formal structure that holds these facts: nodes for concepts (people, places, events) and edges for semantic links (“works_at”, “born_in”). In a static setting, we can pre‑compute this graph from a corpus and store it in a database. But modern agents need to **update** their world model on the fly—new data arrives every second, user interactions modify beliefs, and downstream models (e.g., language generators) must see the freshest facts.

**What Graphiti does**

Graphiti is an end‑to‑end pipeline that turns arbitrary streaming data into a continuously evolving knowledge graph:

1. **Ingestion layer**: It wraps any source (Kafka topic, REST API, file system).  
2. **Extraction engine**: Uses NLP pipelines to identify entities and relations, then maps them onto a typed schema.  
3. **Graph storage**: A graph database (Neo4j or JanusGraph) is updated incrementally using batched transaction writes.  
4. **Query API**: Exposes Cypher‑like queries over HTTP/GRPC so downstream agents can retrieve the latest subgraph.

Because every component runs in a streaming fashion, the latency from event to queryable fact is typically < 100 ms—enough for real‑time dialogue systems.

**Non‑obvious insight**

The key trick is *schema‑guided extraction*. Rather than blindly adding every detected entity as a node, Graphiti uses a lightweight ontology that specifies which relations are “safe” to materialize immediately. This reduces graph churn and preserves consistency: if an event mentions “Alice bought a book”, only the `bought` edge is inserted; the `author_of` relation for the book isn’t created until we later ingest its metadata. This lazy‑materialization strategy keeps the graph sparse, improving both storage cost and query speed—something many pipelines overlook in favor of brute‑force densification.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
