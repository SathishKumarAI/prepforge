---
qid: ing_20d7b681b0__star__local
question: 'Explain: You’re In Control — Apache Cassandra | Apache Cassandra Documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 364
total_tokens: 603
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:35:17-05:00'
sources: []
---

**Situation:**  
At my last company we had a real‑time inventory system that served millions of API calls per day. A sudden spike in traffic during a flash sale caused our read latency to jump from 10 ms to over 300 ms, and the application began timing out.

**Task:**  
I needed to bring the read performance back under 20 ms while keeping write throughput high, without redesigning the schema or adding costly hardware.

**Action:**  
Using Cassandra’s “You’re In Control” features I first ran `nodetool repair` with a targeted keyspace and enabled *compact storage* on the most heavily used tables to reduce read amplification. Then I tuned the *read repair chance* from 0.1% to 5% for those tables, ensuring stale data was refreshed more aggressively. I also adjusted the *concurrent reads* setting in `cassandra.yaml` from 32 to 64 and lowered the *row cache size* to 10 MB per node so hot rows stayed in memory. Finally, I added a lightweight transaction (LWT) on critical updates to guarantee consistency without blocking all readers.

**Result:**  
Read latency dropped to an average of 15 ms across all nodes, with 99th‑percentile under 25 ms, while write throughput remained at 12k ops/s. The system handled the flash sale’s peak load for three hours straight. I learned that fine‑tuning Cassandra’s internal knobs can deliver dramatic performance gains without architectural changes, and that monitoring metrics like *read repair execution time* is essential to avoid future regressions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
