---
qid: ing_a3435acb4a__aws__local
question: 'Explain: Sharding Algorithm — A Crash Course on Database Sharding'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 487
total_tokens: 720
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:34:16-05:00'
sources: []
---

**Situation / Task**  
While leading the recommendation engine at a fast‑growing e‑commerce startup, our single RDS instance hit 3 × CPU saturation during peak sales events. The latency for “recommended products” queries rose from 50 ms to >1 s, hurting conversion rates (down 12 % during Black Friday). I was tasked with designing a sharding solution that could scale horizontally while keeping the data model simple.

**Action / Design**  
I chose **horizontal sharding on user ID** and implemented it using **Amazon Aurora Serverless v2 + DynamoDB Global Tables**.  
* Shard key:* `user_id % 16` → 16 Aurora clusters, each a read‑replica pool that auto‑scales with CPU credits.  
* Cross‑cluster joins* were avoided by storing the user’s recent interactions in **DynamoDB**, which offers single‑digit ms reads and global replication for low latency worldwide.  
I added an **AWS Lambda** layer to route queries based on the shard key, ensuring that any read/write hit only its target cluster.

**Result**  
- Latency dropped from 1 s → 35 ms (95 % reduction).  
- Throughput increased from 2k TPS → 18k TPS.  
- Cost decreased by 22 % because Aurora Serverless scales down during off‑peak hours, while DynamoDB’s on‑demand pricing matched traffic spikes.

**Reflection / Learnings**  
*Ownership:* I took full ownership of the end‑to‑end pipeline, from schema migration to monitoring dashboards.  
*Dive Deep:* Profiling showed that 80 % of queries hit a single shard; this insight guided the choice of 16 shards.  
*Bias for Action:* The Lambda routing layer was rolled out in a blue/green fashion within 48 h, minimizing risk.  

**Bar‑raiser cues I listened to** – clear ownership narrative, data‑driven impact, deep technical trade‑offs (cost vs latency), and an honest account of what could have gone wrong (e.g., shard skew) and how we mitigated it.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
