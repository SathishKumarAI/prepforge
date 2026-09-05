---
qid: ing_113b64c56c__eli5__local
question: 'Explain: Q: Explain how HNSW works and when you would not use it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 237
total_tokens: 402
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:03:10-05:00'
sources: []
---

**HNSW (Hierarchical Navigable Small‑World)** is like a library where books are organized in several “floors.”  
On the top floor, only a handful of popular books are kept; you can jump from one to another quickly. As you move down, more books appear and connections become denser, so you can find any book by sliding through a few short steps instead of scanning everything.

When searching for a similar item, HNSW starts at the top floor (coarse view), then descends, each time refining its guess with tighter links. Because it uses many shortcuts, the search is fast and accurate even in very high dimensions.

You would avoid HNSW if:
- Your data set is tiny (the overhead of building layers outweighs the benefit).  
- You need deterministic exact results; HNSW gives *approximate* nearest neighbors, not guaranteed exact ones.  
- Memory is extremely limited; each layer stores extra pointers that can add up.  

In those cases simpler structures like a flat list or a tree might be better.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
