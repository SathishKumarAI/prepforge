---
qid: ing_d505596867__aws__local
question: 'Explain: Polling: — What are WebSockets and Why are they Used?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 371
total_tokens: 607
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:21:23-05:00'
sources: []
---

**Situation / Task**  
At my last role I led a real‑time analytics platform that served live dashboards to thousands of internal users. The existing polling mechanism (HTTP GET every 5 s) caused latency spikes and unnecessary API traffic, hitting our SLA of < 200 ms.

**Action**  
I championed a shift from long‑polling to **WebSockets**, a bi‑directional TCP‑based protocol that keeps a single connection open.  
* Designed the architecture using **Amazon API Gateway (WebSocket APIs)** backed by an **AWS Lambda authorizer** for auth and a **Kinesis Data Streams** consumer that pushes events downstream.  
* Added **Elastic Load Balancer (ALB) WebSocket support** to scale horizontally, with **Auto Scaling Groups** of EC2 workers handling message serialization.  
* Implemented a graceful fallback to HTTP polling for legacy browsers using feature flags.

**Result**  
- Reduced server‑side CPU usage by 45 % and API costs by 30 %.  
- Cut average latency from 1.8 s (polling) to < 200 ms, improving user satisfaction scores by 12 pts.  
- Scaled to support 100k concurrent connections with 99.999 % uptime, meeting our SLA.

**Reflection**  
Ownership: I owned the full migration cycle and coordinated cross‑team buy‑in.  
Dive Deep: I profiled network traffic, identified bottlenecks, and tuned Lambda concurrency.  
Learning: The initial attempt hit a throttling issue; we added **Kinesis shard scaling logic**, turning a failure into an automated elasticity feature.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
