---
qid: ing_6c9e3b82ca__think__local
question: 'Explain: Design retrieval for a multi-tenant SaaS product where users have
  different document permissions.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 197
output_tokens: 465
total_tokens: 662
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T08:10:25-05:00'
sources: []
---

**1️⃣ Clarify the problem & assumptions**  
- *What is “retrieval” here?* I’ll assume it means searching indexed documents for a query.  
- *Who are the tenants and users?* Each tenant owns a set of documents; within a tenant, users have granular read/write permissions.  
- *What constraints matter?* Performance (low latency), correctness (no data leakage), scalability (many tenants).  

**2️⃣ Choose a mental model**  
Treat the system as two orthogonal layers:  
1. **Indexing layer** – builds searchable inverted indexes per tenant or globally with tenant tags.  
2. **Authorization layer** – filters results based on user permissions before returning them.  

**3️⃣ Step‑by‑step reasoning**  
- *Index design:* Add a `tenant_id` field to every posting so queries can be scoped cheaply (`WHERE tenant_id = ?`).  
- *Permission model:* Store per‑document ACLs (e.g., owner, group, explicit users).  
- *Query flow:*  
  1. User submits query → backend adds `tenant_id` filter.  
  2. Search engine returns candidate document IDs.  
  3. Authorization service checks each ID against the user’s ACL (cached or pre‑joined).  
  4. Only permitted docs are returned; others are silently dropped.  
- *Optimization:* Pre‑compute a “readable_by_user” bitmask or use materialized views for frequent users.  

**4️⃣ Avoid common pitfalls**  
- Don’t rely solely on client‑side filtering—data can leak if the backend exposes raw IDs.  
- Beware of “index bloat” if you store permissions in every posting; balance granularity vs size.  
- Ensure consistent tenant isolation even when using a shared search cluster (e.g., via query prefixes).  

**5️⃣ Sanity checks & communication**  
- Verify that a user cannot see documents from other tenants by testing cross‑tenant queries.  
- Explain to stakeholders: “We index per tenant and then filter results with ACLs; this guarantees no data leakage while keeping search fast.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
