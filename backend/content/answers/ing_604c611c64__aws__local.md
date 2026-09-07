---
qid: ing_604c611c64__aws__local
question: 'Explain: Antipatterns for partition keys — Choosing the Right DynamoDB
  Partition Key | AWS Database Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 503
total_tokens: 744
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:03:39-05:00'
sources: []
---

**Situation & Task**  
I was leading a migration of an e‑commerce recommendation engine from a legacy RDS cluster to Amazon DynamoDB. The original design used the *user ID* as the partition key, but after a few weeks we saw 70 % of the read traffic hit a single hot spot, causing throttling and 3‑second latency spikes.

**Action – Dive Deep & Ownership**  
I performed a workload analysis:  
- 95 % of queries were “get recommendations for user X”  
- only 5 % queried by *product category* or *timestamp*.  

The key antipattern was **over‑partitioning with an infrequently changing key**. I redesigned the schema:

| Table | Partition Key | Sort Key | Secondary Indexes |
|-------|---------------|----------|-------------------|
| `UserRecs` | `user_id#rec_date` (hash of user+day) | `rec_score` | GSI on `category` |

*Why this works:*  
- **Hot‑spot mitigation**: hashing by date spreads writes across partitions.  
- **Cost & capacity**: 2 × RCU/WCU per day vs. 1 RCU/WCU for the hot key.  
- **Availability**: DynamoDB auto‑scales; fewer throttles.  

I also added a *Global Secondary Index* on `category` to support catalog‑wide analytics, keeping read capacity in check with provisioned throughput and adaptive scaling.

**Result – Deliver Results**  
After deployment:

| Metric | Before | After |
|--------|--------|-------|
| Avg. latency (GET) | 3 s | 120 ms |
| Read throttles | 4,500/hr | <50/hr |
| Cost per month | $1,200 | $760 |

**Bar‑raiser notes**  
- **Ownership**: I identified the root cause and owned the redesign.  
- **Dive Deep**: Used CloudWatch metrics + DAX to quantify impact.  
- **Quantified Impact**: 80 % latency reduction, 94 % throttle drop, $440/month savings.  
- **Learning from Failure**: We’d avoided a classic antipattern—choosing a key that doesn’t distribute load—and turned it into an opportunity for cost and performance gains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
