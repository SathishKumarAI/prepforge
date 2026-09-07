---
qid: ing_cb85df09ea__aws__local
question: 'Explain: Indexes'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 224
output_tokens: 381
total_tokens: 605
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:01:00-05:00'
sources: []
---

**Situation & Task**  
In my last role as a ML platform engineer at a fintech startup, we were deploying a recommendation engine that had to serve 200 k users per day. The model outputs required real‑time feature lookups from a relational table of user attributes (age, location, credit score). Query latency was averaging 250 ms, causing a 12 % drop in click‑through rate (CTR) compared with our baseline.

**Action**  
I performed a *dive deep* into the query plan: the DB was scanning the entire `user_profile` table for every request. I added a composite B‑Tree index on `(user_id, feature_name)` and then replaced the relational lookups with an Amazon DynamoDB table using a global secondary index (GSI) keyed by `feature_name`.  
- **AWS services used**: DynamoDB (primary & GSI), Lambda for feature aggregation, CloudWatch for metrics.  
- I set auto‑scaling on DynamoDB to maintain <5 % throttling and enabled provisioned throughput with on‑demand fallback for traffic spikes.  
- Cost was reduced from $1,200/month to $420/month by moving from RDS (10 GB) to DynamoDB (3 GB).

**Result**  
Post‑deployment latency dropped to 30 ms, a 88 % improvement, and CTR increased by **18 %**, directly translating into an additional $120k in monthly revenue.  

**Reflection & Ownership**  
I documented the index strategy in our internal wiki, ran quarterly “index health” reviews, and automated a CloudWatch alarm that notifies when query latency exceeds 50 ms. This proactive ownership prevented regressions and kept the recommendation engine performant at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
