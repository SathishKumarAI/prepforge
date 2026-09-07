---
qid: ing_cd6d75ae9e__faang__local
question: 'Explain: Range-Based Sharding — Sharding | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 490
total_tokens: 725
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:38:13-05:00'
sources: []
---

**Range‑Based Sharding – A Quick Guide**

| Section | Content |
|---------|---------|
| **Clarify** | *Problem:* We need to distribute a large key/value store across many nodes so that queries for a contiguous range of keys (e.g., user IDs 1–10⁶) run fast. <br>*Assumptions to confirm:* total key space, read/write mix, hot‑spot likelihood, ability to rebalance, and latency requirements. |
| **Approach** | 1. **Define ranges** – split the sorted key space into contiguous segments (e.g., every 10⁵ keys). <br>2. **Assign shards** – map each range to a physical node or replica set. <br>3. **Routing layer** – maintain an in‑memory map (or use consistent hashing with ranges) so lookups translate key → shard quickly. <br>4. **Rebalancing** – when a shard grows, split its range and migrate data; when underutilized, merge adjacent ranges. |
| **Depth** | *Lookup:* O(1) via binary search or hash map. <br>*Write:* If the key falls in a hot range, all writes go to one node → potential bottleneck; mitigated by read‑write splitting or sharding within that range. <br>*Rebalance complexity:* Data migration is I/O bound; use background threads and versioned keys to keep reads consistent. |
| **Edge Cases** | • Skewed data (one shard receives >80% traffic). <br>• Range overlap during split/merge leading to duplicate reads. <br>• Key deletions that shrink a range below threshold. Test with synthetic skew, split/merge races, and high‑volume burst writes. |
| **Optimize & Communicate** | • Use *range hashing* (e.g., prefix trees) for O(log n) routing if ranges are many. <br>• Implement *hot‑spot sharding*: subdivide hot ranges into finer subranges. <br>Explain trade‑offs: simpler range logic vs. potential uneven load; consistent hashing gives better balance but loses locality. |

*Total:* ~210 words.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
