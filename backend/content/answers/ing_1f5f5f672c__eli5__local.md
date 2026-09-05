---
qid: ing_1f5f5f672c__eli5__local
question: 'Explain: So what do you do? One of — System Design BASICS: Horizontal vs.
  Vertical Scaling'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 208
total_tokens: 377
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:25:51-05:00'
sources: []
---

Think of a kitchen that needs to bake many cakes at once.  
**Vertical scaling** is like adding a bigger, faster oven to the same counter space – you’re giving one machine more power so it can cook more cakes in the same time. It’s simple but eventually you hit a limit: the counter (hardware) or the oven’s maximum size.  

**Horizontal scaling** is like setting up several smaller ovens side‑by‑side, each baking its own batch of cakes. The kitchen stays the same size, but you can keep adding more ovens whenever demand rises. For machine learning systems, vertical scaling means upgrading a single server (more CPU, RAM, GPU), while horizontal scaling means running many servers in parallel and spreading data or tasks among them. Horizontal is usually cheaper to grow, more fault‑tolerant, and keeps the system flexible as workloads increase.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
