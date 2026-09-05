---
qid: ing_1d8801dc3a__fp__local
question: 'Explain: Ongoing — system-design-primer/solutions/system_design/twitter/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 199
output_tokens: 383
total_tokens: 582
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:09:03-05:00'
sources: []
---

**What the README really does**

The file *README.md* in `system_design/twitter` isn’t just a list of steps; it’s an **optimisation blueprint** for a large‑scale, low‑latency social network.  
It starts from the *fundamental problem*: deliver billions of user‑generated tweets to millions of followers with sub‑second latency and 99.9 % availability, while keeping storage costs reasonable.

1. **Key constraints → design choices**  
   • Latency ⇒ horizontal partitioning (sharding) on `user_id` + read‑heavy caches.  
   • Availability vs consistency ⇒ eventual consistency for timeline feeds; strong consistency only where required (e.g., follow/unfollow).  
   • Cost → use cheap key–value stores for user profiles, and a write‑optimized log (Kafka/Append‑only) for tweets.

2. **Deep principle: *Write‑once, read‑many* (WORM)**  
   Tweets are immutable; the system exploits this by writing to an append‑only stream once and replaying it into multiple indexes (user timeline, hashtag feed). This reduces write amplification and lets each index be tuned separately.

3. **One non‑obvious insight** – *denormalisation is a feature, not a bug*  
   The README shows that every tweet record contains the author’s full profile snapshot. At first glance this looks wasteful, but it eliminates an expensive join on every read and guarantees that the timeline remains consistent even if the user updates their profile later.

In short, the README translates high‑level SLAs into concrete micro‑services, data stores, and consistency models—each decision justified by a clear optimisation objective.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
