---
qid: ing_82b053f449__faang__local
question: 'Explain: Infrastructure cost — Data replication explained: types, examples
  & use cases'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 446
total_tokens: 683
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:48:42-05:00'
sources: []
---

**Infrastructure Cost – Data Replication (AI context)**  

| **Step** | **What to do** |
|----------|----------------|
| **Clarify** | *Problem:* “Explain data replication, its types, examples, and use‑cases in AI infrastructure.” Confirm assumptions: we’re talking about on‑prem vs cloud, relational & NoSQL stores, batch vs real‑time pipelines. |
| **Approach** | 1️⃣ List the primary replication styles (master–slave, multi‑master, quorum). <br>2️⃣ Give concrete storage examples (PostgreSQL, Cassandra, S3). <br>3️⃣ Map each style to AI workloads (training, inference, serving). |
| **Depth** | *Master‑Slave:* One writer, many readers.  E.g., a PostgreSQL cluster feeding a TensorFlow training job; low write latency, high read throughput. <br>*Multi‑Master:* All nodes can accept writes, using conflict resolution (e.g., Cassandra’s last‑write-wins). Useful for edge AI devices that need local model updates before sync. <br>*Quorum Replication:* Operations succeed only after a majority acknowledge (Cassandra, DynamoDB). Guarantees consistency for critical inference results in fraud detection. <br>Cost factors: storage duplication, network egress, synchronization overhead; trade‑off between consistency and availability per CAP theorem. |
| **Edge Cases** | • Network partitions causing stale reads.<br>• Write storms during model retraining spikes.<br>• Latency penalties when replicating large embedding tables across regions. Test with failover scenarios and read/write ratio variations. |
| **Optimize & Communicate** | *Improvements:* Use compression for replicated tensors, tiered storage (hot vs cold), and incremental sync (change‑data capture). Explain to stakeholders: “Replication adds resilience but increases egress; we’ll cap cross‑region traffic with CDN caching for inference.” Keep the narrative concise, evidence‑based, and tied to business outcomes—exactly what FAANG interviewers look for. |

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
