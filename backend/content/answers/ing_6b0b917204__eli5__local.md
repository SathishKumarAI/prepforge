---
qid: ing_6b0b917204__eli5__local
question: 'Explain: Cons — How to Implement Read Replica Pattern'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 223
total_tokens: 381
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:25:28-05:00'
sources: []
---

Imagine your machine‑learning model is a chef who prepares a huge batch of soup (the main training data). To serve many diners at once, you let the chef keep one pot on the stove and hand out spoonfuls from it—this is the “read replica.” The problem is that every time the chef adds new ingredients or tweaks the recipe, all the side pots must be updated too.  

**Cons of this pattern**

* **Lag (staleness)** – Side pots can be a few minutes behind the main pot, so diners might get slightly outdated soup.  
* **Complex sync** – Every change to the main pot needs an extra step to copy it over, which can fail or take time.  
* **Extra cost** – Running extra pots (servers) means more hardware and maintenance.  

In short, read replicas make serving many reads faster but add delay, synchronization headaches, and extra expense.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
