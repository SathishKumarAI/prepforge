---
qid: ing_31d2ba5b9b__eli5__local
question: 'Explain: L4, L7, and GSLB load balancers, explained'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 283
total_tokens: 448
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:54:37-05:00'
sources: []
---

Imagine you’re running a huge pizza‑delivery restaurant that serves three different cities—let’s call them City L4, City L7, and City GSLB.

**L4 load balancer (Layer 4)** looks only at the “address” of each order—like checking which phone number called. It forwards the call to any kitchen in the city that can cook a pizza, without caring what kind of pizza was requested. It’s fast but blind to details inside the order.

**L7 load balancer (Layer 7)** reads the entire message—like reading the menu item and toppings. It can send only pepperoni orders to the pepperoni kitchen, gluten‑free orders to the gluten‑free kitchen, and so on. It’s smarter because it understands the content of the request.

**GSLB (Global Server Load Balancer)** is like a regional dispatcher that knows where each city’s kitchens are located worldwide. When an order comes in from any country, GSLB routes it to the nearest city that can deliver quickly, balancing traffic across continents and ensuring customers get their pizza fast no matter where they live.

So: L4 = quick address‑routing, L7 = content‑aware routing, GSLB = global geographic routing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
