---
qid: ing_489fef0a21__eli5__local
question: 'Explain: 1 Introduction — Rethinking On-Policy Distillation of Large Language
  Models: Phenomenology, Mechanism, and Recipe'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 220
total_tokens: 396
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:32:04-05:00'
sources: []
---

Imagine a giant library where each book is a huge language model (LLM). Teaching a new student to read the whole library is exhausting, so we give them a smaller “handbook” that captures the most useful passages. That handbook is *distillation*: copying knowledge from the big books into a leaner version.

*On‑policy distillation* means the student learns while reading the same stories the teacher does—so the handbooks stay in sync with current trends. The paper rethinks this by treating the process like a dance: the teacher and student move together, adjusting steps (parameters) so the student can keep up without lagging.

The authors first describe what happens inside (“phenomenology”), then explain why the dance works (“mechanism”), and finally give a step‑by‑step recipe for others to follow. In short, it’s a smarter way to hand off knowledge from massive models to smaller ones while keeping them dancing together on the same music.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
