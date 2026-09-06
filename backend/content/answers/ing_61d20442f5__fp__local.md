---
qid: ing_61d20442f5__fp__local
question: 'Explain: Database — Design URL Shortener | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 440
total_tokens: 616
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:33:27-05:00'
sources: []
---

**Why a URL shortener?**  
The core problem is *many-to-one mapping*: we must compress an arbitrary string (the long URL) into a fixed‑width key while guaranteeing uniqueness and recoverability. This is essentially a bijective function between two finite sets of different cardinalities, a classic case for hashing with collision resolution.

**Design principles**

1. **Deterministic vs. Randomized IDs**  
   *Determinism* (e.g., SHA‑256 → base62) guarantees no duplicate keys but can expose patterns. *Randomness* (UUID→base62 or incremental counter → base62) avoids collisions by construction and protects privacy. A hybrid: use a salted hash for stability, fall back to random if collision detected.

2. **Storage & Retrieval**  
   The mapping is a simple key/value store; a distributed NoSQL table (Cassandra, DynamoDB) gives linear scalability. Secondary index on `short_url` → `long_url` allows O(1) lookup. To support analytics (click count), maintain an append‑only log or use a counter table.

3. **Scalability & Availability**  
   Use consistent hashing for sharding the keyspace; replication ensures 99.999% availability. Cache hot URLs in Redis to reduce DB load and latency (< 50 ms).

4. **Security & Abuse Prevention**  
   Rate‑limit per IP/tenant, detect malicious patterns (e.g., bulk creation), and optionally verify domain ownership before shortening.

**Non‑obvious insight:**  
Treat the *short key* as a *hash of the long URL with a secret salt*. This guarantees that the same long URL always maps to the same short URL **unless** the salt changes, providing an automatic mechanism for revocation or migration (change salt → all URLs become “dead” until re‑hashed). It also turns the system into a self‑contained cache: any node can compute the key locally without round‑trips, dramatically reducing latency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
