---
qid: ing_6cb98b8177__fp__local
question: 'Explain: Disadvantage(s): failover — GitHub - donnemartin/system-design-primer:
  Learn how to design large-scale systems. Prep for the system design interview.  Includes
  Anki flashcards. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 211
output_tokens: 387
total_tokens: 598
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:55:32-05:00'
sources: []
---

**Why a “fail‑over” strategy can hurt large‑scale ML systems**

The core problem *fail‑over* solves is the need for continuous availability when a node or service crashes.  
In practice, a replica must be kept in sync with the primary so that, upon failure, it can instantly take over. This synchronization costs **latency, bandwidth and consistency guarantees**—the very resources ML pipelines already strain.

1. **Stale models / data drift** – The replica may have an older copy of the model or training data. When traffic is rerouted, predictions come from a slightly outdated version, introducing *model drift* that can be hard to detect because downstream metrics look normal.
2. **Write amplification** – Every update to the primary must be replayed on the replica (or written to a log). In high‑throughput inference or training systems this doubles I/O and can become a bottleneck.
3. **Stateful vs stateless tension** – ML workloads often maintain large state (feature caches, embeddings). Replicating such state is expensive; most designs instead keep replicas stateless and rebuild state on demand, which introduces *cold‑start* latency that fail‑over logic may not handle gracefully.

A non‑obvious insight: **the “fail‑over” cost grows superlinearly with the size of the model**. Because the replica must ingest every weight update, even a modest 10 % increase in parameters can double the replication traffic, turning an ostensibly simple backup into a scalability choke point. Designing for graceful degradation (e.g., rolling back to a slightly older but consistent model) often yields better overall system health than forcing instant fail‑over.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
