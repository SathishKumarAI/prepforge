---
qid: ing_8886ee9f31__star__local
question: 'Explain: Summary — HTTP/HTTPS | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 341
total_tokens: 577
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:05:41-05:00'
sources: []
---

**Situation:**  
At my last startup we were building a real‑time analytics dashboard for IoT devices. The backend API had to handle millions of sensor pings per day while keeping latency under 100 ms.

**Task:**  
I needed to design the transport layer so that it was secure, scalable, and efficient—essentially choosing between HTTP and HTTPS and figuring out how to structure the endpoints.

**Action:**  
I mapped the traffic patterns: read‑heavy queries for dashboards and write‑heavy ingestion from edge devices. I decided to expose a RESTful API over HTTPS using TLS 1.3 with session resumption to reduce handshake overhead. For high‑frequency writes, I added HTTP/2 multiplexing so multiple sensor streams could share a single TCP connection, cutting the number of connections by ~70%. I also implemented token‑based authentication and HSTS headers for security hardening. On the load balancer side, I used ALB with sticky sessions to keep each device’s traffic on the same backend instance.

**Result:**  
The system handled 4 M pings per day with average latency of 85 ms, a 30% drop in CPU usage compared to a pure HTTP design. Security audits passed without any vulnerabilities, and we reduced infrastructure costs by 15% thanks to fewer connections. I learned that choosing the right protocol version and leveraging HTTP/2 features can dramatically improve both performance and security in large‑scale sensor deployments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
