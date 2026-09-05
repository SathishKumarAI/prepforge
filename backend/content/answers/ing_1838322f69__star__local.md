---
qid: ing_1838322f69__star__local
question: 'Explain: Key Generation Service — Urlshorteningservicetinyurl'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 380
total_tokens: 620
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:17:12-05:00'
sources: []
---

**Situation:**  
At my previous startup we launched a public‑facing URL shortener that had to handle 10 M clicks per day while keeping the shortened URLs unique and collision‑free. The earlier system used a simple timestamp + counter algorithm, but as traffic grew it started producing duplicate keys and required a full database scan to check uniqueness.

**Task:**  
I was tasked with designing a scalable Key Generation Service that could produce millions of unique short codes per second, guarantee no collisions, and integrate cleanly with our existing REST API and Redis cache layer.

**Action:**  
I chose a two‑layer approach: first, use a distributed counter stored in ZooKeeper to allocate blocks of 1 M IDs to each service instance. Second, encode each ID into a base‑62 string (0–9, A–Z, a–z) using a custom encoder that preserves order and minimizes length. To avoid collisions I added a checksum byte derived from SHA‑256 of the ID + timestamp, appended at the end. The service exposes a gRPC endpoint; clients call it just once per URL to get the short code, then cache the mapping in Redis for 24 h to reduce DB lookups. I also implemented rate limiting and exponential backoff for ZooKeeper failures.

**Result:**  
The new generator produced over 5 M unique keys per second with zero collisions observed after six months of production use. Latency dropped from 120 ms to under 15 ms, and the average response time of the shorten endpoint improved by 70 %. I learned that combining a lightweight encoding scheme with distributed counters can deliver both speed and reliability in high‑throughput systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
