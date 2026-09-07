---
qid: ing_353dc38738__aws__local
question: 'Explain: Database architecture and scaling — MongoDB Sharding | MongoDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 511
total_tokens: 745
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:25:00-05:00'
sources: []
---

**Situation / Task**  
I led the redesign of our recommendation engine’s data layer for a global e‑commerce platform that serves > 50M active users and stores > 200 TB of user interaction logs in MongoDB. The existing single‑node setup hit 300 ms latency spikes during peak traffic, threatening SLAs.

**Action**  
*Ownership & Dive Deep:* I first profiled query patterns (90 % reads on `user_profile` + 10 % writes on `interaction_log`). I proposed a **sharded cluster** with a *config server set*, 3 shards (each an RS), and a dedicated query router.  
- **Sharding key:** `user_id` hashed, ensuring even distribution and locality for user‑centric queries.  
- **AWS services:** RDS Proxy for read replicas of the config servers; CloudWatch alarms on `staleShardVersion` to catch sync issues early.  
- **Scalability & cost:** Shard size capped at 10 TB; automatic autoscaling via Lambda checks every hour, adding nodes when usage >80 %. Estimated monthly savings: $12k by avoiding over‑provisioned single‑node instances.  
- **Availability:** Each shard is a 3‑node replica set with anti‑affinity across AZs; we enable *shard rebalancing* during off‑peak windows to keep latency low.

**Result**  
Latency dropped from 300 ms to <80 ms (95th percentile), throughput increased by 4×, and we avoided a projected $200k in peak‑time compute costs. The design also reduced manual sharding decisions—automated rebalancing cut ops hours from 30 h/month to 2 h.

**Learnings & Bar‑raiser cues**  
- *Ownership:* I drove the decision matrix and secured budget approval.  
- *Dive Deep:* Detailed profiling uncovered a hidden write hotspot that, once isolated, allowed targeted scaling.  
- *Quantified Impact:* 95th percentile latency improvement and cost avoidance metrics are concrete proof points.  
- *Failure Learning:* Initial trial with range‑based sharding caused uneven load; pivoting to hashed key was a quick “bias for action” fix that improved stability.

---

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
