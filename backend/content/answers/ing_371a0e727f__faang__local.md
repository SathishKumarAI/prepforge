---
qid: ing_371a0e727f__faang__local
question: 'Explain: Requirements — Hitcounterdesigntwitter'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 469
total_tokens: 702
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:52:13-05:00'
sources: []
---

**Clarify**  
You need a *hit counter* that records every view of a Twitter‑style tweet in real time.  
Key assumptions to confirm:  
1. How many tweets exist (≈ 10⁶)?  
2. Expected hit rate per tweet (average 10⁴ hits/sec, peak 10⁶?).  
3. Consistency model required—exact counts or eventual?  
4. Persistence needs—can we store in memory only or must log to disk?  

**Approach**  
1. **In‑memory counter per tweet** using a sharded hash map (e.g., Redis or a local LRU cache).  
2. Periodically **batch persist** counters to a distributed log (Kafka → HDFS/Bigtable) for durability.  
3. Use a **two‑level architecture**:  
   *Hot* counter per tweet in memory;  
   *Cold* aggregate stored in BigTable with daily roll‑up.

**Depth**  
- Memory footprint ≈ (8 bytes key + 8 bytes count) × 10⁶ ≈ 16 MB.  
- Write path: increment → atomic CAS or Lua script (Redis).  
- Persisting every N hits or every T seconds keeps write amplification low.  
- Consistency: eventual; if a crash occurs, last N writes may be lost but are negligible relative to total traffic.  

**Edge Cases**  
- **Burst traffic** on viral tweets → shard by tweet hash; use Redis Cluster to distribute load.  
- **Key eviction** in LRU cache → fallback to disk‑based counter to avoid loss.  
- **Out‑of‑order writes** from distributed workers → timestamped logs ensure correct aggregation.

**Optimize & Communicate**  
Explain trade‑offs: higher memory gives lower latency; more frequent persistence increases durability but adds overhead. Show complexity: O(1) per increment, O(log N) for batch flush. Conclude that this design scales horizontally and meets Twitter’s 99.9% uptime with minimal loss of accuracy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
