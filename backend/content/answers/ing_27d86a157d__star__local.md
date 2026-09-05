---
qid: ing_27d86a157d__star__local
question: 'Explain: Key Features of Redis'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 362
total_tokens: 594
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:48:08-05:00'
sources: []
---

**Situation:** In my last role at a fintech startup, we were building a real‑time fraud detection system that had to process over 10 k transactions per second and flag suspicious activity within milliseconds.

**Task:** I needed to design the in‑memory cache layer that would store user session data, recent transaction histories, and machine‑learning model predictions so our microservices could access them with sub‑20 ms latency while ensuring high availability and fault tolerance.

**Action:** I chose Redis because of its single‑threaded event loop, which guarantees O(1) read/write operations, and its rich data structures. I leveraged:
- **Hash maps** to store per‑user state (last 100 transactions, model confidence scores).
- **Sorted sets** for time‑based eviction of stale data.
- **Redis Streams** to ingest transaction events in real time and feed them to the ML inference service.
I also enabled **replication** with a master–slave setup and used **persistence via RDB snapshots** for rapid failover. To keep memory usage bounded, I set per‑key TTLs and employed Redis’ **maxmemory-policy LRU**.

**Result:** The system achieved an average cache hit rate of 97 %, reduced fraud detection latency from 120 ms to 18 ms, and cut the overall CPU load by 35 %. This experience taught me how Redis’s feature set—fast data structures, built‑in persistence, and flexible eviction policies—can be orchestrated to meet stringent real‑time ML workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
