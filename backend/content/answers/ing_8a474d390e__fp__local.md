---
qid: ing_8a474d390e__fp__local
question: 'Explain: Use case: User views the home timeline — system-design-primer/solutions/system_design/twitter/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 205
output_tokens: 478
total_tokens: 683
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:58:55-05:00'
sources: []
---

**Why a “home‑timeline” is an optimization problem**

When a user opens the app we want *the most relevant tweets* to appear instantly.  
Relevance is defined by two hard constraints:

1. **Freshness:** Tweets must be newer than the last time the user saw them.
2. **Authority & popularity:** Tweets from followed users and those with high engagement should rank higher.

These requirements translate into a *ranking objective*: for every candidate tweet \(t\) we assign a score  
\(S(t)=\alpha \cdot \text{recency}(t)+\beta \cdot \text{engagement}(t)\).  
The system must compute and sort millions of scores per request, so the **computational graph** must be linear in the number of candidate tweets, not quadratic.

**From the problem to the design**

1. **Candidate generation** – pull the latest \(N\) posts from each followed user’s stream (log‑structured merge tree).  
2. **Scoring** – pre‑compute engagement features (likes, retweets) and store them in a key‑value store; recency is derived on read.  
3. **Ranking & caching** – use a distributed priority queue or sorted set per user to keep the top‑\(k\) tweets; cache that list for 1–2 seconds to amortize load.

The deep principle here is *online convex optimization*: we treat each tweet’s score as a linear function of its features and update \(\alpha,\beta\) by gradient descent on click‑through data, guaranteeing the ranking improves over time without recomputing from scratch.

**Non‑obvious insight**

Most designs forget that **the cost of fetching candidate tweets dominates latency**, not the ranking step. By storing per‑user *pre‑sorted* streams (a fan‑out “write‑time” approach) and only pulling a handful of rows, we keep the read path O(1). This subtle shift turns an \(O(U \log U)\) ranking problem into a constant‑time cache lookup, enabling sub‑200 ms home‑timeline renders at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
