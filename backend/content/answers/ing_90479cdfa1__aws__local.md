---
qid: ing_90479cdfa1__aws__local
question: 'Explain: Sharding Strategies — Sharding | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 394
total_tokens: 625
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:52:07-05:00'
sources: []
---

**Situation / Task**  
At my previous role I led the redesign of a recommendation engine that served 12 M users per day. The monolith’s read traffic hit 2 kRPS and caused latency spikes; we needed horizontal scaling without rewriting the entire stack.

**Action**  
I championed **hash‑based sharding on user ID** (Customer Obsession, Ownership). Each shard owned a contiguous range of IDs and was mapped to an EC2‑managed RDS instance. I used **AWS Elasticache Redis** per shard for hot cache and **S3 + Athena** for cold data. To keep shards balanced I added a lightweight “shard manager” service (Lambda + DynamoDB) that re‑hashed outliers every 24 h—this is the *Bias for Action* element.

**Result**  
After migration, read latency dropped from 350 ms to <30 ms, and we handled 10× traffic with a 40 % cost saving on RDS by moving idle shards to Aurora Serverless. The system now supports 20 kRPS without manual intervention (Deliver Results).  

**Dive Deep & Trade‑offs**  
I compared range vs. hash sharding: range offers simpler rebalancing but suffers from skew; hash gives uniform distribution at the cost of occasional “hot spots.” I chose hash and mitigated hot spots with Redis clustering.

**Bar‑raiser takeaway**  
Ownership surfaced in proactive shard rebalancing, depth via full cost–benefit analysis, quantified impact shown by latency & cost metrics, and a learning loop—each failure to rebalance triggered automated alerts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
