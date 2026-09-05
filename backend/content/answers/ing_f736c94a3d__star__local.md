---
qid: ing_f736c94a3d__star__local
question: 'Explain: Explain how HNSW works, and what the M and ef parameters control.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 373
total_tokens: 616
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:43:02-05:00'
sources: []
---

**Situation** – While leading a data‑science sprint for our recommendation engine, the search latency was creeping past 120 ms per query because we were still using plain Euclidean KNN on millions of vectors.

**Task** – I had to overhaul the nearest‑neighbour component with a scalable graph method that could keep sub‑10 ms latency while maintaining >95% recall for top‑50 results.

**Action** – I introduced Hierarchical Navigable Small World (HNSW) graphs. First, I built multiple layers where each node connects to a small set of neighbours; higher layers are sparser, acting as a fast “entrance” to the graph. For traversal, I used a greedy search that starts at a random entry point in the top layer and descends through layers, expanding only promising nodes. The two knobs I tuned were **M** (the maximum number of bi‑directional links per node) and **efConstruction/efSearch** (the size of the dynamic candidate list during construction/search). Increasing M from 10 to 32 deepened connectivity, boosting recall by ~3% at a 30 % cost in memory. Setting efSearch to 200 allowed us to explore more candidates without inflating latency beyond 8 ms.

**Result** – After deploying HNSW with M=32 and efSearch=200, we slashed query time from 120 ms to 7 ms while achieving 97% recall on our validation set. I learned that careful tuning of M balances graph density against memory usage, and that efSearch controls the trade‑off between search quality and speed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
