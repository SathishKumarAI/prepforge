---
qid: ing_8c9e2826cb__star__local
question: Design the caching strategy for an LLM-backed feature. What can you cache
  and what can't you?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 409
total_tokens: 654
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:14:02-05:00'
sources: []
---

**Situation** – In my last role I led the rollout of a chatbot that used an LLM to generate product recommendations for e‑commerce customers. We had a 5 % churn target and needed to keep response times under 200 ms at peak traffic.

**Task** – Design a caching strategy that reduced API calls, kept latency low, and preserved user privacy while ensuring fresh recommendations when user preferences changed.

**Action** – I broke the workflow into three layers:  
1. **Static prompt templates** – stored in Redis with TTL of 24 h; they never change, so we avoided re‑generating them.  
2. **Embeddings for product catalog items** – pre‑computed and cached in an in‑memory vector store (FAISS). We refreshed them nightly to capture new SKUs but didn’t cache per‑user embeddings because user context is volatile.  
3. **LLM responses** – we cached the final recommendation JSON keyed by a hash of `{user_id, session_id, last_interaction_timestamp}` with a 10 min TTL. For cold starts or when the user updated their wishlist, we bypassed the cache and fetched fresh results.

I also built an automated monitor that invalidated caches when the product catalog changed or when a user’s purchase history exceeded 30 days of inactivity.

**Result** – API usage dropped by 65 %, average latency fell to 120 ms, and churn decreased from 7.8 % to 5.3 %. I learned that caching is most effective when you separate immutable data (templates), slowly changing data (embeddings), and highly dynamic user‑specific outputs, each with appropriate TTLs and invalidation triggers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
