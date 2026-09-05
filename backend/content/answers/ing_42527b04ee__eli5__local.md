---
qid: ing_42527b04ee__eli5__local
question: 'Explain: Now comes the interesting bit. We are — Detecting anomalies using
  Isolation Trees: Practical Machine Learning'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 207
total_tokens: 376
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:21:33-05:00'
sources: []
---

Imagine a forest of tiny trees planted in a garden where each plant is a data point—like a customer’s purchase record or a sensor reading. An **Isolation Tree** is a simple decision tree that splits the garden randomly: first it chooses a random line (a feature) and a random distance along that line, then cuts all plants on one side from those on the other. It keeps doing this until each plant stands alone.

Because “anomalies” are rare and oddly shaped, they get separated by a cut very quickly—after only a few steps—while normal plants stay tangled together for many more splits. By building many such trees (a forest) and averaging how deep each plant ends up, we get an **isolation score**: shallow depth means “I’m unusual!” This is anomaly detection without needing to learn a complex pattern—just random cuts that isolate the odd ones fast.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
