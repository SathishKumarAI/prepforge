---
qid: ing_85ff31837e__aws__local
question: 'Q: How do you handle multi-tenant data security in RAG?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 406
total_tokens: 640
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:27:40-05:00'
sources: []
---

**Situation & Task (S)**  
At my last role I led a team building a Retrieval‑Augmented Generation (RAG) platform for a SaaS client that served 300+ tenants. The product required strict isolation of each tenant’s data while still enabling fast, cross‑tenant knowledge retrieval.

**Action (A)**  
I introduced **AWS Key Management Service (KMS) with Customer‑Managed Keys (CMKs)** per tenant and used **Amazon S3 Object Locking + Bucket Policies** to enforce encryption-at-rest. For in‑memory caching I deployed **ElastiCache for Redis** with separate key namespaces, leveraging the `TENANT_ID` prefix so no data bleed occurs. Retrieval queries hit an **Aurora Serverless v2 PostgreSQL** database that uses row‑level security (RLS) policies tied to tenant IDs, guaranteeing isolation at the SQL level. To accelerate generation I wrapped the LLM in a **Lambda@Edge** function behind CloudFront, passing the tenant ID via signed cookies so only authorized requests reach the model.

**Result (R)**  
After deployment we saw a 40 % drop in data‑leak incidents and achieved < 50 ms latency for 95 % of queries. Cost per request fell by 25 % thanks to Aurora’s pay‑per‑use scaling. The architecture earned a “Zero‑Leak” compliance audit with zero remediation.

**Reflection (T)**  
I learned that *Ownership* means anticipating edge cases early; *Dive Deep* is evident in the RLS and CMK design; and *Bias for Action* drove me to prototype a multi‑tenant cache before full rollout. I now routinely review tenant isolation logs and iterate on key rotation schedules, ensuring we stay ahead of evolving security threats.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
