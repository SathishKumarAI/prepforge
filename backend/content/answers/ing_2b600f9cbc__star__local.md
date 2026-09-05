---
qid: ing_2b600f9cbc__star__local
question: 'Explain: Directory-Based Sharding — Sharding | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 341
total_tokens: 579
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:54:33-05:00'
sources: []
---

**Situation:**  
In my last role I was tasked with scaling our recommendation engine’s training pipeline. The model ingested user interaction logs from a single monolithic HDFS directory; as data grew to over 30 TB, the read throughput dropped to 1.2 kB/s and batch jobs started timing out.

**Task:**  
I needed to redesign the storage layout so that nightly training jobs could finish within the 4‑hour window while keeping query latency under 50 ms for real‑time inference.

**Action:**  
I introduced directory‑based sharding: each user’s log files were moved into a hashed subdirectory tree (`/logs/<hash>/user_<id>.parquet`). The hash function was a 16‑bit MurmurHash of the user ID, giving 65 536 shards. I updated our Spark job to read from all shard directories in parallel and added a metadata table (PostgreSQL) mapping user ranges to shard paths for quick lookup. We also enabled HDFS block replication at 3× and tuned the DataNode cache to keep hot shards in memory.

**Result:**  
Read throughput increased to 18 MB/s, cutting nightly job time from 8 hours to 2 hours. Real‑time inference latency dropped to 35 ms on average. I learned that a simple hash‑based directory structure can drastically reduce contention and improve scalability without complex partitioning logic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
