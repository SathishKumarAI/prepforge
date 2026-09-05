---
qid: ing_b7feab26c2__eli5__local
question: 'Explain: Latency numbers — system-design-primer/solutions/system_design/pastebin/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 298
total_tokens: 488
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:29:01-05:00'
sources: []
---

Imagine you’re ordering pizza from a popular online app. The *latency* is the time it takes from when you hit “Place Order” to when the kitchen gets your request and starts cooking. In the system‑design primer’s pastebin example, latency numbers show how long each step in that chain takes.

- **Client → API Gateway**: Like sending a text message to the restaurant; usually quick (a few milliseconds).
- **API Gateway → Load Balancer**: The message is routed to one of many kitchen stations; this hop adds a bit more delay.
- **Load Balancer → Backend Service**: Think of the station actually reading your order. If the station is busy, it might wait—this can be tens or hundreds of milliseconds.
- **Backend → Database**: The kitchen checks its inventory (the database). Reading data from memory is fast; fetching from disk or network adds more latency.

The README lists typical numbers for each hop so you can see where a system spends most of its time. If the “Load Balancer → Backend” step takes 200 ms, that’s your bottleneck—you’d add more kitchen stations (scale out) to reduce it.  

In short: latency is the round‑trip time between parts of a distributed system, just like how long you wait for each leg of ordering and delivering your pizza.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
