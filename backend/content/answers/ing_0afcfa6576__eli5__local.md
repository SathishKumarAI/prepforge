---
qid: ing_0afcfa6576__eli5__local
question: 'Explain: if it doesn''t have that information for — Google Maps System
  Design Interview Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 252
total_tokens: 416
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:52:57-05:00'
sources: []
---

Imagine you’re building a robot that learns to navigate a city by watching other cars drive. The robot’s “machine learning” is like its memory‑bank of roads and turns it has seen before. When the robot reaches a new intersection it has never encountered, it says, “I don’t have enough information.” It can’t guess the best turn because its training data—photos, GPS traces, traffic signals—doesn’t cover that spot.

**Key terms:**
- **Machine learning (ML):** software that improves from examples instead of being told each rule.
- **Training data:** the set of past experiences the ML model has seen.
- **Generalization:** how well a model handles new, unseen situations.

In a Google‑Maps system‑design interview, you’d explain that the map service must keep a growing database of routes. If a user asks for a route through an uncharted area (no data), the system either falls back to generic road rules or prompts for manual input—just as our robot can’t decide without prior examples.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
