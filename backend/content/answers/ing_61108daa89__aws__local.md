---
qid: ing_61108daa89__aws__local
question: 'Explain: to make sure to terminate that websocket'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 518
total_tokens: 747
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:04:58-05:00'
sources: []
---

**Situation / Task**  
I was leading a real‑time recommendation engine for a streaming platform. Clients connected via WebSocket, and we needed to guarantee that idle connections were closed within **5 s** of inactivity to free EC2 capacity and avoid stale data flows.

**Action**  
1. **Instrumentation** – added CloudWatch metrics (`WS_IdleTime`) on the API Gateway Lambda authorizer.  
2. **Timeout logic** – implemented a heartbeat ping from the client; if no pong was received, the Lambda sent an `close(1000)` frame and updated the metric.  
3. **Auto‑scaling** – used an Application Load Balancer with target groups tied to ECS Fargate tasks. The *Target Tracking* policy scaled out when `WS_IdleTime` > 80 % of 5 s, ensuring we had spare capacity for bursts.  
4. **Cost control** – switched from on‑demand EC2 to Spot instances for the idle pool, saving ~30 %.  
5. **Monitoring & Alerting** – set a CloudWatch Alarm (`IdleWSCount > 10`) that triggered an SNS notification and auto‑scales down after 15 min of no activity.

**Result**  
- Reduced idle connection time from **12 s to 4 s** (≈ 66 % improvement).  
- Cut monthly infrastructure spend by **$12k** (~25 %).  
- Achieved 99.9 % uptime during peak traffic, as measured by the `WS_Active` metric.

---

### Leadership Principles

| Principle | How it shines |
|-----------|---------------|
| **Ownership** | Took full responsibility for end‑to‑end latency and cost, not just code changes. |
| **Dive Deep** | Analyzed CloudWatch traces to pinpoint the 5 s drift and iterated on heartbeat logic until deterministic. |

### What a Bar‑Raiser Listens For

- **Quantified impact**: clear metrics before/after (latency, cost).  
- **Depth of analysis**: tracing, heartbeat design, auto‑scaling logic.  
- **Learning from failure**: initial 12 s issue taught us to instrument early and reactively scale.  

This approach demonstrates both the technical chops and Amazon’s customer‑obsessed, data‑driven mindset.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
