---
qid: ing_1f5f5f672c__aws__local
question: 'Explain: So what do you do? One of — System Design BASICS: Horizontal vs.
  Vertical Scaling'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 473
total_tokens: 714
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:38:07-05:00'
sources: []
---

**Situation (S)**  
I was hired as a ML Engineer for an e‑commerce platform that had just launched a recommendation engine. Production traffic spiked 5× during Black Friday, causing latency to climb from 120 ms to >1 s and the recommendation accuracy dropped by 12 %.  

**Task (T)**  
Design a system that can **scale horizontally** while keeping inference latency <200 ms and cost under $10k/month. I also needed to show how vertical scaling alone would not solve the problem.

**Action (A)**  
1. **Profile & Baseline** – Measured CPU, GPU, and memory usage with `cfn‑horizon`. Vertical scaling (larger EC2 instances) could only give a 30 % latency lift before hitting saturation.  
2. **Horizontal Scaling Strategy** – Deployed the model as a stateless Lambda function behind an Application Load Balancer (ALB). Each invocation runs on a fresh container, so we can spin up thousands of parallel instances.  
3. **Caching & Throttling** – Added Amazon ElastiCache‑Redis for top‑k item lookups; used API Gateway throttling to prevent burst overloads.  
4. **Cost Controls** – Enabled Lambda provisioned concurrency only during peak windows and set auto‑scaling policies on ALB target groups.  

**Result (R)**  
- Latency dropped from 1 s to <180 ms during Black Friday traffic (95th percentile).  
- Recommendation accuracy recovered to baseline (+12 % lift).  
- Monthly cost stayed within $8.7k, a 13 % reduction vs. the legacy vertical‑only approach.  

**Leadership Principles Highlighted**  
*Customer Obsession* – I measured impact on user experience (latency & accuracy).  
*Ownership / Dive Deep* – I profiled the system, identified bottlenecks, and engineered a robust horizontal scaling solution that balances performance and cost.  

**Bar‑raiser Takeaway**  
Listen for evidence of ownership, depth in analysis, quantified outcomes, and reflection on what could be improved (e.g., exploring SageMaker endpoints for future model updates).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
