---
qid: ing_6625017deb__eli5__local
question: 'Explain: Immediately, it can be marked as an — Detecting anomalies using
  Isolation Trees: Practical Machine Learning'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 204
total_tokens: 373
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:18:08-05:00'
sources: []
---

Imagine a forest where each tree is built by randomly picking a spot and cutting a branch there, then repeating that on the remaining pieces until everything is isolated. In machine learning, an **Isolation Tree** does exactly that: it keeps splitting data points at random until every point stands alone.  

An *anomaly* (a weird or rare observation) will usually get cut off very quickly because it sits far from most other points—just a few splits separate it from the rest of the forest. In contrast, normal points need many cuts to become isolated. By looking at how deep each point ends up in these trees, we can score its “oddness.” The deeper a point is, the more typical it is; the shallower, the more anomalous. This simple random-splitting trick turns complex data into an easily checked forest of isolation paths.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
