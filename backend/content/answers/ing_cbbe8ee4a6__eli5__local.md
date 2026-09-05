---
qid: ing_cbbe8ee4a6__eli5__local
question: When Does Cleanup Happen? — CachesExplained \u00b7 google/guava Wiki \u00b7
  GitHub
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 219
total_tokens: 394
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:57:50-05:00'
sources: []
---

Imagine your kitchen has a pantry (the cache) that holds ingredients you often use. Every time you grab something, the pantry remembers where it came from and how long it should stay fresh. The pantry’s cleaning crew doesn’t work all the time; they come at set intervals or when certain conditions are met.

In Guava’s Cache, “cleanup” is that cleaning crew. It runs automatically in a few ways:

1. **Size limits** – if the pantry gets too full, it removes the oldest items.
2. **Expiration** – after a set time, items become stale and are swept out.
3. **Explicit calls** – you can ask the crew to clean up right now with `cleanUp()`.

The crew works quietly in the background whenever the cache is accessed or when a scheduled check runs. So cleanup happens either automatically during normal use (when limits or expirations trigger) or on demand if you call it yourself.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
