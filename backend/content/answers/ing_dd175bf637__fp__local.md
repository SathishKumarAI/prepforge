---
qid: ing_dd175bf637__fp__local
question: 'Explain: Approach #2: Choreography — Web Crawler System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 439
total_tokens: 614
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:49:23-05:00'
sources: []
---

**Why a crawler needs *choreography***

A crawler is essentially a distributed graph‑traversal problem:  
nodes = URLs, edges = hyperlinks.  
The fundamental goal is to visit every reachable node **once** while respecting politeness (rate limits) and avoiding infinite loops.  

If each worker acted in isolation (orchestrated by a central scheduler), the system would suffer from *contention*—workers repeatedly request the same domain or duplicate URLs because they lack global state.  This is a classic “resource contention” problem that scales poorly with many workers.

**Choreography solves it by decentralizing coordination**

1. **Local ownership of URL ranges** – each worker owns a disjoint hash‑range of URLs, determined deterministically from the URL string (e.g., via consistent hashing).  
2. **Implicit lock acquisition** – when a worker extracts links, it hashes them; if the target falls in its own range it processes immediately, otherwise it forwards the link to the owning worker.  
3. **Stateless message passing** – no central queue or broker is needed; workers communicate via lightweight messages (e.g., publish/subscribe on a topic per hash‑range).

This design is an instance of *self‑stabilizing* distributed systems: the system converges to a correct state without external control, because each worker’s local rules guarantee eventual global coverage.

**Non‑obvious insight**

The key subtlety lies in **hash‑based partitioning of URLs**.  A naïve approach would hash by domain; this often creates hotspots (popular sites) and violates politeness.  Hashing the full URL uniformly spreads load *and* preserves order: any two workers that encounter the same link will always send it to the same owner, ensuring idempotence without a global deduplication table.  This eliminates both duplication and bottlenecks while keeping the system fully decentralized.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
