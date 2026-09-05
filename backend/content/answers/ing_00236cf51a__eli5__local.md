---
qid: ing_00236cf51a__eli5__local
question: 'Explain: all of those spots are full and — Amazon System Design Interview:
  Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 211
total_tokens: 377
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:35:25-05:00'
sources: []
---

Imagine you’re building a giant, multi‑level parking lot for a city that’s always full of cars.  
Each “spot” is like a tiny box that can hold one car (a *resource*). When the lot gets crowded, you can’t add more boxes on the same level – they’re all occupied. The trick is to build extra levels or use a different layout so every new car still finds a spot.  

In Amazon’s System Design interview, this is a classic “parking‑garage” problem:  
- **Level** = storage layer (e.g., database partition).  
- **Spot** = individual entry in that layer.  
- When all spots on one level are full, you add another level or shift the layout to keep traffic moving smoothly.

So, just like a parking garage keeps cars moving by adding floors when needed, a distributed system scales by adding more storage layers when current ones fill up.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
