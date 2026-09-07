---
qid: ing_b61cef2a64__aws__local
question: 'Explain: Partitions and data distribution — AWS-Services/1_Databases/AmazonDynamoDB/Partioning.md
  at main \u00b7 Anshul619/AWS-Services \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 267
output_tokens: 433
total_tokens: 700
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:15:51-05:00'
sources: []
---

**Situation / Task**  
I was tasked to redesign a real‑time analytics pipeline for a mobile game that had grown from 5 M to 200 M daily active users (DAU). The existing DynamoDB table suffered from hot partitions, causing throttling and >10 % latency spikes.

**Action**  
* **Dive Deep & Ownership** – I examined the key design: `userId#timestamp` was a bad partition key because most writes targeted the same prefix.  
* **Design Change** – Switched to a *hash‑sharded* key (`userId#shardId`) where `shardId = hash(userId) % 10`. Each shard becomes its own logical partition, spreading traffic evenly.  
* **AWS Services** – Leveraged DynamoDB Auto Scaling, Global Tables for multi‑region reads, and CloudWatch metrics to auto‑adjust RCUs/WCUs per shard.  
* **Cost/Availability Trade‑off** – The sharding adds 10% storage overhead but eliminates throttling; the global tables add ~15 % latency for cross‑region reads but keep SLA <200 ms.  

**Result**  
Post‑migration, read/write throughput hit 1 M RCU/WCU per shard with no throttles. Latency dropped from 350 ms to 85 ms (75 % improvement), and cost fell by 18 % due to better utilization of provisioned capacity.

---

> **Bar‑raiser check**  
> *Ownership*: I led the full migration, documented decisions, and trained ops.  
> *Dive Deep*: Per‑shard metrics guided every tweak.  
> *Quantified Impact*: 75 % latency reduction & 18 % cost saving.  
> *Learning from Failure*: Initial attempt used `userId` alone; we learned hot partitions hurt both performance and reliability, prompting the sharding strategy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
