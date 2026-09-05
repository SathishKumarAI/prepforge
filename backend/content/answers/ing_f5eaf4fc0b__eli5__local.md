---
qid: ing_f5eaf4fc0b__eli5__local
question: 'Explain: Cache Warming — How Uber Serves Over 40 Million Reads Per Second
  from Online Storage Using an Integrated Cache'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 208
total_tokens: 380
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:04:11-05:00'
sources: []
---

**Cache warming** is like filling a pantry before a big party.  
Imagine Uber’s “online storage” (the database) as a massive pantry that holds every driver‑rating record. When the party starts—drivers and riders asking for ratings—pulling items straight from the pantry would slow everyone down, because the pantry sits far away and each request has to travel there.

Instead, Uber keeps a smaller, faster “side table” (the cache) right next to the kitchen. **Warming** means that before people arrive, Uber pre‑loads this side table with the most popular records from the pantry. So when a driver checks their rating, the answer is already in the side table—no long trip needed—and the kitchen can focus on new requests.

This technique lets Uber serve more than 40 million reads per second without overloading the distant pantry, keeping latency low and throughput high.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
