---
qid: ing_6ce3687476__star__local
question: 'Explain: Encode the ID — Design URL Shortener | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 319
total_tokens: 563
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:05:00-05:00'
sources: []
---

**Situation:**  
At my last internship I was tasked with building a prototype for an internal URL‑shortening service used by the marketing team. The live traffic spike during campaigns hit 30 k requests per minute, so our design had to be both fast and scalable.

**Task:**  
I needed to create a compact, collision‑free short code that could be generated in milliseconds and decoded back to the original URL without storing a massive lookup table.

**Action:**  
I chose a base‑62 (0–9, A–Z, a–z) encoding of an auto‑incrementing numeric ID. To avoid exposing sequential IDs, I first applied a reversible XOR with a secret key, then converted the result to base‑62 using a custom lookup array. For decoding, the process is inverted: convert from base‑62 back to integer, XOR with the same key, and retrieve the original ID. This eliminates the need for a separate mapping table; the URL itself is stored in a sharded NoSQL DB keyed by the numeric ID.

**Result:**  
The service handled 35 k RPS with <5 ms latency per request. The base‑62 strings averaged 7 characters, reducing storage and bandwidth by ~70% compared to plain UUIDs. I learned that simple cryptographic obfuscation combined with efficient radix conversion can deliver both speed and security in high‑throughput services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
