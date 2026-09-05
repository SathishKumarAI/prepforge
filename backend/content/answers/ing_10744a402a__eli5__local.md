---
qid: ing_10744a402a__eli5__local
question: You have 10 hours of demonstrations for a new task and budget for 50 more.
  How do you decide what to collect, and what return do you expect?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 220
total_tokens: 400
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:01:22-05:00'
sources: []
---

Think of your data as a garden.  
You already have 10 hours of “seed” plants (the demonstrations). Now you can spend 50 more hours planting new seeds, but you don’t know which ones will grow best.  

First, look at the weeds in the garden: what kinds of mistakes does the AI make now? Those are the areas that need fresh seed.  
Second, consider the soil’s “nutrient map”: if a particular type of example is missing (e.g., rare user intents), it’s worth investing more time there.  

So pick 30 hours for high‑error classes and 20 hours for under‑represented cases. The expected return? Roughly a 10–15 % boost in accuracy, because each new seed fixes a common mistake or fills a blind spot.  

In short: target the weak spots first, then balance with diversity; that’s how you turn extra hours into real performance gains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
