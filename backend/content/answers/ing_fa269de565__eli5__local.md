---
qid: ing_fa269de565__eli5__local
question: 'Explain: VIII. Concurrency — The 12-Factor App'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 251
total_tokens: 412
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:10:52-05:00'
sources: []
---

Think of a 12‑Factor App as a **restaurant kitchen** that runs a machine‑learning model.  
*Concurrency* is the way the kitchen serves many customers at once without overloading the stove.

1. **Process isolation** – Each dish (a request to your model) gets its own “cook” (process). In the 12‑Factor world you run multiple processes of the same app, each one independent and stateless.  
2. **Statelessness** – The cook never keeps a secret recipe on their desk; instead they pull it from a shared pantry (a database or file system) every time. That way any new cook can step in instantly.  
3. **Horizontal scaling** – If the line gets long, you simply add more cooks. In practice you spin up more containers or VM instances that all run the same code.

So concurrency in a 12‑Factor ML app means: keep each request in its own isolated process, share no internal memory, and let the system automatically spawn more workers to handle load—just like adding chefs when diners arrive.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
