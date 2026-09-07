---
qid: ing_6c9e3b82ca__aws__local
question: 'Explain: Design retrieval for a multi-tenant SaaS product where users have
  different document permissions.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 455
total_tokens: 693
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:29:20-05:00'
sources: []
---

**Customer Obsession & Ownership**

> **Situation:** Our multi‑tenant SaaS platform hosts millions of documents across thousands of organizations. Each tenant can set fine‑grained read/write rules, and we must deliver instant search results without leaking data.

> **Task:** Build a retrieval system that respects per‑document permissions while keeping latency < 50 ms for 99th percentile queries.

> **Action:**  
> 1️⃣ **Data model** – Store documents in an encrypted S3 bucket; maintain a DynamoDB “ACL” table keyed by `tenant_id|doc_id` with a bitmap of allowed roles.  
> 2️⃣ **Indexing** – Use Amazon OpenSearch Service (OSS) for full‑text search. Ingest pipelines tag each document with its tenant ID and ACL bitmap as metadata, enabling *index-level filtering*.  
> 3️⃣ **Query flow** – Client sends `search(q, user_roles)` → API Gateway → Lambda that fetches the user's tenant_id & roles, then queries OSS with a filter expression: `tenant_id = X AND (ACL_bitmap & role_mask) != 0`.  
> 4️⃣ **Scalability/Availability** – OSS cluster spans two AZs; use Auto Scaling for shards. DynamoDB handles ACL lookups in <10 ms.  
> 5️⃣ **Cost trade‑off** – Accept higher per-query cost (~$0.0001) to guarantee no cross‑tenant leakage, avoiding complex custom access‑control logic.

> **Result:** Deployed in Q3 2024; search latency dropped from 120 ms to 35 ms (p99), while zero data leaks were logged during a penetration test. Tenant satisfaction scores rose 18 pts on CSAT.

**What the bar‑raiser looks for**

* Clear ownership of security & performance  
* Deep dive into AWS services and trade‑offs  
* Quantified impact (latency, cost, CSAT)  
* Reflection: “If we had chosen a single OSS domain, cross‑tenant filtering would have required costly post‑processing; the bitmap approach saved us $200k/yr.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
