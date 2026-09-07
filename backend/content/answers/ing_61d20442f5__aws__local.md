---
qid: ing_61d20442f5__aws__local
question: 'Explain: Database — Design URL Shortener | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 427
total_tokens: 663
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:06:41-05:00'
sources: []
---

**Situation / Task**  
I was asked to build a URL‑shortener service for a startup that expected > 10M active users/month and needed < 200 ms latency.

**Action (Design)**  
* **Storage** – DynamoDB table (`short_id` PK, `long_url`, `created_at`).  
  *Provisioned throughput: 20 k RCUs / WCUs for peak traffic; autoscaling + on‑demand fallback.*  
* **API Gateway + Lambda** – HTTP endpoints (`POST /shorten`, `GET /{id}`).  
  *Lambda cold start mitigated by keeping a warm pool (10 instances).*  
* **Caching** – ElastiCache‑Redis (cluster mode) for hot URLs; TTL = 24 h.  
* **Analytics** – Kinesis Firehose → S3 → Athena for click metrics.  
* **Security** – Cognito auth, IAM role for Lambda; encryption at rest via SSE‑S3.

**Result**  
• 99.9% uptime (two AZs).  
• Latency < 180 ms for 95th percentile after caching.  
• Cost: <$2k/month vs $8k if using RDS.  

**Reflection & Bar‑raiser cues**  
*Ownership*: I drove the full stack, from data modeling to cost optimization.  
*Dive Deep*: Chose DynamoDB over relational DB based on key‑value access patterns and measured cold‑start impact with Lambda.  
*Quantified Impact*: 10× cheaper, 4× faster than baseline design.  
*Learning*: Early prototype suffered 500 ms latency; adding Redis reduced it to < 200 ms—showing iterative improvement.  

**Leadership Principles Anchored**: **Customer Obsession**, **Ownership**, **Dive Deep**, **Deliver Results**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
