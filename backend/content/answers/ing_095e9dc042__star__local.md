---
qid: ing_095e9dc042__star__local
question: How does the load balancer choose the backend server?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 365
total_tokens: 602
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:47:44-05:00'
sources: []
---

**Situation:**  
At my last startup we ran a real‑time recommendation engine behind an Nginx load balancer. Our user traffic spiked during flash sales, and we noticed latency creeping above 300 ms on the “recommend” endpoint.

**Task:**  
I was tasked with diagnosing why certain backend instances were getting overloaded while others sat idle, and then reconfiguring the balancer to distribute requests more evenly without adding new servers.

**Action:**  
First I collected per‑instance metrics (CPU, memory, request queue length) using Prometheus. I discovered that Nginx’s default round‑robin was ignoring instance health signals because keepalive connections were stale. I switched to a “least_conn” algorithm and enabled the `proxy_next_upstream` directive so failed requests would retry on a different node. I also added a small Lua script in Nginx to weight servers based on their current load averages, effectively turning it into a dynamic least‑conn with weighting. Finally, I set up health checks that pinged a `/healthz` endpoint every 5 s and removed any instance from rotation if its latency exceeded 200 ms for three consecutive checks.

**Result:**  
After the changes, average response time dropped to 120 ms during peak periods, and CPU utilization balanced across all four instances (≈32% each). The system also recovered faster after a sudden crash of one node—requests were rerouted within 200 ms. I learned that combining Nginx’s built‑in algorithms with lightweight custom logic can dramatically improve resilience without scaling hardware.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
