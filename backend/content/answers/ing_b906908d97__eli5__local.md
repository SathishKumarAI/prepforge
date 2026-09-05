---
qid: ing_b906908d97__eli5__local
question: 'Explain: Mixture of Experts (MoE) — Llm Internals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 198
total_tokens: 360
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:30:36-05:00'
sources: []
---

Imagine a big library where each book is an *expert* in a different topic—history, math, cooking, etc. When you ask a question, the library’s “gatekeeper” (the router) quickly looks at your query and decides which books to consult. It then asks only those few experts for answers and stitches their snippets into one final response.

In AI, a **Mixture of Experts (MoE)** works the same way inside large language models.  
- **Expert**: A small neural‑network module trained on a specific type of data or pattern.  
- **Router**: A lightweight network that reads your input and selects which experts to activate.  

Only the chosen experts run, saving computation while keeping the model’s overall knowledge huge. The router’s choice is like picking the right books for your question—fast, efficient, and surprisingly accurate.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
