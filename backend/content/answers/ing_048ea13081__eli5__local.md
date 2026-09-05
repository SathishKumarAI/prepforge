---
qid: ing_048ea13081__eli5__local
question: 'Explain: So all those metrics are sent through — Detecting anomalies using
  Isolation Trees: Practical Machine Learning'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 245
total_tokens: 413
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:42:42-05:00'
sources: []
---

Imagine you’re a detective in a city where most people walk straight down the main street, but occasionally someone strays off into a maze of side alleys. To spot those odd wanderers quickly, you don’t need to study every person’s habits; instead, you build many random “paths” through the city—each path is an **Isolation Tree**. Each tree randomly chooses a street (a feature) and splits the crowd there, then splits again on another street, and so on, until everyone is isolated in its own little block.

The key idea: ordinary folks stay together for long stretches of the same streets; they need many random splits before being separated. A true anomaly—someone who takes a strange route—gets isolated after only a few splits because it’s already far from most people. By averaging across many such trees, you get a clear score: fewer splits = more unusual.

So, Isolation Trees are like a set of randomly drawn paths that quickly separate the oddball out of a crowd without needing to learn complex patterns—exactly what anomaly detection needs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
