---
qid: ing_5e8297987e__eli5__local
question: 'Explain: Consistent hashing — Consistent Hashing Explained'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 217
total_tokens: 376
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:06:09-05:00'
sources: []
---

Imagine a big circular pizza board where each slice is a number from 0 to 99.  
**Consistent hashing** is like putting friends on this board so that when a new friend joins, only the slices near him change hands, not everyone’s.

Each *node* (like a pizza shop) sits at a random spot on the circle. A *key* (the food order) is also hashed to a spot on the same circle. The rule is simple: go clockwise from the key until you hit a node; that node will serve the order.  

If one shop closes or a new one opens, only the orders that fell between the old and new spots need to move. All other orders stay with their shops. This keeps the system balanced and reduces re‑routing—just like a pizza shop only takes back a few customers when a new shop opens nearby.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
