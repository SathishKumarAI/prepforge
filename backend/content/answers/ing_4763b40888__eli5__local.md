---
qid: ing_4763b40888__eli5__local
question: 'Explain: Summary — Vertical vs Horizontal Scaling | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 232
total_tokens: 391
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:30:23-05:00'
sources: []
---

Think of a machine‑learning training farm as a kitchen that makes many batches of soup.

**Vertical scaling** is like upgrading the stove: you buy a larger, faster burner so each pot cooks quicker. You’re adding more power to a single workstation (CPU, GPU, RAM). It’s simple—just one pot, but it can burn hot and run out of space if you need many pots at once.

**Horizontal scaling** is like opening several kitchens side by side: you keep the same stove size in each kitchen but add more kitchens. Each kitchen cooks its own batch simultaneously. You now have many smaller stoves working together, so you can handle a larger total volume even if one stove stalls or breaks.

In ML terms:
- **Vertical** = beef up one server (more cores, GPUs).
- **Horizontal** = add more servers and split the data across them.

Choosing between them depends on how big your workload is and whether you need to keep adding resources or just upgrade a single machine.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
