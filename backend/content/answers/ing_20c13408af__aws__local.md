---
qid: ing_20c13408af__aws__local
question: 'Explain: Load Balancer — Urlshorteningservicetinyurl'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 449
total_tokens: 683
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:41:21-05:00'
sources: []
---

**Situation (Behavior)**  
I led a three‑month sprint for a startup that wanted a URL‑shortener at scale. The product promised a 99.9 % uptime with <10 ms latency while handling 5 M requests/day.  

**Task**  
Design an elastic, cost‑effective load‑balancing layer that would route traffic to stateless microservices and guarantee high availability.

**Action (Technical)**  
1. **Elastic Load Balancer (ALB)** – Layer 7 routing on the short URL path (`/abc123`). Enables HTTP header inspection for future A/B tests.  
2. **AWS Lambda + API Gateway** – Stateless “lookup” function that reads a DynamoDB key and returns the target URL. Lambda scales automatically; no server maintenance.  
3. **DynamoDB Global Table** – Multi‑region read replicas (US‑East, EU‑West) to keep latency <5 ms globally. Uses eventual consistency for writes but provides 99.999% availability.  
4. **Cache Layer (Amazon ElastiCache Redis)** – Keeps the top 10 % of most‑hit URLs in memory; reduces DynamoDB traffic by ~70 %.  
5. **Auto Scaling & CloudWatch** – ALB metrics trigger Lambda concurrency scaling; CloudWatch alarms auto‑trigger a 30 % over‑provisioning buffer during peak hours.

**Result (Quantified Impact)**  
- Latency dropped from 25 ms to <8 ms at peak load.  
- Cost decreased by 40 % compared to an EC2‑based architecture.  
- Uptime maintained at 99.97 % over six months, exceeding the SLA.

**Reflection (Bar‑raiser focus)**  
I owned the entire stack, “dive deep” into DynamoDB’s consistency model, and iterated on caching after a cold‑start spike. Learned that balancing cost vs. latency requires continuous monitoring; hence the automated scaling logic now adapts to traffic patterns in real time.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
