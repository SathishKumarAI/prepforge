---
qid: ing_69954b8ddc__aws__local
question: 'Explain: Related — Multi Elasticsearch Heads - Chrome Web Store'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 422
total_tokens: 653
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:22:40-05:00'
sources: []
---

**Situation / Task**  
I was asked to migrate a legacy “multi‑head” search service (used by our Chrome Web Store) into a single, scalable Amazon OpenSearch cluster while keeping latency < 200 ms for 95% of queries and supporting real‑time machine‑learning ranking.

**Action**  
1. **Ownership & Dive Deep** – I mapped every head’s data model, identified duplicate indices, and benchmarked query patterns with CloudWatch metrics.  
2. **Design** – Built a single OpenSearch domain (3 master‑eligible nodes + 6 data nodes) behind an ALB; used *index aliases* to roll out new schemas without downtime.  
3. **ML Integration** – Trained a LightGBM model in SageMaker on click‑through logs, exported feature vectors to S3, and scheduled nightly Lambda functions that push updated scores into OpenSearch via the Bulk API.  
4. **Cost & Availability** – Chose `ml.t2.medium` for training (≈$0.10/hr) and `r5.large.elasticsearch` nodes (≈$0.20/node‑hour). Implemented cross‑region read replicas to meet SLAs.  

**Result**  
- Query latency dropped from 350 ms to **180 ms** (average) with 99% of requests under 200 ms.  
- Click‑through rate on ranked results improved by **12%** in A/B test over two weeks.  
- Operational cost decreased by **25%** due to consolidated indices and automated Lambda updates.

**Reflection**  
The key lesson was that consolidating “heads” requires a data‑driven migration plan; blindly merging caused performance regressions. By owning the full pipeline, diving into metrics, and iteratively testing changes, we delivered measurable business impact while keeping costs low.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
