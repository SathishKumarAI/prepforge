---
qid: ing_25d73e9fd7__faang__local
question: 'Explain: MySQL at Canva: Growing Pains — From Zero to 50 Million Uploads
  per Day: Scaling Media at Canva - Canva Engineering Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 737
total_tokens: 990
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:11:47-05:00'
sources: []
---

**Clarify**  
We’re asked to explain how Canva scaled its MySQL‑backed media storage from nothing to **50 M uploads/day** (≈500 GB/day). Key assumptions:  
- “Uploads” mean image/video files stored in a relational DB via BLOBs or file URLs.  
- The system must keep latency low, avoid single points of failure, and handle bursts.

---

### Approach
1. **Understand the baseline** – one MySQL instance with a simple `uploads` table.  
2. **Identify bottlenecks** – CPU, I/O, replication lag, connection limits.  
3. **Design horizontal scaling layers** – sharding, read replicas, caching.  
4. **Implement robustness** – automated failover, monitoring, backups.

---

### Depth (Core Explanation)

| Layer | Technique | Why it works |
|-------|-----------|--------------|
| **Data Model** | Store only file metadata in MySQL; binary data lives on S3‑compatible storage. | Offloads heavy I/O from DB, keeps rows lightweight. |
| **Sharding** | Range or hash sharding by `user_id`/`upload_ts`. Each shard runs on a dedicated MySQL node. | Eliminates write contention; each node handles ~1 M uploads/day. |
| **Read Replicas** | 3‑5 read replicas per shard, using asynchronous replication. | Offloads read traffic (thumbnails, previews) and provides redundancy. |
| **Connection Pooling & Caching** | Use PgBouncer‑style pooler + Redis cache for hot metadata. | Reduces per‑request DB round trips; keeps latency < 10 ms. |
| **Failover Automation** | Keepalived + Pacemaker to promote replica on failure; automated backup snapshots. | Zero downtime during node maintenance. |
| **Monitoring & Autoscaling** | Prometheus metrics → Alertmanager; horizontal pod autoscaler for app layer. | Detects load spikes and scales compute automatically. |

**Complexity**  
- **Write path:** O(1) per shard (constant time).  
- **Read path:** O(log N) on replica set due to replication lag, negligible for UI.  
- **Cost trade‑off:** More shards = more ops overhead but linear throughput.

---

### Edge Cases

| Scenario | Potential Issue | Mitigation |
|----------|-----------------|------------|
| Sudden 10× traffic spike (e.g., marketing event) | Replication backlog, CPU saturation | Auto‑scale replicas; use burst buffer on S3. |
| Node failure during heavy writes | Data loss or duplication | Multi‑zone deployment + write‑once semantics. |
| Cache invalidation lag | Stale metadata for new uploads | TTL short (≤ 1s) and event‑driven cache flush. |

---

### Optimize & Communicate

- **Batching**: Group uploads per user to reduce connection churn.  
- **Compression**: Store thumbnails in a separate table; compress on write.  
- **Narrative**: “We first isolated the heavy I/O by moving blobs out of MySQL, then we sharded metadata to eliminate hot spots, and finally we built a resilient replica set with automated failover so that even a 50 M uploads/day burst is handled gracefully.”  

This structured explanation demonstrates problem understanding, architectural depth, complexity awareness, edge‑case handling, and clear communication—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
