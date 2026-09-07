---
qid: ing_8950602da9__aws__local
question: 'Explain: Pattern 4: Circuit Breaker — Availability | System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 466
total_tokens: 699
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:36:25-05:00'
sources: []
---

**Situation / Task**  
I was leading the redesign of our real‑time inference pipeline that served a global recommendation engine (≈ 5 M requests/day). A single node failure in the GPU cluster caused cascading timeouts, hurting **Customer Obsession** and **Ownership**.

**Action**  
Implemented a **Circuit Breaker** pattern at two layers:

1. **API Gateway + Lambda Layer** – used *AWS API Gateway* with a custom Lambda authorizer that tracks consecutive failures per endpoint (using DynamoDB TTL for state). If failures > 10 in 60 s, the circuit opens and returns HTTP 503 to clients, preventing overload of downstream services.

2. **Inference Service** – deployed behind an Application Load Balancer with *Target Group Health Checks*. When a target reports unhealthy health checks (> 3 consecutive), ALB automatically removes it from rotation (circuit open) and routes traffic to healthy replicas.

I also added CloudWatch metrics (`api_failures`, `service_unhealthy`) and alarms that trigger auto‑scaling for healthy instances. The circuit breaker reduced downstream latency spikes by **42 %** and dropped error rates from 8.7 % to < 0.3 %. Cost impact was negligible (< 2 %) because we only spun up additional GPU nodes when the circuit closed.

**Result**  
Availability rose from 99.6 % to 99.98 % during peak traffic, keeping our SLA intact and improving user engagement by 12 %.  

---

### What a bar‑raiser listens for
- **Ownership**: I drove the end‑to‑end solution, not just suggested it.  
- **Dive Deep**: Leveraged AWS metrics to quantify failure patterns and tuned thresholds empirically.  
- **Quantified Impact**: Delivered measurable latency and error reductions tied to business KPIs.  
- **Learning from Failure**: Iterated on threshold values after post‑mortems, turning a reactive fix into a proactive resilience feature.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
