---
qid: ing_391f1bcd63__faang__local
question: 'Explain: Scaling & ops — Semantic Search'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 479
total_tokens: 709
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:57:22-05:00'
sources: []
---

**Scaling & Ops – Semantic Search**

| Step | What to do |
|------|------------|
| **Clarify** | *Goal:* build a semantic search service that scales from a few hundred queries per second to millions while keeping latency < 200 ms.  Assume we have pre‑computed embeddings (e.g., Sentence‑BERT) stored in an ANN index, and the query load is bursty.  Confirm data freshness window, SLAs for uptime, and compliance needs. |
| **Approach** | 1️⃣ Partition the index horizontally (sharding by vector ID or hash). <br>2️⃣ Use a distributed ANN engine (FAISS on GPU clusters or Milvus) with replication for fault tolerance. <br>3️⃣ Cache popular query results in an LRU cache (Redis) to hit cold‑start latency. <br>4️⃣ Auto‑scale workers via Kubernetes HPA based on CPU/latency metrics. |
| **Depth** | *Complexity:* ANN search ≈ O(log N) per shard; total latency = max(shard latency).  Replication adds ~2× read cost but improves availability.  Cache hit ratio >70 % reduces GPU load by 3–4×.  Use vector quantization to shrink index size, trading off <1 % recall loss for 30 % memory reduction. |
| **Edge Cases** | • Hot shards causing uneven load → implement consistent hashing with virtual nodes.<br>• Embedding drift over time → schedule periodic re‑embedding and incremental index updates.<br>• Failure of a node → ensure graceful fallback to replicas without stale data. |
| **Optimize & Communicate** | 1️⃣ Profile GPU usage; move the most frequent query vectors to shared memory. <br>2️⃣ Batch incoming queries (e.g., 32 at once) to amortize kernel launch overhead. <br>3️⃣ Explain trade‑offs: higher recall vs. latency, cache size vs. cost.  Convey that our ops pipeline guarantees 99.9 % uptime and <200 ms latency under peak load. |

This plan balances scalability, operational reliability, and user experience—key metrics for any FAANG‑level semantic search service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
