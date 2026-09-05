---
qid: ing_28d0c416a8__eli5__local
question: 'Explain: :star: Sliding Window algorithm — Ratelimiting'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 222
total_tokens: 383
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:40:21-05:00'
sources: []
---

**Sliding‑Window Rate Limiting – a traffic light for your API**

Imagine a highway with a toll booth that only lets **10 cars per minute** pass. Instead of counting every single car that ever crossed, the booth keeps a *sliding window*—a moving 60‑second tape. Each time a car arrives it writes “car at 12:34:56” on the tape and then deletes any stamps older than one minute. If there are already ten stamps in the last minute, the new car must wait (the booth says “too many cars now”).  

*Rate limiting* is this same idea applied to computer requests: you allow only a certain number of calls in a moving time window. The “window” slides forward with each request, always looking at the most recent period. This keeps traffic smooth without hard‑cutting old data—just like the toll booth never forgets cars that just left but also never counts cars from an hour ago.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
