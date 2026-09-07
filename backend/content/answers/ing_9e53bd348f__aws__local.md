---
qid: ing_9e53bd348f__aws__local
question: 'Explain: Directory-Based Sharding — Key Concepts to Understand Database
  Sharding'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 412
total_tokens: 646
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:22:48-05:00'
sources: []
---

**Leadership Principles:** *Ownership*, *Dive Deep*  

**Situation (S)** – While leading a fintech product that needed to scale from 10 M to 1 B users, we hit a bottleneck: our monolithic relational DB could not handle the write load for account metadata.  
**Task (T)** – I had to design a sharding strategy that would keep query latency < 50 ms and cost under $200k/month.

**Action (A)** –  
1. **Directory‑based sharding**: we built a lightweight lookup table (`shard_map`) that maps a deterministic hash of the user ID to a shard endpoint.  
2. Each shard is an Aurora Serverless cluster; reads go directly to its shard, writes hit the same shard via the directory.  
3. The directory itself is hosted on DynamoDB (high‑throughput, low‑latency) with global tables for multi‑region failover.  
4. We added a “warm‑up” routine that pre‑populates new shards and uses CloudWatch alarms to trigger auto‑scaling.

**Result (R)** – After rollout:  
- **Throughput** increased from 5 k rps to > 200 k rps (40×).  
- **Latency** dropped to < 30 ms for 99.9% of requests.  
- **Cost** stayed within budget, with a 15% reduction in storage due to better data locality.

**What a bar‑raiser listens for:** I demonstrated ownership by steering the entire migration, dove deep into the trade‑offs (DynamoDB vs RDS), quantified impact with real metrics, and learned from an early failure where we underestimated cross‑region latency—prompting us to enable DynamoDB global tables.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
