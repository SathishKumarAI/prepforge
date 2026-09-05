---
qid: ing_318ac9e898__star__local
question: Are indices and shards not free? — How many shards should I have in my Elasticsearch
  cluster? | Elastic Blog
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 352
total_tokens: 600
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:07:30-05:00'
sources: []
---

**Situation:** In my last role at a fintech startup, we had an Elasticsearch cluster powering real‑time fraud alerts. Our data volume was growing from 50 GB/month to over 300 GB/month within six months, and the number of indices spiked as we added new transaction types.

**Task:** I needed to re‑architect the shard strategy so that query latency stayed under 200 ms while keeping node memory usage below 70% and avoiding “hot shards” that caused slow writes.

**Action:** First, I audited existing indices with `_cat/indices` and identified over‑provisioned primary shards (many were only a few megabytes). I applied the rule of thumb—one shard per 50 GB of hot data—and used `shrink` API to merge small shards. For long‑lived indices I switched to a rollover policy with 5–10 primary shards and set replicas to 1 for high availability. I also implemented index lifecycle management (ILM) to automatically close or delete stale indices, reducing the total shard count from ~2000 to 650.

**Result:** Query latency dropped from 350 ms to 120 ms on average, CPU usage fell by 15%, and disk space consumption decreased by 30%. I learned that shards are not free; each consumes JVM heap and OS file handles, so sizing them based on data volume and access patterns is critical for cost‑effective scaling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
