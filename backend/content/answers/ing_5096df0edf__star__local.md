---
qid: ing_5096df0edf__star__local
question: 'Explain: Feed Reads — Design Instagram | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 420
total_tokens: 661
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:09:27-05:00'
sources: []
---

**Situation**  
At my last role I joined the product team tasked with revamping the “Explore” feed for a media app that served over 50 million daily active users. The existing architecture was monolithic and could not scale to serve personalized content within 300 ms.

**Task**  
I needed to design a high‑throughput, low‑latency feed read system that could deliver 10⁶ requests per second while keeping the average response under 250 ms, all without breaking user privacy or violating GDPR.

**Action**  
1. **Data partitioning:** I split the user graph into shards by geographic region and hashed user IDs to balance load across 32 micro‑services.  
2. **Caching strategy:** Implemented a two‑tier cache—an in‑memory LRU per shard for hot posts, backed by Redis clusters that stored precomputed “candidate lists” keyed by (user_id, time_window).  
3. **Feature scoring pipeline:** Built a real‑time scoring engine using Apache Flink to merge user interactions and post metadata; scores were persisted in a low‑latency key‑value store (Cassandra) for quick lookup during reads.  
4. **Rate limiting & back‑pressure:** Added token‑bucket throttling per shard to protect downstream services, and exposed a graceful degradation path that served a static “top posts” list when cache misses exceeded 15 %.  

**Result**  
The new feed read service handled 1.2 M RPS with an average latency of 180 ms and a 99th percentile under 300 ms. User engagement on the Explore tab rose by 27 % within two weeks, and we reduced operational cost by 35 % through efficient cache usage. I learned that careful partitioning combined with real‑time scoring can turn a bottleneck into a scalable, high‑performance feed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
