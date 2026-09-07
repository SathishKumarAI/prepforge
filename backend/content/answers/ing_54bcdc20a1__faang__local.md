---
qid: ing_54bcdc20a1__faang__local
question: What is an URL Shortener? — Design URL Shortener | System Design Interview
  | AlgoMaster.io
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 469
total_tokens: 712
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:01:06-05:00'
sources: []
---

**Clarify**  
We need a service that takes any long URL and returns a short, unique key (e.g., `t.co/abc123`) which redirects to the original. Ask: expected traffic? SLA for redirect latency? How many distinct URLs per day? Do we support custom aliases or only auto‑generated ones? Is persistence required across restarts?

**Approach**  
1. **API layer** – `POST /shorten` (body: long URL) → returns short key; `GET /{key}` → 301 redirect.  
2. **Storage** – a distributed key‑value store mapping key→longURL.  
3. **Key generation** – deterministic hash + base‑62 encode or counter+random collision check.  
4. **Load balancing & caching** – CDN or in‑memory cache for hot keys.  
5. **Analytics (optional)** – separate table for click counts, timestamps.

**Depth**  
- **Short key design**: use a global auto‑incrementing counter → base‑62 encode → ensures uniqueness and compactness (~6 chars for 10⁶ URLs).  
- **Collision avoidance**: check DB before assigning; retry on conflict.  
- **Redirect latency**: cache most‑accessed keys in Redis (latency < 1 ms); fallback to DB if miss.  
- **Scalability**: shard by key hash across multiple nodes; replication for fault tolerance.  
- **Complexity**: O(1) write/read, space proportional to number of URLs.

**Edge Cases**  
- Extremely long URLs or malicious inputs → validate length & content.  
- Duplicate submissions → idempotent POST (return same short URL).  
- Key exhaustion → switch to longer key or use multiple alphabets.  
- High traffic spikes → auto‑scale cache and DB replicas.

**Optimize & Communicate**  
Explain trade‑offs: counter + base‑62 gives simplicity but global lock; hash+random reduces contention at cost of collision handling. Discuss monitoring (latency, error rate) and rollback strategy for failed writes. Summarize with a diagram if time permits.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
