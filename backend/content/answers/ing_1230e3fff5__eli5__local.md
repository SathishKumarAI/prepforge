---
qid: ing_1230e3fff5__eli5__local
question: 'Explain: 100x reduction in tsc instantiations — Release notes | Zod'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 272
total_tokens: 438
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:04:33-05:00'
sources: []
---

**What’s going on?**  
Zod is a TypeScript schema library that checks data at runtime. When you write many schemas, the compiler (tsc) has to *instantiate* each one—think of it as creating a tiny copy of the schema code so it can run. Before the update, every time you added a new schema, tsc had to redo this work over and over, which slowed builds like a car with a jammed engine.

**The 100‑× improvement**  
Now Zod uses a smarter “cache” trick: once it’s built a schema, it re‑uses that same compiled version for every place you use it. Imagine a chef who pre‑makes a sauce and then just heats it up whenever needed instead of cooking from scratch each time. This cuts the compiler’s workload by about one hundred times, so your projects compile much faster.

**Bottom line**  
If you’ve seen your TypeScript build slow down with Zod, this change will feel like switching from a clunky manual transmission to a smooth automatic—your code runs quicker without changing anything you write.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
