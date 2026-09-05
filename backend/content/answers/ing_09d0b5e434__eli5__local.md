---
qid: ing_09d0b5e434__eli5__local
question: 'Explain: Example: — System Design: How to Scale a Database'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 247
total_tokens: 408
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:51:20-05:00'
sources: []
---

Imagine your database is a kitchen that serves recipes (data) to chefs (machine‑learning models). When the restaurant is small, one stove (single server) works fine. As more diners arrive, you need more stoves so every chef can cook at once. That’s **scaling**.

*Horizontal scaling* adds more stoves: you copy the kitchen layout and run many identical kitchens side by side. Each new stove handles a slice of the menu (partitioned data). The chefs share the workload, but they must know which stove has the recipe they need—this is called **sharding** or **splitting**.

*Vertical scaling* upgrades to a bigger stove: you give one kitchen more burners and memory so it can cook more dishes at once. It’s easier to set up, but there’s an upper limit—just like a single server has physical limits.

In practice, most systems use horizontal scaling with sharding because adding more servers keeps the load low per machine and avoids hitting hardware ceilings. The goal is to keep every chef fed quickly even as the menu grows.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
