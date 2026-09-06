---
qid: ing_be03abaf01__fp__local
question: 'Explain: MySQL Sharding at Pinterest — Tech-Stacks-Live-Apps/Pinterest/Readme.md
  at main \u00b7 Anshul619/Tech-Stacks-Live-Apps \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 207
output_tokens: 426
total_tokens: 633
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:47:38-05:00'
sources: []
---

**Why Pinterest shards MySQL?**  
Pinterest must serve millions of images, each accompanied by tags, comments, and a constantly evolving recommendation graph. A single relational instance cannot keep up with the read‑write throughput or the 200 GB+ data volume without bottlenecking on disk I/O or lock contention. Sharding splits the namespace—each user’s rows live in one shard—so that operations on a user’s pins, likes, and activity never need to scan unrelated users’ data.

**How it works (from first principles)**  
1. **Partition key = User ID** – The key is chosen because almost every query touches a single user or a small set of users.  
2. **Consistent hashing with virtual nodes** – A hash ring maps user IDs to physical MySQL instances, balancing load even as shards are added or removed.  
3. **Horizontal scaling of replicas** – Each shard has one master and several read replicas; the master handles writes while replicas serve the 99 % read‑heavy traffic.  
4. **Cross‑shard joins avoided** – Pinterest rewrites queries so that a single request touches at most one shard (or, when unavoidable, uses pre‑aggregated cross‑shard tables). This eliminates expensive distributed joins.

**Deeper principle: locality vs consistency**  
Sharding trades global ACID guarantees for *local* consistency: each shard is an isolated transaction domain. By keeping the “hot” data per user together, Pinterest reduces contention and disk seeks, achieving linear scalability in throughput while still offering strong consistency within a shard.

**Non‑obvious insight**  
Most sharding designs treat every table as a single unit. Pinterest instead *shards per logical entity* (users) but keeps *related tables* co‑located. This means that a user’s pins, likes, and comments are all in the same MySQL instance, enabling fast joins without cross‑node traffic—an optimization often overlooked when people think sharding is only about key distribution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
