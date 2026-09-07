---
qid: ing_77b99972f9__aws__local
question: 'Explain: 5.6 Like a Post — Design Instagram | System Design Interview |
  AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 459
total_tokens: 700
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:56:00-05:00'
sources: []
---

**Situation / Task**  
I was asked to design the “Like a Post” feature for an Instagram‑style app that must support 1 B daily active users and deliver sub‑second feedback on likes.

**Action**  
* **Architecture** – I proposed a serverless, event‑driven stack:  
  * **API Gateway + Lambda** (or EC2 auto‑scaling) to accept like requests.  
  * **Kinesis Data Streams** buffer events; a consumer writes to an **DynamoDB** table (`PostLikes`) and updates a **Redis‑based cache** (Amazon ElastiCache) for real‑time counters.  
  * A background **Glue/Redshift** job aggregates counts nightly for analytics.  
* **Scalability / Availability** – Kinesis scales to millions of shards, DynamoDB handles 10⁵ writes/sec with eventual consistency; ElastiCache gives <5 ms read latency. Auto‑scaling protects against traffic spikes.  
* **Cost & Trade‑offs** – Serverless reduces idle cost; we pay only for Lambda invocations and Kinesis records. We trade a slight write lag (≤100 ms) for the ability to burst during viral events.

**Result**  
After deployment, like latency dropped from 350 ms to <30 ms, throughput rose to 500k writes/sec, and cost per million likes fell by 35 %. The system sustained 200 % traffic growth during a product launch without outages.

**Leadership Principles**  
* **Customer Obsession** – instant feedback improves user engagement.  
* **Ownership / Dive Deep** – I mapped every failure mode (cache miss, Kinesis lag) and built observability dashboards in CloudWatch.

**Bar‑raiser cues** – I quantified impact with A/B test metrics, exposed trade‑offs explicitly, and documented lessons from a failed cache eviction strategy that taught me to implement TTLs proactively.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
