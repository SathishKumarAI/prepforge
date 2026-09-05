---
qid: ing_43fab5dfe6__star__local
question: 'Explain: Find the top-K most frequent items in a high-volume event stream
  with bounded memory.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 374
total_tokens: 618
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:45:02-05:00'
sources: []
---

**Situation**  
During my last role at a real‑time ad platform, we ingested 15 M events per minute from millions of user sessions. The engineering team needed to surface the top‑10 trending keywords for our dashboard, but we could only afford 512 MB of RAM on each consumer node.

**Task**  
Implement an algorithm that continuously outputs the current top‑K most frequent items in a high‑volume stream while respecting strict memory limits and providing sub‑second latency per event.

**Action**  
I chose the *Space‑Saving* sketch, implemented as a min‑heap of size k with counters. Each incoming keyword was hashed; if it existed in the heap I incremented its counter. If not and the heap wasn’t full, I inserted it with count 1. When the heap was full and a new item arrived, I replaced the minimum element, setting its counter to min+1 (the “surplus” estimate). To keep memory bounded, I used a 64‑bit hash table for quick lookups and avoided storing raw strings by keeping only their hashes and a small pointer into a shared string pool. Periodically (every second) I emitted the heap contents as the top‑k list.

**Result**  
The sketch required ~4 MB per node regardless of stream volume, satisfying our memory budget. Accuracy was within 0.5% of a full count on test data, and latency stayed below 10 µs per event. The dashboard now updates in real time with negligible lag, and the solution scales linearly as we add more nodes. I learned how to balance theoretical guarantees with practical constraints—especially how small trade‑offs (like using hash collisions) can dramatically reduce memory while keeping error bounded.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
