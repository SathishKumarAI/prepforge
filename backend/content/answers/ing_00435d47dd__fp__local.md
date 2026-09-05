---
qid: ing_00435d47dd__fp__local
question: 'Explain: Assumptions — Design Instagram | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 526
total_tokens: 702
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:06:01-05:00'
sources: []
---

## Why “Assumptions” are the *skeleton* of a system‑design interview

When you sit down to sketch an Instagram clone, your boss doesn’t hand you a list of requirements—he gives you a **problem space** (high‑traffic photo sharing) and asks you to map it into a working architecture.  
The first thing you must do is decide *what the world looks like* while you build that mapping. Those are the **assumptions**.

1. **Scope & constraints** – How many users? Peak QPS? Storage per image?  
   *Why?* Every design decision (cache size, sharding strategy, CDN placement) hinges on these numbers; without them your model is a wild goose chase.

2. **Latency targets** – “Users should see a thumbnail in <200 ms”.  
   *Why?* Latency dictates the depth of caching layers, the choice between eventual vs strong consistency, and whether you’ll trade off read‑latency for write‑throughput.

3. **Consistency model** – “A user’s own feed must reflect their latest post instantly”.  
   *Why?* This forces you to choose between synchronous replication (more latency) or an asynchronous, conflict‑free replicated data type (CF‑RDD).

4. **Failure assumptions** – “Assume a 1 % daily node failure rate”.  
   *Why?* Drives your redundancy strategy: erasure coding vs mirroring, and the need for self‑healing services.

5. **Business‑critical flows** – “Search must be available even during traffic spikes”.  
   *Why?* Highlights that search is a separate service with its own scaling curve; you’ll end up with an inverted‑index shard cluster rather than piggybacking on the main feed store.

---

### One non‑obvious insight

> **Assumptions are not static; they evolve as you iterate.**  
> In practice, you make *initial* assumptions, sketch a high‑level architecture, then run a small simulation or cost model. The results often invalidate your starting numbers (e.g., “we actually need 5× more cache than we thought”). A good designer explicitly documents this feedback loop—each assumption becomes a testable hypothesis rather than an immutable rule.

Treating assumptions as *testable, negotiable* elements turns the interview into a disciplined design sprint rather than a guess‑work exercise.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
