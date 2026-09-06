---
qid: ing_494f42edd9__fp__local
question: 'Explain: Context — Pattern: API Gateway / Backends for Frontends'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 351
total_tokens: 525
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:41:22-05:00'
sources: []
---

**Pattern:** *API Gateway / Back‑ends for Front‑Ends (BFF)*  

In a distributed system the core problem is that each client type (web, mobile, IoT) has distinct data and interaction needs. A single monolithic API would expose every endpoint to every client, forcing each front‑end to filter, shape, and paginate its own slice of data—a wasteful, error‑prone cycle.  

The BFF solves this by placing a thin service layer between the gateway and the domain back‑ends that is *tailored to a specific client*. The gateway routes requests to the appropriate BFF, which then orchestrates calls to multiple micro‑services, aggregates results, and presents a single, well‑structured response.  

Why must it work this way?  
1. **Optimization of bandwidth** – each BFF returns exactly what its consumer needs (no overfetching).  
2. **Separation of concerns** – domain logic stays in back‑ends; presentation logic is isolated.  
3. **Scalability & resilience** – failures or schema changes in one service do not ripple to the front‑end.  

A non‑obvious insight: *the BFF can cache aggregated responses at a fine granularity (e.g., per user segment), turning an otherwise stateless gateway into a cheap, adaptive cache layer without duplicating business logic.* This subtle caching is often overlooked but yields dramatic latency reductions for high‑traffic clients.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
