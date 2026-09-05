---
qid: ing_a8be0d082e__eli5__local
question: 'Explain: Calculate usage — system-design-primer/solutions/system_design/twitter/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 187
output_tokens: 264
total_tokens: 451
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:05:32-05:00'
sources: []
---

Imagine you’re running a huge, busy kitchen (Twitter’s backend) and you need to know how many chefs (servers), ovens (databases), and ingredients (data items) you’ll need at any time. **Calculating usage** is like doing the kitchen’s “inventory check” before each meal rush.

1. **Count the dishes** – First, estimate how many tweets per second the service will handle (the “orders”).  
2. **Break it down by type** – Tweets go to a write‑through cache, a message queue, and finally a database. Each step has its own capacity needs.  
3. **Add safety margin** – Multiply each number by 1.5–2× to cover spikes (like sudden viral posts).  
4. **Check the bottleneck** – The component with the lowest headroom is the one that will limit overall speed.

The result is a simple table of “servers, databases, caches” and how many you need per tier, just like a chef’s prep list ensures every dish can be served on time. This keeps Twitter smooth even when millions of users are typing at once.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
