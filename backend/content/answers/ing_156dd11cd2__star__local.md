---
qid: ing_156dd11cd2__star__local
question: Why Base62? — Design URL Shortener | System Design Interview | AlgoMaster.io
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 364
total_tokens: 607
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:11:08-05:00'
sources: []
---

**Situation** – In my last role I was tasked with building a high‑throughput URL shortening service for an ad network that generated over 2 M new links per day. The existing system used decimal IDs, which quickly grew into 10‑digit numbers and made the URLs long and hard to type.

**Task** – I needed to design a compact, collision‑free encoding scheme that could support millions of unique keys while keeping the API latency below 50 ms under peak load.

**Action** – After evaluating several options (Base32, Base64, custom alphabets), I chose **Base62** because it uses 0–9, A–Z and a–z—exactly 62 printable characters. This keeps URLs short (≈6 chars for 2 M IDs) and avoids ambiguous symbols like ‘O’ vs ‘0’. I implemented a thread‑safe counter that increments an atomic long, then converted the number to Base62 using a lookup table. To guard against collisions from accidental duplicate counters, I added a SHA‑256 hash of the original URL as a checksum embedded in the 8th character. The service was built on Go with Redis for hot ID caching and MySQL for persistence.

**Result** – The new short URLs were only 6–7 characters long, cutting click‑through copy effort by 40%. We handled 3 M requests per minute with <30 ms latency, and the collision rate dropped to <0.0001 %. I learned that choosing an encoding that balances alphabet size, readability, and safety is critical for large‑scale services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
