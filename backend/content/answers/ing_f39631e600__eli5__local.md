---
qid: ing_f39631e600__eli5__local
question: 'Explain: Vertical Scaling — Vertical vs Horizontal Scaling | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 205
total_tokens: 365
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:00:05-05:00'
sources: []
---

Think of a library that needs to serve more readers.  
**Vertical scaling** is like adding a taller shelf: you keep the same bookcase but make it higher and stronger so it can hold more books in the same space. In computing, you upgrade the existing server—more RAM, faster CPU, bigger hard drive—so one machine does more work.  

**Horizontal scaling** is like opening another library branch next door: each new building has its own shelves, but together they share the workload. In software, you add more servers and split tasks among them.

In machine‑learning pipelines, vertical scaling is quick to set up for a single model training job, but if the data keeps growing or many models run simultaneously, horizontal scaling (adding GPUs or machines) becomes necessary to keep things fast and reliable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
