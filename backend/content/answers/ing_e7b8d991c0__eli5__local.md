---
qid: ing_e7b8d991c0__eli5__local
question: 'Explain: Top 6 Load Balancing Algorithms'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 377
total_tokens: 534
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:42:29-05:00'
sources: []
---

Imagine a busy coffee shop that serves many customers at once. The barista (the “load balancer”) decides which order to hand off to each espresso machine so the line stays short and everyone gets their drink on time. In computing, the same idea keeps data or requests spread evenly across servers.

**1. Round‑Robin** – Like a waiter passing orders one by one around the machines in a fixed circle. Every server gets its turn regardless of current load.

**2. Least Connections (or “Least Busy”)** – Think of the barista checking which machine has the fewest cups on its counter and sending the next order there. The server with the lightest workload takes the new job.

**3. Weighted Round‑Robin** – If one machine is faster, we give it more turns. It’s like a waiter giving a quicker espresso maker twice as many orders in each round.

**4. Weighted Least Connections** – Combines speed and current load: the barista prefers fast machines but also checks how busy they are before assigning a new order.

**5. Random** – The barista randomly picks any machine, like tossing a coin for each order. Simple, but can create uneven queues over time.

**6. IP Hash (or “Consistent Hashing”)** – Each customer’s phone number is turned into a “hash” that points to a specific machine. This keeps the same customer always served by the same espresso maker unless a new machine joins or one leaves—helpful for session‑based services.

These algorithms are the shop’s ways of making sure no single server gets overwhelmed while all customers enjoy their coffee (or data) promptly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
