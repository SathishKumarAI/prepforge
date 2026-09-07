---
qid: ing_4a6f5fc317__aws__local
question: 'Explain: Index lifecycle management (ILM) in Elasticsearch'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 434
total_tokens: 665
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:13:38-05:00'
sources: []
---

**Situation / Task**  
In my last role at a SaaS firm, our search index grew to >30 TB, leading to slow roll‑ups and high storage costs. I was tasked with designing an ILM strategy that cut costs by 40 % while keeping query latency under 200 ms.

**Action**  
I applied **Ownership** and **Dive Deep**:  
1. **Data‑driven profiling** – mapped document age vs. search frequency using Kibana dashboards.  
2. **Policy design** – created a three‑tier ILM policy in Elasticsearch:
   * **Hot (0–30 days)**: 3 replicas, `mlt` enabled, write to SSD nodes.  
   * **Warm (31–180 days)**: 1 replica, no `_source`, data on NVMe.  
   * **Cold (>181 days)**: 0 replicas, archived to S3 via the `index-state-management` plugin; searchable via Amazon OpenSearch Service’s “S3‑as‑storage” feature.  

3. Leveraged **AWS services** – used **OpenSearch Service** for managed clusters, **S3 Glacier** for archival, and **Lambda** for policy triggers.  
4. Conducted a **cost/availability simulation** in the AWS Pricing Calculator; projected $12k/month savings vs. current $20k.

**Result**  
After rollout:  
* Storage cost dropped 42 %.  
* Query latency improved from 250 ms to 180 ms for hot indices.  
* Indexing throughput increased by 25 % due to reduced cold‑node load.  

**Reflection**  
The failure point was underestimating the impact of shard reallocation on warm nodes; I added a pre‑warm phase and automated alerts, turning it into a learning loop that improved our ILM SLA by 15 %.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
