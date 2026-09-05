---
qid: ing_25c719f0a2__eli5__local
question: 'Explain: Two different latency numbers — Understanding latency | ElevenLabs
  Documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 202
total_tokens: 363
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:35:46-05:00'
sources: []
---

Think of a machine‑learning model as a kitchen that turns ingredients (data) into dishes (predictions).  
There are **two kinds of wait times** you’ll see:

1. **Inference latency** – the time from when the kitchen receives an order to when it hands back the finished dish. In ML, this is how long a single input takes to produce a result.  
2. **Queue latency** – the extra waiting period before the kitchen even starts cooking, because other orders are ahead in line. In cloud‑based ML services, many users share the same server; queue latency measures how long you wait for your request to reach the processor.

So, inference latency is the “cooking time” per order, while queue latency is the “time spent standing in line.” Both affect overall user experience but come from different sources.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
