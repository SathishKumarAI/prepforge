---
qid: ing_c1321c138e__aws__local
question: 'Explain: Internal APIs — What is an API? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 426
total_tokens: 659
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:40:16-05:00'
sources: []
---

**Answer – “What is an API?” (Internal APIs)**  

> **Situation:** While building a recommendation engine for our e‑commerce platform, we needed to expose user‑profile data to downstream microservices without exposing the underlying database schema.  
> **Task:** Design an internal REST/GraphQL API that delivers real‑time profile attributes while guaranteeing high availability and minimal latency.  
> **Action:** I defined a *resource‑centric* contract (GET /v1/users/{id}) and implemented it in a stateless Lambda behind an Application Load Balancer. The Lambda pulls data from DynamoDB Global Tables for cross‑region read consistency, caches hot users in ElastiCache‑Redis, and uses API Gateway’s throttling to protect downstream services. I added IAM role‑based access control (AWS Cognito) so only authorized microservices can call the endpoint.  
> **Result:** After deployment, API latency dropped from 350 ms to 70 ms (80 % improvement), while read throughput scaled to 50k RPS without any outages. The cost per request fell by 35 % due to efficient caching and serverless execution.  

**Leadership Principles Anchored**

- **Customer Obsession:** Designed for low latency and high reliability so that front‑end teams deliver a seamless user experience.  
- **Ownership & Dive Deep:** I own the entire API lifecycle, from contract definition to monitoring (CloudWatch metrics) and cost optimization.  

**Bar‑raiser cues**

- Demonstrated *ownership* by handling end‑to‑end design, deployment, and ops.  
- Showed *depth* through DynamoDB Global Tables, ElastiCache tuning, and IAM controls.  
- Quantified impact with latency & cost metrics.  
- Learned from a prior failure where caching was misconfigured; now I validate cache hit ratios before promotion to production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
