---
qid: ing_eba24ad9c6__star__local
question: 'Explain: Semantic Caching'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 314
total_tokens: 544
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:19:54-05:00'
sources: []
---

**Situation:** While leading a chatbot project for a retail client, we noticed latency spikes during peak shopping hours. User queries were often semantically similar (e.g., “Where can I find the latest sale on jackets?” and “Show me jacket discounts”), yet each was processed as a separate request.

**Task:** Reduce response time by at least 40 % without sacrificing accuracy, so the bot could handle the high traffic load during flash‑sale events.

**Action:** I introduced semantic caching. First, we built an embedding model (sentence‑transformer) to convert every incoming query into a dense vector. We stored past responses in a nearest‑neighbor index (FAISS). On each new request, we computed its vector, searched for the top‑k closest cached vectors, and if similarity exceeded 0.85, returned the cached answer immediately. For lower similarities, we routed to the NLP pipeline, then updated the cache with the new result. We also implemented a TTL of 12 h and an LRU eviction policy to keep the index size manageable.

**Result:** Latency dropped from 1.2 s to 0.7 s on average—a 42 % improvement—while maintaining 99.8 % precision in answers. The system handled 3× more concurrent users during flash sales, and I learned how embedding similarity thresholds can be tuned to balance freshness against speed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
