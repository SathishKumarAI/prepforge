---
qid: ing_d378d93e91__eli5__local
question: 'Explain: Load Balancer / API Gateway — Design Instagram | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 236
total_tokens: 403
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:10:14-05:00'
sources: []
---

Think of a big concert hall (your app) where thousands of fans (users) want to buy tickets (make API calls).  
**API Gateway** is the front‑door receptionist: every fan first walks through this door. The gateway checks their ticket type, decides which backstage stage they should go to, and forwards them accordingly. It also handles simple chores—authenticating the fan, limiting how many tickets a single person can buy at once, and translating the fan’s request into a language all stages understand.

**Load Balancer** is like the hall’s traffic director. Once the receptionist sends fans to different stages (servers), the load balancer spreads them evenly so no one stage gets overcrowded while another sits empty. It watches each stage’s “crowd level” and routes new arrivals to the least busy one, keeping the whole show running smoothly.

So, the gateway controls who can enter and where they go; the balancer keeps everyone moving without bottlenecks—just like a well‑run concert hall.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
