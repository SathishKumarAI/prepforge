---
qid: ing_c8d8f862f6__eli5__local
question: 'Explain: How it works — Design Load Balancer | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 265
total_tokens: 431
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:53:44-05:00'
sources: []
---

Imagine a busy coffee shop that serves only one type of drink at a time. The barista can’t take all the orders because people keep arriving. A **load balancer** is like a friendly waiter who stands at the counter and hands each new customer to the next free barista, so nobody waits too long.

In computer systems, a load balancer sits between incoming user requests (the customers) and a group of identical servers (the baristas). It “balances” traffic by forwarding each request to a server that is least busy or most suitable.  
**Server health checks** are like the waiter asking each barista if they’re still working; if someone leaves, the waiter stops sending orders there.  
**Session stickiness** keeps one customer’s order on the same barista so their data stays consistent, just as a waiter might keep a regular at a favorite table.

The result is smoother service: no single server gets overwhelmed, response times stay short, and the system can grow by adding more servers—just like hiring more baristas.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
