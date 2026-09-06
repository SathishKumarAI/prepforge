---
qid: ing_ee33c44690__think__local
question: 'Explain: Example Workflow — Design URL Shortener | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 196
output_tokens: 492
total_tokens: 688
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T16:45:28-05:00'
sources: []
---

**1️⃣ Clarify the scope & constraints**  
- Ask whether we need a *global* shortener or per‑user service.  
- Determine traffic expectations (req/s), latency targets, persistence needs, and any cost limits.  
- State assumptions: e.g., 10 M users, 100 k req/s, 99.9% uptime, no user‑auth required.

**2️⃣ Adopt a system‑design framework**  
Use the classic “High‑level components → Data flow → Scalability → Consistency → Failure handling → Security” structure.  
Map each step to concrete sub‑systems (load balancer, API gateway, URL generator, database, cache, CDN, monitoring).

**3️⃣ Step‑by‑step reasoning**  
- **API layer**: REST endpoint `/shorten` and redirect endpoint `/:code`.  
- **Code generation**: deterministic hashing + collision handling or random base‑62 strings.  
- **Storage**: key‑value store (e.g., Redis for hot data, PostgreSQL/NoSQL for durability).  
- **Redirection path**: cache lookup → DB fallback → 404.  
- **Metrics & monitoring**: request counts per code, TTLs, hit/miss ratios.  
- **Scaling plan**: horizontal API scaling behind a load balancer, sharded key‑value store.

**4️⃣ Common traps to avoid**  
- *Ignoring collision probability* – always prove the hash space suffices.  
- *Underestimating read traffic on redirects* – cache aggressively or use CDN edge routing.  
- *Over‑engineering persistence* – start simple (single DB) and evolve to sharding only if needed.

**5️⃣ Sanity‑check & verbalize**  
- Re‑explain the flow in plain terms: “User posts URL → we generate a short code, store mapping, return code; later user hits `/code`, we lookup fast via cache, redirect.”  
- Confirm latency targets by estimating each hop (≈10 ms per lookup).  
- Summarize trade‑offs: speed vs. cost, consistency vs. availability.

By following this checklist you’ll systematically build a robust, scalable URL shortener design and communicate it clearly in an interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
