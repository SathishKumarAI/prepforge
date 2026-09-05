---
qid: ing_33e078517a__star__local
question: 'Explain: Index Lifecycle Management (ILM)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 350
total_tokens: 585
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:12:22-05:00'
sources: []
---

**Situation** – In my last role I was tasked with revamping the analytics stack for a fintech platform that ingested over 5 GB of click‑stream logs per day into Elasticsearch. The index grew too fast; queries started lagging, and our storage budget was at risk.

**Task** – My goal was to design an Index Lifecycle Management policy that would automatically rollover indices, shrink older data, and delete it after one year, while keeping search performance under 200 ms for the most recent month.

**Action** – I first mapped out a hot‑warm‑cold tier strategy: new logs went into “hot” indices with 1‑day retention; after 7 days they rolled over to “warm” indices stored on SSDs. Using Kibana’s ILM UI, I defined phases—`hot`, `delete`—and set size limits (50 GB) and age thresholds. For older data I added a `cold` phase that moved shards to cheaper HDD nodes and applied the `shrink` action to reduce shard count from 5 to 2. I also scripted an alert in Logstash to monitor rollover failures, ensuring zero downtime.

**Result** – After deployment, query latency on recent data dropped from 350 ms to 180 ms, and disk usage fell by 35 % within two weeks. The ILM policy cut our annual storage cost by $12k, and I learned how careful phase planning can balance performance with budget constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
