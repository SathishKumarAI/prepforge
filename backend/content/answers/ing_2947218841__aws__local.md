---
qid: ing_2947218841__aws__local
question: 'Explain: Benefits of a CDN — Content Delivery Network (CDN) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 410
total_tokens: 647
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:59:01-05:00'
sources: []
---

**Situation / Task**  
I was leading the rollout of a global recommendation engine for our e‑commerce platform. Users in Europe and Asia were experiencing > 2 s latency on ML model inference pages, hurting conversion rates.

**Action**  
1. **Owned** the performance problem (Ownership).  
2. Built a **CDN layer** using Amazon CloudFront + edge Lambda@Edge to cache static assets and pre‑compute personalized snippets from DynamoDB.  
3. Deployed a **model‑as‑a‑service** on SageMaker endpoints behind an Application Load Balancer, auto‑scaling by CPU/Inference latency.  
4. Added **real‑time analytics** in CloudWatch + Athena to monitor cache hit ratios and model latency.

**Result**  
- Cache hit ratio rose from 12 % to 85 %, cutting page load time by 60 % (from 2.3 s to 0.9 s).  
- Conversion rate increased 4 pp, generating an additional $1.8 M/month in revenue.  
- Operational cost fell 35 % because CloudFront served 70 % of traffic without invoking SageMaker.

**Technical Take‑aways**  
* **Scalability:** Edge caching handles millions of requests per second; model endpoints auto‑scale on demand.  
* **Availability:** CloudFront’s global edge network provides > 99.999 % SLA, while SageMaker automatically replicates across AZs.  
* **Cost vs Trade‑offs:** Paying for edge compute is cheaper than constantly invoking inference endpoints; however, stale content risk requires TTL tuning.

**Bar‑raiser signals** – I demonstrated deep ownership, quantified impact with revenue lift, and learned that cache invalidation policies must evolve with model updates.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
