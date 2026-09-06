---
qid: ing_ba0df70928__fp__local
question: 'Explain: Coding: merge ranked results from N connector shards into a global
  top-k, applying a per-user permission filter. Do it efficiently.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 187
output_tokens: 594
total_tokens: 781
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:39:13-05:00'
sources: []
---

**Problem restated from first principles**

We have \(N\) independent shards, each returning a locally sorted list of candidate items with relevance scores. A user‑specific permission set \(\mathcal{P}\) forbids certain items. We must output the *global* top‑\(k\) items that survive the filter, **without materialising all \(N\cdot M\) candidates** (where \(M\) is a shard’s local cutoff).  

---

### Why a priority queue works

Let each shard expose its current head item \((s_i,\text{score}_i)\).  
If we always pick the *maximum* of these heads, we guarantee that no unseen item can outrank it—because every other item in every shard has a lower score than its own head.  
Thus a **max‑heap** over the \(N\) heads yields an optimal greedy merge: pop the top, push the next from that shard.  

---

### Integrating permissions efficiently

Checking \(\mathcal{P}\) for each candidate is linear in the permission set’s size.  Instead, encode \(\mathcal{P}\) as a **bitset** or Bloom filter \(B\).  
*Pre‑filter*: When a head arrives, test it against \(B\); if false, discard and immediately fetch the next from that shard.  
Because the probability of a false positive is negligible for a Bloom filter with an appropriate hash count, we rarely reject valid items.

---

### Algorithm sketch

1. **Initialise** heap \(H\) with the first item of each shard that passes \(B\).  
2. While \(|\text{result}|<k\):  
   * Pop \((s,\text{score})\) from \(H\).  
   * Append to result.  
   * Fetch the next item from shard \(s\); if it satisfies \(B\), push into \(H\).  

The heap size never exceeds \(N\), so each pop/push costs \(O(\log N)\).  Overall time is \(O(k \log N + \text{false positives})\).

---

### Non‑obvious insight

**Early rejection via a probabilistic filter removes the need for per‑item permission lookups during the merge, turning an otherwise \(O(Nk|\mathcal{P}|)\) process into near‑linear time.**  
Because false positives are rare, the algorithm still guarantees that every item in the final top‑\(k\) truly satisfies the user’s permissions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
