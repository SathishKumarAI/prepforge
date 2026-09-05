---
qid: ing_f7f5eea918__eli5__local
question: How do load balancers work? — What is Load Balancing?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 218
total_tokens: 380
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:07:39-05:00'
sources: []
---

**What is load balancing?**  
Imagine a busy pizza shop that can only bake one pie at a time, but dozens of customers are waiting. A *load balancer* is like the shop’s smart dispatcher: it watches how many ovens (servers) are active and where each order is headed, then sends each new customer to the oven that has the shortest queue.  

In the digital world, a load balancer sits between users and a cluster of web or ML servers. It receives every request, checks which server is least busy or closest geographically, and forwards the request there. If one server crashes, the balancer simply drops it from its list and redirects traffic elsewhere. This keeps response times low, prevents any single server from getting overwhelmed, and lets the system grow by adding more “ovens” without breaking anything.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
