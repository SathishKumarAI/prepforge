---
qid: ing_b9021d8bf2__faang__local
question: 'Explain: Summary — Consistent Hashing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 393
total_tokens: 627
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:53:12-05:00'
sources: []
---

**Consistent hashing – a quick FAANG‑style recap**

| Step | What to say |
|------|-------------|
| **Clarify** | “We’re talking about mapping keys (e.g., cache entries) to nodes in a distributed system so that the assignment is stable when the cluster changes.” Ask: *Do we need to minimize rebalancing? Are node failures allowed?”|
| **Approach** | 1. Create a hash ring of values 0–2³²−1.<br>2. Hash every node’s identifier (and optionally replicas) onto the ring.<br>3. Hash each key; it maps to the first node clockwise on the ring. |
| **Depth** | • **Hash function**: use SHA‑256 or MurmurHash, then truncate.<br>• **Virtual nodes**: each physical server gets many positions (e.g., 100) to smooth load.<br>• **Rebalancing cost**: only keys that fall between the old and new node’s positions move; O(log N) lookups via binary search.<br>• **Complexity**: O(log N) per lookup, O(1) for adding/removing nodes. |
| **Edge cases** | • Empty cluster → error or special “fallback” node.<br>• All replicas of a key map to the same physical server (use distinct hash seeds).<br>• Node churn rate high → consider consistent hashing with bounded load. |
| **Optimize & communicate** | *Trade‑offs*: more virtual nodes → better balance vs memory overhead.<br>*Explain*: “This gives us O(1) rebalancing, minimal data movement, and easy scaling—exactly what a large cache or key‑value store needs.” |

*Word count: ~195.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
