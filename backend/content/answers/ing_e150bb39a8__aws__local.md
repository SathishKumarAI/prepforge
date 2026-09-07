---
qid: ing_e150bb39a8__aws__local
question: 'Explain: How consistent hashing is used in the real world'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 435
total_tokens: 666
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:49:00-05:00'
sources: []
---

**Situation / Task**  
At my last role I built a global recommendation engine that served 50 M users daily. The underlying cache layer was sharded across dozens of EC2‑based nodes. When we added new regions, the shard mapping had to stay stable so that cache warm‑up traffic didn’t bounce all over.

**Action**  
I introduced *consistent hashing* with a virtual node ring (≈ 2000 vnodes per physical host). Each request’s user ID was hashed to the nearest vnode; the mapping table was stored in **Amazon DynamoDB** (partition key = vnode hash, sort key = region) and refreshed every 5 min via a Lambda that recomputed the ring on scale‑up/down events.  

To guarantee high availability I replicated the vnodes across an Auto Scaling Group and used **AWS Global Accelerator** to route traffic to the nearest healthy group. For cost I kept the ring small enough (≈ 2000 vnodes) so that DynamoDB read capacity was < 5 RCU per node, yet the spread of keys was > 99.9 % even after adding 30 new instances.

**Result**  
Cache hit‑rate rose from **68 % to 92 %**, reducing backend load by **35 %** and cutting latency by **40 ms** on average. The system survived a 25 % EC2 spot price spike without any service disruption.

> **Leadership Principles:** *Customer Obsession* (lower latency for users), *Ownership* (owning the sharding logic end‑to‑end), *Dive Deep* (profiling hash distribution and DynamoDB cost).  

**Bar‑raiser notes** – I demonstrated ownership by automating ring updates, dove deep into hash collision analysis, quantified impact with real metrics, and learned from a prior failure where naïve round‑robin sharding caused cache thrashing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
