---
qid: ing_c341d46696__aws__local
question: 'Explain: Spring Cloud Gateway — Spring Cloud: Routing with Zuul and Gateway'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 602
total_tokens: 837
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:44:22-05:00'
sources: []
---

**Situation**  
At my last role I led a team that had to expose an on‑premises ML inference model as a REST endpoint for mobile clients. The existing stack used Netflix Zuul 1, which was slow and difficult to scale under the 2 kps burst traffic we expected during product launches.

**Task**  
Replace Zuul with Spring Cloud Gateway (SCG) while ensuring zero downtime, maintainability, and cost efficiency on AWS.

**Action**  

| Step | Design & AWS Services |
|------|-----------------------|
| **Routing & Load Balancing** | SCG → NGINX ingress in ECS Fargate; uses `RouteLocator` with predicates (`Path`, `Header`) to forward to a containerized TensorFlow serving pod. |
| **Observability** | Integrated CloudWatch metrics, X-Ray traces via SCG’s `OpenTelemetryAutoConfiguration`. |
| **Scalability** | Auto‑scaling on CPU/Memory; 2–5 replicas per region → 99.95 % availability. |
| **Cost** | Fargate pay‑per‑second + Lambda for health checks: $0.15/hr vs $1.20/hr with Zuul EC2 instances. |
| **Failure Recovery** | Health‑check predicates; circuit breaker via Resilience4j in SCG; fallback to cached predictions from S3. |

I wrote a custom `ZuulFallbackFilter` equivalent in SCG (`@Bean RoutePredicateFactory`) that returned the last successful inference if downstream failed, reducing error rates by **32 %** during spike tests.

**Result**  
- 40 % reduction in infrastructure cost.  
- Latency dropped from 350 ms (Zuul) to 120 ms (SCG).  
- Incident rate fell from 3/month to <0.5/month.

---

### Leadership Principles

* **Customer Obsession** – Built a resilient inference path that kept users offline during model outages.  
* **Ownership** – Took full responsibility for migration, testing, and post‑deployment monitoring.  

### Bar‑raiser notes

| What the interviewer hears | Why it matters |
|---------------------------|----------------|
| Quantified impact (latency, cost) | Shows ownership & results |
| Detailed trade‑offs (Fargate vs EC2, Lambda fallback) | Demonstrates dive deep & technical depth |
| Learning from failed Zuul tests | Reflects bias for action & continuous improvement |

This experience demonstrates my ability to translate customer needs into a scalable, cost‑effective AWS architecture while owning the end‑to‑end solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
