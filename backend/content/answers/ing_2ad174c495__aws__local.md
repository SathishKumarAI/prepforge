---
qid: ing_2ad174c495__aws__local
question: What is load balancing?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 225
output_tokens: 362
total_tokens: 587
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:02:04-05:00'
sources: []
---

**Answer (Amazon style)**  

**Leadership Principles:** *Customer Obsession* – ensure users get fast, reliable ML predictions; *Ownership* – own the end‑to‑end flow from model training to inference.

**Situation / Task**  
While launching a real‑time recommendation engine for an e‑commerce platform, my team observed latency spikes during traffic surges. The problem was uneven distribution of inference requests across our GPU clusters.

**Action**  
I introduced **Elastic Load Balancing (ELB)** with *Application Load Balancer* (ALB) to route incoming HTTP/HTTPS prediction calls to an Auto Scaling group of **Amazon SageMaker endpoints**. I added a *traffic‑shifting* rule: 80 % traffic to the primary endpoint, 20 % to a warm standby for A/B testing new models. To reduce cold‑start cost, I enabled *warm pool* instances and leveraged **AWS Lambda@Edge** to cache popular query vectors in CloudFront.

**Result**  
Latency dropped from an average of 350 ms (worst case 1.2 s) to 70 ms (95th percentile <120 ms). The system sustained 10× peak traffic without manual intervention, and we reduced inference cost by 18 % through better utilization of GPU instances.

**Dive Deep & Bar‑raiser notes**  
- Demonstrated ownership by designing the whole scaling loop.  
- Quantified impact with concrete latency and cost metrics.  
- Learned that caching edge data can significantly cut cold starts; will apply to future projects.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
