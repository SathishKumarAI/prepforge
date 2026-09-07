---
qid: ing_2dbb0cc437__faang__local
question: 'Explain: Facebook Newsfeed — System Design Interview Cheat Sheet - System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 520
total_tokens: 757
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:29:42-05:00'
sources: []
---

**1️⃣ Clarify**  
The interview asks for a high‑level design of the *Facebook NewsFeed* service—i.e., how Facebook fetches, ranks, caches, and serves personalized posts to millions of users every second. I’d confirm:  
- Expected throughput (≈10⁶ req/s).  
- Data model size (posts, likes, comments, user edges).  
- Latency target (<200 ms per request).  
- Freshness requirement for real‑time updates.

**2️⃣ Approach**  
1. *Data ingestion* → stream posts into a write‑optimized store.  
2. *Personalization engine* → compute relevance scores offline (batch) and refresh them in a fast key‑value cache.  
3. *Serving layer* → shard by user ID, pull cached top‑k posts per feed, merge with real‑time signals (likes, comments).  
4. *Caching & CDN* → edge caches for static media; distributed memcached/Redis for post payloads.  
5. *Observability* → metrics, tracing, and A/B testing harness.

**3️⃣ Depth**  
- **Storage:** Use a columnar DB (Cassandra/HBase) for posts + an append‑only log (Kafka).  
- **Relevance scoring:** MapReduce jobs compute weighted scores; results stored in Redis.  
- **Serving complexity:** O(log N) per user to retrieve top‑k from a sorted set; overall latency dominated by cache hits (~90%).  
- **Scalability trade‑off:** Batch scoring reduces real‑time load but introduces staleness; hybrid online/offline pipeline mitigates this.

**4️⃣ Edge Cases**  
- *Cold start* users → default to popular posts.  
- *Post churn* (deletion) → tombstone markers propagated through stream.  
- *Hot topics* → dynamic throttling to prevent cache thrashing.  

**5️⃣ Optimize & Communicate**  
Propose sharding by hash(user_id) + consistent hashing for resilience, use Bloom filters to skip empty shards, and implement back‑pressure on ingestion when downstream lag increases. Explain each trade‑off clearly: batch scoring ≈ lower latency vs. stale content; caching ≈ higher memory cost but near‑instant reads. Conclude with a diagram sketch (optional) and mention potential future improvements like reinforcement learning for ranking.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
