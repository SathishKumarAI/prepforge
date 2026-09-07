---
qid: ing_30872b68e1__faang__local
question: 'Explain: Basic Redis Commands — The Ultimate Redis 101'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 522
total_tokens: 756
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:37:12-05:00'
sources: []
---

**Clarify**  
You want a concise, interview‑ready rundown of the most common Redis commands and their typical use cases. I’ll assume we’re talking about an in‑memory key/value store used for caching or messaging, not the full breadth of modules.

**Approach**  
1. Group by data type (strings, hashes, lists, sets, sorted sets).  
2. For each group list: set/get, delete, TTL, atomic ops.  
3. Highlight pub/sub and transaction helpers.  

**Depth**  
| Command | What it does | Typical pattern |
|---------|--------------|-----------------|
| `SET key value [EX seconds]` | Store a string with optional expiry | Cache an API response for 60 s |
| `GET key` | Retrieve a string | Read cached data |
| `DEL key` | Remove a key | Invalidate cache |
| `INCRBY key n` | Atomically increment numeric value | Rate limiter counter |
| `HSET key field val`, `HGET key field` | Hash operations | User profile attributes |
| `LPUSH key val`, `LRANGE key 0 -1` | List stack/queue | Task queue |
| `SADD key member`, `SMEMBERS key` | Set membership | Tagging system |
| `ZADD key score member`, `ZRANGE key 0 -1 WITHSCORES` | Sorted set for ranking | Leaderboard |
| `EXPIRE key seconds` | Set TTL after the fact | Expire stale session |
| `PUBLISH channel msg` / `SUBSCRIBE channel` | Pub/sub messaging | Real‑time notifications |
| `MULTI`, `EXEC`, `WATCH` | Transactions & optimistic locking | Batch cache updates |

**Edge cases**  
- Key not found → return nil (no crash).  
- TTL of 0 → immediate deletion.  
- Large payloads may exceed memory; use `MEMORY USAGE`.  
- Pub/sub messages are fire‑and‑forget; no persistence.

**Optimize & Communicate**  
Mention pipelining (`MULTI`/`EXEC`) to reduce round trips, and using Redis Cluster or Sentinel for scaling/high availability. Conclude by stressing that understanding these primitives lets you build fast caching layers, queues, and real‑time features—core skills any FAANG ML engineer needs when dealing with latency‑critical data pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
