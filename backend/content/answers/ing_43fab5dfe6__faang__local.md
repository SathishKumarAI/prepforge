---
qid: ing_43fab5dfe6__faang__local
question: 'Explain: Find the top-K most frequent items in a high-volume event stream
  with bounded memory.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 503
total_tokens: 744
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:22:42-05:00'
sources: []
---

**Clarify**  
We’re given an unbounded stream of events (e.g., user actions). Each event contains an item ID. With limited RAM we must output the *top‑K* items that have appeared most often so far. Assumptions:  
- K is small relative to distinct items.  
- Items arrive uniformly; we can’t store all counts.  
- We need a single pass, sub‑linear memory solution.

**Approach**  
Use the **Space–Saving (or Misra–Gries) algorithm**. Maintain a hash map of at most *K* entries: `<item, count>`. For each event:  

1. If item exists → increment its count.  
2. Else if map size < K → insert with count = 1.  
3. Else replace the entry with the smallest count `c_min` by this new item and set its count to `c_min + 1`.

The algorithm guarantees that the true frequency of any reported item is at least `f_true – εN`, where `ε = 1/K`.  

**Depth**  
- **Time:** O(1) amortized per event (hash lookup, occasional min‑search).  
- **Space:** O(K) items + hash overhead.  
- After processing the stream, we sort the K entries by count to output the top‑K.

Trade‑offs: We sacrifice exactness for bounded memory; the error bound is tight and acceptable for many analytics use cases.

**Edge Cases**  
- If fewer than K distinct items appear, simply return all.  
- Frequent “burst” of a new item may momentarily push out a real high‑frequency one—test with synthetic bursts.  
- Verify that hash collisions don’t inflate counts by using a robust hashing scheme.

**Optimize & Communicate**  
We can accelerate min‑search by keeping a min‑heap of size K, yielding O(log K) per replacement but making updates predictable. For very high throughput, batch process events and update counts in parallel while merging local maps with the global one (parallel Space–Saving). In an interview, I’d highlight that this approach scales to terabytes of data, uses only a few megabytes for K=1000, and provides provable error guarantees—exactly what FAANG data‑engineering teams need.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
