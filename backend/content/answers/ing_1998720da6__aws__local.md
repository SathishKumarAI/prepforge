---
qid: ing_1998720da6__aws__local
question: 'Explain: Cache Penetration — How Can Cache Systems Go Wrong?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 426
total_tokens: 660
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:24:05-05:00'
sources: []
---

**Situation & Task (Customer Obsession)**  
While launching a real‑time recommendation engine for our e‑commerce platform, we noticed that the Redis cache hit rate dropped from **95 % to 30 %** during peak traffic. A sudden spike in *cache penetration*—requests for non‑existent keys bypassing the cache and hitting DynamoDB directly—caused latency to rise from 12 ms to 180 ms, hurting conversion rates.

**Action (Dive Deep & Ownership)**  
1. **Root cause analysis** – instrumented the cache layer with CloudWatch metrics and identified that **70 % of misses were for keys not present in DynamoDB** (e.g., expired product IDs).  
2. **Mitigation design** – implemented a *“negative caching”* strategy:  
   - When a miss occurs, write a short‑lived placeholder (`TTL 5m`) into Redis to block subsequent duplicate lookups.  
   - Use **AWS Lambda@Edge** to intercept cache misses and return `404` immediately for known stale keys, reducing DynamoDB reads by **≈80 %**.  
3. **Fail‑fast guard** – added a *rate limiter* (API Gateway + WAF) to throttle abusive clients that repeatedly hit missing keys.

**Result (Deliver Results)**  
- Cache hit rate rebounded to **93 %**, latency fell back to 15 ms, and conversion improved by **4.2 %** during the next promotion cycle.  
- DynamoDB read capacity usage dropped from 1,200 RU/s to 240 RU/s, cutting costs by **$1,800/month**.

**Bar‑raiser takeaway**  
Demonstrated ownership by diagnosing a subtle performance issue, designing an AWS‑centric solution that balanced cost and latency, and quantifying the business impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
