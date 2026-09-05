---
qid: ing_2cd24eedc3__eli5__local
question: What goes wrong when training MoE models, and what's the inference memory
  caveat?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 200
total_tokens: 364
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:46:30-05:00'
sources: []
---

Imagine a classroom where each student (a *model*) has many tiny tutors (the *Mixture‑of‑Experts* or MoE). During training, you ask every tutor to help with the same question, but only one of them actually answers. The problem is that the tutoring center (the GPU) gets overwhelmed: it tries to keep all the tutors ready even though most stay silent, so memory and power waste grow faster than learning improves.

When you finally use the model, you’re like a teacher who wants to ask a question in real time. You still have to load every tutor’s notes into your head, because the system doesn’t know which ones will be chosen for that particular question until it has already spent memory on all of them. Thus inference can require huge amounts of RAM, even though only a handful of experts are active at any moment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
