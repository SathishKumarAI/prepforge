---
qid: ing_389080f7cc__eli5__local
question: 'Explain: DoorDash Algorithms — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 286
total_tokens: 444
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:05:42-05:00'
sources: []
---

Imagine you’re running a huge pizza‑delivery kitchen that can only serve one customer at a time. The goal is to keep every customer happy and the kitchen busy, so you need two simple rules:  

1. **Which pizza goes next?** – You look at how long each order has waited and how far the delivery driver is from the restaurant. The algorithm gives a score that balances “wait‑time” (to avoid unhappy customers) and “distance” (to keep drivers efficient). Think of it as a weighted tug‑of‑war: the longer an order waits, the heavier its pull; the farther a driver is, the lighter his pull.  

2. **Which driver should get which pizza?** – Here the algorithm uses the same tug‑of‑war but flips one side: instead of waiting time it considers how many pizzas a driver already has and how fast he can finish them. The best match is the one that keeps both sides balanced, so no driver sits idle while an order drags on.

In short, DoorDash’s “Faang‑style” questions ask you to build a simple scoring system that balances two competing priorities—customer wait time versus delivery efficiency—just like a tug‑of‑war that decides who gets the pizza next.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
