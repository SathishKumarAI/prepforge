---
qid: ing_2f9b13ad94__star__local
question: 'Explain: You pick one replica. Um, you got — Building Software Systems
  At Google and Lessons Learned'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 328
total_tokens: 574
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:03:50-05:00'
sources: []
---

**Situation**  
In my last role I was responsible for the real‑time recommendation engine that served millions of users each day on our e‑commerce platform. The latency budget was 100 ms, yet a spike in traffic during flash sales caused a 35 % increase in response times and a noticeable drop in click‑through rates.

**Task**  
I had to reduce the tail latency while keeping throughput high, all without redesigning the entire pipeline or adding costly infrastructure. The goal was to identify a single “replica” strategy that could be rolled out quickly across our cluster.

**Action**  
I introduced a lightweight “read‑only replica cache” per shard using Redis with a sharded keyspace. Instead of replicating the whole model, we cached the top 10 predictions for each user segment on a dedicated node. I added a fallback path that only hit the primary inference service when a cache miss occurred, and implemented exponential backoff to prevent thundering herd effects. The deployment was automated via Terraform, and I monitored tail latency with Prometheus dashboards.

**Result**  
Within two weeks of rollout, 99th‑percentile latency dropped from 240 ms to 110 ms, and the recommendation click‑through rate improved by 12%. I learned that targeted replica caching can yield dramatic performance gains without a full system rewrite, and that careful monitoring is essential to balance cache hit ratios against freshness requirements.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
