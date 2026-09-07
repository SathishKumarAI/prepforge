---
qid: ing_b620a5f884__aws__local
question: 'Explain: Hashing: — OG CS61B Data Structures and Sorting Cheat Sheet'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 420
total_tokens: 656
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:15:51-05:00'
sources: []
---

**Situation / Task**  
At my previous role I was tasked with redesigning the recommendation engine’s user‑profile lookup to cut latency from 120 ms to <30 ms while supporting a 10× traffic spike during holiday sales.

**Action**  
I championed a *hash‑based* in‑memory store.  
- **Design:** A consistent‑hash ring of Redis shards (Amazon ElastiCache) with linear probing for collision resolution.  
- **AWS services:**  
  - **ElastiCache for Redis** – low‑latency, managed scaling.  
  - **CloudWatch** + **Auto Scaling** to spin up nodes during traffic bursts.  
  - **S3** for persistent backup of hash tables (cold data).  
- I wrote a custom serializer that packed user vectors into fixed‑size byte arrays; this reduced memory overhead by 35 %.  
- Implemented *Bloom filters* as a pre‑check to avoid unnecessary cache hits, cutting CPU usage by 20 %.

**Result**  
Latency dropped from 120 ms to **28 ms** (≈77 % improvement). With the auto‑scaling policy we handled a 12× traffic surge without any downtime. Cost stayed below budget: Redis cluster cost decreased 18 % due to efficient memory usage.

**Reflection**  
I practiced *Ownership* by taking full responsibility for the end‑to‑end solution and *Dive Deep* by profiling every microsecond of the lookup path. I learned that even a simple hash table can be a game changer when combined with the right AWS services and careful trade‑offs between speed, cost, and consistency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
