---
qid: ing_b9dd9039f9__eli5__local
question: 'Explain: VI. Processes — The 12-Factor App'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 372
total_tokens: 532
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:31:55-05:00'
sources: []
---

Imagine a bakery that wants every loaf of bread to taste the same no matter where it’s baked.  
The **12‑Factor App** is like the baker’s recipe book, written so any oven—home, factory, or cloud—can follow it exactly.

1. **Codebase** – One master cookbook (one Git repo).  
2. **Dependencies** – All ingredients listed in a “requirements” file; the oven pulls them automatically.  
3. **Config** – Seasoning is stored outside the recipe (environment variables), so you can change salt without rewriting the dough.  
4. **Backing services** – The water, flour, and yeast are separate suppliers that the bakery talks to via clear addresses.  
5‑8. **Build, release, run** – Baking steps are scripted; once baked, the loaf is shipped unchanged, no matter where it’s served.  
9. **Processes** – Every loaf is made by a single, stateless machine (a worker). If one fails, another picks up without remembering previous dough.  
10‑12. **Port binding, concurrency, disposability** – The bakery exposes its bread on a specific door (port), can open many doors at once, and closes any door cleanly when the day ends.

For a machine‑learning app, this means your model code lives in one repo, all libraries are listed, hyper‑parameters live outside the code, data services are separate, training runs as a single worker that never stores state locally, and you can scale workers up or down while keeping everything reproducible. The result? A reliable, portable “bread” that tastes the same wherever it’s served.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
