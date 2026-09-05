---
qid: ing_971608695d__star__local
question: 'Explain: Least response time method — What is Load Balancing?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 329
total_tokens: 568
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:35:10-05:00'
sources: []
---

**Situation**  
During my internship at a fintech startup, our real‑time fraud detection service was built on a Python Flask API that processed over 10,000 transactions per minute. As traffic grew during peak hours, the average response time spiked from 120 ms to nearly 1 second, causing user complaints and SLA violations.

**Task**  
I was tasked with reducing the latency back below 200 ms while maintaining high availability, using a least‑response‑time load balancing strategy across our microservice instances.

**Action**  
First, I instrumented each instance with Prometheus metrics to expose per‑request response times. Then I set up NGINX as a reverse proxy and implemented the “least_conn” module combined with a custom Lua script that routed requests based on real‑time average latency rather than static round‑robin. To avoid overloading any single node, I added a health‑check endpoint that removed unhealthy instances from rotation automatically. Finally, I automated scaling with Kubernetes HPA to spawn new pods when the mean response time exceeded 250 ms.

**Result**  
Within two weeks, average latency dropped to 145 ms and 99th‑percentile latency fell below 350 ms. Our service uptime improved from 97% to 99.9%, and we avoided a critical SLA breach. I learned that coupling real‑time metrics with intelligent routing is key to effective load balancing in high‑throughput systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
