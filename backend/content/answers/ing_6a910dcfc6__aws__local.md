---
qid: ing_6a910dcfc6__aws__local
question: 'Explain: Reference — Dynamodbvsmongodbvscasandra'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 480
total_tokens: 713
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:25:22-05:00'
sources: []
---

**Answer (Amazon style)**  

*Customer Obsession / Ownership* – I first asked the data‑science team what they actually needed: low‑latency feature lookup, high write throughput for streaming training data, and the ability to run inference on a global user base.

**S – Situation**  
The team had two legacy options: MongoDB (on‑prem) and Cassandra (managed via DataStax). Both suffered from 3–5 s latency on hot keys and required manual sharding.  

**T – Task**  
I was tasked to recommend a fully managed, horizontally scalable store that would support our real‑time feature service.

**A – Action**  
1. **DynamoDB**:  
   * Single‑table design with partition key = `user_id` + `feature_name`.  
   * Provisioned capacity + Auto Scaling → 10 k WCU / 100 k RCU with <0.5 ms read latency (99th percentile).  
   * Built a TTL cleanup job on **Lambda** and used **DAX** for sub‑1 ms cache.  
2. **MongoDB Atlas**:  
   * Sharded cluster, 20 GB per shard, but still ~30 ms avg read due to document overhead.  
3. **Cassandra (DC/RC)**:  
   * Multi‑region with eventual consistency; write latency ~5 ms but required careful anti‑entropy tuning.

**R – Result**  
Adopting DynamoDB cut feature lookup latency from 120 ms → 0.8 ms, increased daily training writes by 3× without ops overhead, and reduced infra cost by 25% compared to the MongoDB/ Cassandra stack. The model accuracy improved because we could pull fresh features in real time.

**Bar‑raiser cues** – I demonstrated *ownership* (full end‑to‑end design), *dive deep* (latency numbers, capacity planning), quantified impact (latency & cost savings), and learned from the failure of manual sharding by showing a clear migration path.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
