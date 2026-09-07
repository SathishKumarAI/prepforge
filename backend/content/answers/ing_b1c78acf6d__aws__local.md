---
qid: ing_b1c78acf6d__aws__local
question: 'Explain: Error Budget — Architecture Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 438
total_tokens: 664
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:06:52-05:00'
sources: []
---

**Customer Obsession & Ownership**

*Situation*: I led a team that built an AI‑powered recommendation engine for a global e‑commerce platform. Early production runs hit 30 % of our SLA due to model drift and data pipeline lag.  
*Task*: Reduce incidents, maintain high availability, and keep cost under $1M/month while scaling to 10 M daily requests.  
*Action*: I introduced an **Error Budget** framework combined with the *Observability‑Driven Architecture* pattern:

| Pattern | AWS Service | Reasoning |
|---------|-------------|-----------|
| **Event‑driven microservices** | Amazon EventBridge, Lambda | Decouples model updates from inference; each event has its own error budget. |
| **Feature flag + canary release** | Amazon SageMaker Feature Store, CloudWatch Alarms | Allows 5 % of traffic to test new models before full rollout. |
| **Circuit breaker & retry with exponential back‑off** | API Gateway + Lambda Destinations | Prevents cascading failures; automatically shifts traffic to a fallback model if error budget is exceeded. |
| **Observability stack** | CloudWatch, X-Ray, OpenTelemetry | Quantifies latency and error rates per endpoint; feeds into an automated SLA dashboard. |

I set a 99.9 % availability target (≈43 min/month of downtime). Each micro‑service had its own budget; once the budget was breached, traffic automatically routed to a “golden” baseline model.

*Result*: Within three months we cut SLA violations from 30 % to <2 %, saving ~15 % in compute costs and improving NPS by 7 points. The error budget discipline also accelerated our release cadence by 40 %.  

**Bar‑raiser takeaway**: Demonstrated deep ownership (owning the entire pipeline), dive deep into metrics, quantified impact, and iteratively learned from failures to refine the architecture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
