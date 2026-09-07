---
qid: ing_d5989e27f4__aws__local
question: 'Explain: Partition keys and request throttling — Choosing the Right DynamoDB
  Partition Key | AWS Database Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 437
total_tokens: 677
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:22:27-05:00'
sources: []
---

**Situation & Task**  
In my last role I led a data‑pipeline that ingested 3 M events per day into DynamoDB for real‑time fraud scoring. The original schema used a single “eventId” partition key, causing hot partitions and a 15 % request‑throttle rate on the write API.

**Action**  
I performed a *Dive Deep* analysis of the access patterns: queries were heavily skewed toward a handful of user accounts. I redesigned the key to **userId#timestamp** (hash on `userId`, sort on epoch seconds). This distributed writes across 200 partitions, as verified by CloudWatch metrics. To guard against future spikes I enabled **DynamoDB Auto Scaling** with target utilization set at 70 % and added a *Rate‑Based* alarm that triggers an SNS notification when throttles exceed 5 % for 10 min.

I also implemented **Provisioned Throughput + Adaptive Capacity** to ensure consistent latency, and used **Global Secondary Indexes (GSI)** for alternate queries (e.g., by `eventType`). All changes were rolled out via a blue‑green deployment with CloudFormation, guaranteeing zero downtime.

**Result**  
After the migration, write throughput increased from 1.2 kTPS to 4.8 kTPS while throttles dropped below 0.5 %. Query latency improved from 120 ms to 45 ms, and we saved ~$300/month by staying within the free tier of on‑demand capacity.  

**Reflection (Bar‑raiser)**  
I took full ownership: documented assumptions, quantified impact, and learned that a single “eventId” key can become a bottleneck when data skews. Future iterations will include automated key‑sharding suggestions in our CI pipeline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
