---
qid: ing_47dc3e2511__eli5__local
question: 'Explain: Latency vs throughput — GitHub - donnemartin/system-design-primer:
  Learn how to design large-scale systems. Prep for the system design interview.  Includes
  Anki flashcards. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 196
output_tokens: 198
total_tokens: 394
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:30:52-05:00'
sources: []
---

Think of a grocery store checkout line.  
**Latency** is how long it takes for one customer to get from the cashier to leaving the store—just that single trip. A quick line means low latency; a long wait means high latency.  
**Throughput** is how many customers can finish their shopping per hour—how busy the store can be overall. Even if each person’s trip is slow (high latency), the store might still serve many people in an hour (high throughput) by having more cashiers open.

In computing, *latency* measures the delay for one request to travel from start to finish; *throughput* counts how many requests a system can handle in a given time. Low latency feels instant, high throughput keeps the pipeline flowing. Both matter: you want quick individual responses and a steady flow of many responses.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
