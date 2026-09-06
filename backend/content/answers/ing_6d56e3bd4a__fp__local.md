---
qid: ing_6d56e3bd4a__fp__local
question: You have a stream of billions of events and need the top-K most frequent
  keys with bounded memory. Exact answer impossible - what do you do?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 454
total_tokens: 642
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:56:48-05:00'
sources: []
---

When a stream contains *N* events but you can keep only *M ≪ N* items, the problem is one of **frequency estimation under memory constraints**.  
The goal is to identify keys whose true count \(f_x\) exceeds a threshold \(\tau\), without storing every occurrence.  

1. **Lower bound** – any algorithm that guarantees exact top‑\(K\) must use \(\Omega(N)\) space (since a single unseen key could later dominate).  
2. **Probabilistic relaxation** – we accept *ε‑approximate* counts and *δ‑failure* probability.  
3. **Sketch + heap hybrid** – maintain a **Count–Min Sketch (CMS)** of size \(O(\frac{1}{\varepsilon}\log\frac{1}{\delta})\) to get an upper bound \(\hat f_x\) on each key’s frequency, plus a **Space‑Saving priority queue** that keeps the current best candidates.  
   * When an event arrives:  
     - Increment CMS counters (hash‑based).  
     - If the key is already in the heap, bump its counter.  
     - Otherwise, if the heap has < K items, insert it with count from CMS; else replace the min element only when the incoming key’s estimated count exceeds that minimum.  

This guarantees that every reported key has true frequency at least \(\tau-εN\) with probability \(1-δ\).  
**Non‑obvious insight:** The CMS upper bounds are *monotone*—they never underestimate. This monotonicity lets the heap be updated lazily: you need not adjust all other keys when a new candidate appears; only the min element is considered, yielding an overall amortized \(O(1)\) update time while still preserving guarantees.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
