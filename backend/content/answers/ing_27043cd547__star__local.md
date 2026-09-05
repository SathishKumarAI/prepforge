---
qid: ing_27043cd547__star__local
question: 'Explain: AOF (Append-Only File) — How Does Redis Persist Data?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 314
total_tokens: 557
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:46:34-05:00'
sources: []
---

**Situation** – In my last role I was tasked with ensuring our high‑traffic recommendation engine stayed highly available while also meeting a regulatory requirement that all user interaction data be safely persisted within 30 seconds of receipt.

**Task** – I had to configure Redis so it could write every command to disk in real time, without introducing the latency spikes that a traditional RDB snapshot would cause, and still allow for fast recovery after a crash.

**Action** – I enabled AOF persistence. Each write command was appended to an “append‑only” log file on the local SSD. I tuned `appendfsync always` during peak periods to guarantee durability, then switched to `everysec` in off‑peak hours to reduce disk I/O. To keep the log size manageable, I set up daily `aof rewrite` jobs that compacted the file by replaying only the latest state of each key. During a test failover, I validated that Redis could rebuild its dataset from the AOF within 12 seconds.

**Result** – The system achieved sub‑second write latency during peak loads while maintaining full data durability. Recovery time dropped from over a minute with RDB snapshots to under 15 seconds using AOF, and we logged no data loss in production. This experience reinforced how tuning the AOF sync policy balances consistency against performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
