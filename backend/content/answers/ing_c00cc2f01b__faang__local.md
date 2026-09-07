---
qid: ing_c00cc2f01b__faang__local
question: 'Explain: File Sharing — Top 20 Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 812
total_tokens: 1044
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:08:32-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concise, interview‑ready overview of the most common *file‑sharing* questions that surface during FAANG interviews—both conceptual (e.g., consistency models) and system design (e.g., scaling, security). I’ll assume we’re targeting an experienced backend engineer familiar with distributed storage.

---

**Approach**  
1. List the 20 key topics/questions.  
2. For each, give a one‑sentence answer that highlights core trade‑offs or principles.  
3. Use bullet points for readability and to keep within 160–240 words.

---

**Depth**  

| # | Question | Quick Answer |
|---|----------|--------------|
|1|What consistency model does your file share use? | Strong vs eventual; choose based on latency vs freshness needs. |
|2|How do you handle concurrent writes? | Optimistic locking + version vectors or write‑ahead logs. |
|3|What replication strategy? | Erasure coding for storage efficiency, RAID‑5/6 for fault tolerance. |
|4|How to scale reads/writes? | Sharding by file ID + CDN edge caches; use load balancers. |
|5|Security: encryption at rest vs in transit? | AES‑256 at rest, TLS 1.3 for transfer; key rotation via KMS. |
|6|Access control model? | RBAC + ACLs; integrate with OAuth/OIDC. |
|7|What about versioning and rollback? | Store deltas + snapshot metadata; allow time‑travel queries. |
|8|How to detect & recover from node failures? | Heartbeat, quorum reads/writes, automatic re‑replication. |
|9|Data locality for large files? | Use object storage with chunk placement based on access patterns. |
|10|Bandwidth throttling? | Token bucket per user; QoS policies at edge. |
|11|Audit logging? | Immutable logs in append‑only store + HMAC verification. |
|12|How to handle deletions (garbage collection)? | Reference counting + background compaction jobs. |
|13|Integration with CDN? | Cache‑control headers, signed URLs for private content. |
|14|What monitoring metrics? | Latency percentiles, error rates, storage utilization per shard. |
|15|Cost optimization? | Tiered storage (hot vs cold), lifecycle policies. |
|16|Legal compliance (GDPR, CCPA)? | Data residency controls, right‑to‑be‑forgotten workflows. |
|17|How to support cross‑region replication? | Multi‑master sync with conflict resolution or single‑writer per region. |
|18|What APIs expose the service? | RESTful endpoints + gRPC for internal services; use protobufs. |
|19|Failover strategy? | Active‑active vs active‑standby; DNS-based routing with health checks. |
|20|Testing strategy? | Chaos engineering, end‑to‑end load tests, regression on consistency edge cases. |

---

**Edge Cases**  
- Extremely large single files (TB) → streaming APIs, chunked uploads.  
- Sudden traffic spikes → auto‑scaling of cache layers.  
- Mixed latency requirements (e.g., real‑time collaboration) → separate service tier.

---

**Optimize & Communicate**  
I’d iterate on the design by prototyping the shard allocator and measuring write amplification. During discussion, I’d emphasize trade‑offs: e.g., choosing erasure coding reduces storage cost but increases CPU overhead for reconstruction. This narrative shows deep system understanding while staying concise—exactly what FAANG interviewers reward.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
