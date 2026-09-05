---
qid: ing_b7feab26c2__star__local
question: 'Explain: Latency numbers — system-design-primer/solutions/system_design/pastebin/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 268
output_tokens: 338
total_tokens: 606
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:39:21-05:00'
sources: []
---

**Situation:**  
When I joined the backend team for a real‑time code‑sharing service, our pastebin feature was hitting 350 ms average latency on peak traffic (10k requests/second). The engineering lead asked me to reduce this number before the next product launch.

**Task:**  
I had to drop the end‑to‑end response time below 150 ms while keeping the same functional spec and without breaking backward compatibility with existing clients.

**Action:**  
First, I profiled the stack using `wrk` + `perf` on a staging VM. The bottleneck was the database layer: each request hit Postgres for write and read in separate transactions, adding 120 ms of round‑trip latency. I introduced a write‑through cache with Redis, storing the paste content keyed by UUID. Reads now hit Redis first; if a miss occurred, we fell back to Postgres and updated the cache asynchronously. I also switched from a single‑node Postgres instance to a read‑replica cluster, moving reads off the master. Finally, I tuned connection pooling (pgpool2) and upgraded our TLS library to reduce handshake overhead.

**Result:**  
Latency dropped from 350 ms to 110 ms average under load, with a 5× improvement in throughput. The change also reduced CPU usage on the Postgres master by 40%. I learned that profiling at scale is critical; a small cache layer can eliminate the majority of latency when coupled with proper replication and connection pooling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
