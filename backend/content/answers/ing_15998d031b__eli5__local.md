---
qid: ing_15998d031b__eli5__local
question: 'Explain: Context — Pattern: Circuit Breaker'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 212
total_tokens: 369
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:09:41-05:00'
sources: []
---

**The Circuit‑Breaker pattern in machine learning**

Imagine your model is a busy kitchen that serves customers (predictions). If the oven breaks, you don’t want to keep trying to bake and burning the whole kitchen down. A *circuit breaker* watches the oven’s health:  
- **Closed** – everything works; predictions go straight through.  
- **Open** – the oven has failed repeatedly; the breaker trips, so instead of calling the broken oven you return a “service unavailable” message or a cached answer.  
- **Half‑open** – after a pause the system tries one more call to see if the oven is fixed.

In ML this pattern protects downstream services (like a model inference API) from cascading failures when an upstream data source or GPU cluster goes down, keeping the whole application alive while you fix the problem.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
