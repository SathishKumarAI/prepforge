---
qid: ing_d6e2acc356__aws__local
question: 'Explain: Featured Talks — Eugene Yan'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 522
total_tokens: 749
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:25:11-05:00'
sources: []
---

**Answer (Amazon‑style)**  

I once led a **Featured Talks** project for the internal “Machine Learning” conference series. The goal was to surface 200+ ML talks across 5 regions while keeping latency under 1 s and cost <$2k/month.

| **Situation** | I inherited an ad‑hoc script that pulled talk metadata from DynamoDB, rendered HTML on EC2, and sent email digests. It hit 15 % error rate during peak traffic and cost $8k/month. |
|---------------|--------------------------------------------------------------------------------------------------------------------------------------------------|
| **Task** | Deliver a scalable, highly available solution that reduces errors to <1 %, cuts cost by ≥75 %, and improves engagement (open rates). |
| **Action** | • Adopted *EventBridge* + *Lambda* for event‑driven ingestion. <br>• Stored talk metadata in *Amazon S3* (object versioning) and indexed with *OpenSearch* for fast search. <br>• Built a serverless API via *API Gateway* + *Lambda@Edge* to serve JSON feeds; used *CloudFront* caching (TTL 5 min). <br>• Implemented monitoring with *Amazon CloudWatch* metrics & alarms, and automated rollback via *AWS CodePipeline*. <br>• Ran A/B tests on email subject lines using *Amazon Pinpoint*, measuring open rate. |
| **Result** | • Latency dropped from 3.2 s to 0.8 s (95th percentile). <br>• Error rate fell to 0.4 %. <br>• Monthly cost reduced from $8k to $1.7k (78 % savings). <br>• Email open rate improved by 18 % due to better targeting. |

**Leadership Principles Reflected**

- **Ownership** – Took full responsibility for end‑to‑end pipeline, from ingestion to delivery.  
- **Dive Deep** – Analyzed logs to pinpoint latency bottlenecks; iterated on schema design and caching strategy.  
- **Deliver Results** – Quantified impact with concrete metrics (latency, cost, engagement).  

**Bar‑raiser’s Takeaway**

They’d look for evidence that I owned the problem, dug into root causes, quantified improvements, and learned from iterative A/B testing to refine both technical design and user experience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
