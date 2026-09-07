---
qid: ing_a05568de82__faang__local
question: 'Explain: Key-Based Sharding (with a dash of %3 hash)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 419
total_tokens: 657
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:57:14-05:00'
sources: []
---

**Clarify**  
You’re asking how “key‑based sharding” works, especially when the shard is chosen by hashing the key and taking the remainder modulo 3 (i.e., `hash(key) % 3`). I’ll assume we have a single table of rows identified by a unique key and that we want to distribute those rows across three physical shards (or nodes).

**Approach**  
1. **Hash the key** – use a stable, uniform hash function (e.g., MurmurHash).  
2. **Modulo‑3 mapping** – compute `h = hash(key) % 3`.  
3. **Route** – send the row to shard `h`.  
4. **Rebalancing** – when adding/removing shards we recompute modulo by new divisor.

**Depth**  
- *Uniformity*: A good hash spreads keys evenly, so each shard gets ~1/3 of traffic.  
- *Determinism*: Same key always hashes to the same shard, enabling read‑through caching and efficient joins.  
- *Scalability*: Adding a shard changes the modulo base; naïve rehashing would move many rows, but techniques like **consistent hashing** mitigate churn.

**Edge Cases**  
- Collision: Rare but possible; we handle by storing multiple rows in the same bucket.  
- Uneven key distribution (e.g., time‑series keys) can skew load; use a salted hash or key transformation.  
- Node failure: need a replication strategy to avoid data loss.

**Optimize & Communicate**  
To reduce rebalancing, I’d adopt consistent hashing with virtual nodes—each physical shard owns many “virtual” slots, so adding one shard only moves ~1/N of the keys. I’d explain this trade‑off (slightly higher lookup overhead vs. minimal data movement) and show how it keeps read latency predictable while scaling horizontally.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
