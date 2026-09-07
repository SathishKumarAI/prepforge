---
qid: ing_a5d6855452__aws__local
question: 'Explain: Collision Resolution Strategies — Design URL Shortener | System
  Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 446
total_tokens: 684
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:41:46-05:00'
sources: []
---

**Situation & Task (S)**  
I was tasked to build a URL‑shortener that could handle 10 M active links per day while guaranteeing < 50 ms latency for redirects.

**Action (A)**  
*Design*:  
- **Hash‑based key generation** with collision detection via Redis cache.  
- **Partitioned DynamoDB tables** keyed on hash prefix → horizontal scaling and low read/write latency.  
- **API Gateway + Lambda** front‑end, auto‑scaling based on CloudWatch metrics.  
- **S3 static site** for analytics dashboards.  

*AWS Services*: API Gateway, Lambda, DynamoDB (with global tables), ElastiCache Redis, CloudFront, SQS for async audit logs.

*Scalability & Availability*:  
- DynamoDB throughput provisioned at 20 k RCU/WCU per shard; auto‑scaling keeps cost ~$1.2K/month while maintaining < 99.999% availability.  
- Redis cluster in two AZs gives sub‑10 ms lookups, and a fallback to DynamoDB on cache miss ensures graceful degradation.

*Cost*:  
- Estimated $0.04 per 100 k requests; total projected spend <$5K/month for the target load.

**Result (R)**  
Within three months we hit **15 M daily links**, latency < 45 ms, and a 0.01% collision rate. The system also handled a traffic spike of 5× during a marketing event with no downtime.

**Learning & Ownership**  
I led cross‑team workshops to iterate on the hash algorithm, reducing collisions by 70%. This reinforced my ownership mindset: I dug deep into DynamoDB’s consistency model and tuned provisioned capacity, learning that “invent & simplify” often means choosing the right trade‑off between read/write latency and cost.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
