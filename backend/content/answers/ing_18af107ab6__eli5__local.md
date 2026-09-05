---
qid: ing_18af107ab6__eli5__local
question: 'Explain: So for example, if you have your — Detecting anomalies using Isolation
  Trees: Practical Machine Learning'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 192
total_tokens: 361
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:15:04-05:00'
sources: []
---

Imagine a forest where every tree is built to catch a runaway animal. Each branch splits the land into two smaller plots, just like an *Isolation Tree* splits data points into groups based on random features and thresholds. The deeper you go down a branch, the more you narrow the plot; a rare animal (an anomaly) will find itself isolated in a tiny corner very quickly, while common animals stay mixed for longer.

The “height” of the tree path to that animal is the key: a short path means the point was isolated early—so it’s likely an outlier. By building many such random trees and averaging the path lengths, we get a reliable score telling us how unusual each data point is. No equations needed—just think of trees as quick, random ways to “catch” oddballs before they blend in.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
