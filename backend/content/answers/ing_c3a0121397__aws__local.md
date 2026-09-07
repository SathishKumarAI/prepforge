---
qid: ing_c3a0121397__aws__local
question: 'Explain: Summary — What is an API? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 472
total_tokens: 704
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:45:25-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **S – Situation:** I was tasked with launching a machine‑learning inference API for a fintech client that needed to serve 10 k requests/sec while guaranteeing <50 ms latency and zero data leakage.  
> **T – Task:** Design an end‑to‑end, highly available system that scales automatically and keeps cost per request under $0.005.  
> **A – Action:**  
> * **API Layer** – API Gateway (regional) with custom domain and WAF for throttling.  
> * **Compute** – Lambda@Edge + SageMaker Runtime endpoints behind an Application Load Balancer (ALB) in a VPC, using spot instances to reduce cost.  
> * **Model Storage** – S3 for artifacts; CloudFront invalidation on model updates.  
> * **Observability** – CloudWatch Logs/Metric Filters, X-Ray tracing; automated alarms trigger SNS → Lambda rollback if latency > 70 ms.  
> * **Scalability & Availability** – Auto‑scaling ALB listeners with target groups spread across two AZs; Multi‑region failover via Route 53 health checks.  
> * **Cost Control** – Reserved capacity for Lambda concurrency, spot instances for inference, and S3 lifecycle policies to archive old models.  
> **R – Result:** Deployed in 4 weeks; achieved 95 % requests <45 ms, sustained 12 k RPS, and cut operational cost by 38 % vs. on‑prem GPU cluster.  

**Leadership Principles Highlighted**

* **Customer Obsession & Deliver Results** – Focused on latency, reliability, and cost to exceed client expectations.  
* **Ownership & Dive Deep** – Took full ownership of end‑to‑end design; performed root‑cause analysis for any performance regressions, learning that early WAF throttling prevented overload spikes.  

Bar‑raisers look for *ownership*, *quantified impact*, and *learning from failure*—all demonstrated above.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
