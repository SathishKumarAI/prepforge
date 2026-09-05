---
qid: ing_6315a3afb2__eli5__local
question: 'Explain: Rethinking On-Policy Distillation of Large Language Models: Phenomenology,
  Mechanism, and Recipe'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 241
total_tokens: 413
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:13:06-05:00'
sources: []
---

Imagine a huge library (the big language model) that can answer any question but is slow because it has millions of books. A “distiller” is like a clever librarian who reads the whole library and writes a short summary book that captures most useful information—this is **knowledge distillation**. In *on‑policy* distillation, the summarizer only uses questions (the policy) it will actually answer in its own day‑to‑day work; it never pretends to answer random topics.

The paper says: “Rethink on‑policy distillation” means we should let the summarizer learn not just from the big model’s final answers but also from how the big model **behaves** while answering—its internal reasoning steps (phenomenology). The mechanism is a recipe: first, run the big model on real user queries; second, record both its answers and intermediate states; third, train the smaller model to mimic those states too. The result? A fast model that stays faithful to the original’s style without extra cost.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
