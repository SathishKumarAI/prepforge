---
qid: ing_5e8297987e__faang__local
question: 'Explain: Consistent hashing — Consistent Hashing Explained'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 422
total_tokens: 656
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:23:36-05:00'
sources: []
---

**Consistent Hashing – A FAANG‑style answer**

| Step | What I’d say |
|------|--------------|
| **1️⃣ Clarify** | *Problem:* We need to map keys (e.g., cache keys) to a dynamic set of servers so that when nodes join/leave, minimal key remapping occurs. <br>*Assumptions:* Uniform hash function, servers identified by IDs, we’re in a distributed caching context. |
| **2️⃣ Approach** | 1. Map both servers and keys onto the same ring (0–2³²‑1). 2. Each server owns all hashes to its predecessor. 3. When a key arrives, hash it and walk clockwise until you hit the first server. 4. On node churn, only adjacent ranges shift. |
| **3️⃣ Depth** | *Algorithm:* For each server, compute `hash(serverID)` → place on ring; maintain sorted list or skip‑list for O(log N) lookup. <br>*Complexities:* Insert/Delete: O(log N). Lookup: O(log N). <br>*Trade‑offs:* Single server may become hot; solution—virtual nodes (replicas) per physical node to smooth load. |
| **4️⃣ Edge Cases** | • Ring empty → error.<br>• All keys map to the same node if only one server.<br>• Hash collisions handled by choosing a large modulus or using consistent hashing with virtual replicas. |
| **5️⃣ Optimize & Communicate** | • Use *hash‑rings* with 1000+ virtual nodes per machine for even distribution. <br>• Cache the next‑node lookup (e.g., via a tree map). <br>Explain that this reduces key movement to O(1/N) on average, keeping cache locality high and avoiding costly rebalancing—exactly what we need in large‑scale systems like Dynamo or Memcached. |

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
