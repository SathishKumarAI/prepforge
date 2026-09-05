---
qid: ing_a2fb395add__eli5__local
question: 'Explain: Why the multiple A record solution doesn’t work with GSLB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 231
total_tokens: 394
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:56:12-05:00'
sources: []
---

Imagine a road that leads to a big parking lot (the website).  
If the sign at the entrance says “Parking spot #1, #2, #3” and you can pick any one, it works fine for a single car.  
But when many cars arrive from different countries, each wants a *local* spot so they don’t have to drive far.  

Global Server Load Balancing (GSLB) is like a smart traffic‑control system that decides which parking lot (server) a car should go to based on its location. It needs a single “address” for each lot so it can send the car straight there.  
If you give the entrance multiple addresses (multiple A records), the system can’t tell which address belongs to which parking lot; it just sees several spots with no clear mapping and can’t route traffic correctly.  

So, GSLB requires one address per server so it can match a user’s location to the right spot.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
