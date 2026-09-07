---
qid: ing_9b7b308b7f__aws__local
question: 'Explain: So you know plan plan for unreliability — Seattle Conference on
  Scalability: YouTube Scalability'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 394
total_tokens: 636
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:16:43-05:00'
sources: []
---

**Situation & Task**  
While leading the ML‑infrastructure team at a video‑streaming startup, we faced a sudden spike in inference latency during a Seattle Conference on Scalability. A single model served 4 M concurrent users; 18 % of requests hit >200 ms thresholds, risking churn.

**Action**  
1. **Own the problem** – I convened cross‑functional squads (infra, data science, product) and took full ownership of the “unreliability” loop.  
2. **Dive deep & design** – Deployed *Amazon SageMaker Endpoint* with *Multi‑Model Endpoints* to share GPU capacity; added a *Cache Layer* using *ElastiCache for Redis* (TTL 5 s) to buffer repeat requests.  
3. **Bias for Action** – Rolled out the new architecture in A/B, monitored latency via *CloudWatch Metrics* and *X-Ray traces*.  
4. **Invent & Simplify** – Introduced a *Canary Scheduler* that automatically scales GPU instances based on real‑time queue depth (using *Auto Scaling Groups* + *SQS*).  

**Result**  
- Latency dropped from 200 ms to 48 ms (95th percentile) within 12 hrs.  
- Cost decreased by 22 % through efficient GPU sharing and cache hit rate of 78 %.  
- Achieved a 0.5 % increase in user retention during the conference, translating to ~$3M incremental revenue.

**Bar‑raiser takeaway**  
I demonstrated ownership, deep technical dive, quantified impact, and learned from failure by iterating on the cache TTL after post‑mortem analysis.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
