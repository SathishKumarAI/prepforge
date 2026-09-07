---
qid: ing_f2c3a132b6__aws__local
question: How do I manage shard size? — How many shards should I have in my Elasticsearch
  cluster? | Elastic Blog
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 425
total_tokens: 667
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:25:32-05:00'
sources: []
---

**Situation & Task**  
While migrating a customer‑facing search platform from on‑prem to an AWS‑managed Elasticsearch Service, I had to decide shard count for a 2 TB index that receives ~3 k queries/sec. The goal was to keep query latency <200 ms while minimizing cost.

**Action (Technical)**  
1. **Baseline sizing** – Each primary shard must stay under 30 GB to avoid “warm‑up” delays; 2 TB / 30 GB ≈ 67 shards.  
2. **Read/write balance** – With a 3:1 read/write ratio, I added 4 replicas per shard (total 68 * 5 = 340 logical shards).  
3. **AWS services** – Deployed on `r6g.large.elasticsearch` instances; used Amazon OpenSearch Service’s auto‑scaling and snapshot policies.  
4. **Monitoring & tuning** – Employed CloudWatch metrics (`search_latency`, `disk_utilization`) to validate shard performance, then reduced replicas to 3 once latency fell below 150 ms, cutting cost by ~15%.

**Result (Data)**  
- Query latency dropped from 350 ms to **145 ms**.  
- CPU utilization stayed <70% across nodes.  
- Storage cost decreased 12 % after replica adjustment; overall operational cost saved $3k/month.

**Reflection (Leadership Principles)**  
*Customer Obsession*: Delivered sub‑200 ms latency for end users.  
*Dive Deep & Ownership*: I drove the full lifecycle—analysis, design, deployment, and post‑launch tuning—and documented trade‑offs for future teams.  

**Bar‑raiser Takeaway**  
I showed ownership by iterating shard strategy based on real metrics, diving deep into AWS cost models, and learning that over‑provisioning replicas can inflate costs without proportional performance gains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
