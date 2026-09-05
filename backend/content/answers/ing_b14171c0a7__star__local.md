---
qid: ing_b14171c0a7__star__local
question: 'Explain: Scalability — What is Distributed Caching? - by Ashish Pratap
  Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 322
total_tokens: 566
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:26:18-05:00'
sources: []
---

**Situation:**  
During a redesign of our recommendation engine at an e‑commerce startup, we hit a wall: the latency on user profile lookups spiked to 250 ms during peak traffic, hurting conversion rates.

**Task:**  
I was tasked with reducing that lookup time to under 50 ms while keeping the system cost‑effective and ensuring data consistency across our microservices.

**Action:**  
I introduced a distributed caching layer using Redis Cluster. First, I profiled request patterns to identify hot keys (user ID → profile JSON). Then I set up sharding with hash tags so related keys stayed on the same node, reducing cross‑node lookups. To handle cache invalidation, I implemented publish/subscribe events: whenever a user updated their profile, an event was sent to all nodes to purge or refresh that key. I also tuned eviction policies (LRU) and configured read replicas for high availability. Finally, I added health checks and auto‑scaling rules so the cluster could grow during traffic spikes.

**Result:**  
Cache hit rate jumped from 30 % to 92 %, cutting lookup latency from 250 ms to 35 ms under load. Page load times improved by 15 %, translating into a 3 % lift in conversion rates. I learned that careful key design, sharding strategy, and event‑driven invalidation are the pillars of scalable distributed caching.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
