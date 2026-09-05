---
qid: ing_1441b2014f__fp__local
question: 'Explain: Database Design — Design Instagram | System Design Interview |
  AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 472
total_tokens: 647
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:48:25-05:00'
sources: []
---

**Why the schema must look this way**

An Instagram‑style system boils down to two core problems:  
1) *“What is a user’s feed?”* – a time‑ordered list of posts from followees, possibly filtered by tags or geotags.  
2) *“How do we serve millions of reads and writes with low latency?”* – each post can be liked, commented on, reshared, and must remain immutable once created.

From the first problem, the natural data model is a **partitioned event stream**: for every user `U` we keep a sorted list of `(post_id, ts)` tuples. This satisfies the “feed” query in O(1) time per item (just read the next chunk from the partition). It also respects *immutability* – posts never change once stored; only new entries are appended.

From the second problem, we must avoid **write amplification** and **hot spots**. Thus we de‑normalize:  
- `Posts` table stores immutable post metadata (`id`, `author_id`, `ts`, `media_url`).  
- `Followers` (fan‑out) is a sparse adjacency list indexed by `follower_id`.  
- `FeedCache` holds precomputed slices of each user’s feed, refreshed in an eventual consistency window.

**Deep principle: locality + immutability**

By treating the feed as a *log* and keeping posts immutable we exploit **write‑once, read‑many** patterns, enabling efficient compression, deduplication, and cache friendliness. The fan‑out to `FeedCache` trades immediate consistency for massive horizontal scalability.

**Non‑obvious insight**

The real bottleneck is not the follower graph but *content freshness*. If we store only a rolling window of recent posts per user (say last 30 days), we can drop old entries from the feed index without affecting any query. This sliding‑window policy dramatically reduces storage and keeps read latency bounded, yet it works because Instagram’s use case tolerates stale or missing older content in a user’s home feed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
