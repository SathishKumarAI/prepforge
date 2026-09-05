---
qid: ing_de6fff319e__eli5__local
question: 'Explain: Self-Distillation from Proof (SDP) — Knowledge Distillation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 223
total_tokens: 386
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:26:58-05:00'
sources: []
---

**Self‑Distillation from Proof (SDP)** is a way for an AI model to learn from itself by turning its own reasoning into a “proof” and then using that proof as a teacher.

Imagine you’re writing a math homework solution. First, you solve the problem on paper (the *student*). Then you read your own answer carefully, adding explanations and checking each step (the *proof*). Finally, you give this polished, annotated version back to yourself as a guide for the next time you tackle a similar problem. The original, unpolished solution learns from the improved, proof‑based version.

In AI terms, a neural network generates an output and a self‑constructed explanation of why that output is correct. That explanation is turned into a new training signal, teaching the same model to be more accurate and consistent. It’s like having your own teacher who knows you best, so the model keeps improving without needing external data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
