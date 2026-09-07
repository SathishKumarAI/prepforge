---
qid: ing_717c54066a__aws__local
question: 'Explain: Queues versus streams — Asynchronous computing at Meta: Overview
  and learnings'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 439
total_tokens: 676
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:42:05-05:00'
sources: []
---

**Situation & Task**  
While leading the ML Ops team at Meta, I was asked to redesign our real‑time recommendation pipeline that had grown from 50 M requests/day to over 200 M. The existing batch‑queue system (Kafka + Celery) caused a 3‑second latency spike and cost $1.2 M/month in idle compute.

**Action**  
I drove a shift from *queues* to *streams* by:

| Requirement | Design Choice | AWS Service |
|-------------|---------------|-------------|
| Low‑latency ingestion | Publish‑subscribe event bus | Amazon Kinesis Data Streams (shards tuned for 200 M events/day) |
| Near‑real‑time inference | Serverless compute | Lambda + SageMaker Edge Runtime |
| Auto‑scaling & cost control | Dynamic shard scaling | Kinesis Auto Scaling, Spot Instances for batch re‑runs |

I championed **Ownership** by mapping each step to a clear owner (data ingestion, model serving, monitoring) and instituted a *sprint‑backlog* of metrics. I used **Dive Deep** to profile the Lambda cold‑start impact, reducing it from 1.8 s to 0.4 s via provisioned concurrency.

**Result**  
- Latency dropped from 3 s to <300 ms (99th percentile).  
- Cost fell by 35% ($800 k/year).  
- Throughput doubled within two weeks of deployment, enabling a new “instant‑recommend” feature that increased daily active users by 12%.

**Learning & Bar‑raiser signals**  
I documented the failure modes (shard overloading) and introduced a **Chaos Engineering** test. The bar‑raiser will note my *bias for action* in rapid prototyping, my *customer obsession* in focusing on end‑user latency, and my *quantified impact* in the clear cost & performance metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
