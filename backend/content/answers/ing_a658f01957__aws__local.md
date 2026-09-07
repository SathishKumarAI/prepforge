---
qid: ing_a658f01957__aws__local
question: 'Explain: Hash-Based Sharding — Sharding | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 414
total_tokens: 646
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:43:15-05:00'
sources: []
---

**Situation & Task**  
I led a cross‑functional team to redesign our recommendation engine’s data layer for a global e‑commerce platform that was hitting 4 M requests/sec and 3 TB of daily user logs. The goal: keep latency < 50 ms while enabling real‑time model updates.

**Action (Design)**  
*Adopted hash‑based sharding on the *user_id* key.*  
1. **Sharding strategy:** SHA‑256 hash → modulo *N* shards (initially 64, auto‑scaling to 256).  
2. **Storage & compute:** Each shard lives in an **Amazon DynamoDB global table** (for low latency and cross‑region replication) backed by **S3 Glacier Deep Archive** for cold data.  
3. **Model inference service:** Deployed a **Lambda@Edge** function per shard cluster, triggered via API Gateway + Cognito auth, ensuring the same code path runs close to users.  
4. **Auto‑scaling & monitoring:** CloudWatch metrics (latency, error rate) feed an **Application Auto Scaling** policy that adds/removes shards based on 95th percentile thresholds.  
5. **Cost control:** Reserved capacity for predictable load; spot instances for batch retraining jobs in SageMaker.

**Result**  
- Latency dropped from 120 ms to **<45 ms** (30 % win).  
- 99.9 % availability during a 3‑month spike period.  
- Cost reduced by **22 %** vs the monolithic RDS design, while doubling throughput.

**Reflection**  
I owned the failure of an earlier “range” sharding experiment that caused uneven load and increased costs; I documented the lessons and built the hash logic from scratch, proving ownership and a bias for action.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
