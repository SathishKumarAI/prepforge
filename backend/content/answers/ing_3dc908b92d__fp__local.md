---
qid: ing_3dc908b92d__fp__local
question: 'Explain: Reads (Redirects) — Design URL Shortener | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 456
total_tokens: 636
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:15:47-05:00'
sources: []
---

**Why a URL shortener is needed**  
Web pages are identified by long strings that must be stored, transmitted and typed reliably. A shortened form reduces bandwidth, eases sharing, and allows analytics (click‑through, geographic origin). The core problem: map an arbitrary key → original URL while guaranteeing uniqueness, high throughput, and low latency.

**Fundamental design principles**

1. **Deterministic mapping + collision avoidance** –  
   Use a hash or base‑62 counter to generate a *short code*. If collisions occur, resolve via linear probing or append a salt. This ensures *O(1)* lookup, leveraging the birthday paradox: with 2⁶⁴ possibilities we can safely store billions of URLs.

2. **Scalability & partitioning** –  
   Partition the key space by prefix (first few characters). Each shard owns its subset; this reduces contention and lets us replicate only hot shards, a direct application of *consistent hashing*.

3. **Cache‑heavy read path** –  
   Redirects dominate traffic. Store recent mappings in an LRU cache or Redis. The cache hit rate is the key metric—this reflects *information locality* in request patterns.

4. **Write durability** –  
   Persist to a write‑ahead log (e.g., Kafka) before acknowledging creation, guaranteeing eventual consistency and enabling replay for analytics.

**Non‑obvious insight**  
Most designs treat the short code as opaque. In reality, embedding *entropy* about the target domain or expiry into the code itself (e.g., using HMAC of URL+timestamp) allows stateless validation and self‑expiring links without a lookup—an elegant fusion of cryptography and probabilistic data structures.

**Bottom line**  
A robust shortener is a micro‑service that turns an arbitrary string into a compact, collision‑free key, shards the space for horizontal scaling, caches reads aggressively, and writes durably—all grounded in hashing theory, distributed systems principles, and information‑theoretic limits.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
