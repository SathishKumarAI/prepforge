---
qid: ing_6d56e3bd4a__faang__local
question: You have a stream of billions of events and need the top-K most frequent
  keys with bounded memory. Exact answer impossible - what do you do?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 481
total_tokens: 732
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:57:42-05:00'
sources: []
---

**Clarify**

> “We receive a billion‑plus event stream, each tagged by a key. We must report the top K most frequent keys in real time while only keeping bounded memory.”  
> *Assumptions to confirm:*  
> - K is small (≤ 1000).  
> - Keys are hashable strings/ints.  
> - Approximate counts are acceptable; absolute accuracy isn’t required.  

**Approach**

1. **Sketch the stream** – use a probabilistic frequency estimator (Count‑Min Sketch or Space‑Saving algorithm).  
2. **Maintain candidate set** – keep a min‑heap of size K holding keys with the highest estimated frequencies.  
3. **Periodic cleanup** – after every *M* events, prune the sketch to bound its memory usage and refresh heap entries.

**Depth**

- *Space‑Saving*: each counter stores `(key, count)`; on arrival of key `x`:  
  - if `x` is tracked → increment count.  
  - else if heap not full → add `x` with count 1.  
  - else replace the min element (smallest count) by `x`, setting its new count to `min_count+1`.  
- Guarantees that every reported key’s true frequency ≥ reported‑count – K×ε, where ε is controlled by sketch size.  
- Complexity: O(1) amortized per event; memory ≈ O(K + sketch_size).  

**Edge Cases**

- **Sudden burst of a new key** → may be missed until it overtakes the min heap; test with flash‑in bursts.  
- **Hash collisions** in sketches could inflate counts; use pairwise independent hash functions.  
- **K > distinct keys** – simply return all tracked keys.

**Optimize & Communicate**

- Tune `sketch_size` to meet a target error bound (e.g., 1 % relative error).  
- If latency is critical, process events in micro‑batches and update the heap asynchronously.  
- Explain that this trade‑off gives near‑accurate top‑K with sub‑MB memory—ideal for billions of events on commodity hardware.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
