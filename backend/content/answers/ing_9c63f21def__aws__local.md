---
qid: ing_9c63f21def__aws__local
question: 'Explain: Security: ACLs and multi-tenancy — Rag And Retrieval'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 492
total_tokens: 725
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:18:31-05:00'
sources: []
---

**Situation / Task**  
I was tasked with building a secure, multi‑tenant RAG (Retrieval‑Augmented Generation) system for a SaaS client that handled highly sensitive documents across 50 orgs. The goal: enforce fine‑grained ACLs while keeping latency < 200 ms and cost < $0.02/query.

**Action**  
I architected a two‑layer approach:

1. **Document Storage & ACLs** – S3 with object tags (tenantId, accessLevel) + DynamoDB “ACL table” mapping userId → allowed tenantIds. Every request first queries DynamoDB (`BatchGetItem`) to validate access; if denied, we abort early.  
2. **Retrieval Engine** – Amazon Kendra indexes only the objects the caller can see (filtered by ACL tags). I leveraged *Kendra Query* with a `FilterExpression` that uses the tenantId tag, ensuring the index never exposes other tenants’ data. For the generation step, I used Bedrock’s Claude model via API Gateway, passing the retrieved context.

**Result**  
- **Security**: Zero cross‑tenant data leaks in 12 months (verified by quarterly penetration tests).  
- **Performance**: 95 % of queries completed < 180 ms; overall latency dropped from 350 ms to 190 ms.  
- **Cost**: Reduced S3 storage costs by 30 % with lifecycle policies and cut Kendra query spend by 25 % through tag‑based filtering.

**Reflection (Bar‑Raiser Lens)**  
I owned the end‑to‑end flow, diving deep into DynamoDB read capacity planning and Kendra filter semantics. Quantified impact is clear: security incidents avoided, SLA met, cost savings. After a failed early prototype that exposed data via a shared index, I learned to enforce ACLs at the storage layer first—a lesson now baked into our template for future RAG projects.  

*Leadership Principles*: **Ownership** (I drove the solution from concept to production), **Dive Deep** (engineered fine‑grained access controls), and **Deliver Results** (measurable security, performance, cost metrics).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
