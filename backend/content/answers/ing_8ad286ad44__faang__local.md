---
qid: ing_8ad286ad44__faang__local
question: 'Explain: Personalization at Spotify using Cassandra & HDFS'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 466
total_tokens: 700
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:06:37-05:00'
sources: []
---

**Clarify**  
The interview asks how Spotify personalizes music recommendations while storing massive user‑level data in **Cassandra** (low‑latency writes) and **HDFS** (batch analytics). I’ll assume we need to describe the architecture, data flow, and key ML steps that bridge these two systems.

**Approach**  
1. Capture real‑time interactions → write to Cassandra.  
2. Periodically export snapshots from Cassandra → HDFS for offline training.  
3. Train collaborative filtering / deep models on HDFS.  
4. Push model outputs back into Cassandra (or a cache) for low‑latency serving.

**Depth**  
- **Cassandra layer:** Each user has a wide‑row key; columns store *play counts, skips, likes*, and *context tags* (device, time). Replication factor 3 guarantees durability.  
- **Batch pipeline:** Use Spark on HDFS to materialize a user‑item matrix (sparse), apply ALS or a neural recommender. Feature engineering pulls from logs, metadata, and external signals.  
- **Model deployment:** Trained embeddings are serialized into a key‑value store (e.g., Redis) or directly written back to Cassandra under a “recommendations” column family. The serving layer reads these in <10 ms for the UI.  

**Edge Cases**  
- Cold starts: new users have sparse data; fallback to popularity or content‑based scores.  
- Data skew: high‑activity users generate hot keys; use token‑sharding or read replicas.  
- Schema evolution: adding new interaction types without downtime.

**Optimize & Communicate**  
- Incrementally update models (online learning) instead of full retrain to reduce compute costs.  
- Use Bloom filters in Cassandra reads to avoid unnecessary disk I/O for missing keys.  
- Explain trade‑offs: Cassandra gives instant write/reads; HDFS offers scalable analytics but higher latency. This hybrid ensures real‑time personalization with robust, data‑driven insights—exactly what a FAANG product would expect.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
