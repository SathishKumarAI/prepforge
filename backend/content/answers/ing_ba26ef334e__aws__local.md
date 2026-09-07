---
qid: ing_ba26ef334e__aws__local
question: 'Explain: Redis Data Structures — The Ultimate Redis 101'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 473
total_tokens: 704
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:24:31-05:00'
sources: []
---

**Situation & Task**  
While leading the recommendation engine at a streaming startup, we hit latency spikes when serving user‑specific playlists. The team suspected our in‑memory cache was not optimally used. I owned the investigation and redesigned the Redis layer.

**Action (Technical)**  
1. **Requirements** – Cache 10 M users’ top 20 songs with <5 ms read time, auto‑expire after 24 h.  
2. **Design** –  
   * Use **ElastiCache for Redis** in a multi‑AZ cluster (high availability).  
   * Store each user’s list as a **Redis List** (`LPUSH`, `LRANGE`) to preserve order and enable efficient pagination.  
   * For tag‑based filtering, maintain a **Sorted Set** per genre with play counts as scores—`ZADD`/`ZRANGEBYSCORE`.  
   * Leverage **Redis Hashes** for user metadata (e.g., last activity) to avoid key proliferation.  
3. **Scalability & Cost** – Sharded cluster of `cache.t4g.large` nodes, auto‑scaling via CloudWatch alarms on CPU >70 % and memory <20 %. Monthly cost ≈ $1,200 vs $6,500 pre‑redesign.  

**Result**  
- Latency dropped from 120 ms to **<3 ms** (95th percentile).  
- Cache hit rate rose from 60 % to **92 %**, cutting backend DB load by **65 %**.  
- Monthly ops cost reduced by **80 %** while maintaining 99.99 % uptime.

**Reflection (Leadership)**  
*Customer Obsession*: We tuned for the end‑user’s instant playback experience.  
*Dive Deep*: I dissected Redis commands, measured pipeline usage, and iterated on data structure choice until metrics validated the design.  

Bar‑raiser notes: clear ownership, deep technical dive with measurable impact, and continuous learning from early performance failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
