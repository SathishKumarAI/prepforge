---
qid: ing_0d8dc87eb2__star__local
question: 'Explain: Design the routing layer that decides whether a user request is
  handled on-device, by a first-party server model, or by a third-party model.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 256
output_tokens: 406
total_tokens: 662
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:55:41-05:00'
sources: []
---

**Situation**  
At my last company we launched a voice‑assistant feature that had to stay responsive while protecting user privacy. Our analytics showed that 40 % of requests were for simple keyword spotting (low latency), 35 % required on‑device inference for quick replies, and the remaining 25 % needed heavy NLP models hosted in the cloud.

**Task**  
I was tasked with designing a routing layer that dynamically chose the optimal execution path—on-device, first‑party server, or third‑party model—while keeping latency under 200 ms and minimizing data sent over the network.

**Action**  
1. Built a lightweight decision engine in Rust that inspected request metadata (payload size, user consent flag, device CPU load).  
2. Implemented a scoring system: on-device gets a high score for small payloads (< 50 KB) and offline mode; first‑party server scores higher when the model is proprietary but network bandwidth > 5 Mbps; third‑party routes are used only if the user explicitly opts in.  
3. Added a real‑time telemetry collector (using Prometheus + Grafana) to monitor latency, CPU usage, and error rates per path.  
4. Created an A/B testing harness that randomly swapped routing rules for 5 % of traffic to validate improvements before full rollout.

**Result**  
After deployment, average end‑to‑end latency dropped from 260 ms to 170 ms. On-device processing increased by 30 %, reducing server costs by $12k/month. User privacy scores improved as no sensitive data left the device for 60 % of requests. I learned that a data‑driven, rule‑based router can be both lightweight and highly adaptable, balancing performance, cost, and compliance without sacrificing user experience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
