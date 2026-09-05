---
qid: ing_39b26aafe2__star__local
question: Glean's ranking leans on a knowledge graph of people, content and activity.
  How would you build that graph, and how does it improve retrieval beyond embedding
  similarity?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 259
output_tokens: 417
total_tokens: 676
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:24:13-05:00'
sources: []
---

**Situation** – In my last role at a search‑as‑a‑service startup, we noticed that user queries for internal documentation were returning irrelevant hits because the system only matched embeddings of text blobs. The engagement metric (click‑through rate) on knowledge articles dropped to 12 % after an update that increased content volume by 35 %.  

**Task** – I was tasked with designing a scalable knowledge graph that could capture relationships between people, documents, and actions, and integrate it into the ranking pipeline so we could surface more relevant results without sacrificing latency.  

**Action** – I chose Neo4j for its ACID guarantees and built an ETL pipeline using Apache NiFi to ingest user activity logs, document metadata, and author profiles. The graph schema had nodes for `Person`, `Document`, `Tag`, and edges like `CREATED`, `REFERENCES`, `LIKED`. We enriched the graph with semantic embeddings from a transformer model as edge weights, but also calculated centrality scores (PageRank) to capture influence. During query time, we ran Cypher queries that returned candidate documents within two hops of the querying user’s profile and boosted them using a combined score: embedding similarity × (1 + 0.3 × centrality).  

**Result** – The new ranking lifted click‑through rates from 12 % to 27 % in three weeks, and average session depth increased by 18 %. I learned that embeddings alone miss contextual signals like “who cited this” or “who liked it,” and a knowledge graph can surface those signals efficiently, giving the system a richer notion of relevance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
