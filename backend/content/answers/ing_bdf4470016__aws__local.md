---
qid: ing_bdf4470016__aws__local
question: 'Explain: Self-Hosting with Kubernetes & Helm (for Scalable Deployments)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 471
total_tokens: 706
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:32:51-05:00'
sources: []
---

**Situation / Task**  
I led a cross‑functional team that had to migrate an internal recommendation engine from a single EC2 instance to a scalable, self‑hosted platform on Kubernetes (EKS) with Helm charts. The goal was to support 10× traffic while keeping the cost < 30 % of the legacy spend.

**Action**  
- **Ownership & Customer Obsession**: I defined end‑user SLAs (99.9 % availability, ≤ 200 ms latency).  
- **Dive Deep**: Instrumented the old stack with CloudWatch metrics and traced bottlenecks using X-Ray.  
- **Design**: Built Helm charts that deployed a stateless inference service on EKS, autoscaled via the Cluster Autoscaler (CPU > 70 % → +1 node). Added an Amazon RDS Aurora PostgreSQL cluster for user data with read replicas for high‑throughput queries.  
- **AWS Services**: EKS for orchestration, Fargate for serverless pods during traffic spikes, ALB Ingress Controller for TLS termination, and Secrets Manager for credentials.  
- **Bias for Action & Deliver Results**: Ran a staged rollout (canary 10 % → 100 %) and used CloudFormation to rollback if latency > 250 ms.

**Result**  
- Traffic grew from 1M to 12M requests/month with 0.3 % error rate.  
- Latency dropped from 450 ms to 120 ms (≈ 73 % improvement).  
- Operational cost fell by 28 % due to auto‑scaling and serverless bursts.  

**Bar‑raiser takeaways**  
- Demonstrated full ownership: defined SLAs, measured impact, and iterated quickly.  
- Showed depth: detailed trade‑offs between Fargate vs. managed node groups (cost vs. control).  
- Quantified success with real metrics and highlighted lessons learned when the first canary failed due to missing health checks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
