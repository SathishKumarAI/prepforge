---
qid: ing_38e8aa5d32__faang__local
question: 'Explain: Protecting a resource with a lock — How to do distributed locking
  \u2014 Martin Kleppmann\u2019s blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 454
total_tokens: 705
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:56:46-05:00'
sources: []
---

**Clarify**  
We need a lock that works across multiple nodes so only one process can modify a shared resource at a time. Assume we have a reliable key‑value store (e.g., Redis, etcd) and clock drift between machines is bounded.

**Approach**  
1. **Acquire with TTL** – set a key `resource_lock` to the client ID using an atomic “set if not exists” (`SET resource_lock <id> NX PX <ttl>`).  
2. **Renewal loop** – while holding, periodically refresh the TTL before it expires (e.g., every ½ TTL).  
3. **Release safely** – delete the key only if its value equals our ID to avoid releasing someone else’s lock (`WATCH/GET` + `DEL`).  
4. **Failure handling** – if renewal fails or a node crashes, the TTL lapses and another client can acquire.

**Depth**  
- Atomicity is guaranteed by the KV store; TTL prevents deadlocks from crashed clients.  
- Complexity: O(1) per operation, network round‑trip latency dominates.  
- Trade‑off: shorter TTL → more renewals (network traffic) but less risk of stale locks; longer TTL → fewer messages but higher chance a crash keeps lock for longer.

**Edge Cases**  
- Clock skew causing the same client to think it still owns the lock after renewal fails.  
- Network partitions where two nodes simultaneously acquire the lock before TTL expires.  
- Clients that never renew (e.g., infinite loop) leading to lock starvation.

**Optimize & Communicate**  
Use a “lease” pattern: embed the lease expiry timestamp in the value and let the server compare it on renewal, eliminating an extra read. Explain that this is essentially what Redis’s Redlock algorithm does but with fewer nodes for simplicity. Highlight that while this design satisfies most use‑cases, a true fault‑tolerant system may need consensus (etcd/Consul) or a distributed transaction protocol if strict ordering is required.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
