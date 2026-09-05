---
qid: ing_7d0429d037__star__local
question: What caching strategies apply to RAG systems, and what are the invalidation
  traps?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 387
total_tokens: 629
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:43:55-05:00'
sources: []
---

**Situation**  
When I joined a fintech startup, we built a RAG chatbot to answer compliance queries using a private knowledge base of 12 M legal documents. The live API latency hit 1.8 s per request and the internal SLA demanded <700 ms for 95% of calls.

**Task**  
I had to cut response time by 60% while keeping the retrieved evidence fresh, and avoid stale answers that could lead to regulatory risk.

**Action**  
I introduced a two‑tier cache: an LRU in‑memory store (Caffeine) for the top 10 k embeddings per day, and a Redis cluster with TTLs of 12 h for longer‑term hits. To guard against invalidation traps I added a version tag to each document; every time content changed the tag bumped via Kafka events, causing cache eviction on key mismatch. For the retrieval step I precomputed a vector index in FAISS, but also kept a secondary “hot‑list” of vectors that had been queried >100× in the past 24 h and refreshed them nightly. Finally, I instrumented Prometheus alerts for hit ratios dropping below 70% to trigger automatic re‑indexing.

**Result**  
Response latency dropped from 1.8 s to 0.5 s (72% reduction). Cache hit ratio improved from 42% to 78%, and the system never served a document older than its last update, eliminating potential compliance breaches. I learned that coupling versioned keys with tiered caching and monitoring is key to safe, fast RAG deployments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
