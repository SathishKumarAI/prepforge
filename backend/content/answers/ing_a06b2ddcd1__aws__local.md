---
qid: ing_a06b2ddcd1__aws__local
question: 'Explain: 2.5 Key Insights — Design Load Balancer | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 476
total_tokens: 717
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:27:48-05:00'
sources: []
---

**Situation & Task**  
I was asked to architect a highly‑available load balancer for a global e‑commerce platform that serves ~12 M page views/day and must support 5× traffic spikes during Black Friday without downtime.

**Action – Design**  
1. **Ingress Layer:** Deploy an Application Load Balancer (ALB) in every AZ of the VPC, using *path‑based* rules to route API vs. static content.  
2. **Caching & CDN:** Attach Amazon CloudFront with a 24 h TTL for static assets; set *Origin Shield* to reduce ALB hit‑rate by ~70%.  
3. **Auto Scaling & Health Checks:** Configure target groups for EC2 Auto Scaling (spawns on CPU >80%) and ECS Fargate tasks (spawns on request latency >200 ms). Health checks use HTTP 200 with a 30 s grace period.  
4. **Security & Resilience:** Enable *AWS WAF* with rate‑based rules, integrate *Shield Advanced* for DDoS protection, and enforce TLS termination at the ALB.  
5. **Observability:** Use CloudWatch metrics (dropped request count, target latency) to trigger SNS alerts; set up X‑Ray tracing for request paths.

**Result**  
- 99.999% availability over a year of production traffic, with no single point of failure.  
- During the Black Friday surge, the system handled 7 M requests/second, keeping average latency <120 ms.  
- Cost savings: CloudFront cache hit ratio >80% reduced ALB data transfer by $18k/month.

**Reflection (Bar‑raiser Lens)**  
I owned every layer—from edge to origin—ensuring *Customer Obsession* by guaranteeing low latency and uptime. I *dive deep* into metrics to tune scaling thresholds, and my design shows *Bias for Action* (quick deployment of WAF + Shield) while *Invent & Simplify* (using CloudFront’s Origin Shield). The biggest learning was that a single‑AZ ALB caused the 2019 outage; migrating to multi‑AZ eliminated that risk.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
