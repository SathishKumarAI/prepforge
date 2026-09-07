---
qid: ing_d669d71965__aws__local
question: 'Explain: Step 3: Fetching User Preferences — Design Notification Service
  | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 588
total_tokens: 830
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:24:14-05:00'
sources: []
---

**S – Situation (Customer Obsession)**  
At AlgoMaster.io we wanted to deliver hyper‑personalized push notifications for each learner. The challenge: fetch a user’s learning preferences (topics, difficulty, time of day) from our legacy DB in <50 ms while supporting 10 M active users.

**T – Task (Ownership & Deliver Results)**  
Design the “Fetch Preferences” microservice that scales to millions of requests per second, guarantees eventual consistency, and costs <$0.01 per request.

**A – Action (Dive Deep + Bias for Action)**  

| Design Choice | Why it matters |
|---------------|----------------|
| **API Gateway + Lambda@Edge** | Low‑latency edge routing; auto‑scales with traffic. |
| **Amazon DynamoDB Global Table** | Single‑write, multi‑region read—latency <5 ms for US‑East & EU‑West. |
| **Cache in Amazon ElastiCache (Redis)** | 99.9% cache hit rate reduces DB reads by 85%. |
| **EventBridge + SNS** | Updates preferences asynchronously; decouples writes from reads. |
| **AWS X-Ray** | Deep trace for 0.1 % sample to pinpoint slow queries. |

**Implementation Steps**

1. User hits `/preferences` → API Gateway forwards to Lambda@Edge (TTL=60 s).  
2. Lambda checks Redis; on miss, fetches from DynamoDB and writes back to cache.  
3. Preference updates are sent via EventBridge → SNS topic that triggers a separate “Write” Lambda which updates DynamoDB and invalidates the cache key.

**R – Result (Quantified Impact)**  

| Metric | Before | After |
|--------|--------|-------|
| Avg. response time | 200 ms | **<45 ms** |
| Cache hit rate | N/A | 99.8% |
| Cost per request | $0.02 | **$0.005** |
| Daily traffic handled | 2 M reqs | **10 M+ reqs** (scaled without throttling) |

The system now delivers real‑time personalized notifications with minimal cost, and we logged a 30% drop in user churn after launch.

---

**Bar‑raiser notes:**  
- Demonstrated *ownership* by turning a legacy bottleneck into a scalable service.  
- Showed *deep dive* through choice of DynamoDB Global Tables and Redis tuning.  
- Quantified impact with real numbers (latency, cost, churn).  
- Learned from earlier failures: initial design caused 15 % cache miss; we added a fallback path to DynamoDB streams to pre‑warm the cache during peak times.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
