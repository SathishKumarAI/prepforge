---
qid: ing_876be8e7e3__aws__local
question: 'Explain: Models | Sarvam API Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 357
total_tokens: 585
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:30:22-05:00'
sources: []
---

**Situation –** While leading a data‑science squad at my last role, we were asked to expose our proprietary ML models via a public “Sarvam” API so external partners could consume predictions for real‑time fraud detection.

**Task –** Build a scalable, secure, and highly available inference service that delivers < 50 ms latency and can handle 10k RPS during peak hours.

**Action –**  
- **Ownership & Bias for Action:** I scoped the solution in two phases—prototype with SageMaker endpoints, then production with API Gateway + Lambda.  
- **Dive Deep & Deliver Results:** Implemented a containerized model (PyTorch) on ECS Fargate, auto‑scaling based on CloudWatch metrics. Added a Redis cache layer to warm predictions for frequent inputs.  
- **AWS Services Used:** SageMaker for training, ECR for images, API Gateway (REST + WebSocket), Lambda for orchestration, DynamoDB for metadata, and CloudFront for edge caching.  
- **Scalability & Cost Trade‑offs:** Fargate reduced ops overhead; we achieved 95 % request success at < 48 ms latency while keeping spend <$1k/month vs $3k with EC2.

**Result –** The API was live in 4 weeks, served 12k RPS with 99.9 % availability, and cut partner onboarding time by 70 %. Post‑mortem analysis revealed a rare cold‑start issue; we added pre‑warm hooks, learning that “fail fast, learn faster” keeps the bar high.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
