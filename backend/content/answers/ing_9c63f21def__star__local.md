---
qid: ing_9c63f21def__star__local
question: 'Explain: Security: ACLs and multi-tenancy — Rag And Retrieval'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 352
total_tokens: 591
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:44:53-05:00'
sources: []
---

**Situation:**  
At my previous company we launched a retrieval‑augmented chatbot for enterprise clients. Each client had their own data silo (legal documents, product manuals, policy PDFs) and the team needed to guarantee that no user could pull or see another tenant’s records while still keeping latency under 200 ms.

**Task:**  
I was tasked with designing an ACL‑based multi‑tenant retrieval layer that would enforce fine‑grained access controls, support dynamic role changes, and integrate with our existing vector store (Milvus) without compromising performance.

**Action:**  
First, I added a tenant ID column to every document vector and built an inverted index of user roles mapped to allowed tenant IDs. When a query arrived, the system intercepted it, queried the ACL service (Auth0) for the requester’s role set, then constructed a filtered boolean query against the vector index that only matched vectors with matching tenant IDs. I also implemented token‑based request throttling per tenant and cached frequent ACL checks in Redis to keep response times low. Finally, I wrote end‑to‑end tests simulating cross‑tenant access attempts and ran load tests on our staging environment.

**Result:**  
The new system passed all security audits with no data leakage incidents. Retrieval latency dropped from 350 ms to 180 ms, and we supported 12 concurrent tenants without scaling the vector cluster. I learned how ACL logic can be tightly coupled with vector search to provide both strong isolation and high performance in a multi‑tenant AI service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
