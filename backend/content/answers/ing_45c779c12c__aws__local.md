---
qid: ing_45c779c12c__aws__local
question: 'Explain: Various Technologies for Service Registry & Discovery'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 443
total_tokens: 672
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:03:14-05:00'
sources: []
---

**Customer Obsession | Ownership**

*Situation:* At my previous role I led the migration of a micro‑service platform from a legacy in‑house registry to a fully managed solution, aiming to reduce downtime and improve developer velocity.

*Task:* Build a highly available service registry & discovery layer that supports 10 k services with <5 ms latency and zero manual configuration.

*Action:*  
- Adopted **AWS Cloud Map** as the primary registry (native DNS + API) for its low‑latency resolution and integration with Route 53.  
- Deployed a fallback using **Consul** on ECS to support legacy agents that still rely on HTTP endpoints.  
- Implemented health checks via **CloudWatch Alarms** → auto‑removal after 3 consecutive failures.  
- Used **AWS Lambda + EventBridge** to sync Consul state into Cloud Map, keeping both in sync without manual scripts.  
- Employed **IAM roles** for fine‑grained access and **KMS**‑encrypted tags for compliance.

*Result:* Downtime dropped from 2 % to <0.1 %, service discovery latency fell from 12 ms to 3 ms, and developer onboarding time decreased by 35 %. Cost was reduced by 25 % compared with the previous manual registry.

**Dive Deep & Bias for Action**

I continuously profiled DNS resolution (using *dig* and CloudWatch metrics), identified a bottleneck in Consul’s HTTP API, and replaced it with gRPC calls—improving throughput by 40 %. I documented failure scenarios (e.g., Cloud Map partition) and built automated rollback scripts.  

**Bar‑raiser takeaways:**  
- Clear ownership of the migration cycle.  
- Quantified impact on latency, availability, and cost.  
- Demonstrated deep technical knowledge (DNS, health checks, IAM).  
- Showed learning from a partial failure by automating state sync.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
