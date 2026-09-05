---
qid: ing_52e1d9c65d__eli5__local
question: 'Explain: Related patterns — Pattern: Saga'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 156
output_tokens: 269
total_tokens: 425
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:48:14-05:00'
sources: []
---

**Pattern: Saga (in machine learning / data pipelines)**  

Think of a saga like a long story that unfolds in chapters, each chapter representing a step of a data‑processing job. In a typical machine learning pipeline you might first clean the data, then train a model, evaluate it, and finally deploy it. If one chapter fails—say the training crashes—the saga pattern tells us how to “undo” the earlier steps (e.g., delete partially trained checkpoints) so that the whole story can start fresh or skip to another branch.  

- **Saga**: A sequence of local operations that together form a global transaction, with compensating actions if something goes wrong.  
- **Compensating action**: The opposite step that rolls back a previous operation (e.g., delete temporary files).  

By treating each pipeline stage as a chapter, the saga pattern keeps your data flow consistent even when errors happen, just like a well‑written story can recover from a plot twist and still finish happily.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
