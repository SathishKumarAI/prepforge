---
qid: ing_ba0df70928__think__local
question: 'Explain: Coding: merge ranked results from N connector shards into a global
  top-k, applying a per-user permission filter. Do it efficiently.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 206
output_tokens: 580
total_tokens: 786
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T13:13:09-05:00'
sources: []
---

**1️⃣ Clarify the problem & state assumptions**

- *Inputs*:  
  - `N` shards each return their own ranked list of candidate items (IDs + scores).  
  - A per‑user permission map (`user → allowed item set`).  
  - Desired global `k`.  
- *Goal*: produce the top‑`k` items that the user is permitted to see, in order.  
- Assume: shards already sorted by relevance; permissions are known (hash set); we want O(N log N) or better.

---

**2️⃣ Mental model / framework**

Treat each shard’s list as a *sorted stream*. We need a global merge of these streams while discarding disallowed items on the fly. This is analogous to merging `k` sorted lists with a filter – a priority‑queue (min‑heap or max‑heap) approach works naturally.

---

**3️⃣ Step‑by‑step reasoning**

1. **Initialize a max‑heap** where each entry holds `(score, shard_id, index_in_shard)`. Push the first element from every shard.
2. **Loop until we have `k` results or heap empty**:  
   - Pop the highest‑scoring candidate.  
   - Check if it passes the user’s permission filter (`O(1)` with a hash set).  
     - If allowed → add to output list.  
     - Regardless, advance that shard: push its next element (if any) onto the heap.
3. **Terminate** once `k` items are collected or no more candidates remain.

Complexity: Each pop/push is `O(log N)`; we perform at most `k + (#filtered items)` operations. In practice, with a small `k`, this stays efficient even for large shards.

---

**4️⃣ Common traps to avoid**

- **Pull‑after‑push vs push‑after‑pull**: Don’t pull the next shard item before confirming the current one is allowed; otherwise you may miss eligible items.  
- **Permission caching**: If permissions change frequently, stale caches lead to wrong results. Keep them fresh or re‑validate per request.  
- **Heap type**: Use a max‑heap for descending scores; a min‑heap would need negated scores.

---

**5️⃣ Sanity‑check & communicate**

- Verify edge cases: empty shards, all items filtered out, `k` larger than total eligible items.  
- Explain the algorithm in plain terms: “Merge sorted streams with a priority queue while filtering each candidate on the fly.”  
- Mention that this approach scales linearly with the number of shards and only logarithmically with `N`, making it efficient for real‑time top‑k queries.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
