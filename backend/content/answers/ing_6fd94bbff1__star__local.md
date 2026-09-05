---
qid: ing_6fd94bbff1__star__local
question: 'Explain: From a high-volume query stream, maintain the top-k most frequent
  queries right now, with bounded memory.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 350
total_tokens: 598
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:10:32-05:00'
sources: []
---

**Situation** – In my last role at a search‑as‑a‑service company, we received about 10 M query events per hour from our API gateway. The product team needed the top‑20 trending queries in real time to surface on the dashboard, but our edge servers could only hold 2 GB of RAM.

**Task** – Build an online algorithm that continuously outputs the current top‑k (k=20) frequent queries using bounded memory and sub‑millisecond latency per event.

**Action** – I implemented a Count‑Min Sketch (CMS) with 4 hash rows and 1,000 columns to keep frequency estimates for all seen terms. For each incoming query, I hashed it into the sketch and updated counters in O(k). Every minute I ran a lightweight “heavy hitters” pass: I scanned the sketch’s buckets, selected candidate keys whose estimated count exceeded a threshold (derived from the CMS error bound), then fetched their exact counts from a small LRU cache of 100 k entries. The final top‑20 list was produced by sorting these candidates. This approach uses ~8 MB for the sketch and <1 MB for the cache, well under our memory budget.

**Result** – The system delivered accurate top‑20 lists with ±5% error in 99.9% of samples, latency stayed below 2 ms per event, and we reduced dashboard refresh time from 30 s to 3 s. I learned how sketching trades accuracy for space, and that a hybrid exact‑approximate pipeline can satisfy strict real‑time constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
