---
qid: ing_3044f10bb9__fp__local
question: 'Explain: Object Storage — Design Spotify | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 431
total_tokens: 606
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:47:25-05:00'
sources: []
---

**Object‑storage for a music streaming service**

The *fundamental problem* is to persist billions of user‑generated objects (audio tracks, cover art, metadata) at low cost while guaranteeing high availability and sub‑second read latency for millions of concurrent streams.

1. **Horizontal scalability & fault tolerance**  
   • Treat each object as an immutable byte array; split it into fixed‑size chunks (e.g., 4 MiB).  
   • Replicate every chunk on *k* distinct storage nodes chosen by a consistent hash ring.  
   • This guarantees that any single node failure loses at most one copy per chunk, and the system can rebuild missing data from other replicas.

2. **Write‑path efficiency**  
   • Clients stream objects to an *ingress gateway* that shards the upload into chunks on the fly, avoiding a central bottleneck.  
   • Each chunk is written asynchronously to its replicas; once all ACKs are received the object becomes visible (optimistic concurrency).

3. **Read‑path optimization**  
   • A global metadata service maps object IDs → list of chunk locations.  
   • For streaming, a *parallel fetch* policy pulls multiple chunks concurrently from different nodes, exploiting bandwidth and hiding latency.

4. **Consistency & versioning**  
   • Use *eventual consistency* for reads; employ version vectors to detect concurrent writes and let the application resolve conflicts (useful for collaborative playlists).

5. **Cost control**  
   • Tiered storage: hot objects stay on SSDs; cold, infrequently accessed tracks migrate to cheaper HDD or tape, with automated archival policies.

> **Non‑obvious insight:** Treating each chunk as an *independent* object allows the system to self‑heal at the granularity of a few megabytes rather than whole files. This dramatically reduces rebuild time and network traffic during failure recovery, a nuance often missed when applying “file” semantics to object storage.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
