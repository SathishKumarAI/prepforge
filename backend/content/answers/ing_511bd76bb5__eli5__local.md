---
qid: ing_511bd76bb5__eli5__local
question: 'Explain: Performance benchmarks — GitHub - anthropics/original_performance_takehome:
  Anthropic''s original performance take-home, now open for you to try! \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 187
output_tokens: 218
total_tokens: 405
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:45:38-05:00'
sources: []
---

Think of a machine‑learning model like a runner in a marathon that you can test on different courses.  
A **performance benchmark** is the official race record: it tells you how fast (accuracy, speed, memory use) the runner finishes on a set course that everyone agrees on.  
Anthropic’s “original performance take‑home” is their published record for a particular challenge. They put the data, the rules, and the scoring script into a public GitHub repo so anyone can run their own runner (model) on the same course and see if it beats the record.  

- **Model**: the runner’s body.  
- **Dataset**: the marathon route.  
- **Metric** (accuracy, F1, latency): how many checkpoints the runner hits correctly or how quickly they finish.

By running your own model against this benchmark you can compare apples to apples—just as a runner compares times on the same track.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
