---
qid: ing_3dbf6afd2a__eli5__local
question: A customer insists on fine-tuning an open model on their support tickets
  because "we want our own model." You think RAG over their knowledge base solves
  it. What do you do?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 185
output_tokens: 183
total_tokens: 368
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:13:46-05:00'
sources: []
---

Think of the AI like a smart librarian who can answer any question about your company’s policies and past tickets.  
Fine‑tuning is like hiring a new librarian to rewrite every book in the library—time‑consuming, expensive, and risky because the new books might lose some useful information or get biased.  

Retrieval‑augmented generation (RAG) is simpler: keep the original librarian (the open model), but give them a search engine that pulls up the exact support tickets you need at query time. The AI reads those tickets on demand, just like a librarian pulling out relevant books while answering a question.  
So I’d recommend RAG: it preserves the powerful general knowledge of the base model and lets your team use their own data instantly, without rewriting the whole system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
