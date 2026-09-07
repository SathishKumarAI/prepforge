---
qid: ing_9ee014b125__aws__local
question: 'Explain: Caches — Bloom Filters | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 451
total_tokens: 681
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:23:52-05:00'
sources: []
---

**Situation & Task (S)**  
While revamping a real‑time recommendation engine for an e‑commerce platform, we had to cut the cold‑start latency of user profile lookups from ~200 ms to <50 ms without inflating our data store size.

**Action (A)**  
I designed a **Bloom filter cache layer** that sits in front of DynamoDB. Each request first queries an **ElastiCache Redis cluster** containing a probabilistic Bloom filter per partition. If the filter indicates “absent”, we skip the DB read; if it says “present”, we fetch the full profile from DynamoDB.  
- **AWS services used:** ElastiCache (Redis) for low‑latency cache, DynamoDB for durable storage, Lambda for background refresh of Bloom filters, CloudWatch for metrics.  
- I tuned the filter size to achieve a 0.1 % false‑positive rate, which translates to ~99.9 % hit avoidance.  
- To keep costs in check, we used **on‑demand Redis nodes** and scheduled automatic scaling via CloudWatch alarms.

**Result (R)**  
Within two weeks of deployment:  
- Latency dropped from 200 ms → 45 ms (+78 % improvement).  
- DynamoDB read traffic fell by 92 %, cutting provisioned throughput costs by **$1,800/month**.  
- Customer churn during the rollout was zero; A/B tests showed a 3 % lift in conversion rate.

---

### Leadership Principles Highlighted
- **Customer Obsession:** Reduced friction for users seeking personalized recommendations.  
- **Ownership & Dive Deep:** Built and tuned the Bloom filter pipeline end‑to‑end, continuously monitoring false‑positive impact.  

**Bar‑raiser cues I addressed:** Ownership of cost & performance, deep understanding of probabilistic data structures, quantifiable ROI, and iteration based on real metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
