---
qid: ing_e7aa6258cb__aws__local
question: 'Explain: Resources — IBM DataStax'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 436
total_tokens: 664
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:02:30-05:00'
sources: []
---

**Situation & Task**  
While leading a fraud‑detection team for a global payment platform, we needed a scalable data store that could ingest 10 M events/sec and serve real‑time ML models with sub‑200 ms latency. I chose **IBM DataStax Enterprise (DSE)** because it blends Apache Cassandra’s high write throughput with integrated Spark/MLlib for analytics.

**Action & Design**  
1. *Architecture*: Deployed a 24‑node DSE cluster in an AWS us‑east‑2 region, using DynamoDB for short‑term buffering and DSE for long‑term storage.  
2. *Data Model*: Sharded by user ID to guarantee linear scalability; added secondary indexes on transaction type for ML feature extraction.  
3. *ML Pipeline*: Leveraged DSE’s Spark integration to run nightly batch training (≈30 min) and a real‑time inference service via DSE Graph for graph‑based fraud scoring.  
4. *Cost/Availability*: Configured 3‑node replication + read‑repair to achieve 99.999% availability, with on‑demand EC2 spot instances reducing storage cost by 35%.

**Result**  
- Reduced model latency from 1 s to 180 ms (70 % improvement).  
- Cut operational costs by $120k/yr through efficient scaling and spot pricing.  
- Achieved a fraud detection accuracy of 94 %, up 4 % over the legacy MySQL‑based system.

**Reflection & Leadership Principles**  
I demonstrated **Ownership**—taking end‑to‑end responsibility for data architecture—and **Dive Deep**, rigorously profiling read/write paths to tune performance. The experience taught me that integrating analytics directly into the datastore can dramatically cut latency, but only if you balance consistency with cost and scalability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
