---
qid: ing_53389beb0b__fp__local
question: 'Explain: Core APIs — Design URL Shortener | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 466
total_tokens: 643
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:01:54-05:00'
sources: []
---

### Core APIs for a URL‑Shortening Service  
**Problem:** Clients submit an arbitrary long URL and receive a short, opaque key that redirects to the original link. The service must be *highly available*, *low latency*, and *capable of handling billions of requests*.

| API | Purpose | Design Rationale |
|-----|---------|------------------|
| **POST /shorten** (body: `original_url`) → `{id, short_url}` | Create a new mapping. | Must be idempotent per user‑session; use a *deterministic hash* or *auto‑increment* to avoid collisions. |
| **GET /{id}** → redirect | Resolve the key and issue HTTP 301/302. | Extremely fast lookup: in‑memory cache + persistent store fallback. |
| **DELETE /{id}** | Remove a mapping (admin). | Ensures clean garbage collection; may trigger background cleanup. |
| **GET /stats/{id}** → `{clicks, created_at, last_access}` | Analytics. | Aggregated counters via event streams (Kafka) to avoid write amplification on the main DB. |

#### Deep Principles
1. **Geometric Hashing:** Using base‑62 encoding turns a 64‑bit integer into ~12 characters—compact yet collision‑free.  
2. **Eventual Consistency + CQRS:** Writes go to an *append‑only* log; reads hit a read‑optimized replica, decoupling throughput from latency.  
3. **Cache‑Aside with TTL:** Frequently accessed IDs live in Redis for <1 ms lookups; stale entries expire automatically.

#### Non‑obvious Insight
A common pitfall is treating the short key as a *secret*. In reality, it’s an *identifier*—anyone can guess adjacent keys if they know the generation algorithm. Therefore, expose only public APIs that never reveal internal state (e.g., no `GET /id?internal=true`). This keeps the system secure against enumeration attacks and preserves user privacy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
