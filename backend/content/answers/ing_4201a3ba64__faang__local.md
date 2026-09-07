---
qid: ing_4201a3ba64__faang__local
question: 'Explain: 88: Break Into System Design (9 Minutes)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 457
total_tokens: 692
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:17:33-05:00'
sources: []
---

**Clarify**  
We’re asked to explain a “System Design” interview that lasts **9 minutes** and is labeled “88”. Likely it’s a *short‑form* system‑design question used at FAANG—think a quick “build X in Y seconds” style. The goal is to gauge high‑level thinking, trade‑offs, and communication under tight time.

**Approach**  
1. **Restate the problem & constraints** (e.g., build a URL shortener with 10 M users).  
2. **Sketch core components**: API gateway → load balancer → stateless service → cache + DB.  
3. **Pick key trade‑offs**: Consistency vs latency, in‑memory cache vs distributed store, sharding strategy.  
4. **Show data flow & failure handling**.  

**Depth**  
- *API*: REST or gRPC, rate limiting, auth.  
- *Storage*: Use a key‑value store (Redis for hot keys; Cassandra/Bigtable for durability).  
- *Sharding*: Hash on user ID → 100 shards → linear scalability.  
- *Cache*: LRU eviction, 5 s TTL to keep stale reads low.  
- *Consistency*: Eventually consistent writes; read‑your‑writes via cache.

Complexity:  
- **Read**: O(1) (cache hit) or O(log N) (DB lookup).  
- **Write**: O(1) with async replication.  

**Edge Cases**  
- Cache miss → DB round‑trip latency spikes.  
- Key collision in hash → rehashing needed.  
- Data loss on node failure → need multi‑replica strategy.

**Optimize & Communicate**  
Explain why sharding reduces contention, why eventual consistency suits a shortener, and how we’d monitor with request latencies and cache hit ratios. Wrap up by noting that the 9‑minute format forces concise trade‑off discussion, so keep it high‑level but concrete—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
