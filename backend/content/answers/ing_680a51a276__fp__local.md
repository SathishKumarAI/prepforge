---
qid: ing_680a51a276__fp__local
question: 'Explain: Indexes — Design URL Shortener | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 381
total_tokens: 558
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:45:59-05:00'
sources: []
---

**Why an index matters in a URL‑shortening service**

A short URL is essentially *a key → long‑URL* map that must be queried at *millions of requests per second*.  
The underlying problem is **constant‑time lookup** under heavy write traffic (new links) and eventual consistency.  
In relational terms we have two tables:

| Table | Key | Value |
|-------|-----|-------|
| `ShortCodes` | `code` (primary key) | `long_url`, `created_at` |
| `Users` | `user_id` | `quota_used`, … |

The *index* is the data structure that turns a hash‑based lookup into O(1).  
A **hash table** with open addressing or a **B+ tree** in disk stores the key in sorted order, enabling range queries (e.g., analytics on expiration dates).  

**Why hashing?**  
Because the code distribution is uniform and we need *amortised* O(1) reads.  
Open‑addressing keeps locality of reference high, which is crucial for CPU cache behaviour.

**Non‑obvious insight:**  
When a user deletes a short URL, you cannot simply drop the key from the hash table without risking *stale lookups* that might still be cached downstream (CDN edge).  
Instead, mark it as *soft‑deleted* and let a background compaction job physically remove it.  
This preserves read consistency for all replicas while allowing write throughput to stay high.

Thus, the index is not just a lookup table—it’s an optimization that balances speed, cache locality, and eventual consistency in a system where *every microsecond counts*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
