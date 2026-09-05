---
qid: ing_659bfd090f__star__local
question: 'Explain: Scale AI Coding Problems — Ai Companies Interview Questions'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 269
total_tokens: 505
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:51:04-05:00'
sources: []
---

**Situation:** While working on a recommendation engine at a mid‑size fintech, we noticed the latency for generating user feeds exceeded our SLA during peak hours—up to 300 ms per request. The team was debating whether to refactor the code or add more hardware.

**Task:** My goal was to reduce query time by an order of magnitude without escalating infrastructure costs, and to demonstrate a scalable solution that could handle millions of concurrent users.

**Action:** I started by profiling with Py-Spy; discovered a bottleneck in our feature‑engineering pipeline that recomputed embeddings on every request. I refactored the code to use a memoization layer backed by Redis, precomputed vectors during off‑peak hours, and switched from NumPy to CuPy for GPU acceleration. I also introduced sharding of the embedding store across two nodes and added circuit‑breaker logic to fall back gracefully.

**Result:** The average latency dropped from 300 ms to 35 ms, keeping us well below the SLA while cutting infrastructure spend by 25%. I learned that scaling is as much about smart caching and precomputation as it is about raw compute power.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
