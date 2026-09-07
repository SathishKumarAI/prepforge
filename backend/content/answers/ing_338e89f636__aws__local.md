---
qid: ing_338e89f636__aws__local
question: 'Explain: 4.4 Putting It All Together — Design Load Balancer | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 638
total_tokens: 881
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:22:00-05:00'
sources: []
---

**Context (S)**  
I was interviewing for an ML Platform Engineer role at AWS. The interviewer asked me to design a load balancer that could route inference requests to a fleet of GPU‑based containers while guaranteeing low latency and high availability.

**Task (T)**  
Build a horizontally scalable, fault‑tolerant load balancer that can (1) detect unhealthy pods, (2) balance traffic across them with minimal jitter, and (3) expose metrics for monitoring. The solution had to fit into the AWS ecosystem and keep costs under 10 % of total inference spend.

**Action (A)**  
1. **Requirements & Constraints** –  
   * 99.9 % uptime, < 50 ms per request, > 10k rps, autoscaling up to 200 instances.  
2. **Design** –  
   * **AWS ALB + NLB hybrid**: ALB for HTTP/HTTPS routing (host/path based), NLB for TCP/UDP to preserve session stickiness and low‑latency.  
   * **Container orchestration with Amazon ECS/EKS**; use **Service Auto Scaling** with CloudWatch alarms on CPU/memory & custom health metrics from Prometheus.  
   * **Health checks** via ALB target groups (HTTP 200 OK) plus a sidecar that pushes `/ready` and `/live` endpoints to CloudWatch.  
   * **Traffic shaping**: implement weighted round‑robin with the `aws-elasticloadbalancing:TargetGroup` API; use Lambda@Edge to apply per‑client rate limits.  
   * **Observability**: X-Ray traces, ALB access logs to S3, and CloudWatch dashboards (latency percentiles, error rates).  
3. **Scalability & Availability** – Cross‑AZ load balancers automatically spread targets; NLB supports 100 000+ connections per target.  
4. **Cost** – ALB/NLB pricing is $0.0225/ALB-hour + $0.008 per GB processed; with autoscaling the average cost was projected at ~$1k/month vs $12k for a single‑instance solution.

**Result (R)**  
Implemented in 3 weeks, the system handled 15 k rps with <30 ms latency and 99.98 % uptime during load tests. Cost savings were 85 % compared to the baseline. I documented failure scenarios (e.g., pod crash loop) and introduced automated rollback via CodePipeline, learning that “Fail fast, fix faster” is key in ML ops.

**Leadership Principles Highlighted**  
* **Customer Obsession** – ensured latency targets met end‑user expectations.  
* **Ownership & Dive Deep** – I owned the entire stack from ALB to ECS and dug into CloudWatch metrics to pinpoint bottlenecks.  

Bar‑raisers listen for: clear ownership, depth of technical trade‑offs, quantified impact, and a demonstrated ability to learn from failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
