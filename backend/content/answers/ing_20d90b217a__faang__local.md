---
qid: ing_20d90b217a__faang__local
question: 'Explain: Design an enterprise assistant that answers questions over a company''s
  internal documents, respecting per-user permissions (Amazon Q-shaped).'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 474
total_tokens: 720
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:01:14-05:00'
sources: []
---

**Clarify**  
We need an *enterprise question‑answering assistant* that pulls facts from the company’s internal corpus (docs, tickets, wikis) while enforcing **per‑user access control** (the “Amazon Q‑shaped” model). Key assumptions:  
- Documents are indexed in a vector store; metadata includes ACLs.  
- Users authenticate via SSO and have a role‑based permission set.  
- The assistant must return concise answers, not full documents, and log queries for audit.

**Approach**  
1. **Auth & Policy Layer** – Intercept each request, resolve the user’s effective permissions (roles → allowed doc IDs).  
2. **Secure Retrieval** – Query the vector store with the question; filter returned vectors by ACLs before decoding.  
3. **LLM Inference** – Feed only authorized passages to a fine‑tuned LLM (or retrieval‑augmented generation) and let it generate the answer.  
4. **Audit & Logging** – Persist query, user ID, timestamp, and the exact documents used for compliance.

**Depth**  
- Use a *vector store* (FAISS/PGVector) with an ACL field; at search time perform a `WHERE acl IN (...)` filter.  
- Employ a lightweight prompt that includes “These are the only documents you may reference: …”.  
- Complexity: Retrieval O(log N), filtering O(k). LLM inference is linear in input size.  
- Trade‑offs: Tight ACL enforcement reduces hallucination but increases latency if many permissions must be checked.

**Edge Cases**  
- **Over‑granting**: A user’s role may inadvertently include a doc; audit logs help detect this.  
- **Zero results**: Return “I’m sorry, I don’t have that information.” with a note to request access.  
- **Concurrent updates**: Use optimistic locking on ACL metadata.

**Optimize & Communicate**  
- Cache frequent permission sets per session.  
- Batch multiple queries to reduce round‑trips.  
- Explain the flow in stakeholder demos: “User → Auth → Filtered Retrieval → LLM → Answer”, emphasizing that only authorized content is ever exposed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
