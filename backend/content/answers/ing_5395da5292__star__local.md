---
qid: ing_5395da5292__star__local
question: 'Explain: When GraphRAG Actually Wins (and When It Doesn''t)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 369
total_tokens: 608
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:15:20-05:00'
sources: []
---

**Situation:**  
In my last role at a fintech startup, we had to build an AI‑driven compliance assistant that could answer auditors’ questions using our massive transactional graph database (over 3 million nodes). The legacy system returned noisy results because it relied on flat embeddings and struggled with entity disambiguation.

**Task:**  
I was tasked with reducing the answer latency below 300 ms while increasing precision to at least 85 % for domain‑specific queries, all without doubling our compute budget.

**Action:**  
I prototyped a GraphRAG pipeline: first, a lightweight graph traversal (using Neo4j’s Cypher) extracted a subgraph around the query entity; then I fed that subgraph into a fine‑tuned GPT‑4o model via prompt engineering that highlighted key relationships. To keep costs low, I cached frequently accessed subgraphs and used Bloom filters to prune irrelevant nodes before traversal. During load testing, I observed that GraphRAG’s performance degraded when the query required cross‑domain hops beyond two edges—our index didn’t support deep joins efficiently.

**Result:**  
For most compliance questions (≈90 % of our traffic), we achieved 87 % precision and 250 ms latency, cutting the previous system’s time by 60 %. However, for rare “deep‑audit” queries involving more than two hops, accuracy dropped to 68 %, confirming that GraphRAG shines on local, richly connected subgraphs but struggles with sparse, long‑range relationships unless additional indexing or hierarchical caching is added. This experience taught me to match the graph depth to the underlying index strategy before committing to GraphRAG.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
