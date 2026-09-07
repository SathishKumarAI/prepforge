---
qid: ing_4ee8dc4dea__aws__local
question: 'Q: How do you implement multi-tenant isolation in a RAG system?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 516
total_tokens: 751
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:23:53-05:00'
sources: []
---

**Situation (S)**  
At my last role I led a team that built a Retrieval‑Augmented Generation (RAG) platform for 12 SaaS customers, each requiring strict data isolation and GDPR compliance.

**Task (T)**  
Design a multi‑tenant architecture that guarantees **data confidentiality**, high throughput, and cost efficiency while meeting SLAs of < 200 ms latency per request.

**Action (A)**  
1. **Tenant‑level DynamoDB tables** with a `tenant_id` partition key; use *Global Secondary Indexes* to shard by model version.  
2. **Lambda authorizer + Cognito Identity Pools** inject the tenant ID into every request, ensuring all downstream calls carry it.  
3. **Step Functions orchestrate retrieval and generation**: each step tags its output with `tenant_id`, preventing cross‑tenant leakage.  
4. **VPC endpoints for S3** isolate storage of embeddings; encryption keys are per‑tenant via KMS aliases (`alias/tenant-<id>/embeddings`).  
5. **AWS App Mesh + sidecar proxies** enforce per‑tenant traffic quotas and rate limits, protecting against noisy neighbors.

**Result (R)**  
- Achieved 99.9 % availability across tenants while keeping average cost per request $0.02 (≈ 30 % lower than a shared‑table baseline).  
- Reduced data‑mixing incidents to zero; audit logs show 100 % compliance with GDPR “right‑to‑be‑forgotten” requests.

**Leadership Principles Highlighted**  
*Customer Obsession* – I built a system that meets strict privacy needs.  
*Ownership & Dive Deep* – I own the entire data flow and dissected every latency source to hit sub‑200 ms targets.

**Bar‑raiser cues**  
- Demonstrated end‑to‑end ownership, from IAM to App Mesh.  
- Quantified impact (cost savings, SLA compliance).  
- Showed depth by explaining trade‑offs: separate tables increase read capacity but isolate writes; per‑tenant KMS adds key‑management overhead yet guarantees isolation.

This design balances **scalability**, **availability**, and **cost** while ensuring that each tenant’s data never crosses borders.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
