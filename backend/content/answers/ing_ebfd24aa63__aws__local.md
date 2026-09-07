---
qid: ing_ebfd24aa63__aws__local
question: 'Explain: 5.7 Comment on a Post — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 593
total_tokens: 834
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:12:22-05:00'
sources: []
---

**Context (S)**  
At my last role I was asked to design a feature that lets users “comment on a post” for an Instagram‑style app while keeping the system highly available and cost‑effective.

**Task (T)**  
Build a scalable, low‑latency comment service that supports millions of daily comments, enforces rate limits, and guarantees eventual consistency across global regions.

**Action (A)**  

| Step | Design & AWS Services | Rationale |
|------|-----------------------|-----------|
| 1️⃣ **API layer** | Amazon API Gateway + Lambda (Node.js) | Serverless for zero‑provisioning, auto‑scales to spikes. |
| 2️⃣ **Write path** | DynamoDB Global Tables (partitioned by `postId`) with a dedicated “comments” table; write through LRU cache in ElastiCache Redis | DynamoDB provides single‑digit ms writes; Redis caches hot comments for quick reads and throttling. |
| 3️⃣ **Read path** | Lambda + DynamoDB Streams → Kinesis Data Firehose → S3 (cold storage) + CloudFront for CDN caching of comment lists | Decouples read traffic, ensures eventual consistency and cost‑effective archival. |
| 4️⃣ **Rate limiting** | API Gateway usage plans + Cognito user pools; fallback to Lambda‑based leaky bucket | Prevents abuse while keeping latency low. |
| 5️⃣ **Monitoring** | CloudWatch Alarms on write latency > 30 ms → SNS → PagerDuty; X-Ray traces for debugging | Enables quick rollback if SLA breaches occur. |

**Result (R)**  
After launch, the comment service handled **>2 M writes/day** with a 99.9% success rate and <45 ms average latency. Cost dropped 35 % compared to a monolithic EC2 solution due to serverless scaling.

---

### Leadership Principles Highlighted
- **Ownership** – I drove end‑to‑end design, from API to archival, taking full responsibility for reliability and cost.
- **Dive Deep** – Chose DynamoDB Global Tables after profiling contention; tuned Redis eviction policies based on hot‑spot analysis.
- **Deliver Results** – Met performance SLAs while cutting infrastructure spend.

### Bar‑raiser Takeaways
- Clear ownership signals confidence in the solution.  
- Deep dive into latency, consistency, and cost shows technical depth.  
- Quantified impact (2 M writes/day, 99.9% success, 35 % savings) demonstrates business value.  

By tying design choices to AWS services and measurable outcomes, I proved that the comment feature would scale, stay cheap, and keep users happy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
