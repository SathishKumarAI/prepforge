---
qid: ing_df435e471d__aws__local
question: 'Explain: Solutions — Cache Miss Attack'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 652
total_tokens: 879
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:44:26-05:00'
sources: []
---

**Situation** – In 2023 I led the security team for a SaaS product that exposed ML model predictions via an API. After a penetration test we discovered a **cache‑miss attack**: attackers repeatedly requested rare feature vectors to force cache evictions and throttle our inference service, dropping latency from 30 ms to >1 s for 25% of users.

**Task** – Design a resilient architecture that protects the inference layer while keeping cost under $2k/month and maintaining <50 ms latency for 95th percentile requests.

**Action**  
1. **Cache Strategy** – Introduced *ElastiCache Redis* with read replicas, using an LRU policy tuned to keep the top‑10K feature vectors in memory.  
2. **Request Throttling** – Added a **Lambda@Edge** layer that inspects query patterns; if a client exceeds 200 unique feature vectors per minute, we return a *429* and log to CloudWatch Logs.  
3. **Rate Limiting & Quotas** – Integrated API Gateway usage plans (10 req/s) with Cognito identities so each user has an individual quota.  
4. **Monitoring** – Employed CloudWatch Alarms on `CacheHitRatio` and `Latency`; set up SNS alerts for sudden drops below 80%.  

**Result** – After deployment, cache hit ratio improved from 35% to 92%, latency returned to <40 ms (99th percentile) and the cost impact was +$300/month, well within budget. The system now automatically throttles abusive patterns without human intervention.

---

### AWS Services & Trade‑offs  
| Service | Why it matters | Cost/Scalability | Trade‑off |
|---------|----------------|------------------|-----------|
| **ElastiCache Redis** | Low‑latency in‑memory cache | $0.03/hr per node; auto‑scales via replication | Slight memory cost vs. DynamoDB persistence |
| **Lambda@Edge** | Edge throttling reduces origin load | Pay per 100 ms invocation; global distribution | Cold start latency for first request |
| **API Gateway + Cognito** | Built‑in quotas, auth | $3.50/million calls; fine‑grained limits | Adds a single point of failure if not paired with WAF |

### What a bar‑raiser looks for  
- **Ownership**: Took full responsibility from detection to remediation.  
- **Dive Deep**: Quantified hit ratios, latency percentiles, and cost per node.  
- **Impact**: Restored performance for 95% of users while keeping costs predictable.  
- **Learning**: Realized that cache miss patterns can be leveraged as a DDoS vector; now we log anomalies and feed them into an ML model to auto‑adjust thresholds.

*Leadership Principles invoked:* **Ownership**, **Dive Deep**, **Customer Obsession**, **Bias for Action**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
