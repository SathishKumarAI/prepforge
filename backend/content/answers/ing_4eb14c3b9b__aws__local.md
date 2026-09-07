---
qid: ing_4eb14c3b9b__aws__local
question: 'Explain: Tools — Elasticsearch'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 225
output_tokens: 479
total_tokens: 704
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:23:10-05:00'
sources: []
---

**Situation / Task**  
When I joined the e‑commerce analytics team at a mid‑tier retailer, our recommendation engine was hitting latency > 300 ms during peak traffic. The root cause was that we were pulling product metadata from a legacy relational DB and then running full‑text search queries in application code. My goal: cut query time to < 50 ms while keeping cost under $2k/month.

**Action**  
I owned the redesign, scoped it in two sprints, and built an **Elasticsearch cluster** on AWS OpenSearch Service (managed). I migrated product documents (≈ 5 M items) into a single index with nested attributes for categories, price ranges, and availability. To reduce cardinality and improve cache hit rates, I added a *doc‑values* field for the most frequently queried tags. I also introduced **index lifecycle policies** to roll over hot indices every 30 days and delete cold data after 90 days.

To guarantee high availability, I used a **3 AZ** deployment with an auto‑scaling policy based on CPU & QPS metrics. For cost control, I leveraged *reserved instances* for the production nodes (20 % discount) and set up a daily snapshot schedule to S3.

**Result**  
Query latency dropped from 300 ms to **48 ms** (a 84 % improvement). The cluster handled 12k QPS during Black Friday without throttling, and we reduced monthly spend from $4.8k to **$1.7k**—a 64 % cost saving. Post‑deployment monitoring showed a 99.9 % uptime SLA.

**Leadership Principles**  
- *Ownership*: I took full responsibility for the end‑to‑end migration, stakeholder communication, and post‑launch monitoring.  
- *Dive Deep*: I profiled query plans, tuned mappings, and iterated on shard allocation to achieve the latency target.  

*Bar‑raiser takeaway*: Showed ownership, deep technical dive, quantified impact, and a clear learning loop—deploying canary tests before full rollout to catch unforeseen load spikes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
