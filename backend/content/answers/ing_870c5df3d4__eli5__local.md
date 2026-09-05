---
qid: ing_870c5df3d4__eli5__local
question: 'Explain: have the exact data we want exact — Amazon System Design Interview:
  Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 201
total_tokens: 367
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:10:07-05:00'
sources: []
---

Think of building a smart parking garage like baking a cake where every ingredient must be measured exactly. In machine‑learning terms, the “exact data” you need are the precise measurements of how many cars arrive each hour, how long they stay, and which spots they use. Imagine you’re a chef who can’t afford to guess the sugar amount—if it’s too little the cake is flat; if it’s too much it bursts. Likewise, if your model trains on data that are off by even one minute or missing a few arrivals, its predictions about space needs will be wrong and drivers will get stuck. So in the Amazon interview, you must gather clean, timestamp‑accurate logs of parking usage, just as a baker would use a calibrated scale for every ingredient.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
