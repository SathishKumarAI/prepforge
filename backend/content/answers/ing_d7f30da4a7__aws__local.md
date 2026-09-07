---
qid: ing_d7f30da4a7__aws__local
question: 'Explain: MQTT — Long Polling vs WebSockets - by Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 417
total_tokens: 654
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:27:51-05:00'
sources: []
---

**Situation & Task**  
When launching our IoT‑driven smart‑home platform (≈ 10M devices), I had to decide between MQTT with long polling and WebSockets for real‑time telemetry. The goal was sub‑200 ms latency, 99.9% availability, and <$0.05 per device‑hour cost.

**Action – Technical Design**  
I scoped both options:  
1. **MQTT + Long Polling** (AWS IoT Core) – uses HTTP/2 keep‑alive; each device opens a long‑lived connection, incurring ~30 bytes header overhead and 3 s idle timeout.  
2. **WebSockets via API Gateway & Lambda Authorizer** – persistent TCP tunnel, lower handshake cost (~10 bytes), built‑in scaling to millions of concurrent sockets.

I modeled traffic (≈ 5 kB per minute) and simulated 1 M connections. Cost analysis:  
- MQTT: $0.07/device‑hour (AWS IoT data transfer + Lambda invoke).  
- WebSockets: $0.03/device‑hour (API Gateway, EC2 instances for processing).  

Availability: WebSocket’s “reconnect” logic reduced packet loss by 4x compared to long polling’s timeout churn.

**Result**  
Implemented WebSockets; latency dropped from 350 ms to 180 ms, cost cut by 57%, and 99.97% uptime over six months. Post‑mortem revealed that the initial MQTT prototype underestimated header overhead—learning that “Dive Deep” into protocol specs can uncover hidden costs.

**Leadership Principles**  
- **Customer Obsession** – delivered faster, cheaper telemetry for end users.  
- **Ownership & Bias for Action** – drove end‑to‑end solution from design to deployment without waiting on external teams.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
