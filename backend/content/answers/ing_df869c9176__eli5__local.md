---
qid: ing_df869c9176__eli5__local
question: 'Explain: Common Security Risks — Agent Building Guide'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 233
total_tokens: 390
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:29:37-05:00'
sources: []
---

Imagine you’re giving a robot a recipe book (your “agent”) and letting it cook in the kitchen of your computer. The kitchen is full of tools that can be misused if the recipe isn’t written carefully.

**1. Insecure data handling** – If the robot stores its ingredients (training data) on a public shelf, anyone can peek or tamper with them.  
**2. Code injection** – A rogue chef could slip in a harmful line of code that the robot will follow blindly, like adding poison to the dish.  
**3. Over‑privilege** – Giving the robot access to every cupboard (file system) lets it steal secrets instead of just cooking.  
**4. Model poisoning** – If an attacker feeds bad ingredients into training, the finished agent learns dangerous habits.  

Protect your kitchen by: keeping data locked, sanitizing inputs, giving only the necessary tools, and monitoring the recipe for tampering. That way the robot stays safe and helpful.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
