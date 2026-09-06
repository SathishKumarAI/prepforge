---
qid: ing_65f5f38bc5__fp__local
question: 'Explain: Elasticsearch — Official Elastic Cloud pricing \u2014 compare
  serverless and hosted offerings | Elastic'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 382
total_tokens: 562
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:41:58-05:00'
sources: []
---

### Why Elastic Cloud offers two “flavors”

At its core, a search engine is a *resource‑allocation problem*: you need CPU, memory, storage and network bandwidth to ingest documents, build indexes and answer queries fast enough for your users.  
*Serverless* solves this by **paying only for the actual compute cycles and I/O that occur**—the system spins up containers on demand, scales elastically, and de‑allocates when idle. This is an application of *cost‑proportional optimization*: you trade off a higher unit cost for the guarantee that you never over‑provision.

*Hosted (dedicated) clusters*, by contrast, allocate a fixed set of nodes to you 24/7. The price reflects **fixed capacity amortization** plus guaranteed isolation and support. Here the principle is *capacity planning*: you pay upfront to avoid the jitter of auto‑scaling and to satisfy SLAs that demand predictable latency.

### One non‑obvious insight

Both models use the same underlying Lucene engine, but they expose different *resource elasticity knobs* to the user. The serverless tier automatically **shards and re‑balances data across transient nodes**; the hosted tier keeps a static shard layout for performance predictability. Choosing between them is therefore not just a cost decision—it’s a choice about whether you value *elasticity* (serverless) or *stable, low‑variance latency* (hosted).  

In practice, many workloads that are write‑heavy and bursty fit serverless best, while read‑intensive, latency‑sensitive applications benefit from the deterministic performance of hosted clusters.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
