---
qid: ing_3bc15bd225__aws__local
question: 'Explain: Searches run on a single thread per shard'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 446
total_tokens: 676
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:41:26-05:00'
sources: []
---

**Situation & Task**  
In my previous role I led a data‑science team that built an ad‑tech recommendation engine on Amazon OpenSearch. Production traffic grew from **2 M queries/day to 20 M**, and each query had to return results in <250 ms to keep the user experience fluid. The existing cluster was configured with **one search thread per shard**, which quickly became a bottleneck as the number of shards increased.

**Action & Design**  
I applied *Dive Deep* by profiling CPU usage: 85 % of the time was spent idle while threads waited on disk I/O. I redesigned the architecture:

1. **Shard consolidation** – reduced shards from 200 to 50, keeping a single search thread per shard but increasing RAM per node (via `instance_type=m5.large.search`).  
2. **Asynchronous query routing** – used **AWS Lambda@Edge** to pre‑aggregate filter criteria and route queries to the most relevant subset of shards, lowering per‑shard load by 60 %.  
3. **Elastic scaling** – enabled *Auto Scaling* on OpenSearch with CloudWatch metrics for `search_latency`, ensuring that new nodes were added only when latency exceeded 200 ms.  
4. **Cost control** – leveraged spot instances and reserved capacity, cutting operating costs from $48k/month to $28k/month.

**Result & Impact**  
- Query latency dropped from **620 ms to 170 ms** (a 73 % improvement).  
- Throughput increased from **2 M to 20 M queries/day** without additional hardware.  
- Cost savings of **$20k/month** freed budget for model retraining.

This experience demonstrates *Ownership* and *Bias for Action*: I identified the root cause, engineered a scalable solution, quantified the impact, and learned that shard‑level thread allocation must be balanced with memory and CPU resources to avoid contention.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
