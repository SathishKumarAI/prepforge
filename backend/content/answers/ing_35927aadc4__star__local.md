---
qid: ing_35927aadc4__star__local
question: 'Explain: Arrays & Hashing (9 Problems) — Neetcode 150'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 344
total_tokens: 585
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:15:21-05:00'
sources: []
---

**Situation:** In my senior capstone I had to build an anomaly‑detection pipeline for a logistics client. The data arrived as millions of timestamped events in flat files, and our initial run was timing out on the “duplicate transaction” check—essentially a classic array & hashing problem from Neetcode 150.

**Task:** I needed to identify duplicate event IDs in sub‑second time while keeping memory usage below 500 MB so we could stream the data through a lightweight containerized service.

**Action:** I rewrote the duplicate checker using a Bloom filter for probabilistic set membership, combined with a rolling hash (Rabin–Karp) to detect collisions. The Bloom filter was sized to a 1% false‑positive rate, and I used a 64‑bit MurmurHash to minimize collision probability. In Python I leveraged NumPy arrays for batch processing and `numba` JIT compilation to accelerate the hashing loop. I also added an eviction policy that removed old entries after 24 hours to bound memory.

**Result:** The deduplication step dropped from 12 seconds to 0.8 seconds on a 10‑million record stream, reducing overall pipeline latency by 65%. Memory usage stayed under 350 MB, meeting the container limits. I learned that combining probabilistic data structures with efficient hashing can turn an intractable array problem into a production‑ready solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
