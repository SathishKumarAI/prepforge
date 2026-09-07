---
qid: ing_32931c4021__aws__local
question: 'Explain: Cache Repeated Work — Client-Server Architecture | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 469
total_tokens: 703
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:19:35-05:00'
sources: []
---

**Situation / Task**  
I led a redesign of our recommendation engine for the *Prime Video* catalog, which was hitting 3 M requests per day. The latency spike came from repeatedly running expensive matrix‑factorization models on identical user‑item pairs. I owned the problem and drove a client‑server solution that cut downstream compute by 70 % while keeping SLAs.

**Action**  
1. **Requirements & Architecture** –  
   *Client*: lightweight Lambda@Edge function that normalizes request keys (user‑id + item‑id).  
   *Server*: Amazon ElastiCache Redis cluster (cluster mode enabled) as a distributed cache; Fargate micro‑service running the ML model only on cache misses.  
2. **Design Choices** –  
   - Use **Redis LRU eviction** with TTL = 24 h to keep hot items in memory, reducing compute churn.  
   - Cache key hashed via SipHash for collision resistance; values stored as base64‑encoded feature vectors.  
   - Fargate task scale‑out governed by CloudWatch metrics (cache hit ratio).  
3. **Scalability / Availability** – Multi‑AZ Redis with automatic failover; Fargate tasks behind an Application Load Balancer ensures zero downtime during scaling events.  
4. **Cost & Trade‑offs** – 30 % reduction in GPU compute time (~$0.12/hr per task) outweighed the $0.04/hr cost of a small Redis node; we chose the “simplify and ship” approach rather than a full‑blown data lake.

**Result**  
- Cache hit ratio rose from **25 % to 92 %**, cutting latency from 650 ms to 120 ms (p99).  
- Daily compute cost dropped by **$12 k/month**, freeing capacity for next‑generation models.  

**Reflection** – I learned that “invent & simplify” can be achieved by reusing existing AWS services with a well‑defined key strategy, and that ownership means iterating until the metrics meet customer expectations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
