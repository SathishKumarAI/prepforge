---
qid: ing_aa9377e6a5__fp__local
question: 'Explain: Back-of-the-Envelope Estimation — Design URL Shortener | System
  Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 182
output_tokens: 559
total_tokens: 741
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:08:00-05:00'
sources: []
---

### Back‑of‑the‑Envelope Estimation for a URL Shortener

**Problem & Goal**  
We need to expose an API that accepts an arbitrary long URL and returns a fixed‑length short key (≈ 6–8 chars). The system must handle millions of requests per day, keep the service highly available, and guarantee that every key maps uniquely to one original URL.

**Fundamental Constraints**

1. **Uniqueness & Collision Probability**  
   For *N* distinct URLs we need at least *log₂(N)* bits of entropy. If we encode keys in base‑62 (≈ 6 bits/char), a 7‑char key gives 42 bits → ≈ 4×10¹² possibilities, comfortably covering up to ~10⁹ URLs with collision < 1e-12.

2. **Throughput & Latency**  
   Assume 5 kRPS peak. Each request requires: (a) generate/check key, (b) write/read from DB. With a single fast NoSQL node, 200 µs per op gives ~5 kRPS. To be safe, use *2–3* nodes and round‑robin.

3. **Storage**  
   Each mapping ≈ 100 bytes (key + URL + metadata). For 1 billion URLs → 100 GB. A single SSD cluster can hold this; sharding across 4 nodes gives ~25 GB each, well within limits.

**Why It Works**

- *Entropy* ensures uniqueness without a central counter (avoids bottleneck).
- *Stateless key generation* (hash + base‑62) lets any node produce the same short key from the same long URL, eliminating coordination.
- *NoSQL key–value* stores give sub‑millisecond reads/writes, matching the RPS target.

**Non‑Obvious Insight**

A **secondary “lookup cache” for hot URLs** dramatically reduces DB traffic. By caching the most frequent 10 % of keys in a distributed in‑memory store (e.g., Redis), you can cut latency to < 50 µs and relieve pressure on persistent storage—something interviewers often overlook.

**Bottom Line**

Estimate entropy → choose key length; estimate RPS → size cluster; estimate storage → shard appropriately. The back‑of‑the‑envelope gives a blueprint that satisfies uniqueness, scalability, and availability without overengineering.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
