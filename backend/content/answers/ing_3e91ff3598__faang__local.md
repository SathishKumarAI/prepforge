---
qid: ing_3e91ff3598__faang__local
question: Build RAG over a customer's documents where access control is row- and document-level.
  How do you guarantee a user never sees restricted content in an answer?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 502
total_tokens: 755
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:09:36-05:00'
sources: []
---

**Clarify**  
We’re building a Retrieval‑Augmented Generation (RAG) system that serves customer documents. Each document and each row can be flagged as *restricted* or *public*. The requirement: any user must never see content that is outside their clearance, even if the LLM’s prompt contains it. I’d confirm:  
- What are the authorization scopes? (e.g., role‑based, attribute‑based)  
- How are restrictions stored (metadata tags, ACL tables)?  
- Do we need real‑time revocation or batch updates?

**Approach**  
1. **Metadata‑driven filtering** – tag every chunk with a `visibility` label and the owning document ID.  
2. **Pre‑retrieval gate** – before a query is sent to the embedding index, filter candidate chunks by the user’s ACL set (using an inverted index or SQL view).  
3. **Post‑retrieval sanity check** – re‑validate that every chunk in the prompt satisfies the ACL; if not, drop it.  
4. **LLM prompt sanitization** – inject a system message: “Never answer about content you don’t have access to.”  

**Depth**  
- Store chunks in an Elasticsearch index with `doc_id`, `row_id`, and `access_level` fields.  
- Use a filter query (`terms` on allowed IDs) to limit search results.  
- Complexity: retrieval O(log N + k); post‑check is linear in k.  
- Trade‑off: extra storage for ACL metadata but guarantees zero leakage.

**Edge Cases**  
- **Concurrent revocation** – ensure cache invalidation or use a short TTL on the ACL list.  
- **Partial matches** – a chunk may contain both public and restricted text; split at row boundaries to avoid mixing.  
- **Prompt injection** – guard against user‑supplied prompts that try to force the model to reveal hidden content.

**Optimize & Communicate**  
We can cache the ACL set per session, batch prune the index with a “visibility” flag, and log every prompt sent to the LLM for auditability. I’d explain this flow in the interview, highlighting how filtering at three stages (indexing, retrieval, prompt) provides defense‑in‑depth and meets compliance guarantees.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
