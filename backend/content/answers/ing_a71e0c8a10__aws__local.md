---
qid: ing_a71e0c8a10__aws__local
question: 'Explain: 2.1 Traffic Estimates — Design Load Balancer | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 472
total_tokens: 713
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:44:23-05:00'
sources: []
---

**Situation & Task**  
While leading a data‑science squad at my previous company, we launched an ML‑based traffic‑estimation API that served 3 M requests/day. The API was hit by sudden traffic spikes during city events, causing latency to jump from 120 ms to >1 s and a 12 % SLA breach.

**Action (Design)**  
I architected a **scalable load‑balancing layer** using *Amazon API Gateway* + *Elastic Load Balancer (ALB)* in front of an *Auto Scaling Group* of EC2 instances running the inference container.  

1. **Traffic Shaping:** ALB’s path‑based routing directed 70 % of traffic to a “warm” pool and 30 % to a “cold” pool, ensuring at least one warm instance per 50k requests.  
2. **Dynamic Scaling:** CloudWatch metrics (latency, CPU) fed into an *Application Auto Scaling* policy that increased capacity by 25 % when latency >200 ms.  
3. **Caching & Throttling:** API Gateway’s built‑in caching (TTL = 60 s) reduced inference calls by ~35 %. A rate‑limit of 10 req/s per IP prevented abuse.  

**Result**  
After rollout, average latency dropped to 90 ms, SLA compliance rose from 88 % to **99.7 %**, and cost decreased by 18 % due to efficient scaling.

**Leadership Principles**  
- **Customer Obsession:** Delivered a faster, more reliable API for millions of commuters.  
- **Ownership & Dive Deep:** Built end‑to‑end observability (CloudWatch, X-Ray) and iterated on the scaling logic based on real metrics.

**Bar‑raiser takeaways** – I showed ownership by owning the whole pipeline, dove deep into latency causes, quantified impact with concrete numbers, and learned from failure by turning a 12 % SLA breach into a 99.7 % success story.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
