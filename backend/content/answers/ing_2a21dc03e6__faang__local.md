---
qid: ing_2a21dc03e6__faang__local
question: What's the difference between replication & backup?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 526
total_tokens: 756
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:21:13-05:00'
sources: []
---

**Clarify**  
The question asks for a *conceptual* distinction, not implementation details.  
Assumptions I’d confirm:  
1. “Replication” and “backup” are storage‑level terms used in data protection.  
2. We’re comparing data integrity, availability, and recovery objectives.

---

**Approach**  
I’ll first define each term, then contrast them on key dimensions (consistency, latency, cost, use‑case). I’ll finish with a quick example to anchor the difference.

---

**Depth**  

| Aspect | Replication | Backup |
|--------|-------------|--------|
| **Goal** | *Availability*: keep an up‑to‑date copy so reads/writes can continue. | *Durability*: preserve data for recovery after catastrophic loss. |
| **Consistency** | Usually *real‑time* or near real‑time (e.g., synchronous or asynchronous). | Periodic snapshots; may be daily, weekly, etc. |
| **Latency** | Minimal; the replica is often on‑prem or in a nearby region. | Higher; data transfer to cold storage can take hours/days. |
| **Cost/Storage** | Requires duplicate active disks or SSDs; high write amplification. | Uses cheaper archival media (tape, cloud object store). |
| **Recovery Time Objective (RTO)** | Seconds to minutes. | Hours to days. |
| **Typical Use‑Case** | Active‑active databases, DR sites, CDN edge caches. | Long‑term retention, regulatory compliance, disaster recovery. |

*Example*: A database node replicates its WAL to a standby in another AZ (low latency, high availability). The same data is also backed up nightly to Glacier for 7‑year retention (high durability, longer RTO).

---

**Edge Cases**  
- **Network partitions**: replication may diverge; backups avoid this.  
- **Write‑heavy workloads**: replication can add overhead; backup writes are batched.  
- **Regulatory needs**: backups must satisfy audit trails; replicas may not.

---

**Optimize & Communicate**  
I’d emphasize that *replication* is about “live copy” for uptime, whereas *backup* is a “time‑stamped snapshot” for durability. In interviews I would finish by noting that many systems combine both—continuous replication to a secondary site plus periodic backups—to meet SLAs across availability and recovery.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
