---
qid: ing_61d20442f5__faang__local
question: 'Explain: Database — Design URL Shortener | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 525
total_tokens: 764
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:31:15-05:00'
sources: []
---

**1️⃣ Clarify**  
We need a scalable URL‑shortening service (e.g., bit.ly). Key requirements:  
• Short, unique code generation.  
• Fast lookup of original URL from code.  
• High write/read throughput, eventual consistency acceptable.  
Assumptions to confirm: request rate (TPS), traffic distribution (hot URLs), and desired TTL for cache.

**2️⃣ Approach**  
1. **API layer** – REST endpoints `POST /shorten` & `GET /{code}`.  
2. **Data model** – single table (`urls`) with columns: `id BIGINT PK`, `original_url TEXT`, `code CHAR(6) UNIQUE`.  
3. **Code generation** – auto‑increment ID → base‑62 encode or random 6‑char string + collision check.  
4. **Storage** – use a distributed key‑value store (Cassandra/Redis‑cluster) for low latency writes/reads.  
5. **Caching** – LRU cache per shard; hot codes stay in memory.  
6. **Routing** – DNS load balancer → stateless frontends → API cluster.

**3️⃣ Depth**  
*Write path:* `POST` → generate code, insert into DB (idempotent), return short URL.  
*Read path:* `GET /{code}` → lookup cache; on miss query DB, then update cache.  
Complexity: O(1) average for both paths.  
Trade‑offs: Random codes avoid sequential ID leaks but risk collisions; base‑62 from ID guarantees uniqueness.

**4️⃣ Edge Cases**  
• Duplicate URLs – dedupe by checking existing code before insert.  
• High traffic spikes – auto‑scale API pods, increase cache capacity.  
• Cache eviction – use LFU for long‑lived popular links.  
Testing: simulate 10k TPS, hit rate of 80%, latency <20 ms.

**5️⃣ Optimize & Communicate**  
- Add a CDN layer to serve static assets and reduce API load.  
- Use sharded tables per domain prefix for horizontal scaling.  
- Provide monitoring dashboards (latency, error rates).  
Explain decisions clearly: “We chose Cassandra for tunable consistency; base‑62 ensures minimal collisions while keeping URLs short.” This structured narrative showcases problem understanding, design depth, and trade‑off awareness—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
