---
qid: ing_5709b20e61__faang__local
question: 'Explain: Latency Optimization — Reranking Strategies'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 457
total_tokens: 689
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:06:23-05:00'
sources: []
---

## Clarify  
We’re asked how to reduce latency when a system reranks items (e.g., search results, recommendations). Key assumptions:  
* A first‑pass model produces a large candidate set quickly.  
* Reranking is more expensive but yields higher quality.  
* Latency budget is tight; we can’t wait for the full rerank to finish before responding.

## Approach  
1. **Early exit** – stop reranking once confidence that the top‑k are already correct.  
2. **Partial evaluation** – compute rerank scores on a small, representative subset of features.  
3. **Parallelism & batching** – process multiple candidates concurrently and batch model inference.  
4. **Cache reuse** – store expensive feature computations or intermediate embeddings for repeated queries.

## Depth  
* **Early exit**: maintain a running max‑score; if the difference between top candidate and next falls below threshold, return current top‑k. Complexity O(n) but stops early.  
* **Partial evaluation**: use a lightweight model (e.g., linear or shallow NN) to score all candidates, then run full rerank only on top‑m from that pass. Overall cost ≈ O(m + n).  
* **Parallelism**: leverage GPU/TPU kernels; batch size tuned to latency vs throughput trade‑off.  
* **Caching**: use LRU or LFU for embeddings; cache hit reduces feature extraction time.

## Edge Cases  
* Skewed queries where early exit threshold is never met → fallback to full rerank.  
* Cache miss on cold start → initial latency spike.  
* Highly dynamic content may invalidate cached features quickly.

## Optimize & Communicate  
I’d present the trade‑off curve (latency vs accuracy) and show how each technique shifts it. For example, adding early exit cuts median latency by 30 % with <1 % loss in NDCG. I’ll conclude that a hybrid of partial evaluation + early exit, backed by smart caching and batching, offers the best balance for production systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
