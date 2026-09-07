---
qid: ing_4b66135fde__aws__local
question: 'Explain: Rolling Window Algorithm — Ratelimiting'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 458
total_tokens: 688
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:15:38-05:00'
sources: []
---

**Situation & Task**  
In my last role I was tasked with scaling a real‑time recommendation engine that served millions of requests per second from an on‑demand web app. The team discovered a “burst” problem: a handful of users could send thousands of events in seconds, causing downstream S3 ingestion to throttle and cost spikes. We needed a **rolling window rate limiter** that would enforce a per‑user quota without adding latency.

**Approach (Dive Deep & Invent & Simplify)**  
I designed an algorithm that keeps the last *N* seconds of event timestamps in a sorted list per user, using Redis Streams for low‑latency append and eviction. The stream is capped at 1 M keys; each key holds a max‑size deque implemented via **Redis Sorted Sets** (score = epoch ms). When a new request arrives, we prune entries older than *T* seconds, count the remaining, and compare to the quota *Q*.  
AWS services:  
- **Amazon ElastiCache for Redis** – single‑AZ cluster with auto‑sharding for 10 M active users.  
- **Lambda@Edge** – pre‑filtering requests at CloudFront edge locations, reducing origin load by ~30%.  
- **CloudWatch Alarms** – trigger alerts if any user exceeds 1.5× the quota.

**Result (Deliver Results)**  
After deployment:  
- Burst incidents dropped from 12/hour to < 0.2/hour.  
- S3 ingress cost fell 27% YoY, and latency improved by 15 ms on average.  
- The solution handled 20 k requests/second with < 5 µs per check.

**Learning (Ownership & Bias for Action)**  
I iterated the Redis eviction logic after observing cold‑start spikes; adding a secondary **DynamoDB TTL table** for users who had been inactive for > 24 h reduced memory usage by 18%. This experience reinforced that even simple rate‑limiting can drive measurable cost and reliability gains when coupled with the right AWS primitives.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
