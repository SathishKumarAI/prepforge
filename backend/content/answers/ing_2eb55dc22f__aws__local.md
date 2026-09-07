---
qid: ing_2eb55dc22f__aws__local
question: 'Explain: Eviction — CachesExplained \u00b7 google/guava Wiki \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 456
total_tokens: 701
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:10:44-05:00'
sources: []
---

**Situation (S)**  
While leading a data‑science team at a fintech startup, we had to serve over **3 M users/day** of real‑time risk scores. Our in‑memory cache (Google Guava) was filling up fast, causing OOMs and 30 % latency spikes.

**Task (T)**  
Design an eviction strategy that keeps hot data while preventing memory exhaustion, keeping SLA < 99th percentile 200 ms.

**Action (A)**  
1. **Requirements & Trade‑offs** –  
   * Cache size: 2 GB RAM → ~800K entries at 2.5 KB each.  
   * Eviction policy: combine *Least Recently Used* (LRU) with *Time‑to‑Live* (TTL).  
   * Use Guava’s `CacheBuilder`:
   ```java
   Cache<String, RiskScore> cache = CacheBuilder.newBuilder()
       .maximumSize(800_000)
       .expireAfterWrite(5, TimeUnit.MINUTES)
       .removalListener(e -> logRemoval(e.getKey(), e.getCause()))
       .build();
   ```
2. **Dive Deep** – Monitored `CacheStats` (hit/miss ratio). Adjusted TTL from 3 min to 5 min after observing that 70 % of misses were due to stale entries.  
3. **AWS Services** – Deployed on EC2 Spot with Auto Scaling; added CloudWatch alarms for memory and hit‑ratio thresholds.

**Result (R)**  
* Hit ratio improved from **58 % → 93 %**.  
* Latency dropped 30 % (from 250 ms to 175 ms).  
* OOM incidents eliminated, cost stayed under the $50/month budget for caching infrastructure.  

**Bar‑raiser notes** – Showed ownership by taking end‑to‑end responsibility, deep dive into metrics, quantified impact, and learning from initial TTL misconfiguration.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
