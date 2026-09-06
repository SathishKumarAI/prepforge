---
qid: ing_550409f224__fp__local
question: 'Explain: Fan-out-on-read (Pull Model) for Celebrities'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 364
total_tokens: 537
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:05:37-05:00'
sources: []
---

**Fan‑out‑on‑read (pull model) for celebrity data**

The core problem is *efficiently delivering many users’ personalized feeds when a single “celebrity” account posts a new item*.  
If we pre‑push updates to every follower’s cache (push model), the write cost grows linearly with fan‑out—unacceptable for millions of followers.  

In the pull model, we store only the raw post and metadata in a *global timeline*; each user’s feed is built on demand by **joining** that global stream with their “follow” list.  
Mathematically this is a *relational join*:  
\(Feed_u = \{p \mid p.author ∈ FollowerSet(u)\}\).  
Because the set of followers \(F\) can be enormous, we index posts by author and cache recent chunks per user, turning the join into an *index lookup* followed by a small merge.  

**Why it works**: The cost is shifted from writes (O(1)) to reads (O(log |F| + k)), where \(k\) is the number of items returned. For celebrities, \( |F| \gg 1 \), so the logarithmic factor dominates; still far cheaper than O(|F|).  

**Non‑obvious insight**: Pulling avoids *write amplification* but introduces *stale reads*. By materializing only the last N posts per author and invalidating cache entries via a lightweight “version stamp”, we reconcile freshness with scalability—something most designs ignore.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
