---
qid: ing_909c08412d__think__local
question: 'Explain: Least Frequently Used (LFU) — Cache Eviction Policies'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 444
total_tokens: 637
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T10:38:24-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
- Assume we’re dealing with a *cache* that stores key‑value pairs and can hold only `N` items.  
- “Least Frequently Used” means evicting the entry that has been accessed the fewest times over its lifetime (or within a sliding window).  
- We’ll ignore tie‑breaking rules for now, focusing on the core idea.

**2️⃣ Mental model / framework**  
Think of each cache slot as an object with two attributes:  
1. `key/value` pair  
2. `frequency counter` – how many times it’s been read or written since insertion (or last reset).  

The eviction policy is simply “remove the object with the minimal counter”.

**3️⃣ Step‑by‑step reasoning**  
- On **cache hit**, increment that entry’s frequency counter.  
- On **cache miss**:  
  - If space exists, insert new item with counter = 1.  
  - If full, scan all entries, find the one(s) with the smallest counter, evict it (or a tie‑break), then insert the new item with counter = 1.  
- Optionally, apply *decay* or *aging* to avoid long‑term starvation of newer items.

**4️⃣ Common traps to avoid**  
- Forgetting that LFU is *global*: you can’t just evict a block with low usage locally; you must consider the whole cache.  
- Misinterpreting “frequency” as “recency”; LFU ≠ LRU.  
- Neglecting tie‑breaking, which can lead to deterministic or random eviction decisions.

**5️⃣ Sanity‑check & verbalize**  
Ask: *“If an item has never been accessed again after insertion, will it be evicted first?”* – Yes, because its counter stays at 1.  
Explain that LFU tends to keep long‑term popular items alive, while short bursts of access don’t unduly protect rarely used data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
