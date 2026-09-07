---
qid: ing_5112f44365__faang__local
question: 'Q7: How do you handle multi-tenant RAG systems?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 454
total_tokens: 690
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:52:49-05:00'
sources: []
---

**Clarify**  
*Restate*: “We need to design a Retrieval‑Augmented Generation (RAG) pipeline that safely serves multiple tenants—each with their own data, privacy constraints, and SLAs.”  
*Assumptions*:  
- Tenants are isolated at the data level.  
- Shared LLM inference engine but separate retrievers.  
- Need auditability and low cross‑tenant leakage risk.

**Approach**  
1. **Tenant‑aware index partitioning** – create a dedicated vector store per tenant (or use tenant tags).  
2. **Secure retrieval layer** – enforce RBAC + query sandboxing; filter out cross‑tenant vectors at query time.  
3. **LLM prompt isolation** – prepend tenant context to prompts; optionally fine‑tune a lightweight adapter per tenant.  
4. **Monitoring & audit** – log retrieved docs, generated tokens, and any violations.

**Depth**  
- Use a multi‑tenant vector store (e.g., Pinecone namespaces or Chroma with tenant IDs). Complexity: O(log N) retrieval; memory overhead linear in tenants.  
- Retrieval guard: pre‑filter by tenant ID before scoring to avoid accidental leakage.  
- Prompt injection protection: sanitize user input, use prompt templates that embed tenant tags.  
- Fine‑tuning adapters (LoRA) keeps base model shared while tailoring responses.

**Edge Cases**  
- Shared documents between tenants → duplicate vectors with distinct IDs; enforce strict access control.  
- Sudden spike in one tenant’s queries → throttle to protect others.  
- Data deletion requests → immediate purge of vectors and cache entries.

**Optimize & Communicate**  
- Cache top‑k results per tenant to reduce latency.  
- Periodically rebuild indexes offline for freshness without downtime.  
- Explain design: “We isolate data at the index level, gate retrieval by tenant tags, and keep a shared inference engine to balance cost and performance.”  

This structure shows clear problem framing, methodical planning, technical depth, edge‑case awareness, and concise communication—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
