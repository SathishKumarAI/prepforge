---
qid: ing_92b41e6b69__eli5__local
question: What is RAG, and what problem does it actually solve?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 205
total_tokens: 365
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:30:25-05:00'
sources: []
---

Think of an AI writer as a chef who has a pantry full of ingredients (the model’s pre‑trained knowledge) but can’t always find the exact spice needed for a new recipe. **Retrieval‑Augmented Generation (RAG)** is like giving that chef a smart, searchable cookbook that pulls in fresh pages from the internet right when they’re cooking.

- **RAG** combines two parts:  
  1. *Retriever* – looks up relevant documents or facts based on the question.  
  2. *Generator* – writes an answer using both its own “taste” and the retrieved text.

The problem it solves is that a pure model can only use what it memorized during training, which may be outdated or incomplete. RAG lets the AI fetch up‑to‑date information on demand, so its answers stay accurate and grounded in real sources.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
