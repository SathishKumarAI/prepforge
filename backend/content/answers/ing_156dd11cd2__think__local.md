---
qid: ing_156dd11cd2__think__local
question: Why Base62? — Design URL Shortener | System Design Interview | AlgoMaster.io
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 196
output_tokens: 383
total_tokens: 579
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T04:08:23-05:00'
sources: []
---

**1. Clarify the goal and constraints**  
   - Identify why a short URL is needed (compactness, collision avoidance, user‑friendly).  
   - Note system limits: traffic volume, expected key space, regeneration frequency, character set restrictions.

**2. Adopt a “design‑by‑analogy” mental model**  
   - Treat the ID as a base‑N numeral system; each character is a digit.  
   - Relate to common encodings (Base64 for binary → Base62 for URL safety).

**3. Step‑wise reasoning toward Base62**  
   1. Start with the simplest: numeric IDs → decimal string.  
   2. Add alphabetic characters to shrink length → alphanumeric set.  
   3. Exclude ambiguous symbols (0/O, l/1) for human readability → 26+26+10 = 62.  
   4. Evaluate collision probability given expected traffic and compare with other bases (e.g., Base36).  

**4. Common pitfalls to avoid**  
   - Forgetting that URL encoders may interpret certain characters (`+`, `/`) as special; keep only URL‑safe chars.  
   - Assuming Base62 guarantees uniqueness without proper collision handling or key generation strategy.  
   - Ignoring the trade‑off between length and character set size (larger base → shorter strings but harder to read).

**5. Sanity‑check & verbalise**  
   - Verify that 62^6 ≈ 56 billion covers projected traffic for a few years.  
   - Explain: “Base62 gives us the longest alphabet of URL‑safe characters, keeping URLs short while still giving a huge address space.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
