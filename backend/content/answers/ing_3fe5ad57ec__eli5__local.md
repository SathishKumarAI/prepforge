---
qid: ing_3fe5ad57ec__eli5__local
question: 'Explain: Load Balancing Algorithms — What Is a Load Balancer? | F5'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 229
total_tokens: 394
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:17:18-05:00'
sources: []
---

Imagine you’re at a cafeteria with many food stations but only a few customers. A **load balancer** is like the friendly waiter who decides which station each customer goes to, so no single station gets crowded while others sit empty. In computing, a load balancer sits in front of several servers (the food stations) and forwards incoming requests (customers) to one of them.

The waiter uses simple “balancing algorithms” to choose the best spot:

* **Round‑Robin** – gives each server a turn in order, just like rotating through stations.  
* **Least Connections** – points customers to the server with the fewest active jobs, similar to sending someone to the least busy station.  
* **IP Hash** – uses the customer’s address (IP) to always pick the same server, ensuring consistent service.

These strategies keep traffic smooth and prevent any single server from becoming a bottleneck.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
