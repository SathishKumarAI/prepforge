---
qid: ing_236719fce2__eli5__local
question: 'Explain: Endpoint: PUT /config/algorithm — Design Load Balancer | System
  Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 240
total_tokens: 410
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:32:16-05:00'
sources: []
---

Imagine a busy coffee shop that serves different drinks (algorithms). The “PUT /config/algorithm” is like the manager’s order form: it tells the kitchen which recipe to use next time someone orders a latte (a new model version). In system design, this endpoint lets you update the *load balancer*—the waiter who decides which barista (server) gets each coffee request.  

**Endpoint** – the URL where you send the change request.  
**PUT** – an HTTP verb meaning “replace” or “update” a resource.  
**Load balancer** – software that distributes incoming traffic across many servers so no single one is overwhelmed.  

When you send a PUT with a new algorithm ID, the load balancer updates its routing table: future requests for that algorithm are sent to the newly trained model’s server, while old traffic keeps flowing to the previous version until it’s safe to retire it. This ensures smooth upgrades without downtime, just like a coffee shop switching recipes without stopping service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
