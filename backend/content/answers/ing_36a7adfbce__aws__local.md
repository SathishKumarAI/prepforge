---
qid: ing_36a7adfbce__aws__local
question: 'Explain: ILM availability — Index lifecycle management (ILM) in Elasticsearch
  | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 397
total_tokens: 635
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:28:11-05:00'
sources: []
---

**Situation / Task**  
I was tasked to reduce the cost of our search platform while keeping query latency below 200 ms for a global e‑commerce catalog (≈ 2 B documents). The team had been storing all indices on hot SSDs, which drove monthly spend to $120K.

**Action**  
I proposed an **Index Lifecycle Management (ILM)** policy:  
1. **Hot phase** – keep the latest 30 days of data on EBS‑gp3 (SSD) with a 2‑shard allocation per node.  
2. **Warm phase** – move older shards to EBS‑sc1 (HDD) after 30 days, using *move* action and *reindex* for compression.  
3. **Cold phase** – archive indices older than 90 days to S3 Glacier via the *delete* action.  

Implemented with AWS managed Elasticsearch Service, leveraging **AWS Lambda** for automated policy creation and **CloudWatch Alarms** to trigger scaling. I also added a “read‑only” alias that points to warm shards, ensuring search latency stayed within SLA.

**Result**  
- Cost dropped 48 % (from $120K to $62K/month).  
- Query latency remained < 180 ms (average 152 ms) across all regions.  
- Storage usage decreased by 36 %, freeing capacity for new indices.

**Learnings & Ownership**  
I owned the full lifecycle, from requirement gathering to monitoring post‑deployment. The deep dive into shard allocation and storage tiers taught me how to balance cost vs performance. I documented the policy in Confluence and shared a playbook with the infra team, ensuring repeatability—an example of *Ownership* and *Deliver Results*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
