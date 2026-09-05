---
qid: ing_494c253d93__eli5__local
question: 'Explain: How streaming actually works: — ChatGPT System Design - by Neo
  Kim and Hayk'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 244
total_tokens: 411
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:33:15-05:00'
sources: []
---

Imagine a bakery that delivers fresh bread to customers every morning without waiting for everyone to place an order at once.  
**Streaming** is like that bakery: instead of loading all data into memory and then processing it in one big batch, the system receives a continuous flow of information—one piece at a time—and reacts immediately.

* **Data stream** = the line of bread dough coming from the kitchen.  
* **Consumer** (the ML model) takes each loaf as soon as it arrives, slices it, and sends it to the customer, then moves on to the next loaf.  
* **Back‑pressure** is like a signal that says “slow down” if the oven can’t keep up; it prevents the queue from overflowing.

In practice, a streaming ML system pulls data from sources such as sensors or social media feeds, processes each event in real time (e.g., updating a recommendation score), and writes results to a database or display instantly. This keeps latency low and lets the model stay current without ever holding the entire dataset in memory.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
