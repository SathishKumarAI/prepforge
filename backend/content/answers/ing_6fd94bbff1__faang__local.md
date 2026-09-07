---
qid: ing_6fd94bbff1__faang__local
question: 'Explain: From a high-volume query stream, maintain the top-k most frequent
  queries right now, with bounded memory.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 507
total_tokens: 752
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:03:12-05:00'
sources: []
---

**Clarify**

We’re given an unbounded stream of text‑queries (e.g., search terms).  
Goal: at any instant report the *k* most frequent queries seen so far, using **O(k)** or a small constant amount of memory independent of the total number of distinct queries.  
Assumptions to confirm:  
- Queries are hashable and comparable in O(1).  
- We only need an approximate ranking (exactness is optional).  
- The stream can be processed online with one pass.

---

**Approach**

Use a **Space‑Saving / Heavy‑Hitter sketch**.  
Maintain two data structures:

| Structure | Purpose |
|-----------|---------|
| `HashMap<query, count>` (size ≤ k) | Tracks current candidate counts |
| Min‑heap of size *k* keyed by the stored counts | Quickly identifies the lowest estimate |

For each incoming query:
1. If it’s already in the map, increment its counter.
2. Else if the map has < *k* entries, insert with count = 1.
3. Otherwise replace the min‑heap root (the current smallest count) with this new query and set its count to *minCount + 1*.  
   Update heap accordingly.

---

**Depth**

- **Time:** O(log k) per update (heap operations).  
- **Space:** O(k) for map + heap.  
- The algorithm guarantees that the stored counts are never less than the true frequency minus the sum of all discarded frequencies, giving a provable error bound ≤ total discarded weight / k.

---

**Edge Cases**

- If *k* = 0 → return empty list.  
- High‑frequency “burst” queries may temporarily displace others; test with synthetic bursts.  
- Hash collisions: use robust hashing or double hashing to mitigate.

---

**Optimize & Communicate**

To reduce constant factors, we can replace the heap with a bucketed array when *k* is small (e.g., 100).  
Explain that the algorithm trades exactness for bounded memory while still guaranteeing that any query whose true frequency exceeds the threshold will appear in the top‑k.  
During an interview, emphasize the intuition: keep only “heavy” candidates and periodically prune light ones, ensuring memory stays fixed regardless of stream size.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
