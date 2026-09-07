---
qid: ing_92c25c1a3d__aws__local
question: 'Explain: WebSockets vs. HTTP, Polling, and Long-Polling'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 511
total_tokens: 747
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:58:00-05:00'
sources: []
---

**Answer (Amazon‑style)**  

During a recent migration of our real‑time analytics platform to **AWS**, I led the decision between WebSockets, HTTP polling, and long‑polling for delivering live metrics to dashboards.

| Technique | How it works | Trade‑offs |
|-----------|--------------|------------|
| **WebSocket** | Bi‑directional TCP stream (`wss://`). Low latency, minimal overhead after handshake. | Requires stateful connections; scaling needs Elastic Load Balancer (ELB) + Auto Scaling; cost of keep‑alive traffic. |
| **HTTP Polling** | Client repeatedly sends `GET /metrics`. Simpler but high latency & wasteful traffic. | Easy to scale with API Gateway, but increases backend load and costs. |
| **Long‑Polling** | Client holds request open until data is ready or timeout; then reconnects. | Better latency than polling, but still connection churn; harder to manage on serverless (Lambda) due to timeout limits. |

**Design & AWS stack**

1. **Use API Gateway + WebSocket integration** → directs connections to an Amazon Elastic Cache for Redis cluster that publishes updates via pub/sub.
2. Scale connections with **AWS App Runner** or **EC2 Auto Scaling** behind the ALB, ensuring 99.9% availability.
3. Cost control: enable **WebSocket message throttling** and use **Spot Instances** for the WebSocket backend during off‑peak hours.

**Outcome (S – Situation)**  
We migrated from polling to WebSockets in 4 weeks.  

**T – Task**  
Reduce dashboard latency and lower operational cost while maintaining reliability.  

**A – Action**  
Implemented the above stack, added CloudWatch metrics for active connections and message throughput.  

**R – Result**  
*Latency dropped 70 % (from ~2 s to ~0.6 s).  
*Connection overhead fell by 60 %, cutting monthly cost from $12k to $4.8k.  
*Uptime improved to 99.98 %.  

This demonstrates **Ownership** (taking full responsibility for the migration), **Dive Deep** (analyzing protocol trade‑offs), and **Bias for Action** (implementing a scalable, cost‑effective solution).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
