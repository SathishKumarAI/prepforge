---
qid: ing_9c7c28e909__aws__local
question: 'Explain: Result Pagination: — Top 5 Common Ways to Improve API Performance'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 584
total_tokens: 819
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:18:40-05:00'
sources: []
---

**Situation & Task**  
While leading the *ML Model Registry* team at a fintech startup, our REST API for retrieving model metadata lagged behind as the catalog grew to **1 M+ records**. Clients complained of >3 s latency and throttling on heavy queries.

**Action**  
I introduced five pagination strategies that cut response time by **70 %** and reduced backend load by **45 %**:

| Technique | AWS Service & Design | Impact |
|-----------|---------------------|--------|
| 1️⃣ **Offset‑based paging with `LIMIT`/`OFFSET`** | RDS Aurora MySQL + ElasticCache Redis for hot keys | Simple, but I added a *Redis cache* of the first 10 pages to avoid costly offset scans. |
| 2️⃣ **Keyset (cursor) pagination** | DynamoDB Global Secondary Index on `created_at` | Eliminated offset cost; throughput dropped from 3 k RCU to 1 k RCU. |
| 3️⃣ **Page‑number + page size limits** | API Gateway throttling, Lambda authorizer enforcing max 100 items/page | Prevented abuse; cost per request fell by 25 %. |
| 4️⃣ **Pre‑computed next‑page tokens** | SQS FIFO queues generating signed JWTs with pagination state | Reduced client round‑trips; overall latency dropped from 3.2 s to 0.9 s. |
| 5️⃣ **Server‑side filtering + projection expressions** | Lambda + Athena for ad‑hoc queries, only requested fields returned | Cut payload size by ~60 %, improving bandwidth costs on CloudFront. |

I monitored the changes with CloudWatch metrics and A/B tested against the old API—**95 % of users reported “fast” responses**.

**Result**  
Post‑deployment, average latency fell from **3.2 s to 0.8 s**, request throttles dropped by 80 %, and monthly AWS spend on RCU/RCU decreased by **$1,200**. The solution is now part of our open‑source SDK.

**Leadership Principles Highlighted**  
- **Ownership**: I took full responsibility for the API’s performance and drove a cross‑functional rollout.  
- **Dive Deep**: By profiling query plans and cache hit ratios, I identified the precise bottlenecks and tuned each pagination method accordingly.  

*Bar‑raiser notes*: The answer shows clear ownership, quantifies impact, demonstrates deep technical understanding of AWS services, and reflects learning from prior failures (offset paging inefficiency).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
