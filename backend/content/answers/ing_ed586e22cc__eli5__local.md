---
qid: ing_ed586e22cc__eli5__local
question: 'Explain: Different Types of Load Balancers — What Is a Load Balancer? |
  F5'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 248
total_tokens: 415
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:51:10-05:00'
sources: []
---

Imagine you’re at a popular pizza place that gets dozens of orders every minute. If only one cook tries to make all the pies, customers will wait forever. A *load balancer* is like a smart manager who watches each order and sends it to the right cook so everyone gets their pizza quickly.

In computing, a load balancer sits in front of many servers (the cooks). It receives incoming requests—web pages, app data, or API calls—and distributes them evenly across the servers. There are several ways it can decide where to send each request:

* **Round‑robin** – simply hands out orders one by one, like a line.
* **Least connections** – chooses the server with the fewest active jobs, ensuring no single server is overwhelmed.
* **IP hash** – always sends the same customer’s requests to the same server, useful for keeping session data local.

Other advanced types add features such as health checks (to skip servers that are down) or SSL termination (decrypting secure traffic before passing it on). By balancing the load, these tools keep applications fast, reliable, and able to grow without breaking.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
