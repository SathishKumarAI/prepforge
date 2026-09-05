---
qid: ing_d3baffb0f2__eli5__local
question: 'Explain: Pattern 1: Load Balancer with Multiple Backends'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 207
total_tokens: 367
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:10:42-05:00'
sources: []
---

**Pattern 1: Load Balancer with Multiple Back‑Ends**

Think of a busy pizza restaurant that has several ovens (the back‑end servers). A *load balancer* is the host at the front desk who decides which oven gets each new order. The host keeps track of how many pizzas are baking in each oven and always sends the next order to the least busy one, so no single oven becomes a bottleneck. If an oven breaks, the host simply stops sending orders there and redirects them elsewhere, keeping the kitchen running smoothly.

- **Load balancer**: A piece of software that receives incoming requests and forwards them to servers in a balanced way.  
- **Back‑ends (servers)**: The actual machines or services that process the requests.

By sharing work evenly, this pattern improves speed, reliability, and scalability for any web application.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
