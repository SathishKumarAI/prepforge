---
qid: ing_58da83b57e__eli5__local
question: 'Explain: Amazon''s Dynamo — Amazon''s Dynamo | All Things Distributed'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 400
total_tokens: 561
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:57:03-05:00'
sources: []
---

Think of Amazon’s Dynamo like a giant library that is split among many branches, each holding copies of the same books so no single branch can be overloaded or become a bottleneck.

**How it works**

1. **Sharding (Branching)** – The library divides its shelf space into many “shards.” Each book (key) goes to one shard based on a hash of its title. If one branch is busy, the next request can go to another branch that holds the same book.

2. **Replication (Copy‑cats)** – Every book is copied to several branches (replicas). If one branch closes for maintenance or crashes, patrons can still check out the book from another branch.

3. **Consistent hashing (Finding your way)** – When a new branch opens or an old one closes, only a few books need to be moved to keep the system balanced—much like redistributing a few shelves rather than reorganizing the whole library.

4. **Quorum reads/writes** – To read or write a book, Dynamo asks a small set of branches (a quorum). As long as enough copies agree, the operation succeeds even if some branches are down.

5. **Eventual consistency (Patience)** – After a change, all replicas will eventually see it. If two patrons check out the same book at the same time from different branches, Dynamo resolves the conflict later so everyone ends up with the same copy.

**Bottom line**

Dynamo is a highly available, fault‑tolerant key‑value store that spreads data across many nodes, keeps several copies for reliability, and uses simple “quorum” rules to keep everything in sync—even when parts of the system fail. It’s like a distributed library that never shuts down because every book lives in multiple branches and can be found quickly no matter which branch you visit.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
