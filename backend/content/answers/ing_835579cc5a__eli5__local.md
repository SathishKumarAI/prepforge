---
qid: ing_835579cc5a__eli5__local
question: 'Q: What is the difference between circuit breaker and retry?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 174
total_tokens: 333
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:05:03-05:00'
sources: []
---

Imagine you’re calling a friend’s phone.  
A **retry** is like pressing “redial” when the call goes unanswered: you try again a few times hoping the line will open.  
A **circuit breaker** is like a smart home system that watches how many calls fail in a row. If too many fail, it automatically stops trying for a while—just as a circuit breaker trips to protect an overloaded wire.

So, retry keeps re‑trying until success or a limit; circuit breaker stops the attempts altogether after repeated failures, giving the system time to recover and preventing wasted effort.  

**Retry:** repeat a request after failure.  
**Circuit breaker:** pause all requests from a failing service for a set period.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
