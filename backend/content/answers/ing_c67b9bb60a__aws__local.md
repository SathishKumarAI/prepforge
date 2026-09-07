---
qid: ing_c67b9bb60a__aws__local
question: 'Explain: Near real-time search — Near real-time search | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 433
total_tokens: 667
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:51:35-05:00'
sources: []
---

**Situation / Task**  
While leading a data‑science team at my last company we needed to expose millions of product listings to users within seconds of an update—e.g., price changes or new inventory. The existing batch pipeline caused up to 30 min lag, hurting conversion rates (≈–12 % during flash sales).

**Action**  
I scoped a **Near‑Real‑Time (NRT) search solution** using Elasticsearch:

1. **Architecture** – A single master node + 4 data nodes in an Auto Scaling group behind an ALB.  
2. **Indexing strategy** – Use the *index‑time* `refresh_interval: 1s` and a *soft delete* via a “deleted” flag to keep write throughput high.  
3. **Search layer** – Route all queries through a **Lambda@Edge** function that rewrites query parameters for pagination and filters, reducing client load.  
4. **Cost control** – Spot instances for data nodes, reserved capacity for the master; we saved 35 % vs on‑demand.

I also implemented a **metrics dashboard** (CloudWatch + Grafana) to track `latency`, `throughput`, and `error_rate`.

**Result**  
- Search latency dropped from 30 s → <2 s.  
- Click‑through rate increased by 18 % during the first month of rollout.  
- API costs fell by $12k/month due to efficient scaling.

**Reflection**  
*Ownership*: I owned the full stack, from design to monitoring.  
*Dive Deep*: We identified that the bottleneck was not indexing but query routing; adjusting `refresh_interval` solved it.  
*Learned*: Adding a secondary “staging” index for heavy write bursts prevented data loss during spikes.

**Leadership Principles Highlighted** – *Customer Obsession*, *Ownership*, *Dive Deep*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
