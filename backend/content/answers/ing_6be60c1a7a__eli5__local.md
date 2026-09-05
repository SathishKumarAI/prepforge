---
qid: ing_6be60c1a7a__eli5__local
question: 'Explain: XII. Admin Processes — The 12-Factor App'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 457
total_tokens: 618
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:26:48-05:00'
sources: []
---

**Imagine a recipe book that you want to share with friends all over the world, no matter what kitchen they’re in.**  
A **12‑factor app** is like that recipe book: it keeps every ingredient (code, libraries, data) cleanly separated so the dish can be cooked anywhere without surprises.

1. **Codebase** – One copy of your recipe on a version‑control server; each version gets its own branch.  
2. **Dependencies** – List all ingredients in a “requirements.txt”; never bake with leftovers from someone else’s pantry.  
3. **Config** – Keep spices (API keys, database URLs) in environment variables, not in the recipe itself.  
4. **Backing services** – Treat databases or message queues as separate appliances you plug into the kitchen.  
5. **Build → Release → Run** – Bake once, package it, then serve it on any stove without touching the batter again.  
6. **Processes** – Run your ML model in stateless worker processes that can be restarted or scaled instantly.  
7. **Port binding** – The app listens on a specific port; you just expose that port to the world.  
8. **Concurrency** – Spin up more workers when the kitchen gets busy.  
9. **Disposability** – If a worker crashes, it’s like a stove going out—just start another one immediately.  
10. **Dev‑to‑Prod parity** – Your test kitchen should use the same tools as the real one; no hidden differences.  
11. **Logs** – Treat output as a stream of text that can be collected by a central logger, not saved in files.  
12. **Admin processes** – Run one‑off tasks (like data migrations or model retraining) as separate “admin” jobs that share the same environment but don’t stay running.

With these 12 rules, your ML app behaves predictably, scales smoothly, and can be deployed anywhere—from a laptop to a cloud cluster—just like a well‑written recipe shared with friends worldwide.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
