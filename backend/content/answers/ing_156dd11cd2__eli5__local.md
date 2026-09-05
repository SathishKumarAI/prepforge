---
qid: ing_156dd11cd2__eli5__local
question: Why Base62? — Design URL Shortener | System Design Interview | AlgoMaster.io
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 227
total_tokens: 392
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:09:22-05:00'
sources: []
---

Think of a URL shortener like packing a suitcase for travel. You want to fit as many items (characters) in the smallest space, but you can only use things that won’t get lost or confused.  

Base62 is the “compact, unambiguous” packing material: it uses 26 lowercase letters, 26 uppercase letters, and 10 digits—just like a suitcase’s 62 different slots.  
Each slot holds one “character,” so a 7‑slot ID can represent \(62^7 \approx 3\) billion unique URLs—enough for most sites—while keeping the link short (≈7 characters).  

If you used only digits (Base10), you’d need more slots to reach the same number of IDs, and if you mixed symbols that look alike (like ‘O’ and ‘0’), users could misread links. Base62 balances length, readability, and uniqueness—exactly what a good suitcase needs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
