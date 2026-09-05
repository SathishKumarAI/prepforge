---
qid: ing_1a76a684eb__eli5__local
question: 'Explain: Correcting Hallucinations — BigLaw Bench: Hallucinations | Harvey'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 202
total_tokens: 367
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:18:09-05:00'
sources: []
---

Imagine a courtroom where the judge (the model) has to decide whether a piece of evidence is real or fake. Sometimes, the judge’s imagination runs wild and “hallucinates” facts—claiming something that never happened. Correcting these hallucinations is like having a careful clerk who checks every claim against reliable records before it reaches the bench.

In machine‑learning terms, the model generates answers (like the judge). A *hallucination* is an invented piece of information that isn’t in the training data or real world. To fix this, we give the model “grounding” signals—extra references, memory of past conversations, or a database it can consult—to verify facts before replying. Think of it as giving the clerk a searchable library: each claim must be cross‑checked against trustworthy sources. This keeps the judge honest and the courtroom fair.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
