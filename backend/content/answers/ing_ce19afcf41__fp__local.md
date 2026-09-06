---
qid: ing_ce19afcf41__fp__local
question: 'Explain: Step 3: Design core components — system-design-primer/solutions/system_design/twitter/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 204
output_tokens: 466
total_tokens: 670
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:18:55-05:00'
sources: []
---

### Why “Design Core Components” is the pivot

A scalable Twitter‑like service must **process millions of events per second** while keeping latency < 100 ms and ensuring durability.  
The core components (message queue, follower graph store, timeline generator, cache layer) are chosen to satisfy three invariants:

| Invariant | What it guarantees | Why the component solves it |
|-----------|--------------------|-----------------------------|
| **Event ordering** | Users see posts in chronological order across feeds | A partitioned Kafka‑style log preserves per‑user ordering without global locks. |
| **Fast read paths** | Home timelines load instantly for millions of users | Pre‑computed fanout (write‑time replication) and an LRU cache avoid on‑the‑fly joins. |
| **Fault isolation** | Failure in one part doesn’t cascade | Stateless services (e.g., timeline API) and a retryable queue decouple producers from consumers. |

#### Deeper principle: *Amortised write‑cost vs read‑cost trade‑off*

If we compute timelines on demand, every request triggers \(O(\text{followers})\) joins—unacceptable at scale.  
By **fan‑out‑on‑write** (pre‑computing the timeline when a tweet is posted), we shift cost to the write path, which can be throttled and batched. The system thus satisfies *CAP* in practice: it remains **consistent** for a user’s own timeline while remaining **available** under load.

#### Non‑obvious insight

Most designs treat the follower graph as a simple adjacency list. In reality, **graph locality matters**: storing followers in shards that mirror geographic or social communities dramatically reduces cross‑data‑center traffic and cache miss rates. This subtle sharding can cut read latency by 30 % without adding extra replicas.

In short, Step 3 forces us to map the *statistical* demands (high fan‑out, low latency) onto a set of primitives that respect the underlying trade‑offs between consistency, availability, and performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
