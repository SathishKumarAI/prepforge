---
qid: ing_936defd7da__eli5__local
question: Compare HNSW, IVF, and product quantization - what are the recall/latency/memory
  tradeoffs?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 361
total_tokens: 532
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:31:25-05:00'
sources: []
---

Think of a huge library (your database) where you want to find books that match a reader’s brief description (a query vector).  

* **HNSW (Hierarchical Navigable Small World)** is like a smart librarian who builds a multi‑layer map: the top layer contains only a few “landmark” books, and each lower layer adds more detail. The librarian can jump quickly from a landmark to a nearby section and then zoom in. It gives **very high recall** (almost every relevant book) with low latency, but it uses a bit of extra memory for the layers.

* **IVF (Inverted File Index)** is like dividing the library into *shards* (cells). Each shard has an index that tells you which books belong there. You first find the nearest shard(s) to your query and search only inside them. IVF needs **less memory** than HNSW, but if you limit the number of shards searched, recall drops; searching more shards improves recall at the cost of higher latency.

* **Product Quantization (PQ)** is like replacing each book with a compressed “summary” made from several small tables. You compare only these summaries, so the search is very fast and memory‑efficient. However, because the summary is an approximation, you may miss some relevant books—recall is lower unless you use more tables or finer granularity, which again increases latency.

**Bottom line:** HNSW → best recall & speed but higher memory; IVF → good balance of speed/memory, recall depends on how many shards you probe; PQ → fastest and smallest, but recall suffers unless you sacrifice speed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
