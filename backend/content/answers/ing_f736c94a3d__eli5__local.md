---
qid: ing_f736c94a3d__eli5__local
question: 'Explain: Explain how HNSW works, and what the M and ef parameters control.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 349
total_tokens: 514
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:06:22-05:00'
sources: []
---

Imagine a library where every book is a point in space and each shelf represents a “layer.” The topmost shelves hold only the most popular books (a few of them), while lower shelves are full of every title. When you want to find a book similar to one you already know, you start on the high shelf—quickly moving across a few big jumps—and then gradually descend to deeper shelves, making finer and finer hops until you land near your target.

**How HNSW works**

- **Layers**: Each layer is a graph of points; higher layers are sparser.  
- **Search**: You begin at the top layer, walk along edges that bring you closer to the query, then drop down one level at a time until you reach the bottom where every point is reachable.

**Parameters**

- **M (maximum connections)**: Think of it as how many “neighbors” each book can list on its shelf. A larger M lets each node connect to more others, giving smoother navigation but costing memory and build time.
- **ef (size of search frontier)**: During a query you keep a pool of the best candidates seen so far. `ef` is the maximum size of that pool. Bigger ef means the search explores more possibilities, improving accuracy at the cost of speed.

So, M controls the density of each graph layer; ef controls how thoroughly you explore when searching. Both are tunable trade‑offs between memory/latency and recall quality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
