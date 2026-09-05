---
qid: ing_40a859fd72__think__local
question: 'Explain: Least Frequently Used (LFU) — 7 Cache Eviction Strategies You
  Should Know'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 198
output_tokens: 497
total_tokens: 695
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:57:27-05:00'
sources: []
---

**1. Clarify the scope and assumptions**  
   - Confirm that “Least‑Frequently‑Used” refers to a cache replacement policy, not a learning algorithm.  
   - Assume we’re discussing in‑memory or disk caches where entries have a usage counter.  
   - Note that “7 strategies” means we’ll list LFU plus six related policies (e.g., LRU, FIFO, ARC).

**2. Adopt the “Cache‑Eviction Framework” mental model**  
   - *State*: which items are in cache and their metadata (frequency, recency).  
   - *Policy rule*: how to pick a victim when space is needed.  
   - *Update mechanism*: how usage counts change on reads/writes.

**3. Reason through each strategy step‑by‑step**  
   1. **LFU** – keep a counter per item; evict the one with the smallest count.  
   2. **LRU (Least Recently Used)** – track last access time; evict oldest.  
   3. **FIFO (First In, First Out)** – simple queue order; evict earliest inserted.  
   4. **ARC (Adaptive Replacement Cache)** – blend LRU and LFU using hit/miss buffers.  
   5. **CLOCK** – approximate LRU with a circular list and reference bits.  
   6. **Random** – pick any item uniformly; minimal overhead.  
   7. **LRFU (Least‑Recently‑Frequently Used)** – combine recency and frequency via a weighted score.

Explain each policy’s data structures, complexity, strengths/weaknesses, and typical use cases.

**4. Common traps to avoid**  
   - Mixing up “frequency” with “recency.”  
   - Forgetting that LFU can suffer from “cache pollution” if old hot items never drop.  
   - Assuming all policies are equally efficient; highlight overhead differences.  

**5. Sanity‑check & verbalize**  
   - Ask: Does the explanation cover both conceptual idea and practical implementation?  
   - Summarize each policy in one sentence, then expand on the nuances.  
   - Use analogies (e.g., LFU = “most popular books” vs. LRU = “least recently read”) to make it memorable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
