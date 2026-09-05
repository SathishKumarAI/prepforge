---
qid: ing_935bf2d32f__star__local
question: 'Explain: Glean Coding Problems — Ai Companies Interview Questions'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 338
total_tokens: 574
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:27:25-05:00'
sources: []
---

**Situation**  
When I interviewed at a fast‑growth AI startup, they asked me to solve a “glean coding problem”: given a list of user activity logs, extract the top N users with the most distinct actions in the last 24 hours.

**Task**  
I had to design an efficient algorithm that handled millions of log entries, ran under 2 seconds, and used less than 200 MB memory—essential for their real‑time recommendation engine.

**Action**  
First I parsed each log line streaming from S3 using Python’s `ijson` library. For each user I maintained a `set` of action IDs in a `defaultdict`. To keep memory low, after every 1 M records I pruned users whose distinct‑action count was below the current N‑th threshold (tracked via a min‑heap). Finally, I sorted the remaining users by their set sizes and output the top N. I profiled with `cProfile`, identified a bottleneck in set insertion, and replaced it with a Bloom filter for approximate counts, reducing memory by ~30 % while keeping error <0.5%.

**Result**  
The solution processed 10 M logs in 1.8 seconds using 150 MB RAM, yielding the correct top‑10 list within milliseconds of request time. I learned how to balance exactness and performance—critical for production AI services where latency is king.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
