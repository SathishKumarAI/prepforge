---
qid: ing_a5d6855452__think__local
question: 'Explain: Collision Resolution Strategies — Design URL Shortener | System
  Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 197
output_tokens: 478
total_tokens: 675
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T12:00:56-05:00'
sources: []
---

**1️⃣ Clarify the goal and constraints**  
   - *What is a collision?* Two distinct long URLs mapping to the same short token.  
   - *Assumptions:* We have a high‑traffic system (millions of requests per day), need idempotent creation, minimal latency, and 128 bit storage for tokens.  

**2️⃣ Adopt a layered mental model**  
   - **Token generation** → deterministic vs probabilistic.  
   - **Collision detection** → lookup in a hash table or key‑value store.  
   - **Resolution strategy** → retry, append suffix, use versioning, or adopt a different hashing scheme.  

**3️⃣ Step‑by‑step reasoning**  
   1. Generate an initial token (e.g., base62 of a counter or SHA‑256 digest).  
   2. Check if the token already maps to a *different* long URL in the database.  
   3. If no collision → store mapping and return short URL.  
   4. If collision occurs:  
      - **Option A:** Append a small suffix (e.g., `-1`, `-2`) and re‑check until free.  
      - **Option B:** Use a different hash seed or a new counter value, retrying up to *k* times.  
      - **Option C:** Store both URLs under the same token but differentiate by user ID (multitenant).  

**4️⃣ Common traps to avoid**  
   - Assuming collisions are rare and ignoring them in production code.  
   - Using a purely random token without checking, leading to infinite loops.  
   - Over‑complicating with distributed locks; instead rely on atomic “insert if not exists”.  

**5️⃣ Sanity check & verbalize**  
   - Verify that each path guarantees uniqueness and constant time complexity.  
   - Communicate the trade‑offs: deterministic counters give predictability but can leak traffic patterns, while random tokens reduce inference but need collision checks.  
   - Summarize: “We generate a token, atomically insert if absent; on collision we append a small counter until free—this keeps latency low and guarantees uniqueness.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
