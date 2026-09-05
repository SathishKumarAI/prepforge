---
qid: ing_cfd7b620a4__eli5__local
question: 'Explain: Title: TruthfulQA: Measuring How Models Mimic Human Falsehoods'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 218
total_tokens: 383
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:04:30-05:00'
sources: []
---

**TruthfulQA: Like a “Lie‑Detector” for AI**

Imagine you give every student in a classroom the same test, but the questions are about everyday myths (“Do cats really have nine lives?”). Some students answer honestly, others repeat the myth because they think it’s true or they heard it often. TruthfulQA works the same way for language models: we ask them many “myth‑type” questions and check whether they give factually correct answers or echo common but false stories.

- **Model** = a student who reads all the books (data) but might not know which facts are real.
- **Human falsehoods** = popular myths that people repeat without checking.
- **TruthfulQA score** = how often the model says “no, that’s wrong” instead of repeating the myth.

By measuring this, we learn whether a model is good at spotting and rejecting misinformation—just like a teacher checks if students can distinguish fact from folklore.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
