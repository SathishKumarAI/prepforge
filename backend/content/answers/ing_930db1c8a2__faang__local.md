---
qid: ing_930db1c8a2__faang__local
question: Why RAG Over Fine-Tuning for Regulations?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 392
total_tokens: 624
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:26:28-05:00'
sources: []
---

**Clarify**  
You’re asking why Retrieval‑Augmented Generation (RAG) is preferred over fine‑tuning a large language model when dealing with regulatory content—i.e., strict compliance rules that change often and must be traceable.

Assumptions to confirm:  
- Regulations are frequently updated, requiring quick adaptation.  
- Auditors need evidence of source material for every answer.  
- The user base values interpretability over raw “black‑box” predictions.

**Approach**  
1. **Modularity** – keep the core model unchanged and plug in an external knowledge store.  
2. **Traceability** – each generated response can cite documents, satisfying audit trails.  
3. **Rapid updates** – simply refresh the document corpus; no retraining cycle is needed.

**Depth**  
RAG retrieves relevant regulatory text (e.g., GDPR clauses) and conditions a transformer on that context. Fine‑tuning would embed the entire regulation into weights, losing provenance and requiring weeks of GPU time for each update. RAG’s inference cost is linear in retrieved documents, whereas fine‑tuned models incur constant overhead but no audit evidence.

**Edge Cases**  
- **Document drift**: if a document changes after retrieval, answers may be stale—solve by versioning and timestamp checks.  
- **Sparse coverage**: some queries might retrieve nothing; fallback to a safe “not found” response or human review.

**Optimize & Communicate**  
Future improvements: use vector‑search for faster retrieval, cache recent queries, and integrate a compliance‑specific ranking layer. In the interview, I’d explain that RAG offers agility, auditability, and lower operational cost—key benefits for regulation‑heavy domains—while fine‑tuning sacrifices these properties for marginal performance gains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
