---
qid: ing_f415a80662__aws__local
question: 'Explain: Terminologies — Cdns'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 396
total_tokens: 623
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:28:19-05:00'
sources: []
---

**Answer (Amazon Style)**  

**Context:** While building a real‑time recommendation engine for a global e‑commerce platform, I noticed latency spikes when serving model inference results to users in Asia and Europe.  
**Task:** Reduce end‑to‑end inference latency by at least 30 % while keeping costs under the quarterly budget.  
**Action:**  
1. **Dive Deep** into traffic patterns; discovered that most requests hit a single SageMaker endpoint hosted in US‑East, causing cross‑region hops.  
2. Deployed an **Amazon CloudFront CDN** with **Lambda@Edge** functions to cache model predictions at edge locations.  
3. Configured **Origin Shield** and **Cache Policies** to store frequently requested items for 12 hours, invalidating only on new model releases.  
4. Added a **SageMaker Real‑Time Inference endpoint** in the nearest region (AP‑South‑East) as a fallback, routed via CloudFront’s weighted routing.  
5. Monitored using **Amazon CloudWatch Metrics** and set alarms for cache hit ratio > 85 %.  

**Result:**  
- Latency dropped from 350 ms to 210 ms globally (≈ 40 % improvement).  
- Cache hit rate reached 88 %, cutting SageMaker invocation cost by $12K/month.  
- Achieved a 99.9 % availability SLA across all regions.  

**Leadership Principles Highlighted:** *Customer Obsession* (improved user experience), *Ownership* (end‑to‑end solution from model to delivery), and *Dive Deep* (metrics‑driven optimization).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
