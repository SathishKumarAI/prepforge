---
qid: ing_f7f5eea918__aws__local
question: How do load balancers work? — What is Load Balancing?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 451
total_tokens: 685
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:39:24-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led the migration of a legacy monolith to a micro‑service architecture on AWS. The new platform had to support 1 M concurrent users while keeping latency <50 ms and cost under $300k/month.

**Action – Load Balancing Design**  
I introduced **Elastic Load Balancers (ELB)**, choosing an **Application Load Balancer (ALB)** for HTTP(S) traffic and a **Network Load Balancer (NLB)** for TCP‑based services.  
*Routing*: ALB’s host/path rules routed to 12 ECS tasks; NLB forwarded to 8 high‑throughput gRPC workers.  
*Health checks*: Configured 30 s interval with 3 failures → 4 healthy → 5 unhealthy thresholds, reducing failed requests by **23%** during spike tests.  
*Scalability*: Leveraged ALB’s target groups with auto‑scaling policies (CPU >70% → +2 tasks; <30% → –1). This maintained a 99.9 % SLA while keeping costs at **$245k/month**.

**Result**  
The new load‑balancing layer cut page load times from 120 ms to 45 ms and reduced error rates from 0.8% to 0.02%, exceeding our target by **200%**. The cost savings of $55k/month were reallocated to ML model training.

**Leadership Principles Reflected**  
*Customer Obsession*: Delivered faster, more reliable service for users.  
*Ownership & Dive Deep*: Hand‑crafted health checks and scaling logic, iterating on metrics until optimal.  

**Bar‑raiser Takeaway**  
Demonstrated ownership, quantified impact, and a willingness to iterate based on real data—key traits for any AWS engineer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
