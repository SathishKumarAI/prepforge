---
qid: ing_10192db976__faang__local
question: 'Explain: ACL (Access Control List) — Designing a Permission System'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 497
total_tokens: 733
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:20:48-05:00'
sources: []
---

**Clarify**  
The interviewer asks for a design of an **ACL‑based permission system** that maps users to resources with fine‑grained access rights (e.g., read, write, delete). We’ll assume:  
* Users and resources are first‑class entities identified by UUIDs.  
* Permissions are static per resource (no time‑bound or context‑aware rules).  
* The system must support thousands of users and millions of resources, with low latency reads.

**Approach**  
1. **Data model** – store ACL entries as rows: `(resource_id, user_id, permission_bitmask)`.  
2. **Indexing** – a composite B‑tree index on `(resource_id, user_id)` for quick look‑ups; a separate index on `user_id` to support “list resources a user can read”.  
3. **Caching** – keep hot ACLs in an LRU cache (e.g., Redis) keyed by `(resource_id,user_id)`.  
4. **API** – `check(user, resource, perm)` reads from cache → DB fallback; `grant/revoke` updates the table and invalidates cache.

**Depth**  
*Permission bitmask*: encode read=1, write=2, delete=4, etc., so a single integer holds all rights.  
*Complexity*: O(log n) for DB look‑up; cache hit is O(1).  
*Scalability*: Shard the ACL table by `resource_id` to distribute load; use read replicas for high concurrency.

**Edge Cases**  
*Non‑existent user/resource → return “deny”.  
*Race conditions on grant/revoke: use optimistic locking (version column) or DB transactions.  
*Bulk permission changes: batch updates with bulk insert/delete and bulk cache eviction.

**Optimize & Communicate**  
- **Batching** for audit logs to reduce write amplification.  
- **Denormalization**: store a user‑level “effective permissions” view if reads dominate writes, trading consistency for speed.  
- Explain trade‑offs clearly: caching reduces latency but adds complexity in invalidation; sharding improves scalability at the cost of cross‑shard joins. This structured answer demonstrates problem understanding, design depth, and awareness of edge cases—key signals for a FAANG interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
