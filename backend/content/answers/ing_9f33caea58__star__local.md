---
qid: ing_9f33caea58__star__local
question: 'Explain: Short Code Length — Design URL Shortener | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 371
total_tokens: 615
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:50:36-05:00'
sources: []
---

**Situation** – I was tasked at my previous company to revamp our internal analytics dashboard that relied on tracking user clicks via URLs embedded in marketing emails. The existing system used a 12‑character hash; it caused collisions and made the links hard for users to read or share.

**Task** – Build a URL shortener with an ultra‑short code (≤6 characters) that still guarantees uniqueness, scales to millions of requests per day, and supports quick lookup while keeping storage minimal.

**Action** – I chose base‑62 encoding over a sequential counter, generating 62⁶ ≈ 56 billion unique codes. To avoid collisions I implemented a two‑stage hashing: first compute SHA‑256 of the long URL, then take the first 36 bits and encode them in base‑62. If a collision occurs, I add a deterministic salt (the user’s ID) and retry. For storage I used Redis as a key‑value cache for hot URLs and a sharded MySQL table for persistence, with an LRU eviction policy to keep memory usage low. The API exposed REST endpoints; I added rate limiting via API Gateway and implemented a background job that pre‑generates codes for popular links.

**Result** – The new shortener reduced link length from 12 to 6 characters, cut storage by 70%, and handled 5 M requests/day with <1 ms latency. User click‑through rates increased by 12% because the URLs were easier to type and share. I learned that careful trade‑offs between deterministic hashing and caching can deliver both uniqueness and performance at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
