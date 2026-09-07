---
qid: ing_6d37548980__aws__local
question: 'Explain: Virtual keys and per-team identity — Llm Gateway And Serving Platform'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 476
total_tokens: 710
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:30:40-05:00'
sources: []
---

**Situation / Task**  
At my previous firm we built an LLM‑gateway that allowed multiple product teams to access a shared inference cluster while keeping each team’s data and usage isolated. The challenge was to give every team a “virtual key” that acted like a personal IAM role, yet didn’t require us to spin up separate AWS accounts or VPCs.

**Action**  
I designed a two‑layer identity system:

1. **Team Identity Service (TIS)** – A Cognito user pool stores `team_id` attributes and issues JWTs with custom claims (`role:LLMUser`).  
2. **Virtual Key Engine (VKE)** – Runs in Lambda, receives the JWT, validates it, then calls KMS to generate a short‑lived *virtual key* (a signed S3 pre‑signed URL + API Gateway token). The key is stored in DynamoDB with throttling limits and audit logs.

The gateway uses these keys to enforce per‑team rate limits, data masking, and billing. All traffic goes through API Gateway → Lambda → SageMaker Endpoint, so we keep the inference cluster single‑tenant.

**Result**  
- **Scalability:** 1 M requests/day handled with <200 ms latency.  
- **Cost:** Reduced per‑team VPC costs by 80% (from $4k to $800/month).  
- **Security:** Zero incidents in the first year; audit logs show >99.9% compliance with internal policy.

**Leadership Principles**  
*Ownership* – I scoped, designed, and deployed the entire stack without external hand‑offs.  
*Dive Deep* – I benchmarked Lambda cold starts vs. EC2, tuned KMS key policies, and used CloudWatch metrics to iteratively cut latency by 30%.  

Bar‑raisers listen for evidence of ownership, measurable impact, deep technical trade‑off analysis, and lessons learned (e.g., we initially underestimated Lambda concurrency limits, which forced a quick migration to provisioned concurrency).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
