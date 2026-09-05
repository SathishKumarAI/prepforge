---
qid: ing_922c3a303c__eli5__local
question: 'Explain: HNSW (Hierarchical Navigable Small World)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 200
total_tokens: 360
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:29:32-05:00'
sources: []
---

Imagine you’re in a huge library where every book is connected to just a few others by “shortcuts.” A *Hierarchical Navigable Small‑World* (HNSW) graph is like that library but for data points: each point links to a handful of neighbors, and those shortcuts are arranged in layers. The top layer has only a few long‑range connections—think of them as express elevators that jump between distant floors. Below, more detailed local roads appear, gradually filling the space with tighter, shorter routes.

When you look for something close to a new point, you start at the top elevator, hop down through layers, and at each level follow only the few best shortcuts toward your target. Because every layer narrows the search quickly, HNSW finds nearest neighbors very fast while keeping memory usage low—just like using express elevators before walking the right aisle in the library.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
