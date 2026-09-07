---
qid: ing_f056bfb679__aws__local
question: 'Explain: Strong Consistency — Strong vs. Eventual Consistency - by Ashish
  Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 462
total_tokens: 702
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:20:23-05:00'
sources: []
---

**Situation / Task**

When redesigning our recommendation engine we had to decide how the click‑through‑rate (CTR) model would read user profiles across a globally distributed DynamoDB table. The business required that every request see the most recent update so that the algorithm never served stale data, but latency had to stay under 20 ms for 99.9 % of traffic.

**Action**

I scoped the trade‑offs between **Strong Consistency** (every read returns the latest write) and **Eventual Consistency** (reads may see older replicas until replication completes).  
- I modeled two architectures:  
  1. **Single‑AZ DynamoDB with `ConsistentRead=True`** – guarantees strong consistency but limits throughput to ~300 WCU per AZ.  
  2. **Multi‑AZ global table with eventual reads and a read‑repair cache (ElastiCache Redis)** – offers sub‑10 ms latency at the cost of occasional stale reads.

Using CloudWatch metrics I simulated 1 M RPS: strong consistency hit 18 ms average but throttled after 500 WCU; eventual + cache maintained <9 ms with no throttling.  

**Result**

I presented a hybrid model: writes go to DynamoDB (strongly consistent) and an SNS topic triggers Lambda that updates the Redis cache immediately. This gives us **99.95 %** strong consistency for critical reads while keeping latency under 10 ms for 99.9 % of traffic, saving ~$0.3M/yr in throttling costs.

---

### Leadership Principles

- **Customer Obsession** – ensured users always see up‑to‑date recommendations.  
- **Ownership / Dive Deep** – I modeled metrics, ran simulations, and quantified the impact to choose the optimal design.  

Bar‑raiser cues: clear ownership of trade‑offs, depth in consistency semantics, data‑driven results, and learning from a failed pilot that used pure eventual reads without cache.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
