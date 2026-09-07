---
qid: ing_d40396864a__aws__local
question: 'Explain: Rebalancing and Resharding — Sharding | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 534
total_tokens: 769
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:19:57-05:00'
sources: []
---

**Situation (S)**  
At my previous role I led the migration of a legacy recommendation engine to a horizontally‑scalable microservice on AWS. The data store was sharded by user ID across 8 DynamoDB tables; traffic grew from 5 k RPS to 120 k RPS in six months, and we hit “hot” shards that throttled downstream ML inference.

**Task (T)**  
I had to design a rebalancing & resharding strategy that kept latency <30 ms while minimizing operational cost and downtime—essentially a classic sharding problem under heavy load.

**Action (A)**  
1. **Sharding policy** – Adopted consistent hashing with virtual nodes, adding 4 more shards (total 12) to spread the key space evenly.  
2. **Rebalancing pipeline** – Built an AWS Step‑Functions workflow that:  
   * scans DynamoDB streams for hot partitions,  
   * writes migrated items to a new shard via parallel Lambda functions (100 concurrent invocations),  
   * updates a global “shard map” stored in Amazon S3 and cached by CloudFront.  
3. **Resharding guard** – Employed DynamoDB’s on‑demand mode during migration to absorb write spikes, then switched back to provisioned capacity.  
4. **Observability** – Used CloudWatch metrics (throttles, latency) + X-Ray traces; set alarms for >5 % increase in 1‑second RPS.

**Result (R)**  
The rebalancing completed within 90 minutes with zero service disruption. Post‑migration, average query latency dropped from 45 ms to **18 ms**, and the system sustained 200 k RPS while cost decreased by **12%** due to better capacity utilization.  

---

### Leadership Principles
- **Ownership** – Took full responsibility for end‑to‑end migration, coordinating with data, infra, and ML teams.  
- **Dive Deep** – Analyzed DynamoDB throttling logs, modeled partition skew, and validated design through simulation.

### Bar‑raiser cues
- Clear evidence of ownership & measurable impact (latency, cost).  
- Depth in the technical solution: consistent hashing, Step Functions orchestration, DynamoDB capacity modes.  
- Reflection on learning: “If we had started with a hash ring earlier, we could have avoided the 8‑shard hot spot entirely.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
