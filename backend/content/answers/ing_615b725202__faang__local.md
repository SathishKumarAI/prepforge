---
qid: ing_615b725202__faang__local
question: 'Explain: Choosing a Shard Key — Sharding | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 510
total_tokens: 746
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:30:13-05:00'
sources: []
---

**Choosing a Shard Key – Sharding (System Design)**  

| Step | What I’d do |
|------|-------------|
| **Clarify** | *Problem:* We have a massive dataset (e.g., user‑profile logs) that must be partitioned across many nodes. The goal is to keep queries fast, writes balanced, and avoid hotspots. <br>*Assumptions to confirm:* 1) Workload: read‑heavy vs write‑heavy? 2) Query patterns: range scans, point lookups, or aggregations? 3) Data size growth rate and expected number of shards. |
| **Approach** | 1️⃣ List candidate keys (user_id, region, timestamp). <br>2️⃣ Evaluate each against criteria: uniqueness, distribution, query locality, and stability over time. <br>3️⃣ Pick the key that satisfies the most constraints; if none perfect, consider a composite or hashed key with secondary routing. |
| **Depth** | • **Uniqueness & Uniformity:** `user_id` is unique and roughly uniform → good for point lookups. <br>• **Range Queries:** If we need time‑based range scans, use `timestamp` or a composite `(region, timestamp)`. <br>• **Write Amplification:** A hot key (e.g., trending hashtag) would concentrate writes; hashing mitigates this. <br>Complexity: Shard lookup O(1) with consistent hashing; rebalancing cost amortized over time. |
| **Edge Cases** | • Hotspot if a few users generate most traffic → add a secondary hash or use “range‑sharding” on timestamp. <br>• Key skew after data growth → monitor histogram and trigger resharding. <br>• Deletion of old partitions: ensure tombstone handling to avoid stale reads. |
| **Optimize & Communicate** | • Start with `user_id` + a modulo hash for even distribution; add a “region” prefix if locality matters. <br>• Explain trade‑offs: point lookup speed vs. range scan efficiency, and the cost of rebalancing. <br>• Conclude by stating that choosing the shard key is an iterative process—monitor metrics, adjust, and document the rationale for future engineers. |

*Word count:* ~190 words.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
