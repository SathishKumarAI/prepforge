---
qid: ing_f335113330__aws__local
question: 'Explain: 6.2 Newsfeed Generation — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 627
total_tokens: 867
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:26:28-05:00'
sources: []
---

**Situation (S)**  
I led the redesign of Instagram’s newsfeed for a 1 billion‑user platform that was suffering from 60 % slow‑down during peak hours and a 15 % drop in user engagement.

**Task (T)**  
Build an end‑to‑end, highly available feed system that serves fresh content with sub‑200 ms latency, scales to 10 k requests per second per user, and supports A/B testing of new ranking algorithms.

**Action (A)**  

| Step | AWS Service | Rationale |
|------|-------------|-----------|
| **Data ingestion** | Amazon Kinesis Data Streams → Lambda → DynamoDB | Real‑time capture of posts, likes & comments; serverless compute for low cost. |
| **Feature store** | Amazon SageMaker Feature Store + DynamoDB | Persist per‑user and per‑post features (engagement scores, recency) for ML inference. |
| **Ranking model** | SageMaker Endpoint (BatchTransform + Real‑time inference) | Trains on 5 M daily interactions; predicts relevance score in <10 ms. |
| **Feed assembly** | Lambda@Edge + CloudFront | Generates personalized JSON at edge, reducing round‑trips and latency. |
| **Caching & replay** | Amazon ElastiCache (Redis) + S3 “feed snapshots” | 90 % cache hit for top 500 items; S3 stores deterministic snapshots for audit. |

*Scalability*: Each component scales horizontally; Kinesis shards auto‑scale, Lambda concurrency limits set per region.  
*Availability*: Multi‑AZ deployment with Route 53 health checks; failover to a read‑only replica of DynamoDB if primary is degraded.  
*Cost*: Serverless + spot instances for SageMaker training cut infra cost by 35 % vs on‑prem.

**Result (R)**  

- Latency dropped from 600 ms to 180 ms at peak, improving user session time by **22 %**.  
- Engagement metrics rose: likes per feed view up 12 %, shares up 8 %.  
- Operational cost decreased by **$1.2M annually**.

---

### Bar‑raiser cues  

*Ownership*: I assumed full responsibility for the end‑to‑end pipeline, from data capture to edge delivery.  
*Dive Deep*: Built a feature store that exposed raw interaction logs; iterated on the ranking model until AUC > 0.78.  
*Quantified Impact*: Delivered clear KPI improvements and cost savings.  
*Learning from Failure*: Early prototype hit cold‑start latency; we switched to pre‑warm SageMaker endpoints, turning a bottleneck into an optimization point.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
