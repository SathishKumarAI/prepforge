---
qid: ing_8d7d4417e7__eli5__local
question: 'Explain: Clarifying Requirements — Design Load Balancer | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 255
total_tokens: 421
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:20:48-05:00'
sources: []
---

Imagine you’re a restaurant manager asked to build a new kitchen that can serve many diners at once. The first thing you do is ask the chef what *exactly* they need: How many dishes should the kitchen handle each hour? Do customers order quickly or slowly? Will some orders be huge and others tiny? This “clarifying requirements” step is just like that.

In a system‑design interview, before you draw the load balancer diagram, you ask the interviewer:

- **What traffic volume do we expect?** (e.g., 10 k requests per second)
- **How many servers will the balancer distribute to?**
- **Do all requests need equal time or are some heavy?**
- **Is latency a priority?**

These questions map directly to the load balancer’s design choices—round‑robin, least‑connections, weighted, health checks. Without knowing the numbers and priorities, you can’t pick the right algorithm or scaling strategy. So, just as a chef needs the menu details before cooking, a system designer needs clear requirements before balancing traffic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
