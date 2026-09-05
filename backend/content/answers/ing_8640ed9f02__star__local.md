---
qid: ing_8640ed9f02__star__local
question: 'Explain: ElasticSearch Cluster'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 374
total_tokens: 605
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:01:32-05:00'
sources: []
---

**Situation:**  
In my last role I was tasked with building a search layer for our e‑commerce platform that could handle over 1 M daily page views and support real‑time product recommendations. The existing PostgreSQL full‑text index was too slow for our latency SLA of under 200 ms per query.

**Task:**  
I had to design, deploy, and tune an Elasticsearch cluster that would provide sub‑50 ms search responses at scale while keeping operational costs low.

**Action:**  
I started by defining the data model: a single index with a nested “variants” field for SKUs. I used Kibana’s Index State Management (ISM) to roll over indices daily and delete archives older than 90 days, keeping hot nodes small. For resilience I set up a 3‑node cluster in an odd‑numbered zone configuration, using dedicated master nodes and data nodes with SSDs. I configured shard allocation awareness by zone and enabled the “searchable snapshots” feature to offload cold data to S3. To meet latency goals I tuned query cache settings, used the `doc_values` format on keyword fields, and added a 2‑tier cache in Redis for hot queries. Finally, I automated health checks with Prometheus/Grafana dashboards and set up alerts for node failures.

**Result:**  
The cluster handled peak traffic of 200 k concurrent searches with an average latency of 38 ms. Search throughput increased by 150%, and we cut infrastructure spend by 30% compared to a pure on‑prem solution. I learned that thoughtful index design, lifecycle policies, and hybrid caching are key to balancing performance and cost in Elasticsearch deployments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
