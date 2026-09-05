---
qid: ing_bc14b62503__eli5__local
question: How Does Time Horizon Vary Across Domains?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 230
total_tokens: 387
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:35:22-05:00'
sources: []
---

Think of a machine‑learning project like planning a road trip.  
**Time horizon** is the distance you’re willing to drive before reaching your destination—short, medium, or long.  

In **finance**, the “road” is usually short: traders want predictions for the next minute or day, so the horizon is tiny and models must react instantly.  
For **healthcare**, the trip can be longer: predicting a patient’s recovery over weeks or months requires a broader horizon, but still needs timely updates.  
In **autonomous driving**, the horizon stretches further—cars anticipate traffic patterns days ahead to map routes, so the model looks far into the future.  

Each domain sets its own horizon because the cost of delay and the amount of data that changes over time differ. A short horizon means you need fast, frequent learning; a long one allows slower, more comprehensive training. The key is matching how far forward you look with what matters most in that field.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
