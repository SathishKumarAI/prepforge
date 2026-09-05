---
qid: ing_1b075a87bc__eli5__local
question: 'Explain: HTTP Method Behavior — Idempotency | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 222
total_tokens: 382
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:19:00-05:00'
sources: []
---

Imagine you’re at a vending machine that sells gum.  
*GET* is like peeking at the display to see what’s inside—no gum leaves, no change happens.  
*POST* is the “buy” button: each press gives you another piece of gum and deducts money; pressing it twice gives two pieces.  

Now *PUT* or *DELETE* are special buttons that set the machine to a specific state. If you press *PUT* to set the quantity to 10, no matter how many times you hit it, the machine will always end up with exactly 10 pieces—no extra gum is added. That’s **idempotency**: performing the same action repeatedly produces the same result as doing it once.  

In web APIs, idempotent HTTP methods (GET, PUT, DELETE) guarantee that repeated requests won’t change the resource beyond the first execution, making systems easier to reason about and more resilient to network hiccups.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
