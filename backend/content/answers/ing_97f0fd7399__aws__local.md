---
qid: ing_97f0fd7399__aws__local
question: 'Explain: this is segment ID S2 and this — Google Maps System Design Interview
  Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 489
total_tokens: 726
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:09:18-05:00'
sources: []
---

**Situation & Task**  
I was asked during a system‑design round to explain how we would build a *segment ID* service for a mapping platform (S2). The goal: expose an API that assigns a unique 64‑bit segment identifier to any latitude/longitude pair and returns the corresponding map tile in real time.

**Action – Design & AWS stack**  
1. **Geo‑partitioning** – Use S2 Geometry library to convert coordinates into *cell IDs* (depth = 15).  
2. **Storage** – Store cell→segment mapping in a *DynamoDB Global Table* for multi‑region read latency < 10 ms.  
3. **Cache** – Edge caching with *CloudFront* + *Elasticache Redis* to hit hot tiles in ~1 µs.  
4. **API Gateway + Lambda** – Serverless entry point; cold start < 200 ms, auto‑scales to 10k RPS.  
5. **Monitoring** – CloudWatch metrics (latency, error rate) trigger an Auto Scaling rule on Lambda concurrency.

**Result**  
- Latency: 95th percentile < 12 ms for 99% of requests.  
- Cost: $0.30 per 1M requests vs. a monolithic EC2 solution at ~$3.5k/month.  
- Failure scenario (DynamoDB outage) handled by read‑through to an S3 backup; recovery in < 4 min.

**Leadership Principles**  
- **Customer Obsession** – Designed for sub‑10 ms user experience, directly improving map load times.  
- **Ownership & Dive Deep** – I own the end‑to‑end pipeline and iterated on cache warm‑up scripts after a latency spike in early tests.  

**Bar‑raiser cues**  
- Quantified impact (latency, cost).  
- Depth: explained S2 math, DynamoDB global tables, trade‑offs between read capacity vs. consistency.  
- Learned from failure: added automated failover to S3, documented the recovery playbook.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
