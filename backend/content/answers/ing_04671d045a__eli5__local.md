---
qid: ing_04671d045a__eli5__local
question: 'Explain: Cons of Horizontal Scaling — Vertical vs Horizontal Scaling |
  System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 231
total_tokens: 393
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:42:24-05:00'
sources: []
---

Think of a library that wants to read more books faster. **Vertical scaling** is like buying a bigger, stronger computer in the same room—more shelves, a faster printer, and a larger desk. It’s simple: you just add capacity to one place, so all the work stays together. The downside? The big machine can be expensive, fragile, and if it breaks, the whole library stops working.

**Horizontal scaling** is like opening new branches of the library in different neighborhoods. Each branch handles a slice of books, but they all share the same catalog system. This spreads the load and makes the library more resilient—if one branch goes down, the others keep going. However, coordinating many branches is harder: you need extra “traffic control” (load balancers), duplicate copies of data, and careful synchronization so everyone stays in sync.

So, vertical scaling is simple but risky; horizontal scaling is robust but needs extra management to keep all parts working together.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
