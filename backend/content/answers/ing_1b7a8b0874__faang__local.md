---
qid: ing_1b7a8b0874__faang__local
question: How do I build a multi-tenant RAG system safely?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 494
total_tokens: 729
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:48:51-05:00'
sources: []
---

**Clarify**  
You want a Retrieval‑Augmented Generation (RAG) pipeline that serves many isolated tenants without leaking data, while keeping latency low and scaling cost‑effectively.  
Assumptions to confirm:  
1. Each tenant has its own knowledge base (KB).  
2. Tenants can read/write only their KB.  
3. The model is a shared LLM (e.g., GPT‑4).  
4. Retrieval uses vector search over embeddings.

**Approach**  
1. **Tenant isolation layer** – tag every document and embedding with `tenant_id`.  
2. **Secure storage** – use encrypted, compartmentalized vector store (e.g., Pinecone namespaces or separate collections).  
3. **Query routing** – middleware intercepts request, injects `tenant_id` filter into the vector search query.  
4. **LLM prompt construction** – prepend a privacy policy header that instructs the LLM to use only data from the filtered context.  
5. **Audit & monitoring** – log all queries with tenant tags; run regular differential testing.

**Depth**  
- *Complexity*: Retrieval is O(log N) per tenant if using hierarchical indices; LLM inference remains constant across tenants.  
- *Trade‑offs*: Separate indices give strict isolation but increase storage cost; shared index with tenant filters saves space but needs careful cache invalidation.  
- *Security*: Use role‑based access control (RBAC) at the API gateway; encrypt embeddings at rest and in transit.

**Edge Cases**  
- A malicious tenant tries to inject a `tenant_id` that doesn’t exist → return empty results, log attempt.  
- Overlap of content across tenants → ensure prompt contains “only use data belonging to your tenant.”  
- Tenant deletes documents while they’re being retrieved → use versioned embeddings or soft‑delete flags.

**Optimize & Communicate**  
Explain that the design satisfies *confidentiality* (tenant filters + encryption), *integrity* (audit logs), and *availability* (caching per tenant). Highlight that adding a new tenant is O(1) – just create a namespace and ingest documents. This narrative shows structured reasoning, clear trade‑offs, and readiness for production concerns—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
