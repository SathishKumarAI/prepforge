---
qid: ing_6d56e3bd4a__think__local
question: You have a stream of billions of events and need the top-K most frequent
  keys with bounded memory. Exact answer impossible - what do you do?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 207
output_tokens: 525
total_tokens: 732
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T08:13:24-05:00'
sources: []
---

**1️⃣ Clarify the problem & assumptions**  
- We’re streaming *billions* of events, each tagged by a key (e.g., user ID).  
- We want the top‑K most frequent keys.  
- Memory is bounded: we can’t keep exact counts for all keys.  
- “Exact answer impossible” → we must accept approximation.

**2️⃣ Mental model / framework**  
Treat it as an *approximate heavy‑hitters* problem. Use streaming algorithms that trade a small error probability and bounded memory for fast, single‑pass processing:  
- Count‑Min Sketch (CMS) for frequency estimation.  
- Space‑Saving algorithm for top‑K extraction.

**3️⃣ Step‑by‑step reasoning**  

1. **Choose data structure** – CMS gives an upper bound on each key’s count using O((log 1/δ)/ε) counters; Space‑Saving maintains a small table of candidates with approximate counts.  
2. **Process stream** – For each event, update the sketch (hashes + counters). If using Space‑Saving, try to increment an existing bucket or replace the smallest if capacity is full.  
3. **Estimate frequencies** – After streaming, query CMS for any key’s frequency; it overestimates by at most εN with probability ≥ 1−δ.  
4. **Extract top‑K** – Run Space‑Saving’s output (or sort CMS estimates) to get the K keys with highest approximate counts.  

**4️⃣ Common traps to avoid**  
- Forgetting that CMS only gives *upper bounds*; you may over‑report a key’s frequency.  
- Choosing too few hash functions → high error probability.  
- Over‑allocating memory for CMS while ignoring the K‑size table in Space‑Saving.  
- Assuming exact counts are needed; the question explicitly says “exact answer impossible”.

**5️⃣ Sanity‑check & communicate**  
- Verify that memory usage fits the bound: `O((K + log(1/δ))/ε)` counters is far less than storing all keys.  
- Explain that we accept a bounded error (ε, δ) and that the returned top‑K will be correct with high probability.  
- Emphasize the trade‑off: smaller ε → more memory but tighter bounds; larger K → more space.  

This approach gives you a provably good approximation to the true top‑K while respecting strict memory limits.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
