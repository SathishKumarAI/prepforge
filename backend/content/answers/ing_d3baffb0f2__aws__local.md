---
qid: ing_d3baffb0f2__aws__local
question: 'Explain: Pattern 1: Load Balancer with Multiple Backends'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 482
total_tokens: 714
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:19:17-05:00'
sources: []
---

**Situation** – At my last role I led the migration of a legacy monolith that served 5 M daily users into a micro‑service architecture on AWS. The main pain point was uneven traffic spikes (up to 200 % in peak hour) causing back‑end throttling.

**Task** – Design a resilient, cost‑efficient load balancing layer that distributes requests across multiple identical containers while preserving session affinity and monitoring health.

**Action**  
1. **Elastic Load Balancing (ALB)**: Configured with *path‑based* routing to route `/api/*` to the new micro‑service cluster.  
2. **Amazon ECS Fargate**: Deployed 10 task definitions behind the ALB, each with a health check on `/health`. Auto‑scaling policies (CPU > 70 % → +2 tasks; CPU < 30 % → –1 task) keep capacity aligned to demand.  
3. **AWS WAF & Shield**: Added rate limiting and DDoS protection.  
4. **Amazon CloudWatch Alarms** on ALB latency (≤ 200 ms target) and 5xx error rates (< 0.5 %). Triggers auto‑scaling of the ECS service.  
5. **Cost control** – Reserved Instances for 80 % of baseline traffic, Spot Instances for burst capacity; total cost dropped from $18K/month to $12K/month.

**Result** – Latency fell by 35 %, 99.9 % availability achieved during a 24‑hour flash sale, and the new architecture handled a 4× traffic increase with only 20 % additional compute spend.

---

### Leadership Principles

- **Customer Obsession**: Built a system that guarantees low latency for every user.  
- **Ownership & Dive Deep**: Took full responsibility for end‑to‑end performance; continuously analyzed metrics to refine scaling thresholds.  

Bar‑raiser cues: clear ownership, data‑driven impact (latency & cost), deep dive into AWS services, and a learning loop from the spike during the flash sale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
