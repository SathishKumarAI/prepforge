---
qid: ing_0885e1f93a__eli5__local
question: 'Explain: Mixture of Experts (MoE) — Llm Papers Cheatsheet'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 224
total_tokens: 387
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:49:14-05:00'
sources: []
---

Imagine a big library where each book is an expert on a different topic—history, math, cooking, or poetry. When you ask the librarian a question, she first reads your query, then quickly decides which books (experts) are most relevant, and only opens those few pages to give you an answer. This is exactly how a **Mixture of Experts (MoE)** works in large language models.

**Key terms:**  
- **Expert:** A small neural network trained on a specific subset of data or skill.  
- **Gating network:** The “librarian” that looks at the input and chooses which experts to consult.  
- **Sparse activation:** Only a few experts are activated for each question, keeping computation low.

So MoE lets a single model act like many specialists: it asks the right expert for every query, making the whole system faster and more accurate while still being one cohesive AI.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
