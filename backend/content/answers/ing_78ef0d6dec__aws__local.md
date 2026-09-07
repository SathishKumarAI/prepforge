---
qid: ing_78ef0d6dec__aws__local
question: 'Explain: 1.3 .  Opening Handshake — RFC 6455 - The WebSocket Protocol'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 438
total_tokens: 679
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:58:50-05:00'
sources: []
---

**Answer (Amazon style)**  

> *“When I first tackled the WebSocket handshake for a real‑time analytics dashboard, I treated it as a product feature, not just a protocol detail.”*  

**Situation / Task** – The team needed to push live metrics from our data lake to thousands of front‑end dashboards with sub‑second latency. We chose **WebSockets (RFC 6455)** for bi‑directional flow instead of polling.

**Action** –  
1. I dissected the *Opening Handshake* step: client sends `GET /socket HTTP/1.1` + `Upgrade: websocket`, server responds with `101 Switching Protocols`.  
2. Implemented a stateless Lambda authorizer that validates JWT in the `Sec-WebSocket-Protocol` header, then proxies through **API Gateway WebSocket** to an **Elastic Load Balancer** feeding an autoscaling group of **EC2 instances** running a Node.js echo service.  
3. Added **CloudWatch metrics** for handshake success rate and latency; set alarms at 99th percentile < 200 ms.  

**Result** – Handshake failure dropped from 4% to < 0.1%; average end‑to‑end latency fell 35%, enabling a live KPI dashboard that served > 5,000 concurrent users during peak trading hours. The cost stayed below $250/month by leveraging the pay‑per‑use Lambda authorizer and only scaling EC2 when handshake counts exceeded 10k/min.

**Learnings** –  
- *Ownership*: I took full responsibility for both security (JWT validation) and performance.  
- *Dive Deep*: By tracing TCP packets with Wireshark, I discovered an off‑by‑one bug in the `Sec-WebSocket-Key` hash that caused intermittent 400 errors.  
- *Bar‑raiser cue*: Demonstrated measurable impact, deep protocol knowledge, and proactive failure analysis—exactly what Amazon looks for in a senior engineer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
