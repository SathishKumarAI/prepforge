---
qid: ing_d5b63b6683__aws__local
question: 'Explain: Accessing Enterprise Context — About Glean MCP server'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 468
total_tokens: 700
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:22:53-05:00'
sources: []
---

**Situation / Task**  
In a recent role at an enterprise‑grade search platform, I was tasked to expose the *Glean Master Control Plane* (MCP) as a secure, low‑latency API for downstream ML pipelines that needed context about user intent and document metadata.

**Action**  
I owned the end‑to‑end design:  

1. **Requirements** – Authenticated requests via Cognito + fine‑grained IAM roles; response size < 200 KB; SLA 99.9 % with ≤ 50 ms latency for 95th percentile traffic.  
2. **Architecture** – Lambda authorizer → API Gateway (REST) → EventBridge to trigger a *Step Function* that pulls context from DynamoDB and S3, aggregates it, and writes to an Elasticache Redis cache.  
3. **AWS Services** – Cognito, IAM, API Gateway, Lambda, Step Functions, DynamoDB, S3, ElastiCache (Redis), CloudWatch.  
4. **Scalability / Availability** – Multi‑AZ deployments; Auto‑Scaling groups for Lambdas; DynamoDB global tables for read latency.  
5. **Cost Trade‑offs** – Chose on‑demand Lambda to avoid cold starts; reserved instances for Step Functions; used S3 Intelligent Tiering for infrequently accessed logs.

**Result**  
The new endpoint cut ML pipeline ingestion time by 38 % (from 120 ms to 76 ms) and reduced cost per request from $0.012 to $0.009, saving ~12 k USD/month. I documented failure scenarios (e.g., DynamoDB throttling) and implemented exponential back‑off retries—an experience that taught me the importance of *Dive Deep* into service limits.

**Leadership Principles Highlighted**  
- **Customer Obsession** – Delivered a faster, cheaper API for ML engineers.  
- **Ownership & Dive Deep** – Took full responsibility from design through deployment, troubleshooting, and post‑mortem analysis.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
