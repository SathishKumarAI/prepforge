---
qid: ing_6b769b6896__fp__local
question: 'Explain: Search and Pull are Inverses — The Architecture Twitter Uses to
  Deal with 150M Active Users, 300K QPS, a 22 MB/S Firehose, and Send Tweets in Under
  5\u00a0Seconds - High Scalability -'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 214
output_tokens: 369
total_tokens: 583
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:53:05-05:00'
sources: []
---

**Search ↔ Pull: The Twitter “Inverse” Engine**

Twitter’s feed problem is a *dynamic set cover*: every user \(u\) needs a stream of the most recent tweets from a large, evolving universe \(\mathcal{T}\).  Naïvely pulling all tweets for each query would cost \(O(|\mathcal{T}|)\), impossible at 300 k QPS.  

Instead Twitter inverts the operation.  
* **Search** builds an *inverted index*: for each tweet \(t\) it stores a list of user IDs that follow the author or match a keyword.  
* **Pull** is then a lightweight lookup: when user \(u\) logs on, we pull the union of all lists that contain \(u\).  The cost per request becomes proportional to \(|\text{followers}(u)|\), not \(|\mathcal{T}|\).

The deeper principle is *information locality*: by pre‑computing which users “own” each tweet’s relevance, we avoid broadcasting irrelevant data. This reduces bandwidth from a 22 MB/s firehose to a few kilobytes per pull, keeping the end‑to‑end latency under five seconds.

**Non‑obvious insight:** The inverse mapping is not static; it is continuously refreshed by *write‑back* workers that append new tweet IDs to follower lists in real time. This amortizes write costs across many users and turns what would be an \(O(N)\) broadcast into a series of tiny, incremental updates—essential for scaling to 150 M active users while maintaining sub‑five‑second delivery.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
