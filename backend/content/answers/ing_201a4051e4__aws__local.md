---
qid: ing_201a4051e4__aws__local
question: 'Explain: Observability and Resiliency — Must Know System Design Building
  Blocks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 396
total_tokens: 631
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:39:54-05:00'
sources: []
---

**Situation & Task (Ownership + Customer Obsession)**  
At my last role I led the migration of a recommendation engine from on‑prem to AWS. The new platform had to be observable and resilient so that we could serve millions of real‑time user requests without downtime, directly impacting revenue.

**Action (Dive Deep + Bias for Action)**  
1. **Observability stack:**  
   * Amazon CloudWatch* for metrics (latency, error rate), *X-Ray* for distributed tracing, and *AWS Managed Prometheus/ Grafana* for custom ML‑specific KPIs.  
2. **Resilience design:**  
   * Auto Scaling Groups* with *Elastic Load Balancer* to absorb traffic spikes.  
   * Multi‑AZ deployment* of the inference service (ECS Fargate + Service Discovery).  
   * Circuit breaker pattern* in the model-serving API using *AWS Lambda@Edge* to redirect traffic to a fallback model when latency > 200 ms.  
3. **Cost & scalability:**  
   Leveraged *Spot Instances* for batch training jobs, reducing compute spend by 40%.  
   Used *S3 Lifecycle policies* and *Glacier* for model artifacts, cutting storage costs 30%.

**Result (Deliver Results + Data‑Driven Impact)**  
- Achieved < 0.1 % outage over 12 months.  
- Latency dropped from 350 ms to 120 ms (average), boosting click‑through rate by 7%.  
- Cost savings of $250k annually.

**Learnings & Bar‑raiser cues**  
I documented the failure modes, ran post‑mortems, and built automated rollback scripts—showing true ownership and a culture of continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
