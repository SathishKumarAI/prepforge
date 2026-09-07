---
qid: ing_eac48d9f52__faang__local
question: 'Explain: You''re receiving an unbounded stream of event IDs. Return the
  k most frequent IDs seen so far, at any point, with bounded memory.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 479
total_tokens: 731
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:45:39-05:00'
sources: []
---

**Clarify**  
We get a continuous stream of integer/event IDs. At any instant we must be able to report the *k* most frequent IDs observed so far. Memory cannot grow with the number of distinct IDs; only bounded space is allowed. Assume `k` is small relative to the stream size and that IDs are non‑negative integers.

**Approach**  
Use a *count–min sketch* (CMS) to estimate frequencies in sublinear memory, combined with a min‑heap of size *k* to keep candidate top‑k IDs.  
1. On each event `id`, increment its CMS counter.  
2. Periodically (or after every N events), query the estimated count for all IDs currently in the heap and any new IDs that have appeared since the last update.  
3. If a queried ID’s estimate exceeds the minimum of the heap, replace that entry.

**Depth**  
- CMS size `m = O(1/ε)` rows × columns `t = O(log(1/δ))` gives error ≤ ε·N with probability ≥ 1−δ.  
- Heap operations are `O(log k)`.  
- Total per‑event cost: `O(t)` for CMS update + occasional `O(k log k)` heap maintenance.  
Space is `O(m·t + k)`—independent of the distinct ID count.

**Edge Cases**  
- Very bursty IDs may cause temporary overestimation; we mitigate by increasing `m`.  
- If an ID’s true count drops below others, CMS never decreases counts—so stale high estimates can appear. Periodic re‑initialization or decaying counters help.  
- Tie handling: use stable ordering (e.g., lower ID wins).

**Optimize & Communicate**  
- Tune ε and δ to balance accuracy vs memory; for k≈100 we can afford a few megabytes.  
- Explain that CMS guarantees probabilistic bounds, acceptable in most analytics scenarios.  
- Clarify that the heap always contains *k* candidates, so reporting is `O(k)` time.  

This solution gives bounded memory, sublinear update time, and provable error guarantees—exactly what a FAANG interview expects.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
