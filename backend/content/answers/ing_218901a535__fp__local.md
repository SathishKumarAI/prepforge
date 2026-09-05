---
qid: ing_218901a535__fp__local
question: 'Explain: Design Pastebin.com (or Bit.ly) — system-design-primer/solutions/system_design/pastebin/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 208
output_tokens: 434
total_tokens: 642
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:17:42-05:00'
sources: []
---

**Pastebin: A minimal, high‑throughput “copy‑and‑paste” service**

At its core, Pastebin solves *“how do I store an arbitrary blob of text and give anyone a short, stable URL that never expires?”*  
The problem is two‑fold:

1. **Durable storage** – the data must survive crashes and scale to many terabytes.
2. **Fast lookup & distribution** – users expect near‑instant retrieval; the service can’t be bottlenecked by database latency.

**Why a key/value store?**  
Text blobs are opaque to the system; we only need *retrieve by key* semantics. A distributed key/value store (e.g., Dynamo, Cassandra) gives linear scalability, tunable consistency, and built‑in replication—exactly what we want for “paste → URL” pairs.

**URL generation as a hash function**  
We compute `hash(paste_id || timestamp)` to produce a 6–8 character token. This yields:

- *Uniform distribution* (minimising hot spots).
- *Collision resistance* without coordination—each paste can be generated independently.
- *Short URLs* that satisfy the “bit.ly” aesthetic.

**Caching and CDN**  
Since most pastes are read many times, we place a memcached layer in front of the key/value store. For global reach, we expose the service through an edge CDN; the URL becomes a static asset served from cache without touching our database.

**Non‑obvious insight:** *The paste itself is never inspected.*  
Because pastes are opaque, we can safely shard and replicate them without parsing or sanitising content. This removes a major complexity layer (e.g., avoiding regex‑based abuse detection) while keeping the system simple and highly available.

Thus, Pastebin’s architecture is an elegant application of distributed key/value storage, hash‑based routing, and edge caching—all driven by the fundamental requirement: fast, durable, short‑URL text storage.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
