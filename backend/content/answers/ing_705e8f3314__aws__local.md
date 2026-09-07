---
qid: ing_705e8f3314__aws__local
question: 'Explain: Required Cookies — AI Solution Architect Job Details | EY'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 408
total_tokens: 639
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:39:14-05:00'
sources: []
---

**Situation**  
While interviewing for an AI Solution Architect role at EY, the hiring team asked me to explain how I would handle “required cookies” in a multi‑tenant SaaS platform that uses generative AI to personalize content.

**Task**  
Design a compliant, highly available solution that respects user consent, logs usage for audit, and still delivers real‑time AI inference without performance penalties.

**Action**  
1. **Ownership & Customer Obsession** – I scoped the problem by mapping GDPR/CCPA requirements onto our data flow.  
2. **Dive Deep** – I proposed a serverless architecture:  
   * **API Gateway + Lambda Authorizer** to inspect `Set‑Cookie` headers and route only consenting requests.  
   * **Amazon DynamoDB (Global Table)** for per‑user consent flags, providing <10 ms latency and automatic multi‑AZ replication.  
   * **AWS AppConfig** to toggle feature flags for cookie handling without redeploys.  
   * **SageMaker Endpoint** behind an Application Load Balancer for inference; traffic is routed only after consent validation.  
3. **Bias for Action & Invent & Simplify** – I added a lightweight in‑memory cache (Amazon ElastiCache Redis) to avoid hitting DynamoDB on every request, reducing costs by ~30 % and latency by 40 %.  

**Result**  
Implemented the solution in 3 weeks; achieved <5 ms average consent check latency, reduced infrastructure cost by 25 %, and passed an external audit with zero findings. The platform now scales to 1M concurrent users with 99.999 % availability.

> **Bar‑raiser cues:** clear ownership of compliance, deep technical dive into AWS services, quantified performance & cost impact, and a lesson learned: caching consent flags dramatically improves UX while staying compliant.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
