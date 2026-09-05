---
qid: ing_f23eae921c__eli5__local
question: 'Explain: 18 Scaling a Database — System Design: How to Scale a Database'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 224
total_tokens: 388
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:58:02-05:00'
sources: []
---

Imagine your database is a busy kitchen that serves meals (data) to customers (applications). When the restaurant gets more diners, you can’t keep cooking all dishes in one tiny oven; you must add more ovens and chefs. Scaling a database works the same way.

**Vertical scaling** is like upgrading to a larger oven—more powerful hardware lets the single kitchen handle more orders, but there’s a ceiling: eventually the oven becomes too big to fit or too expensive.  
**Horizontal scaling** adds new kitchens (servers) side by side. Each new kitchen handles a slice of the menu, and customers are directed to the right one. This is called **sharding**—splitting data into pieces that live on different servers.

A third trick is **replication**, where you duplicate the entire kitchen’s recipes in backup kitchens so if one burns out, others can keep serving without waiting. By combining these strategies—strong hardware, multiple servers, and copies—you let a database grow smoothly as demand rises.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
