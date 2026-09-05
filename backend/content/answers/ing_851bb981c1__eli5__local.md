---
qid: ing_851bb981c1__eli5__local
question: 'Explain: Framework Overview — Rag Evaluation Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 155
output_tokens: 237
total_tokens: 392
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:07:47-05:00'
sources: []
---

Imagine you’re a detective who wants the best evidence from a huge library. **Rag evaluation patterns** are like different “search‑and‑check” strategies the detective can use.

1. **Retrieve‑then‑Answer (RAG‑S)**: The detective first pulls out a few books that look relevant, then writes an answer using those pages.  
2. **Generate‑then‑Retrieve (RAG‑G)**: The detective asks a clever assistant to draft an answer from memory, then checks the library for facts to confirm or fix any mistakes.  
3. **Hybrid**: Combine both—quick draft, quick check, refine.

In each case, “retrieve” means pulling data from external sources; “generate” means the AI’s own language model writing text. By alternating retrieval and generation, we keep answers fresh (up‑to‑date) while still letting the model use its learned knowledge. This framework helps AI stay accurate without needing to rebuild everything from scratch.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
