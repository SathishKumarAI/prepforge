---
qid: ing_82e7d81988__eli5__local
question: 'What is the rejection rate? — Cursor Software Engineer Interview: Process,
  Questions, and Prep Guide (2026) | Interview Coder'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 218
total_tokens: 393
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:04:16-05:00'
sources: []
---

**Rejection rate** is the fraction of cases that a machine‑learning system decides *not* to classify, because it isn’t confident enough or the input looks too different from what it was trained on.

Think of a customer‑service robot that answers emails. It can answer only if it’s at least 80 % sure about the reply. If an email is ambiguous or mentions something the robot never saw in training, the robot says “I’m not sure” and hands the email to a human instead. The proportion of emails sent to humans (instead of answered automatically) is the rejection rate.

A low rejection rate means the model confidently classifies most inputs; a high one means it’s cautious or poorly trained for many cases. Balancing this rate is key: too low, and you risk wrong answers; too high, and the system becomes useless.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
