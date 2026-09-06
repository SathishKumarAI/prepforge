---
qid: ing_e029c4c340__fp__local
question: 'Explain: Post Service — Design Instagram | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 431
total_tokens: 606
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:56:23-05:00'
sources: []
---

**Post Service – The heart of an image‑centric platform**

At its core, the Post Service must *persist* user content and expose it in a *low‑latency, highly available* feed to millions of clients.  
The fundamental problem is: **how do we keep “what a user sees” fresh while never letting a single node become a bottleneck?**  
We break this into three layers:

1. **Storage & Consistency** – A sharded, append‑only log (e.g., Kafka or GFS) guarantees linearizable writes and easy replay for backups.  
2. **Indexing & Retrieval** – An inverted index on `user_id → post_ids` + a time‑sorted secondary index (`feed_timestamp`) lets us fetch the most recent N posts in *O(log N)*, satisfying the “latest feed” requirement.  
3. **Delivery Layer** – A pre‑computed “timeline cache” per user (Redis or Memcached) stores a sliding window of post IDs; when a new post arrives, it pushes the ID to all followers’ queues via a fan‑out‑through‑message‑queue pattern.

Why this works:  
- *Append‑only* writes avoid contention.  
- *Indexing* turns linear scans into logarithmic lookups, respecting the optimization principle of “pay only for what you need.”  
- *Pre‑computed timelines* trade write‑time fan‑out for read‑latency, aligning with the probability theory that most reads are far more frequent than writes.

**Non‑obvious insight:** The key to scalability is **decoupling the write path from the read path**. By materializing timelines asynchronously (e.g., using a stream processor like Flink), we keep the write service fast and tolerant of spikes, while still delivering up-to-date feeds with bounded staleness—something many interviewees overlook when they try to compute feeds on‑the‑fly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
