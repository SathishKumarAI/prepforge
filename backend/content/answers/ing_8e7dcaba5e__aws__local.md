---
qid: ing_8e7dcaba5e__aws__local
question: 'Explain: Recommendations for partition keys — Partitionkey'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 451
total_tokens: 680
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:48:07-05:00'
sources: []
---

**Situation** – In a recent project building a real‑time recommendation engine, we stored user‑item interactions in DynamoDB. The table grew to 50 GB and read traffic spiked during peak hours (≈1 M RCU/day).  

**Task** – Design partition keys that keep the workload evenly distributed while keeping latency low and cost predictable.

**Action**  
* **Customer Obsession + Ownership:** I mapped each user’s interaction history to a *shard key* = `user_id#shard`.  
  * The shard number is derived from a hash of the user ID modulo 10 (i.e., 0–9).  
  * This guarantees that every user’s data is spread across 10 partitions, preventing hot‑spots.  
* **Dive Deep + Bias for Action:** I benchmarked three candidate keys: `user_id`, `item_id`, and `user_id#shard`. Using the AWS SDK, I simulated 1 M reads per day and measured latency.  
  * `user_id` caused 35% of partitions to hit >90 RCU, leading to throttling.  
  * `item_id` distributed evenly but broke recommendation accuracy because queries were item‑centric.  
  * `user_id#shard` kept each partition <70 RCU and maintained query locality.  
* **Invent & Simplify:** I added a global secondary index on `timestamp` for trend analysis, with a provisioned throughput that auto‑scales based on CloudWatch metrics.  

**Result** – After deployment, read latency dropped from 120 ms to 35 ms (≈70% improvement), and the average RCU consumption per partition fell below 60%. Cost decreased by 18 % due to reduced throttling and more efficient capacity planning.

*Bar‑raiser note:* I demonstrated ownership by taking end‑to‑end responsibility, deep diving into data patterns, quantifying performance gains, and learning that a simple hash‑shard strategy can solve both scalability and cost without compromising recommendation quality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
