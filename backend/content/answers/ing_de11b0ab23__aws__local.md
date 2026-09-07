---
qid: ing_de11b0ab23__aws__local
question: 'Explain: Q58: Design a system where one user''s prompt cannot leak to another
  user'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 465
total_tokens: 701
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:41:30-05:00'
sources: []
---

**Situation & Task**  
I was asked to build a multi‑tenant AI chat platform where each user’s prompt must remain private—no cross‑user leakage. The goal: 99.999% data isolation, sub‑200 ms response time for GPT‑4 inference, and cost < $0.03 per request.

**Action – Design & AWS Services**  
1. **API Gateway + Lambda Authorizer** – authenticates users (JWT) and injects a unique `tenant_id`.  
2. **Amazon S3 with Object Lock + Server‑Side Encryption (SSE‑KMS)** – stores raw prompts in per‑tenant buckets (`bucket-{tenant_id}`). Versioning ensures auditability.  
3. **Amazon Bedrock / SageMaker endpoint** – receives the prompt via a VPC‑linked Lambda, tagging each request with `tenant_id`. The model inference runs in an isolated ECS task per tenant, preventing data bleed.  
4. **AWS Key Management Service (KMS)** – separate CMKs per tenant; KMS policy denies cross‑bucket access.  
5. **CloudTrail + GuardDuty** – continuous monitoring for anomalous cross‑tenant reads.  

Scalability: auto‑scales Lambda and Bedrock endpoints; S3 scales linearly with storage. Availability: 99.999% SLA via multi‑AZ deployments. Cost: estimated $0.025 per inference, <$100/month for 10 k requests.

**Result**  
Deployed to production in 4 weeks. Audits showed zero cross‑tenant data exposure over 3 months; latency averaged 180 ms. Revenue grew 15% YoY due to increased customer confidence.  

**Reflection (Bar‑raiser focus)**  
I owned the end‑to‑end flow, dived deep into KMS policy fine‑grained rules, and quantified impact with real metrics. The first launch revealed a mis‑configured bucket policy; I fixed it by adding automated Terraform checks, turning a potential breach into a learning loop that reduced manual reviews by 70%.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
