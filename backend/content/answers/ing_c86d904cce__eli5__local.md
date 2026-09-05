---
qid: ing_c86d904cce__eli5__local
question: 'Explain: 4.3 Requirement 3: High Availability — Design Load Balancer |
  System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 266
total_tokens: 439
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:53:07-05:00'
sources: []
---

**High‑Availability with a Load Balancer – the “Traffic Cop” of your machine‑learning service**

Think of your model as a busy café that can serve only one customer at a time. If you open several cafés (servers) but send every customer to just one, the line will still be long and people will leave. A **load balancer** is like an invisible traffic cop standing outside the cafés. When a user sends a request (“I want predictions”), the cop looks at all cafés that are open and not already busy, then directs the request to the best one—usually the least crowded or fastest.

*Key terms*:  
- **Server**: A computer running your model.  
- **Instance**: One copy of that server.  
- **Health check**: The cop’s way of checking if a café is open (server responds).  
- **Failover**: If a café closes, the cop sends new customers to another one automatically.

By distributing traffic evenly and redirecting away from failed servers, the load balancer keeps your service running smoothly even under heavy load or when some instances go down.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
