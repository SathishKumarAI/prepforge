---
qid: ing_dc12c46447__star__local
question: 'Explain: CP (Consistency and Partition Tolerance)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 316
total_tokens: 552
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:48:06-05:00'
sources: []
---

**Situation:** While leading the deployment of a real‑time recommendation engine for a streaming service, we had to serve predictions from an ensemble of models distributed across three data centers to keep latency under 50 ms.

**Task:** Ensure that every request received the same model version and feature set even when network partitions occurred, without sacrificing availability during peak traffic spikes.

**Action:** I chose a CP‑style design using Apache Kafka for durable, ordered log replication of model updates. Each node subscribed to the same topic; on partition, nodes fell back to the last committed snapshot stored in a shared Redis cluster with strong read consistency (using Redis Cluster with majority quorum). We disabled new writes during splits and queued inference requests until the cluster re‑joined, guaranteeing that all predictions were based on the identical model state. I also implemented health checks and automatic failover scripts so that only one node handled updates at any time.

**Result:** The system maintained 99.8 % prediction consistency across regions, reduced duplicate model loads by 30 %, and kept latency below target during a two‑hour network outage. I learned that prioritizing consistency over availability in ML inference workloads can be achieved with a disciplined commit log and quorum‑based storage, ensuring reliable user experience even under partition stress.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
