---
qid: ing_2cc85e2e98__fp__local
question: 'Explain: Clarifying Questions — Airbnb System Design - by Neo Kim and Hayk'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 380
total_tokens: 555
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:39:46-05:00'
sources: []
---

**Why clarifying questions matter in a system‑design interview**

When the interviewer asks you to build an “Airbnb‑style” platform, they are really asking you to solve *the problem of matching many heterogeneous agents (hosts & guests) under constraints (availability, price, location) while guaranteeing scalability and reliability*.  
To formalise that, we must first pin down the **input–output specification**:

| Input | Output |
|-------|--------|
| Host profile + property details + calendar | Guest‑friendly listing page with availability, price, reviews |
| Guest search query (location, dates, budget) | Ranked list of candidate listings |

The clarifying questions are simply a *constraint‑propagation* step: they let you prune the combinatorial explosion of possible designs by asking for concrete cardinalities, latency targets, and failure modes.  

**Key insights people often miss**

1. **Latency is not a “nice‑to‑have” but a *conservation law*** – every microsecond saved on the read path reduces the load on downstream services (search, recommendation) just as efficiently as adding hardware.
2. **Denormalisation is not a shortcut; it is an explicit trade‑off between consistency and throughput**. By caching pre‑computed availability per listing you convert a *read‑heavy* problem into a *write‑light* one, but you must design a robust invalidation strategy that respects eventual consistency guarantees.

In short, the clarifying questions force you to identify the *critical path*, quantify its bottlenecks, and then decide where you can safely relax ACID properties without breaking user experience. This disciplined approach turns an open‑ended interview into a solvable optimisation problem.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
