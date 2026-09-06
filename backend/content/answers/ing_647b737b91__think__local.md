---
qid: ing_647b737b91__think__local
question: 'Explain: Non-Functional Requirements — Leaderboard System Design - System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 502
total_tokens: 695
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T07:39:45-05:00'
sources: []
---

**1. Clarify the scope and assumptions**  
   • Confirm that “non‑functional” means performance, scalability, reliability, security, etc., not functional behavior.  
   • Assume a typical leaderboard: users ranked by score, real‑time updates, global visibility, high query volume.  
   • Ask about data persistence (SQL vs NoSQL), traffic patterns, SLA targets, and geographic distribution.

**2. Adopt a layered design framework**  
   • Start with an *architecture diagram* (clients → API gateway → stateless workers → cache/queue → database).  
   • Map each non‑functional requirement to a layer: latency → edge caching; scalability → horizontal scaling of stateless services; durability → replication strategy.

**3. Reason through each NFR step by step**  
   1. **Latency** – decide on in‑memory store (Redis) for top‑N queries, CDN for static assets.  
   2. **Throughput / Scalability** – use partitioning/sharding of score data; auto‑scaling groups for workers.  
   3. **Consistency** – choose eventual consistency for fast reads, strong consistency for critical updates (use Paxos/RAFT).  
   4. **Reliability & Availability** – multi‑AZ deployment, circuit breakers, graceful degradation.  
   5. **Security** – rate limiting, authentication tokens, encryption at rest and in transit.

**4. Avoid common pitfalls**  
   • Don’t assume a single database can handle both write bursts and read traffic; separate write‑optimized and read‑optimized stores.  
   • Forgetting to cache the “leaderboard” view leads to repeated expensive scans.  
   • Ignoring eventual consistency gaps may cause user confusion when scores lag behind.

**5. Sanity‑check & verbalize**  
   • Re‑explain each requirement in plain language: “We need <X> ms latency for 95% of requests.”  
   • Walk through a sample request path, noting where each NFR is enforced.  
   • Summarize trade‑offs (e.g., stronger consistency → higher latency).  

By following this structured, assumption‑driven approach you can systematically map non‑functional needs to concrete architectural choices and communicate them clearly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
