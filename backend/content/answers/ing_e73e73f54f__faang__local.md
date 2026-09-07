---
qid: ing_e73e73f54f__faang__local
question: 'Explain: 60: Break Into Google Spanner Architecture (5 Minutes)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 497
total_tokens: 735
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:37:37-05:00'
sources: []
---

**Clarify**  
We’re asked to give a *high‑level* overview of Google Cloud Spanner’s architecture in about five minutes—no code, just concepts. I’ll assume the audience knows basic distributed systems terms (replica, shard) but not Spanner specifics.

**Approach**  
1. Start with **global consistency & horizontal scaling** as the core problem.  
2. Explain *data partitioning* → *tablet* → *primary/secondary replicas*.  
3. Highlight the **TrueTime API** that gives bounded‑staleness clocks for serializable isolation.  
4. Cover **commit protocol (Paxos)** and how it guarantees durability across zones.  
5. Finish with the **client‑side API layer** (SQL, JDBC) and deployment model.

**Depth**  
- *Sharding*: Each database is split into tablets (~10 MB each). Tablets live on multiple nodes; one is the primary per tablet.  
- *Replication*: 3–5 replicas per tablet across at least two zones. Replicas use **Paxos** to agree on writes; only the primary accepts client traffic, secondary serves reads.  
- *TrueTime*: Cloud‑wide clock with ± 10 µs error bound (now ~2 µs). Used for conflict detection and ensuring globally ordered timestamps for serializable transactions.  
- *Commit*: Client sends a write set → primary writes to its log, proposes timestamp via TrueTime → Paxos rounds across replicas → all commit or abort together.  
- *API*: Spanner exposes ANSI‑SQL; drivers use a lightweight client that talks to the nearest tablet server and handles retries automatically.

**Edge Cases**  
- Clock skew beyond bound → transaction aborts (safe).  
- Network partitions: primary can fail over, but all replicas must be in sync—Paxos ensures this.  
- Hot tablets: auto‑splitting mitigates load spikes.

**Optimize & Communicate**  
Mention that Spanner’s **single‑copy consistency** lets you scale read/write globally while keeping ACID semantics; the trade‑off is higher latency for writes (multi‑replica Paxos). In an interview, I’d finish by asking if they want a deeper dive into any component or how Spanner compares to Bigtable/Firestore.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
