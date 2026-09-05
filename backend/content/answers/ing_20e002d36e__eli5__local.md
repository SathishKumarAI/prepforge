---
qid: ing_20e002d36e__eli5__local
question: 'Explain: Pros of Vertical Scaling — Vertical vs Horizontal Scaling | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 239
total_tokens: 401
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:28:53-05:00'
sources: []
---

Think of a single‑room bakery that can bake more cupcakes by adding a bigger oven, better mixers, and stronger ovens—this is **vertical scaling**. In machine learning it means giving one server more CPU cores, RAM, or faster GPUs so your training or inference jobs run faster.

**Why this works well for ML**

- **Simplicity:** You keep all data and code in one place; no need to split the model across machines.  
- **Speed of communication:** Inside a single machine latency is tiny, so layers of a neural net can exchange tensors instantly.  
- **Cost‑effective for small projects:** Upgrading a powerful GPU card or adding RAM is often cheaper than buying and managing many servers.  
- **Ease of debugging:** With everything in one box you can step through the training loop, profile memory, and fix bugs without worrying about network issues.

So, if your workload fits comfortably on one machine, vertical scaling gives you quick, straightforward performance boosts—just like upgrading a single oven to bake more cupcakes faster.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
