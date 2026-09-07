---
qid: ing_ba0df70928__faang__local
question: 'Explain: Coding: merge ranked results from N connector shards into a global
  top-k, applying a per-user permission filter. Do it efficiently.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 404
total_tokens: 654
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:55:20-05:00'
sources: []
---

**Clarify**  
We need a single *global* list of the best k items after merging N shards that each return a locally ranked list. Additionally, every user has a permission mask (e.g., “can see item X”) that must be applied before final ranking. Assume: each shard returns its top‑m results; permission checks are O(1) per item; all data fits in RAM of the merge node.

**Approach**  
1. Pull the first element from every shard into a min‑heap keyed by score.  
2. Pop the highest‑score candidate, apply the user’s permission filter.  
3. If allowed, add to output; otherwise discard.  
4. Push the next item from the same shard into the heap.  
5. Repeat until we have k authorized items or all shards are exhausted.

**Depth**  
- Heap size ≤ N → O(log N) per pop/push.  
- Total operations ≈ k + number of filtered out items.  
- Permission lookup is constant time (hash set).  
- No need to materialize full global ranking; we only keep the top‑k.

**Edge Cases**  
- Shards may return fewer than m items → handle empty queues gracefully.  
- All items filtered out → return empty list.  
- Duplicate scores across shards: stable tie‑breaking by shard id or timestamp ensures deterministic output.

**Optimize & Communicate**  
We can batch permission checks if the filter is a bitmask (bitwise AND). Parallelize shard pulls to hide network latency. Explain that this algorithm guarantees O((k+f) log N) time, where f is the number of filtered items, and minimal memory overhead: only N heap entries plus k output. This balances efficiency with correctness—exactly what FAANG interviewers expect.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
