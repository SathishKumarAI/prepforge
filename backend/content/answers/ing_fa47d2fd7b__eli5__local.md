---
qid: ing_fa47d2fd7b__eli5__local
question: 'Explain: Detecting anomalies using Isolation Trees: Practical Machine Learning'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 221
total_tokens: 381
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:11:12-05:00'
sources: []
---

Imagine you’re at a crowded grocery store and you want to spot the one weird‑looking shopper who doesn’t follow the usual path—maybe they’re wandering in circles or stopping at odd aisles. An **Isolation Tree** is like a series of random questions you ask each shopper: “Did you just pick up a bag of chips?” “Are you heading straight for the dairy section?” Each answer splits the crowd into smaller groups until, eventually, that odd shopper stands alone. The fewer steps it takes to isolate them, the more unusual they are.

In machine learning, an Isolation Tree does exactly this: it randomly selects features (like aisle choices) and cuts (thresholds), building a tree where each node separates data points. Anomalies end up in short branches because only a few random splits can separate them from normal points. By averaging many such trees, we get a robust score that flags truly abnormal observations—just like finding the outlier shopper quickly without scanning everyone manually.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
