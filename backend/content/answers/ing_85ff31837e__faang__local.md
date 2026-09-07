---
qid: ing_85ff31837e__faang__local
question: 'Q: How do you handle multi-tenant data security in RAG?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 504
total_tokens: 741
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:56:02-05:00'
sources: []
---

**Clarify**  
We’re asked how to secure *multi‑tenant* data when building a Retrieval‑Augmented Generation (RAG) system—i.e., ensuring that each tenant’s documents, embeddings, and generated outputs remain isolated from others. Key assumptions:  
- Tenants share the same compute & storage resources;  
- Data may be stored in a vector store (e.g., Pinecone, Milvus);  
- The LLM is hosted on a shared service or internal API.

**Approach**  
1. **Logical isolation** – tag every document/embedding with a tenant ID and enforce it at query time.  
2. **Physical separation for high‑risk data** – use dedicated storage buckets or separate vector indices per tenant when compliance demands.  
3. **Access control & audit** – implement RBAC on the API layer; log all read/write events with tenant context.  
4. **Secure embeddings** – encrypt vectors at rest and in transit, rotate keys per tenant.  
5. **Prompt sanitization** – strip any cross‑tenant identifiers before feeding to the LLM.

**Depth**  
- *Vector store*: most engines support “namespace” or “partition” concepts; use that for logical isolation. If unavailable, create separate indices.  
- *Encryption*: AES‑256 GCM keys stored in a KMS (e.g., AWS KMS), per‑tenant key rotation quarterly.  
- *Audit trail*: CloudWatch/Stackdriver logs with tenant ID; tamper‑evident hashes.  
- *LLM boundary*: If using an external provider, enforce zero‑knowledge policies—never expose raw documents.

**Edge Cases**  
- Tenant misconfiguration (missing tag) → default to deny or route to a safe “quarantine” index.  
- Performance hit from many small indices; benchmark latency vs isolation.  
- Cross‑tenant data leakage through prompt injection – test with adversarial prompts.

**Optimize & Communicate**  
Start with logical namespaces for speed, then move to physical separation if regulatory audits require it. Explain trade‑offs: more indices → higher storage cost but stronger isolation. Use a diagram in the interview to show the flow: tenant upload → tagged → encrypted → stored in namespace → query with tenant filter → LLM generation. This narrative demonstrates structured thinking and depth, key for FAANG scoring.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
