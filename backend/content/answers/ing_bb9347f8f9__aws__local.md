---
qid: ing_bb9347f8f9__aws__local
question: 'Explain: Infinite TTL — What is Caching? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 417
total_tokens: 650
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:28:03-05:00'
sources: []
---

**Situation & Task (S)**  
I was tasked to redesign the recommendation engine for a global e‑commerce platform that served 2 M active users daily. The existing cache expired after 24 h, causing stale model predictions and a 12 % drop in click‑through rate (CTR).  

**Action (A)** – *Customer Obsession & Ownership*  
I implemented an **Infinite TTL** cache strategy using Amazon ElastiCache for Redis with the `maxmemory-policy: volatile-ttl` disabled.  
1. **Data model**: Store pre‑computed feature vectors keyed by user ID + product set.  
2. **AWS services**:  
   * **S3** – raw training data & model artifacts (durable, low cost).  
   * **Lambda** – triggers on S3 upload to re‑compute and push updates to Redis.  
   * **CloudWatch Alarms** – auto‑scale Redis nodes based on 95th percentile latency.  
3. **Scalability**: Multi‑AZ Redis clusters with read replicas; sharding by user hash ensures linear scaling up to 10 M concurrent requests.  
4. **Availability & Cost**: 99.999% SLA, cost saved ~30 % vs. daily cache rebuilds (no extra EC2).  

**Result (R)** – *Deliver Results*  
Post‑deployment, CTR rose from 8.3 % to **9.6 %** (+15 %) and latency dropped 40 %. The system now serves fresh predictions with zero refresh windows, eliminating stale data issues.  

**Learnings & Bar‑raiser cues**  
I documented failure modes (e.g., memory pressure spikes) and created automated rollback scripts, showing *Dive Deep* and *Bias for Action*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
