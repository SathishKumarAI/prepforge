---
qid: ing_2f75783664__aws__local
question: 'Explain: Reference-based Eviction — CachesExplained \u00b7 google/guava
  Wiki \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 489
total_tokens: 736
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:12:55-05:00'
sources: []
---

**Situation (S)**  
While leading a micro‑service that delivered personalized recommendations for an e‑commerce platform, we noticed the in‑memory cache was growing unbounded, causing GC pauses and 30 % latency spikes during peak traffic.

**Task (T)**  
Implement a robust eviction strategy that keeps hot data available while preventing memory bloat, without adding manual cleanup logic.

**Action (A)**  
I introduced **Reference‑Based Eviction** from Guava’s `CacheBuilder` into our Java service.  
* **Design:**  
  * Use `SoftReference` for entries so the JVM can reclaim them under pressure.  
  * Combine with a time‑based policy (`expireAfterWrite(10m)`) to guarantee stale data is refreshed.  
  * Wrap the cache in a thin façade that falls back to a read‑through from **DynamoDB** when an entry is evicted.  
* **AWS Services & Trade‑offs:**  
  * **Lambda + API Gateway** for on‑demand recomputation of heavy recommendations, keeping the cache lightweight.  
  * **CloudWatch** alarms monitor eviction count and GC metrics; if evictions exceed 5 % of total entries, we trigger a Lambda to pre‑warm the cache.  
* **Scalability & Cost:** The cache lives in each container (ECS Fargate), so memory usage scales with task size; DynamoDB provides linear read capacity at $0.25 per million reads.

**Result (R)**  
Eviction rate dropped from 12 % to <1 %, reducing GC pause time by **45 %** and improving overall request latency from 350 ms to **210 ms** during the 24‑hour peak window—meeting our SLA of <250 ms for 99.9 % of traffic.

> *Leadership Principles:*  
> • **Ownership** – Took full responsibility for performance bottleneck and drove cross‑team coordination.  
> • **Dive Deep** – Analyzed JVM metrics, cache behavior, and AWS cost implications to craft a data‑driven solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
