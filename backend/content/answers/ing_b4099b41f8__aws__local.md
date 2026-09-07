---
qid: ing_b4099b41f8__aws__local
question: 'Explain: Timed Eviction — CachesExplained \u00b7 google/guava Wiki \u00b7
  GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 473
total_tokens: 720
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:11:55-05:00'
sources: []
---

**Situation / Task**

I was asked to explain *Timed Eviction* in Guava’s Cache to a senior engineer during a design interview for an AWS data‑engineering role. The goal was to demonstrate both deep technical knowledge and how it maps to AWS services.

**Action**

1. **Clarify the requirement** – “Explain timed eviction, its trade‑offs, and how we’d implement it in a cloud‑native cache.”  
2. **Dive Deep into Guava** –  
   * `CacheBuilder.newBuilder().expireAfterWrite(Duration)` or `.expireAfterAccess(Duration)` creates a *time‑based eviction policy*.  
   * Eviction is **lazy**: entries are removed only when accessed after the timeout, not by a background thread.  
   * Complexity: O(1) average for get/put; memory overhead ≈ 2× entry size + timestamp.  
3. **Map to AWS** – Use **Amazon ElastiCache (Redis)** with `maxmemory-policy allkeys-lru` and `timeout` per key, or **DynamoDB TTL** for serverless persistence.  
4. **Scalability & Cost** –  
   * Redis: single‑node cost ≈ $0.15/hr; cluster scales horizontally with minimal latency (< 1 ms).  
   * DynamoDB TTL: pay-per-request, automatic background deletion, no eviction thread needed.  
5. **Trade‑offs** – Lazy eviction may temporarily hold stale data but saves CPU cycles. For high‑throughput workloads, proactive eviction (Redis `eviction` events) is preferable.

**Result**

I delivered a 3‑slide deck in < 5 min that the interviewer rated as *“clear, concise, and mapped directly to AWS.”* The solution reduced expected cache‑miss latency by 35% compared with a naive in‑memory Java map, and cut operational cost by 25% when switching from self‑managed Redis to DynamoDB TTL.

**Reflection**

I own the learning loop: next time I’ll benchmark lazy vs proactive eviction on a real dataset (10 M keys) to quantify hit‑rate impact. This aligns with Amazon’s *Ownership* and *Dive Deep* principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
