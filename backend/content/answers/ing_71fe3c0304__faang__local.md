---
qid: ing_71fe3c0304__faang__local
question: 'Explain: Bandwidth consumption — Data replication explained: types, examples
  & use cases'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 517
total_tokens: 755
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:08:47-05:00'
sources: []
---

**Bandwidth Consumption – Data Replication**

| **Clarify** | *What you’re asking:* How does replicating data across nodes affect network bandwidth? What kinds of replication exist, and when should each be used?  
*Assumptions to confirm:* Scale (small cluster vs global CDN), consistency needs, latency tolerance, storage cost. |

| **Approach** | 1️⃣ List replication types.  
2️⃣ Give concrete examples & typical use cases.  
3️⃣ Explain bandwidth impact per type. |
| **Depth** | **Types**  
- **Synchronous Replication**: All replicas must ack before commit. *Bandwidth:* high (write‑to‑all). *Use:* financial transactions, ACID guarantees.  
- **Asynchronous Replication**: Writes go to primary; updates pushed later. *Bandwidth:* lower initially, bursty during sync. *Use:* web apps, analytics where eventual consistency is OK.  
- **Multi‑Region/Geo‑Replication**: Copies across data centers. *Bandwidth:* massive inter‑DC traffic; mitigated by WAN optimizers or compression. *Use:* global CDN, disaster recovery.  
- **Read‑Replica / Master‑Slave**: Reads served from replicas. *Bandwidth:* reduced write load but increased read traffic on replicas. *Use:* read‑heavy workloads (e.g., ad serving).  

*Examples*:  
- MySQL Galera Cluster → synchronous for 1 s latency.  
- Cassandra’s hinted handoff → asynchronous, writes propagate later.  
- Cloud CDN edge caches → multi‑region replication with content invalidation.

**Bandwidth Impact**  
- Sync: ~N× write traffic (N = replicas).  
- Async: write cost ≈ 1×; sync phase adds burst.  
- Geo‑rep: depends on region distance, usually >10 Gbps for large datasets.  

| **Edge Cases** | • Network partitions → sync stalls.  
• Large binary blobs → compression or chunked replication needed.  
• High churn replicas → increased overhead. |

| **Optimize & Communicate** | Use WAN‑acceleration (deduplication, delta encoding) to cut traffic for geo‑rep. Prefer async for bulk analytics; fall back to sync for critical ops. Communicate trade‑offs: higher bandwidth ≠ always better—balance consistency vs cost. |

*Word count:* ~210 words.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
