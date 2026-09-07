---
qid: ing_156dd11cd2__faang__local
question: Why Base62? — Design URL Shortener | System Design Interview | AlgoMaster.io
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 532
total_tokens: 772
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:32:59-05:00'
sources: []
---

**Clarify**  
We’re asked *why* a URL‑shortening service would encode the numeric ID of a shortened link in **Base62** instead of, say, hex or decimal. I’ll assume we need: short URLs, high‑throughput generation, minimal collisions, and easy human readability.

**Approach**  
1. Show how Base62 reduces length compared to decimal/hex.  
2. Explain collision avoidance via a counter or UUID.  
3. Discuss URL‑friendly characters and case sensitivity.  
4. Touch on scalability: sharding, caching, and routing.  

**Depth**  
- **Length efficiency:** 62 ≈ log₂(62) ≈ 5.95 bits per character.  
  - Decimal uses 10 bits/char (base 10), hex 4 bits/char (base 16).  
  - For a 64‑bit ID: Base62 → ceil(64/5.95) ≈ **11 chars**; decimal → 20, hex → 16.  
- **Collision safety:** Use an auto‑incrementing counter or a hash of the URL plus a salt. The 62 symbols give us 62ⁿ possible IDs; with n = 11 we have ~2·10¹⁹ combinations—far more than needed for billions of links.  
- **URL‑friendly set:** `[A–Z][a–z][0–9]` contains no reserved URL characters, so the short code can be appended directly to a domain without encoding or escaping.  
- **Scalability:** Split IDs across shards by prefix; cache recent mappings in Redis; use consistent hashing for routing.

**Edge cases**  
- *Case sensitivity:* “a” vs “A”; ensure downstream systems treat them distinctly.  
- *User‑entered collisions:* If a user manually requests a code, check existence before allocation.  
- *Short‑code enumeration attacks:* Rate‑limit generation endpoints.

**Optimize & communicate**  
Explain that Base62 balances brevity and safety: it yields the shortest possible alphanumeric string for a 64‑bit identifier while keeping characters safe in URLs. Communicate this trade‑off clearly, citing length savings (≈ 45% vs hex) and collision probability (essentially zero with proper ID generation). This shows structured reasoning, depth, and awareness of practical constraints—exactly what FAANG interviewers expect.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
