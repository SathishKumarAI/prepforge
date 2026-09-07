---
qid: ing_d4bfe2f7cd__faang__local
question: 'Explain: Assumptions: — Design URL Shortener | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 520
total_tokens: 762
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:54:32-05:00'
sources: []
---

**Clarify**  
We’re asked to design a *URL‑shortening service* (think bit.ly). Core goal: map a long URL → a short token, store the mapping, and redirect efficiently. Key assumptions I’d confirm with the interviewer:  

- Expected traffic (requests per second, daily active users)  
- Write‑to‑read ratio (how often do we create vs. resolve links?)  
- Data durability requirements (once shortened, must never be lost)  
- Global availability / latency targets  

**Approach**  
1. **API layer** – REST endpoints: `POST /shorten` and `GET /{token}`.  
2. **Token generation** – deterministic hash of the URL + salt → base‑62 encode; or sequential counter with collision handling.  
3. **Storage** – distributed key/value store (Cassandra/Redis) for quick lookups, backed by persistent storage (S3/HDFS) for durability.  
4. **Routing** – use a CDN edge cache to serve redirects in <100 ms.  
5. **Analytics & A/B** – separate service for click tracking; event stream into Kafka → analytics DB.

**Depth**  
- *Token space*: 62⁶ ≈ 56B, enough for billions of URLs.  
- *Write path*: hash → token → write to KV store (latency ~1 ms).  
- *Read path*: token lookup in KV store; if miss, fallback to DB or return 404.  
- *Scalability*: horizontal scaling of API nodes + sharding KV store by token prefix.  
- *Consistency*: eventual consistency is acceptable for redirects.

**Edge Cases**  
- Hash collisions → retry with different salt or append counter.  
- Deleted/expired URLs – support TTL in KV store.  
- Brute‑force enumeration of tokens – rate limit short‑URL creation per IP.  

**Optimize & Communicate**  
- *Cache hit rate*: store popular redirects in a CDN; reduces KV lookups.  
- *Cost*: use tiered storage—hot data in Redis, cold data archived in S3.  
- I’d iterate on token strategy after observing collision rates and user patterns, and explain trade‑offs (e.g., sequential vs. hash) to the interviewers, showcasing my ability to balance performance, cost, and reliability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
