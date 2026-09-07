---
qid: ing_a6aad352b0__aws__local
question: 'Explain: Cache Hit and Miss — What is Caching? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 557
total_tokens: 792
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:43:50-05:00'
sources: []
---

**Scenario – Designing a recommendation engine for a global e‑commerce platform**

**S – Situation:**  
I led the cache layer for our product‑recommendation service. We were seeing 1 × 10⁶ requests/sec with a latency SLA of <50 ms, but the database hit ratio was only ~30 %, causing expensive read traffic and throttling.

**T – Task:**  
Reduce average response time to 20 ms while cutting DynamoDB read capacity by ≥60 % and staying within a $5k/month budget.

**A – Action (Technical Design):**  
1. **Cache Strategy:**  
   * Adopted a two‑tier cache:  
     - **Primary:** Amazon ElastiCache Redis, 64 GB per node, clustered with auto‑sharding for horizontal scaling.  
     - **Secondary fallback:** DynamoDB Global Secondary Index for “cold” items that miss the cache.  

2. **Cache Hit/Miss Logic:**  
   * On every request, check Redis key (`user:{id}:rec`). If hit → return; if miss → query DynamoDB, populate Redis with TTL 15 min and write-through to S3 for archival.  

3. **Monitoring & Auto‑Scaling:**  
   * CloudWatch metrics: `CacheHitRate`, `RedisMemoryUsage`. Triggered Spot Instances when hit rate <70 % or memory >80 %.  

4. **Cost/Availability Trade‑offs:**  
   * Chose Multi‑AZ Redis for 99.99 % availability; used on‑demand instances during peak (peak demand ~200 k req/s). Savings from reduced DynamoDB read units offset the higher cache cost.

**R – Result:**  
* Cache hit rate climbed to **92 %**, cutting DynamoDB reads by **65 %** and saving ~$1.8k/month. Latency dropped from 70 ms to **18 ms** (average), meeting SLA. The system now handles 2× the traffic with the same budget.

---

### Leadership Principles Highlighted  
- **Ownership:** Took end‑to‑end responsibility for latency & cost, iterating until metrics improved.  
- **Dive Deep:** Analyzed cache hit/miss patterns, tuned TTLs, and quantified trade‑offs in a real‑world scenario.  

*Bar‑raiser listening notes:* depth of technical reasoning, clear metric focus, ownership mentality, and evidence of learning from initial high miss rates.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
