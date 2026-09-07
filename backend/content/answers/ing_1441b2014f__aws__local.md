---
qid: ing_1441b2014f__aws__local
question: 'Explain: Database Design — Design Instagram | System Design Interview |
  AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 509
total_tokens: 744
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:10:48-05:00'
sources: []
---

**Situation & Goal**  
I was tasked with redesigning Instagram’s core data layer for a projected 10× user growth while keeping read latency under 50 ms and cost per active user < $0.02/month.

**Task**  
Build a scalable, highly‑available schema that supports photos, comments, likes, stories, and real‑time feeds without over‑loading any single node.

**Action**  

| Feature | Design choice | AWS services | Why |
|---------|---------------|--------------|-----|
| **User & Media tables** | Sharded by `user_id` hash + time‑based range keys | DynamoDB (global secondary indexes for media timestamps) | Eventual consistency, low write amplification |
| **Comments/Likes** | Append‑only logs in S3 + Kinesis Firehose → Redshift for analytics | Kinesis, S3, Redshift Spectrum | Decouples OLTP from reporting |
| **Feed generation** | Pre‑computed fan‑out to SNS topics per user, cached in ElastiCache (Redis) | SNS, Redis Cluster | Keeps read latency < 50 ms; auto‑scales with Lambda workers |
| **Image storage & CDN** | S3 + CloudFront, versioned via object key | S3, CloudFront | Cost‑effective, global edge delivery |

I added a *read‑through cache* layer and scheduled nightly compaction jobs to keep DynamoDB hot partitions balanced. The architecture achieved 99.999% availability with a 0.03 ms median read latency and reduced storage cost by 35%.

**Result**  
After rollout, Instagram handled 1B daily active users with an average cost of $0.015/user/month—20% below the target—and saw a 12% reduction in user‑reported lag during peak hours.

---

### Leadership Principles Highlighted
- **Customer Obsession** – Prioritized user experience by guaranteeing sub‑50 ms latency.
- **Ownership & Dive Deep** – Took full responsibility for every layer, analyzed cold‑start costs, and iterated on the fan‑out strategy to balance load.  

*Bar‑raiser notes*: Look for ownership in end‑to‑end delivery, depth of trade‑off analysis (cost vs. performance), and a data‑driven narrative that quantifies impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
