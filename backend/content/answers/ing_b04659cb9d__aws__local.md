---
qid: ing_b04659cb9d__aws__local
question: 'Explain: So let''s say if a lot of — Google Maps System Design Interview
  Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 448
total_tokens: 684
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:03:56-05:00'
sources: []
---

**Situation & Task**  
I was asked to design the core routing engine for a “Google‑Maps‑like” service that must serve millions of users worldwide with sub‑second latency while keeping costs under $5 M/year.

**Action – Technical Design**  
*Architecture*: A globally distributed, multi‑region Lambda layer caches road network graphs (DynamoDB + S3). Edge requests hit an API Gateway → Step Functions orchestrates:  
1. **Graph fetch** (DynamoDB read) – *O(1)* latency.  
2. **Shortest‑path compute** – a parallelized A* algorithm on an ECS Fargate cluster, auto‑scaling based on queue depth (SQS).  
3. **Result enrichment** – traffic & POI data pulled from Kinesis Data Streams and stored in Redshift for analytics.  

*Scalability*: Auto‑scale Lambda & Fargate based on CloudWatch metrics; DynamoDB provisioned throughput + auto‑scaling keeps 99.9% RPS.  
*Availability*: Multi‑AZ, multi‑region deployment with Route 53 latency routing; failover to a secondary region within 2 s.  
*Cost*: Spot instances for compute (~30 % savings), S3 lifecycle policies move stale graphs to Glacier ($0.004/GB). Estimated yearly cost: **$4.8 M**.

**Result**  
- Reduced average route latency from 350 ms to 120 ms (−65%).  
- Handled 2× traffic spike during peak hours with zero downtime.  
- Achieved 99.98% SLA, exceeding the target by 0.02%.  

**Reflection**  
I owned the trade‑offs between consistency and latency; after a first‑time outage I added a caching layer for stale data, learning that “Bias for Action” must be coupled with “Dive Deep” into failure modes. This design showcases ownership, data‑driven impact, and continuous improvement—key Amazon leadership principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
