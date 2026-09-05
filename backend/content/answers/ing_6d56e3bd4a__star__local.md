---
qid: ing_6d56e3bd4a__star__local
question: You have a stream of billions of events and need the top-K most frequent
  keys with bounded memory. Exact answer impossible - what do you do?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 352
total_tokens: 606
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:05:45-05:00'
sources: []
---

**Situation:** In my last role I was tasked with monitoring user interactions for a global gaming platform that generated over two billion events per day. The analytics team needed the top 50 most active players in real time, but our infrastructure could only keep about 200 MB of in‑memory state.

**Task:** Deliver an approximate top‑K list that updates within seconds while guaranteeing that memory usage never exceeded the allocated budget and that we could still spot sudden spikes or anomalies.

**Action:** I implemented a Count‑Min Sketch (CMS) with a hash table of 4×15,000 counters (≈180 MB). Each event’s player ID hashed into four rows; I incremented the corresponding counters. Periodically (every minute), I queried all keys that had at least one counter above a threshold and ran a lightweight heap‑based selection to extract the top 50. To keep the CMS fresh, I used a decay factor by halving all counters every hour, preventing stale data from dominating. I also added a small Bloom filter to avoid reprocessing duplicate events within a sliding window.

**Result:** The system produced top‑K lists with <3 % error compared to offline exact counts on test datasets, and memory stayed below 200 MB. Response time was under 2 seconds per update cycle, enabling the product team to react instantly to emerging trends. I learned how probabilistic data structures can turn an intractable problem into a production‑ready solution with predictable accuracy guarantees.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
