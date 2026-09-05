---
qid: ing_78055043c2__eli5__local
question: 'Explain: Build a rate limiter for an API gateway: per-key token bucket
  first, then extend it to multiple gateway instances.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 208
total_tokens: 380
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:46:57-05:00'
sources: []
---

Imagine every user key has its own small water tank (the **token bucket**).  
Each time a request comes in the tank must have at least one drop of water (a token) to let the request pass. The tank is refilled slowly—say, one drop per second—so users can make bursts of requests up to the tank’s capacity but cannot keep pouring forever.

When you add more gateway servers, each server could have its own tank and users would see a different limit depending on which server they hit. To share the same limits across all gateways, let every server talk to a single “water reservoir” that keeps track of each key’s bucket state. Each request first asks the reservoir: “Do you have a drop for this key?” The reservoir updates the bucket and tells the gateway whether to allow or reject the call. Thus, all instances see identical limits while still allowing quick bursts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
