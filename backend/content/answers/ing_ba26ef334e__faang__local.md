---
qid: ing_ba26ef334e__faang__local
question: 'Explain: Redis Data Structures — The Ultimate Redis 101'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 663
total_tokens: 897
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:55:38-05:00'
sources: []
---

**Clarify**  
You’re asking for a concise overview of the core data structures in Redis and why they matter for ML workloads. I’ll assume you want: (1) what each type is, (2) typical use‑cases, (3) performance notes, and (4) how they fit into ML pipelines.

**Approach**  
I’ll map each structure to its ML role, then discuss memory/latency trade‑offs, finishing with a quick “when to pick which” cheat sheet.

---

### Depth  

| Structure | Core API | Typical ML Use | Performance |
|-----------|----------|----------------|-------------|
| **String** | `SET`, `GET` | Feature vectors (JSON or binary), model checkpoints, flags. | O(1) read/write; minimal overhead. |
| **Hash** | `HSET`, `HMGET` | User profiles, sparse feature maps. | ~O(1) per field; good for small keysets. |
| **List** | `LPUSH`, `LRANGE` | Training queues, time‑series logs. | O(1) push/pop; sequential scan costs linear. |
| **Set** | `SADD`, `SMEMBERS` | Candidate ID sets (e.g., user→items). | O(1) add/lookup; hash‑based hashing gives fast set ops. |
| **Sorted Set** | `ZADD`, `ZRANGE` | Ranking, top‑k recommendations. | Logarithmic insertion; range queries are cheap. |
| **HyperLogLog** | `PFADD`, `PFCOUNT` | Cardinality estimates (unique users). | Fixed 12 KB memory, sub‑1% error. |
| **Bitmaps** | `SETBIT`, `GETBIT` | Binary feature flags, bloom‑style filters. | O(1) per bit; compact for dense binary data. |
| **Streams** | `XADD`, `XRANGE` | Real‑time event ingestion (feature updates). | Append‑only log; consumer groups enable parallel ML workers. |

**Edge Cases**  
- Extremely large hash keys can bloat memory—use hashes only when keyset stays < 10k per entry.  
- Lists grow unbounded if not trimmed (`LTRIM`); otherwise OOM.  
- Sorted Sets with millions of members incur ~O(log N) ops; consider partitioning.

**Optimize & Communicate**  
For ML pipelines, store raw feature vectors as *Strings* or *Bitmaps* for fast retrieval, and maintain a *Sorted Set* for scoring/ranking. Use *HyperLogLog* to keep cardinality stats without heavy storage. If you need streaming training data, push into *Streams* and let worker shards consume in parallel. Communicate this design by showing how each structure’s latency/memory profile matches the ML task (e.g., low‑latency inference vs. batch training). This aligns with FAANG expectations: clear problem framing, systematic mapping to Redis primitives, complexity analysis, and practical trade‑offs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
