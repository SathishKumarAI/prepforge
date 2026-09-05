---
qid: ing_e377d26710__star__local
question: 'Explain: Connection Load — Design WhatsApp | System Design Interview |
  AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 392
total_tokens: 634
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:03:30-05:00'
sources: []
---

**Situation:**  
When I joined a fast‑growth messaging startup, our user base jumped from 1 M to 5 M daily active users in just six months. The existing monolith couldn’t handle the surge; latency spiked during peak hours and we started losing messages.

**Task:**  
I was tasked with redesigning the connection layer so that every client could maintain a persistent, low‑latency socket while keeping the server side horizontally scalable and cost‑effective.

**Action:**  
1. Implemented a stateless WebSocket gateway behind an Nginx load balancer, using sticky sessions to route each user’s traffic to the same worker.  
2. Introduced a Redis Pub/Sub cluster for real‑time message routing; each worker subscribes to a channel keyed by user ID, eliminating cross‑server polling.  
3. Deployed horizontal scaling via Kubernetes autoscaling pods—each pod handles ~10k concurrent connections, with health checks that trigger rapid replacement of failed nodes.  
4. Added a rate‑limit cache in Redis to throttle abusive clients and prevent DoS attacks.  
5. Monitored connection churn with Prometheus; set alerts for sudden drops, triggering automatic scaling.

**Result:**  
Connection latency dropped from 200 ms to under 30 ms during peak times, and we handled 20× the previous traffic without a single outage. The cost per active user fell by 35% thanks to efficient resource usage. I learned that combining stateless gateways with pub/sub messaging and dynamic scaling is key for ultra‑high‑connectivity services like WhatsApp.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
