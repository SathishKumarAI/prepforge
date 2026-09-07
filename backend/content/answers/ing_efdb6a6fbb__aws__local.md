---
qid: ing_efdb6a6fbb__aws__local
question: 'Explain: Non Functional Aspects — System Design of food delivery app (Zomato/Swiggy)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 494
total_tokens: 736
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:19:27-05:00'
sources: []
---

**Situation & Task**  
While leading a product‑team at a food‑delivery startup, we had to redesign the back‑end to support 200 k concurrent users during peak hours without exceeding $2 M/yr ops cost.

**Action – Non‑Functional Design**  

| Concern | AWS Service(s) | Rationale & Trade‑offs |
|---------|-----------------|------------------------|
| **Scalability** | *Amazon ECS + Fargate* (micro‑services), *Elastic Load Balancer*, *Auto Scaling* | Stateless containers scale in 30 s; reduces over‑provisioning by ~35 %. |
| **Availability** | *AWS Global Accelerator*, *Route 53 latency routing*, *Multi‑AZ RDS Aurora* | 99.95 % SLA, read replicas for regional traffic, cost +$0.15/replica but saves $30k in outage risk. |
| **Latency** | *Amazon CloudFront + Lambda@Edge* for dynamic content caching | <50 ms global edge latency; trade‑off: increased cold start costs ($0.000016 per 1K invocations). |
| **Cost Control** | *Spot Instances*, *Savings Plans*, *AWS Cost Explorer* | Spot saves 70 % on compute, but we added health checks to avoid interruption delays. |
| **Observability** | *Amazon CloudWatch + X-Ray* | Real‑time tracing; initial overhead of 5 % CPU, but reduced MTTR by 60 %. |

**Result**  
Post‑migration, peak latency dropped from 200 ms to 45 ms, and we handled a 3× traffic surge during festivals with 0.2 % error rate. Operational cost fell 25 %, freeing $500k for R&D.

**Reflection (Bar‑raiser)**  
I owned the migration end‑to‑end, dug deep into failure modes (e.g., spot termination), quantified impact via A/B tests, and iterated on monitoring dashboards after a mid‑night outage. This cycle of learning accelerated our delivery velocity by 40 %.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
