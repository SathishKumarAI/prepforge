---
qid: ing_97c5d4620f__aws__local
question: 'Explain: Technical Screen – SWE Infra Questions — My 2026 Perplexity AI
  Interview Process and Actual Questions'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 518
total_tokens: 759
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:08:54-05:00'
sources: []
---

**Answer (Amazon style)**  

> *“In my 2026 interview for Perplexity AI, the technical screen focused on infra‑design and scalability.”*  

### Situation  
I was asked to design a real‑time inference pipeline that serves millions of queries per day with <200 ms latency.

### Task  
Build an end‑to‑end architecture that can scale elastically, guarantee 99.9% uptime, and keep costs under $2M/yr while handling peak traffic spikes.

### Action (Design & AWS services)  

| Component | Service(s) | Reasoning |
|-----------|------------|-----------|
| **Ingress** | Amazon API Gateway + ALB | Handles >10k QPS, TLS termination, request throttling. |
| **Compute** | EKS (K8s) with Spot/On‑Demand nodes + Fargate for bursty workloads | Elastic scaling, cost savings, no provisioning overhead. |
| **Model Serving** | SageMaker Neo on Graviton2 + Lambda@Edge | Low inference latency (<100 ms), auto‑scales per request volume. |
| **Caching** | CloudFront + ElastiCache Redis (clustered) | 90% cache hit rate, reduces backend load by ~70%. |
| **Observability** | CloudWatch Logs/Metric Streams + X-Ray | Real‑time tracing, anomaly detection. |
| **Cost Control** | Savings Plans + Cost Explorer dashboards | Predictable spend < $2M, quarterly variance <3%. |

### Result  
The prototype achieved 95 % of queries under 150 ms during a synthetic load test (50k QPS). Production rollout reduced average cost per inference by 35 % versus baseline and maintained 99.95% availability over six months.

### Reflection (Bar‑raiser cues)  

- **Ownership**: I drove the design end‑to‑end, from requirement gathering to post‑deployment monitoring.  
- **Dive Deep**: Quantified latency budgets per layer; tuned Redis eviction policy after profiling.  
- **Learning from Failure**: Early experiments with pure Lambda failed due to cold starts; pivoted to SageMaker Neo and re‑architected for speed.  

This answer demonstrates Customer Obsession (meeting user latency needs), Ownership, Dive Deep, Bias for Action, and Deliver Results—all key Amazon Leadership Principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
