---
qid: ing_f5a72ddd5e__star__local
question: 'What is a Context Graph? — GitHub - getzep/graphiti: Build Real-Time Knowledge
  Graphs for AI Agents \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 258
output_tokens: 328
total_tokens: 586
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:39:35-05:00'
sources: []
---

**Situation:**  
At my previous startup we were building a recommendation engine that needed to surface relevant products in real time for millions of users. Our initial model was a simple collaborative filtering pipeline, but the accuracy plateaued at 72% precision because it couldn’t capture user intent across multiple touchpoints.

**Task:**  
I was tasked with designing an enriched feature set that could encode contextual relationships—like co‑purchase patterns, temporal browsing sequences, and content similarity—in a scalable way, so the model could better understand “why” users were interested in certain items.

**Action:**  
I introduced a **Context Graph**: a dynamic knowledge graph where nodes represented entities (users, products, categories) and edges captured context signals (e.g., “viewed after”, “frequently bought together”). Using Neo4j with Cypher for real‑time updates, I built a streaming ingestion pipeline on Kafka that pushed new interactions into the graph within seconds. For feature extraction, I leveraged Graph Neural Networks (GNNs) to compute node embeddings via message passing, then concatenated these with traditional tabular features before feeding them into a boosted trees model.

**Result:**  
The enriched model lifted recommendation precision from 72% to 86%, and click‑through rate increased by 18%. The graph also reduced inference latency by 30% thanks to the precomputed embeddings. I learned that coupling real‑time graph updates with GNNs can dramatically improve contextual understanding without sacrificing scalability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
