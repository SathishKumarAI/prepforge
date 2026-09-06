---
qid: ing_73ee12344d__fp__local
question: 'Explain: Native reranking in Atlas — MongoDB Search: Scalable Full-Text
  Search | MongoDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 535
total_tokens: 716
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:11:28-05:00'
sources: []
---

### Why *native rerank* is needed

In a distributed search system the first‑stage query (the “lookup”) can only touch an index that lives on every shard. That index must be small enough to fit in memory and fast enough for a global filter, so it typically stores **cheap features**: term frequency, inverted‑list postings, maybe some simple BM25 scores.  
When the result set is returned to the client we would like *more* accurate relevance, but re‑scoring every document with a heavy model (neural embeddings, field‑specific weights, user signals) on all shards would explode I/O and latency.

The solution is **native rerank**: keep a lightweight “candidate” set from each shard, transfer only the top‑k per shard to the coordinator, then run an *exact* scoring function on that reduced pool. The reduction factor is usually 10–100×, so the heavy computation stays local and the network traffic stays bounded.

### How it works

1. **Lookup phase** – shards score documents with a simple BM25‑style term‑matching model.  
2. **Candidate collection** – each shard returns its best *N* results (default 10–20).  
3. **Rerank phase** – the coordinator merges these lists, then runs an arbitrary scoring function (e.g., a neural network that consumes embeddings, field weights, or user context) on every candidate. The final sorted list is sent to the client.

The algorithm is essentially a *two‑stage optimization*:  
- Stage 1 guarantees **scalability** by keeping per‑shard work bounded.  
- Stage 2 guarantees **accuracy** because it evaluates an arbitrary function on a much smaller set.

### A non‑obvious insight

Because each shard only sends its top‑N, the coordinator never needs to know *exactly* how many candidates a shard has produced. The merge step can treat each shard’s list as a stream and perform a multi‑way priority queue merge in \(O(M \log S)\) time (where \(M\) is total candidates, \(S\) shards). This means the coordinator’s memory footprint is independent of the total document count; it only depends on \(N\) and \(S\). Consequently, native rerank scales to billions of documents while keeping latency low—a property that naive “rerank all” or “client‑side rerank” approaches cannot match.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
