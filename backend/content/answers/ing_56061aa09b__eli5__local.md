---
qid: ing_56061aa09b__eli5__local
question: 'Explain: Core APIs — Design Load Balancer | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 230
total_tokens: 395
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:53:09-05:00'
sources: []
---

Imagine a busy restaurant that can only seat ten guests at once, but the waiter has a magical phone that lets him hear every table’s request—“I’d like pasta,” “Can I get a drink?” The waiter is the **load balancer**: it listens (API calls) and then decides which chef (server) will cook each order.

In an interview you’ll talk about three core APIs the waiter uses:

1. **Register / Deregister** – chefs call this to say “I’m ready” or “I’m taking a break.”  
2. **Route / Forward** – the waiter receives a customer request and hands it to the chosen chef.  
3. **Health‑check** – the waiter periodically pings each chef to make sure they can still cook; if not, he stops sending them orders.

These simple APIs let you build a robust system that balances traffic (orders) evenly while keeping the kitchen (servers) healthy and responsive.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
