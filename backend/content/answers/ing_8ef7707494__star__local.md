---
qid: ing_8ef7707494__star__local
question: 'Explain: Rate Limiting at the Worker Node Level — Design a Distributed
  Job Scheduler - System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 406
total_tokens: 652
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:18:56-05:00'
sources: []
---

**Situation**  
In my last role at a fintech startup we built an automated credit‑scoring pipeline that processed 1 M transactions daily. Our in‑house job scheduler kept pulling jobs from Kafka and dispatching them to worker nodes, but during peak hours the workers hit external API limits (5 req/s per node) and started back‑logging, causing SLA violations.

**Task**  
I was tasked with redesigning the scheduler so each worker respected its own rate limit while still achieving 99.9% job throughput and keeping latency under 2 s for high‑priority jobs.

**Action**  
I introduced a two‑layer approach:  
1) **Rate‑limit token buckets** stored in Redis per worker node (max 5 tokens, refill 5/s). Workers fetch a token before making an API call, guaranteeing the limit.  
2) A lightweight **Celery beat scheduler** orchestrates job distribution. It queries Kafka for new jobs, assigns them to workers via a round‑robin queue, and checks Redis for available tokens. If a worker’s bucket is empty, the task is retried after 200 ms. I also added a priority field so critical jobs bypass the token check if they’re in a separate “high‑priority” queue with a higher refill rate (10/s).

**Result**  
After deployment, API error rates dropped from 12% to <0.2%, and overall job completion time fell by 35 %. The system now scales linearly: adding more worker nodes simply adds more token buckets in Redis without re‑architecting the scheduler logic. I learned that coupling lightweight distributed rate‑limiting with a task queue can elegantly solve SLA constraints in real‑time pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
