---
qid: ing_93ed5f836c__star__local
question: 'Explain: Migrate to ILM — Index lifecycle management (ILM) in Elasticsearch
  | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 369
total_tokens: 615
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:28:50-05:00'
sources: []
---

**Situation:**  
At my last role, the search team was managing a growing e‑commerce catalog in Elasticsearch. We had over 4 TB of data spread across 12 hot nodes and were hitting 70 % storage utilization by Q2, causing slow queries and increased infra costs.

**Task:**  
I needed to design and implement an Index Lifecycle Management (ILM) policy that would automate rollover from hot to warm, then cold tiers, while keeping search latency under 120 ms for the most recent data.

**Action:**  
First I mapped our index patterns: “products‑YYYY.MM” stored daily. Using Kibana’s ILM wizard, I defined a policy with three phases—hot (7 days), warm (30 days), and cold (90 days). In hot, indices used 2 shards each, 3 replicas; warm switched to 1 shard and reduced replicas to 1; cold set the lifecycle phase to “delete” after 365 days. I scripted an ingest pipeline that added a “created_at” field and enabled ILM on all new indices. Then I created a migration job via Curator to apply the policy to existing indices, ensuring no downtime by using index aliases for routing.

**Result:**  
Within three weeks, storage usage dropped from 4 TB to 2.3 TB, cutting infra costs by ~35%. Query latency on hot data improved to 95 ms average, and we automated lifecycle operations so the team could focus on feature work instead of manual index management. I learned how ILM phases can be fine‑tuned with shard/replica settings to balance cost and performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
