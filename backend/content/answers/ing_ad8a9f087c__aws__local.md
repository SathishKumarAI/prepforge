---
qid: ing_ad8a9f087c__aws__local
question: How do you achieve per-tenant isolation and data privacy in a multi-tenant
  RAG/agent SaaS?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 732
total_tokens: 974
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:57:58-05:00'
sources: []
---

**Situation – Problem**  
I was hired to launch a multi‑tenant Retrieval‑Augmented Generation (RAG) SaaS for enterprise clients that each required strict data isolation and GDPR‑level privacy. Early pilots showed that shared storage caused slow queries and audit logs were hard to correlate with tenants.

**Task – Goal**  
Design an architecture that guarantees tenant isolation, encrypts all customer data, scales to 10 k concurrent users, and keeps OPEX < $200K/yr.

**Action – Design & Implementation**  

| Requirement | AWS Service(s) | Why |
|-------------|----------------|-----|
| **Isolation** | *DynamoDB with partition key `tenant_id`* + *S3 bucket per tenant (bucket policy)* | Physical separation for logs; logical isolation for DB. |
| **Encryption at rest** | *KMS CMKs per tenant* | Enables per‑customer key rotation, audit via CloudTrail. |
| **Encryption in transit** | *API Gateway + TLS 1.2*, *VPC Endpoints* | Zero‑trust network, no public IPs. |
| **Compute** | *ECS Fargate* (CPU = 4vCPU, RAM = 8GB) + *Lambda* for lightweight inference | Autoscale on CPU/Memory; cost control via Spot. |
| **Observability** | *CloudWatch Logs with `tenant_id` filter*, *X-Ray* | Real‑time metrics per tenant. |
| **Compliance** | *AWS Artifact* (SOC 2, ISO 27001) + *GuardDuty* | Continuous monitoring. |

- Implemented **row‑level security** in DynamoDB using `ConditionExpression` on every query.  
- Added a **tenant‑specific KMS key** per tenant; keys are rotated quarterly via CloudWatch Events.  
- Deployed **S3 Object Lock** for immutable audit logs, backed by Glacier Deep Archive to meet retention policies.

**Result – Impact**  

| Metric | Before | After |
|--------|--------|-------|
| Query latency (95th %ile) | 1.8 s | **0.35 s** (5× faster) |
| OPEX per tenant | $30/yr | **$12/yr** (60 % savings) |
| Audit compliance score | 70 % | **98 %** |

**Reflection – Learning & Ownership**  

Initially we used a single S3 bucket, which caused contention and slow analytics. After reviewing failure logs, I advocated for per‑tenant buckets—an ownership move that reduced latency and simplified GDPR reporting. The trade‑off was higher storage costs (~$0.02/GB/month), but the savings in compute and compliance outweighed it.

**Leadership Principles Highlighted**

- **Ownership** – drove end‑to‑end redesign, from data model to cost optimization.  
- **Dive Deep** – quantified latency, cost, and audit metrics; iterated until thresholds met.  

This architecture now supports 10 k tenants with proven isolation, privacy, and cost efficiency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
