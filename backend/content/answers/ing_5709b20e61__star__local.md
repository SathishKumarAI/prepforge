---
qid: ing_5709b20e61__star__local
question: 'Explain: Latency Optimization — Reranking Strategies'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 427
total_tokens: 662
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:21:56-05:00'
sources: []
---

**Situation:**  
At my last company we were launching a real‑time recommendation engine for an e‑commerce platform. Users expected results within 150 ms, but our initial ranking pipeline—scoring every candidate with a deep neural net and then sorting—consistently hit 350 ms on peak traffic.

**Task:**  
I had to cut latency by at least 40% without hurting click‑through rate (CTR) or recommendation relevance. The goal was to keep the user experience snappy while maintaining quality.

**Action:**  
1. *Profile and prune:* I instrumented the pipeline with OpenTelemetry, identified that the neural net inference accounted for 70 % of the time, and replaced it with a distilled lightweight model (4‑layer MLP) that ran on the same GPU but cut compute by 3×.  
2. *Reranking strategy:* Instead of full ranking, I introduced a two‑stage approach: a fast “candidate filter” using cosine similarity over item embeddings to shortlist 20 items, then a second‑pass reranker (the distilled model) that scored only those candidates.  
3. *Batching and async inference:* Leveraged TensorRT’s dynamic batching to process multiple requests in one GPU kernel call, reducing per‑request overhead.  
4. *Cache stale scores:* Implemented an LRU cache for the top 1,000 items’ precomputed scores, refreshing every 5 minutes.

**Result:**  
Latency dropped from 350 ms to 110 ms on average (a 68% improvement), while CTR increased by 3.5%. I learned that combining model distillation with a smart two‑stage reranker and batching can deliver both speed and quality, and that profiling is the first step to meaningful optimization.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
