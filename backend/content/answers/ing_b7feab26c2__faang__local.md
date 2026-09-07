---
qid: ing_b7feab26c2__faang__local
question: 'Explain: Latency numbers — system-design-primer/solutions/system_design/pastebin/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 265
output_tokens: 611
total_tokens: 876
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:51:12-05:00'
sources: []
---

**Clarify**

You’re asking how the *Latency* section of the Pastebin system‑design primer quantifies response times for the three main operations: **Write (paste creation)**, **Read (paste retrieval)**, and **Delete**.  
Assumptions to confirm:
- Latency is measured from client request arrival to server acknowledgment.
- The system uses a single write node and multiple read replicas.
- All operations are served over HTTP/REST.

---

**Approach**

1. **Identify the critical path for each operation.**
2. **Assign realistic component latencies (DB, cache, network).**
3. **Sum them to obtain total latency per operation.**
4. **Validate against acceptable SLAs and discuss trade‑offs.**

---

**Depth**

| Operation | Path | Component Latency | Total |
|-----------|------|-------------------|-------|
| Write | Client → API → DB (write) | 10 ms + 5 ms | **15 ms** |
| Read | Client → API → Cache → DB (fallback) | 5 ms + 2 ms (cache hit) = 7 ms | **~7 ms** |
| Delete | Client → API → DB (delete) | 10 ms + 5 ms | **15 ms** |

- **DB latency:** 5 ms reflects a highly‑optimized key‑value store with SSDs and in‑memory indexing.  
- **Cache hit time:** 2 ms for Redis/Memcached.  
- **API overhead:** 10 ms accounts for request parsing, auth, and routing.

**Complexity & Trade‑offs**

- *Write latency* is dominated by the DB commit; batching or write‑through caching could reduce it but increases consistency complexity.  
- *Read latency* benefits from cache; a miss incurs an extra 5 ms DB read, raising average to ~9 ms if 90% hit rate.

---

**Edge Cases**

1. **Cache miss:** Read latency jumps by the DB read time (~5 ms).  
2. **DB replication lag:** Write may wait for secondaries → higher latency.  
3. **Network partitions:** Clients may experience up to 50 ms extra if routed through a backup node.

---

**Optimize & Communicate**

- **Add CDN edge caches** for public pastes → sub‑1 ms reads globally.  
- **Implement asynchronous write acknowledgement** (ACK+background sync) to drop write latency to ~5 ms at the cost of eventual consistency.  
- **Explain trade‑offs:** Lower latency ↔ higher failure tolerance vs. stronger consistency.

When discussing, emphasize that these numbers are *ballpark* and hinge on hardware, traffic patterns, and chosen consistency guarantees—exact figures must be derived from real load testing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
