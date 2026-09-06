---
qid: ing_c5dd7fdbbb__fp__local
question: 'Explain: Database Design — How to Ace System Design Interviews'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 368
total_tokens: 539
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:02:31-05:00'
sources: []
---

**Why the problem matters**

Interviewers ask you to design a “social‑media feed” or a “shopping cart” not because they want an exact schema, but to see whether you can *abstract* the data needs from user intent and then choose a representation that guarantees the right trade‑offs (latency, consistency, scale).  

**From requirements to relational reality**

1. **Identify functional units** – *Users*, *Posts*, *Likes*.  
2. **Determine cardinalities** – one user can have many posts; each post may have millions of likes.  
3. **Decide on normalisation vs denormalisation**.  
   - *Normal* (Post → User, Like → Post) gives consistency but joins explode under high read traffic.  
   - *Denormed* (store `like_count` in Post) trades a bit of write cost for O(1) feed reads.

4. **Choose indexing strategy** – primary key on PKs; secondary index on `(user_id, created_at)` to power “most recent posts”.  
5. **Handle scale** – sharding by user hash keeps all a user’s data together, simplifying cache invalidation and reducing cross‑shard joins.

**Non‑obvious insight**

Most designers stop at “use foreign keys” and forget that *query shape* drives schema design. A feed is essentially a *range query* on `(user_id, created_at)`. If you index only by `post_id`, every read becomes an expensive full table scan. Therefore the *index key must mirror the most frequent access pattern*, not just the logical relationship. This subtlety often turns a correct but slow design into a failure in production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
