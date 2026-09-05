---
qid: ing_78507ad911__eli5__local
question: 'Batch norm vs layer norm: how does each work, and why do transformers use
  layer norm?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 241
total_tokens: 407
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:47:22-05:00'
sources: []
---

Imagine a classroom where every student writes on a blackboard. **Batch‑norm** is like the teacher taking all the boards at once, measuring how bright each board is, then adjusting them so they all have the same average brightness and spread. It works best when many students (a “batch”) are present; if only one student shows up, the adjustment becomes unreliable.

**Layer‑norm** flips that idea: for each student’s own board, the teacher looks at every word written on it, calculates that board’s average and spread, and normalizes the whole page. This doesn’t depend on other students’ boards, so it works even when only one student (or a single “token”) is being processed.

Transformers use layer‑norm because they read sequences token by token, often in very small batches or even one at a time. Normalizing each token’s internal activations independently keeps the model stable and lets it focus on the relationships between tokens rather than on batch statistics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
