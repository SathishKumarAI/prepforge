---
qid: ing_a5d6855452__star__local
question: 'Explain: Collision Resolution Strategies — Design URL Shortener | System
  Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 335
total_tokens: 579
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:04:39-05:00'
sources: []
---

**Situation:**  
When I built a prototype for an internal URL shortening service at my previous company, our user base grew from 1K to 50K active links per day. We noticed that our hash‑based key generator was producing duplicate short codes after a few weeks.

**Task:**  
I had to design and implement a collision resolution strategy that kept the URLs unique, maintained high performance, and didn’t require excessive database lookups or slow user experience.

**Action:**  
First, I switched from a pure SHA‑256 digest truncated to 6 characters (which gave ~16M combinations) to a hybrid approach: base‑62 encoding of a time‑stamped counter combined with a random suffix. Each new key was generated as `counter + random(2 chars)`; the counter ensured monotonic growth while the two random characters provided a 4,096‑fold safety margin against accidental collision. I stored the mapping in Redis for quick reads and used a Bloom filter to pre‑check potential duplicates before committing to PostgreSQL, reducing write latency by ~30%. Additionally, I added a background job that scanned for rare collisions and re‑issued keys if needed.

**Result:**  
After deployment, collision incidents dropped from 1 per hour to less than one per month. Lookup latency stayed under 5 ms, and the system comfortably handled 200K requests per minute during peak traffic. I learned that combining deterministic counters with lightweight randomness can provide both scalability and safety in high‑throughput URL services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
