---
qid: ing_8574f16b64__fp__local
question: 'Explain: 5.5 Get User Feed — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 398
total_tokens: 578
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:48:46-05:00'
sources: []
---

**Why a feed must be *fast, personalized, and scalable***  
The core problem is: “Given millions of posts and users, return the next N items that are most likely to keep each user engaged, within milliseconds.”  
1. **Personalization → relevance score** – For every post *p* and user *u*, compute a score  
   `s(u,p) = wᵀ·features(p,u)` where features include recency, author popularity, interaction history, etc.  This is a classic *ranking* problem: we want to maximize expected click‑through (information theory: entropy reduction).  
2. **Scalability → pre‑aggregation** – Instead of scoring every pair on demand, precompute *candidate lists* for each user by sharding users into buckets (e.g., by geography or interests) and pushing the top‑K posts from each bucket into a per‑user queue stored in Redis/LRU cache.  
3. **Latency → two‑stage pipeline** – Stage 1: fetch the candidate list (≤ 200 items). Stage 2: locally rank with fresh features (e.g., last 5 min interactions) and trim to N. This keeps hot data in memory while heavy computation stays offline.  
4. **Consistency → eventual sync** – When a user follows/unfollows, update the bucket membership asynchronously; stale posts are acceptable because the feed is always refreshed on each request.

*Non‑obvious insight:*  
Treating the feed as an *online convex optimization* problem (re‑optimizing with each interaction) allows us to adapt weights `w` in real time via stochastic gradient descent, turning user feedback into immediate ranking improvements without re‑building global indices. This bridges machine learning and system design in a single coherent architecture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
