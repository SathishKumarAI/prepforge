---
qid: ing_976b5d8681__faang__local
question: 'Explain: Use case: User views the user timeline — system-design-primer/solutions/system_design/twitter/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 268
output_tokens: 516
total_tokens: 784
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:37:05-05:00'
sources: []
---

**Clarify**  
The problem: design the “timeline” service for a Twitter‑style platform. We must fetch and order posts (tweets) for a user’s feed when they view it. Assumptions to confirm:  
- What is the expected read latency?  
- How many followers per user, how often do tweets appear?  
- Is real‑time freshness required or can we tolerate a few seconds of lag?  
- Do we need personalization (retweets, likes, etc.)?

**Approach**  
1. **Data model** – store tweets in a write‑optimized log (`Tweet(id, author_id, content, ts)`).  
2. **Followers graph** – maintain adjacency lists (`user → set(followees)`), sharded per user.  
3. **Feed generation** – two main strategies:  
   - *Pull* (on‑request): read recent tweets from each followee’s log and merge.  
   - *Push* (pre‑compute): on tweet write, push the tweet to all followers’ feeds in a distributed queue or stream.  
4. **Caching & sharding** – keep hot users’ feeds in Redis; shard by user hash for scalability.  
5. **Consistency & ordering** – use logical timestamps or vector clocks to merge streams deterministically.

**Depth**  
- Pull approach: latency ≈ O(k log n) where k = followers, n = tweets per followee.  
- Push approach: write‑time complexity O(#followers); read is O(1).  
- Storage: each tweet stored once; feeds are pointers or cached copies.  
Trade‑offs: push gives instant reads but high fan‑out writes; pull reduces storage but higher latency.

**Edge Cases**  
- Users with millions of followers → throttle push, use batch replication.  
- Deleted tweets → invalidate cache entries.  
- New users with no followees → empty feed handling.  
Testing: simulate follower bursts, tweet spikes, and failure of shard nodes.

**Optimize & Communicate**  
Start with a pull design for simplicity; add push for hot users once traffic grows. Use Bloom filters to prune irrelevant followers. Document latency SLAs, CAP trade‑offs, and how we monitor fan‑out metrics. This narrative shows clear problem framing, layered solution choices, complexity analysis, and readiness for real‑world scaling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
