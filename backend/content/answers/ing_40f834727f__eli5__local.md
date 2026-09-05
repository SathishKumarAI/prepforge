---
qid: ing_40f834727f__eli5__local
question: When will a load balancer (LB) will stop sending requests to a server?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 211
total_tokens: 376
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:19:11-05:00'
sources: []
---

Imagine a busy pizza kitchen where each oven is a server and the chef’s assistant is the load balancer. The assistant gives orders (requests) to ovens that are ready, but if an oven starts overheating or breaks down, the assistant will stop sending it new pizzas.

A load balancer stops forwarding traffic to a server when it detects that the server is **unhealthy**. It checks health by sending small “ping” requests—like the chef’s assistant asking, “Are you still working?” If the server fails these pings (times out, returns errors, or reports low capacity), the LB marks it as down and removes it from the rotation. Only when the server passes a new round of pings does the assistant give it orders again.

So, the load balancer stops sending requests to a server whenever that server fails its health‑check tests, ensuring traffic only goes to working ovens.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
