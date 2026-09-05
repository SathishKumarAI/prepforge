---
qid: ing_8950602da9__eli5__local
question: 'Explain: Pattern 4: Circuit Breaker — Availability | System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 216
total_tokens: 377
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:14:21-05:00'
sources: []
---

**Circuit Breaker – a safety switch for your software**

Imagine you’re driving a car that keeps checking the engine’s temperature. If it suddenly goes too hot, the driver pulls a lever that immediately stops the engine and opens a valve to let cool air in. The car then waits until the temperature drops before it can start again.

In computing, a **circuit breaker** works the same way for services. It watches calls to another service (the “engine”). If those calls fail or take too long, the breaker trips: it stops forwarding requests and returns an error right away. While tripped, the system can try again later, giving the downstream service time to recover. Once the service is healthy, the breaker resets.

This simple switch keeps your whole application running even when one part flares up—just like a car that avoids burning out by cutting power temporarily.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
