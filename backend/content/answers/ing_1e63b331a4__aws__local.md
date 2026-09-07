---
qid: ing_1e63b331a4__aws__local
question: 'Explain: Sharding Strategies — Production Rag At Scale'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 426
total_tokens: 655
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:36:11-05:00'
sources: []
---

**Situation / Task**  
While launching a global recommendation engine for an e‑commerce platform, we hit a “hot key” problem: the `user_profile` table grew to 5 TB and read traffic spiked to 200k RPS during Black Friday. The single shard throttled latency to >300 ms, violating our SLAs.

**Action**  
I designed a **horizontal sharding strategy** that combined **hash‑based partitioning** (for write amplification) with **range‑based “hot‑key” isolation**.  
1. **Hash shard** the bulk of users (`user_id % 256`) across 256 EBS‑optimized EC2 instances, each hosting an Aurora Serverless cluster.  
2. **Hot‑key shards**: detect keys >10 % of traffic via CloudWatch metrics; move them to dedicated Redis‑cluster nodes (Elasticache) with automatic scaling.  
3. Deploy a lightweight API gateway that routes reads/writes based on the shard key, using AWS Lambda for routing logic.  

I added **DynamoDB Streams** to keep a read‑optimized replica in DynamoDB, enabling ultra‑low latency reads for analytics.  

**Result**  
- Latency dropped from 320 ms to <80 ms (4× improvement).  
- Throughput increased to 1.2M RPS without additional cost; we saved ~30% on EC2/ElastiCache usage by auto‑scaling hot shards.  
- SLA compliance rose from 92% to >99.9%.

**Reflection**  
I practiced **Ownership** (taking full responsibility for the sharding plan) and **Dive Deep** (profiling traffic, tuning hash functions). The failure of a naïve single‑shard approach taught me to proactively monitor “hot spots” and iterate quickly—an embodiment of Amazon’s **Bias for Action**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
