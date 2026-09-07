---
qid: ing_0d7baada86__faang__local
question: 'Explain: Preserve Client Address Carefully — IP Address | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 527
total_tokens: 762
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:15:24-05:00'
sources: []
---

**1️⃣ Clarify**  
The requirement is to store a client’s IP address in a way that respects privacy (GDPR/CCPA) while still enabling troubleshooting and analytics. We assume:  
* The system receives HTTP requests with IPv4/IPv6 addresses.  
* We need to keep the data for 30 days, then purge or anonymize it.  
* Legal compliance requires that IPs are treated as personal data unless fully hashed.

**2️⃣ Approach**  
1. **Capture & hash** – On receipt, compute a salted SHA‑256 of the raw IP (e.g., `hash = H(salt || ip)`).  
2. **Store** – Persist only the hash and a timestamp in a distributed log (Kafka → Kafka Streams → ClickHouse).  
3. **Reconstruction for debugging** – Keep a short‑lived, encrypted “lookup table” in Redis that maps hash→IP for 24 h. After 24 h it’s evicted.  
4. **Retention policy** – Use TTLs to auto‑delete hashed rows after 30 days; never store raw IP beyond the lookup window.

**3️⃣ Depth**  
*Hashing*: SHA‑256 + per‑request unique salt (e.g., HMAC with a secret key) prevents rainbow‑table attacks.  
*Storage*: ClickHouse allows columnar storage, fast range queries on timestamps, and compaction to save space.  
*Lookup table*: Redis with `EXPIRE 86400` ensures no raw IP lingers longer than necessary.  

**Complexity**: O(1) per request for hashing; writes are amortized constant in Kafka/ClickHouse. Memory overhead is minimal (~100 B per entry).  

**4️⃣ Edge Cases**  
*IPv6 fragmentation*: normalize before hashing.  
*Proxy or NAT*: log both original and proxied IPs (hashed separately).  
*Legal change*: ability to revoke the salt key triggers re‑hashing; not feasible, so we rely on retention policy.

**5️⃣ Optimize & Communicate**  
- **Auditability**: keep a signed audit trail of the salt rotation schedule.  
- **Scalability**: horizontal Kafka partitions and ClickHouse replicas handle millions of requests/day.  
- **Presentation**: explain the “hash‑then‑lookup” pattern, emphasizing that raw IPs never persist beyond 24 h, satisfying privacy while enabling necessary diagnostics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
