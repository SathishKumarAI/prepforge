---
qid: ing_f7fa19ef95__eli5__local
question: 'Explain: Leaky Bucket — Rate Limiting Algorithms Explained with Code'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 260
total_tokens: 420
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:07:44-05:00'
sources: []
---

**Leaky‑bucket rate limiting is like a rain barrel that can only drip at a steady pace.**

Imagine you have a bucket that can hold up to 10 gallons of water (the “burst” capacity). Water pours in from the faucet whenever you want, but the bucket has a small hole that lets water leak out at a fixed rate—say 1 gallon per minute. If you pour more than 1 gallon each minute, the excess stays in the barrel until the hole empties it. Once the barrel is full, any new water (requests) gets turned away until some leaks out.

In code we keep two things:  
* **current** – how much “water” (pending requests) is inside now.  
* **lastTick** – when we last updated that amount.

Every time a request comes in we first drain the bucket based on elapsed time, then decide if there’s room for the new request. If yes, we add it; if not, we reject or delay it. This guarantees no more than our set drip rate over long periods while still allowing short bursts up to the bucket’s capacity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
