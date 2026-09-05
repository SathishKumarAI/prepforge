---
qid: ing_72ba7cf7f4__star__local
question: 'Explain: Multi-criteria search — Recommendation engine & system use cases
  with graph databases'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 313
total_tokens: 555
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:17:02-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup, our user engagement was plateauing. The product team wanted a recommendation engine that could surface not just similar products but also cross‑sell and upsell opportunities based on multiple criteria (price sensitivity, credit score, past purchase patterns).  

**Task** – Build a real‑time recommendation system that respected all those constraints while scaling to 10 M users with sub‑second latency.  

**Action** – I chose Neo4j because its graph model naturally represents user–item relationships and attribute edges (e.g., “has credit score”, “prefers price range”). I built a multi‑criteria query engine that first pruned the graph by filtering on price & credit constraints, then applied a weighted scoring function (similarity + business rules) using Cypher. To keep latency low, I pre‑computed a user‑profile subgraph and cached it in Redis; the live queries only touched a 2‑hop slice. I also introduced a periodic batch job that recalculated scores nightly, feeding them back into the cache.  

**Result** – Click‑through rate on recommended items rose from 3.2 % to 6.8 % (double) within three months, and average basket value increased by 12 %. I learned how graph databases can elegantly encode multi‑dimensional constraints, but also that caching and incremental updates are essential for production latency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
