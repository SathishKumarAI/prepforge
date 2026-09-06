---
qid: ing_8ad286ad44__fp__local
question: 'Explain: Personalization at Spotify using Cassandra & HDFS'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 500
total_tokens: 671
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:59:41-05:00'
sources: []
---

**Why we need two stores**

Spotify’s recommendation engine must satisfy *real‑time* inference (play‑by‑play) **and** *batch* learning (weekly model refresh).  
The core problem is: *how to keep a 10⁹‑user, 10¹²‑interaction dataset both fast for look‑ups and cheap for large‑scale analytics?*

- **Cassandra** solves the *low‑latency key–value* part.  
  - Each user’s “profile vector” (top genres, listening counts, contextual tags) is stored as a row keyed by `user_id`.  
  - The data model is a wide column family: columns are `item_id→weight`.  
  - Cassandra’s tunable consistency (`QUORUM`) guarantees that a read sees the most recent writes while still allowing high write throughput (≈10⁶ ops/s).  
- **HDFS** stores the *raw interaction graph* and feature logs.  
  - It excels at sequential, fault‑tolerant scans needed for matrix factorisation or deep‑learning pipelines.  
  - The distributed file system’s data locality lets Spark/MapReduce process millions of rows per second.

**Deriving the architecture**

1. **Problem:** Predict next track → requires *user latent vector* + *item similarity*.  
2. **Constraint:** Latent vectors change every few minutes (new listens).  
3. **Solution path:** Persist fast‑access state → Cassandra; compute heavy updates offline → HDFS.  
4. **Resulting flow:**
   - Real‑time ingestion pipeline writes to both stores: write‑through to Cassandra, append to HDFS logs.  
   - Batch job reads HDFS, retrains embeddings, and upserts refreshed vectors back into Cassandra.

**Non‑obvious insight**

The key is *separation of concerns* driven by **information locality**:  
- Inference only needs the *summary* (latent vector), not raw logs → low‑dimensional key–value store.  
- Learning needs *raw, high‑resolution data* to capture subtle shifts in listening patterns → large, sequential file system.

Thus, Cassandra and HDFS are not two arbitrary choices; they emerge from optimising for the two complementary information‑processing regimes that underpin Spotify’s personalization pipeline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
