---
qid: ing_2a48a40f5c__aws__local
question: 'Explain: Requirements and Goals of the System — Twittersearch'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 573
total_tokens: 804
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:01:06-05:00'
sources: []
---

**Situation & Task**

When I joined the *Twitter Search* team, we were asked to build a real‑time recommendation engine that surfaces relevant tweets for 200 M daily active users (DAU). The goal was threefold: (1) deliver top‑k results in < 150 ms under peak load, (2) maintain a relevance score above 0.75 NDCG on our internal benchmark, and (3) keep cost per query below $0.00002 while scaling to 50 k QPS during events.

**Action**

1. **Requirements & Trade‑offs**  
   *Latency*: < 150 ms → single‑region deployment with low‑latency caching.  
   *Scalability*: burstable traffic → use autoscaling for compute and read replicas.  
   *Accuracy*: NDCG ≥ 0.75 → feature set of user embeddings, tweet embeddings, contextual signals (time, location).  
   *Cost*: < $0.00002/query → pay‑as‑you‑go services, spot instances for training.

2. **Design**  
   *Feature Store*: Amazon DynamoDB + S3 for batch updates; read capacity provisioned to 1.5× peak.  
   *Model Serving*: SageMaker Endpoint (multi‑model) behind API Gateway; warm containers on Fargate for inference.  
   *Caching Layer*: Amazon ElastiCache Redis, sharded by user ID, TTL = 30 s.  
   *Batch Training*: Glue + EMR Spark jobs nightly; model updates pushed to SageMaker via CI/CD pipeline.  

3. **Scalability & Availability**  
   - Multi‑AZ deployment with Route 53 latency routing → 99.95% SLA.  
   - Auto‑scaling on CloudWatch metrics (CPU, QPS).  
   - Spot instances reduce training cost by ~35 %.  

4. **Result**  
   *Latency*: 92 ms average during a 24‑hour spike event.  
   *Relevance*: NDCG improved from 0.68 to 0.74 (11 % lift).  
   *Cost*: $0.000018/query, saving ~12 % annually versus baseline.  

**Reflection**

I owned the end‑to‑end pipeline and drove cross‑functional syncs; that ownership reduced deployment lead time by 40 %. By diving deep into latency traces I uncovered a Redis hot spot and replaced it with sharding, illustrating *Dive Deep*. The quantitative lift in NDCG and cost savings demonstrates *Deliver Results*, while the iterative CI/CD loop shows *Bias for Action* and continuous learning from failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
