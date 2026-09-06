---
qid: ing_ce4edf7750__think__local
question: 'Explain: Collision Risks — Design URL Shortener | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 196
output_tokens: 468
total_tokens: 664
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T14:34:54-05:00'
sources: []
---

**1️⃣ Clarify the problem & assumptions**  
- Ask what “collision risk” means in this context (same short‑code → different long URLs).  
- Confirm constraints: scale (e.g., 10⁹ requests/day), latency (<50 ms), persistence, and whether deletions/updates are allowed.  
- Decide on trade‑offs: deterministic vs probabilistic mapping, use of a database or in‑memory cache.

**2️⃣ Adopt a system‑design framework**  
- *Requirements*: functional (generate/retrieve URLs), non‑functional (scalability, availability).  
- *Components*: API layer, URL encoder/decoder, persistence store, caching layer, monitoring.  
- *Design space*: hash‑based ID generation, random token, or dictionary‑based approach.

**3️⃣ Step‑by‑step reasoning**  
1. **Generate candidate codes**: use a base‑62 counter or random string.  
2. **Check for collision**: query the store (or cache) to see if the code already exists.  
3. **Resolve collision**: 
   - If deterministic, retry with next counter value.  
   - If probabilistic, regenerate a new random token until unique.  
4. **Persist mapping**: write `<code> → <longURL>` atomically.  
5. **Read path**: lookup code in cache; on miss, hit DB and update cache.

**4️⃣ Avoid common traps**  
- Forgetting to handle race conditions when two requests generate the same code concurrently.  
- Over‑optimizing for speed at the expense of consistency (e.g., using a local map without persistence).  
- Ignoring the growth of the collision probability as the namespace fills up (Le Page’s law).

**5️⃣ Sanity‑check & verbalize**  
- Verify that the collision resolution keeps throughput high: e.g., expect <1% retries at 10⁹ URLs.  
- Explain how atomic DB inserts or a distributed lock prevent duplicate keys.  
- Conclude with trade‑off summary (e.g., counter + cache gives deterministic, minimal collisions; random string offers simplicity but higher retry probability).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
