---
qid: ing_a79a9c235f__star__local
question: How does a knowledge graph help an AI agent?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 299
total_tokens: 534
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:07:52-05:00'
sources: []
---

**Situation**  
In my last role I was building a recommendation engine for a media streaming platform that had over 10 million users and 500,000 titles. The existing model only used collaborative filtering, which struggled with cold‑start content and user intent shifts.

**Task**  
I needed to improve relevance scores for newly added titles and for niche genres while keeping latency under 50 ms per request.

**Action**  
I introduced a knowledge graph that linked entities—actors, directors, genres, production studios—and enriched it with metadata (release dates, awards, audience sentiment). Using Neo4j, I created property graphs where each node carried weighted attributes and relationships had cardinality scores. The AI agent’s inference engine queried this graph via Cypher to compute semantic similarity vectors in real time. I integrated the graph into our recommendation pipeline by augmenting user embeddings with neighbor‑aggregated features (GraphSAGE) and pruning low‑confidence edges to maintain latency.

**Result**  
The hybrid model boosted click‑through rate on new titles by 27 % and reduced cold‑start failure cases by 65 %. Latency stayed below 45 ms. I learned that a well‑structured knowledge graph not only supplies rich semantic context but also serves as an efficient, low‑overhead feature source for downstream AI models.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
