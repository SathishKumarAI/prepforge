---
qid: ing_3e46b271fd__eli5__local
question: 'Explain: Title: DistilBERT, a distilled version of BERT: smaller, faster,
  cheaper and lighter'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 207
total_tokens: 378
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:14:48-05:00'
sources: []
---

Imagine BERT as a huge, super‑smart library that can answer any question about text, but it’s so big you need a powerful computer and a lot of time to consult it. DistilBERT is like taking that library and making a concise, lighter‑weight version: it keeps the most useful books (key knowledge) and removes redundant copies, so reading and answering questions becomes faster and cheaper.

**How it works:**  
*Distillation* trains a smaller “student” model to mimic the larger “teacher” BERT. The student learns from the teacher’s softened answers—probability scores for each word—rather than just raw text. This teaches the student to capture the same patterns in fewer layers and parameters.

**Result:**  
A tiny, quick model that still understands language well enough for many tasks—ideal for phones or servers with limited resources.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
