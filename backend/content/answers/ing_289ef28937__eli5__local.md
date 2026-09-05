---
qid: ing_289ef28937__eli5__local
question: 'Explain: Week 7-8: Dynamic Programming & Optimization'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 214
total_tokens: 374
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:40:04-05:00'
sources: []
---

Think of a hiking trip where you want the cheapest route to reach your cabin, but you can only carry a limited amount of supplies each day. **Dynamic programming** is like keeping a notebook at every campsite that records the least cost to get there from the start and how many supplies you have left. When you move to the next camp, you look back at the notebooks instead of re‑calculating all possible paths again—just add the new day's distance and check if you still have enough supplies.  

In **optimization**, you’re trying to find the best set of decisions (the cheapest path) given constraints (limited supplies). By filling out the notebook step by step, you build up a table that captures every partial solution; at the end, the entry for your cabin tells you the overall minimal cost and the exact route. This method turns an otherwise impossible exhaustive search into a simple, systematic calculation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
