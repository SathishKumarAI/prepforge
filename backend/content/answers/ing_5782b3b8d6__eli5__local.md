---
qid: ing_5782b3b8d6__eli5__local
question: How do you evaluate your eval suite itself? What makes one good or bad?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 216
total_tokens: 379
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:55:17-05:00'
sources: []
---

Think of an evaluation suite like a weather‑forecasting test that trains on past storms and then checks how well it predicts new ones. The “goodness” of the suite is judged by three things:

1. **Coverage** – Does it include many different kinds of storms (tasks, data types, edge cases)?  
2. **Reliability** – If you run the test twice with the same model, does it give almost the same score? That’s its repeatability.  
3. **Relevance** – Do the scores actually tell you something useful about real‑world performance?  

If a suite covers only sunny days, repeats wildly when rerun, or rewards models that overfit to its quirks, it is bad. A good suite feels like a balanced weather station: wide coverage, consistent readings, and predictions that match what happens outside the lab.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
