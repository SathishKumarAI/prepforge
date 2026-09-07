---
qid: ing_76b7ebaf59__aws__local
question: 'Explain: Replication with Consistent Hashing — Consistent Hashing | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 432
total_tokens: 669
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:53:30-05:00'
sources: []
---

**Situation / Task**  
I was tasked with redesigning our recommendation engine’s cache layer for a global e‑commerce platform that had just hit **1 M daily users** and needed 99.9 % read availability across five regions.

**Action**  
I chose **consistent hashing** to drive *data replication* because it minimizes key movement when nodes join/leave—critical for our auto‑scaling policy.  
- **Architecture:** Each cache node (an Amazon ElastiCache Redis cluster) owns a segment of the hash ring; we replicate each key on its primary node and the next two successors, ensuring *RAID‑5*–style fault tolerance.  
- **AWS Services:**  
  - *ElastiCache (Redis)* for low‑latency in‑memory storage.  
  - *Application Load Balancer* with sticky sessions to route requests to the nearest ring segment.  
  - *CloudWatch Alarms* trigger automatic node scaling via Auto Scaling Groups, feeding back into the hash ring.  
- **Scalability & Cost:** Adding a node changes only ~1/ N of the keys, so we can scale horizontally with minimal data shuffling, keeping Redis memory usage at ~70 % peak and cost below $0.05 per request.  

**Result**  
After deployment, read latency dropped from **250 ms to 35 ms**, cache hit rate climbed from 68 % to 92 %, and regional failure handling improved from a 15‑minute outage window to <2 minutes—boosting revenue by **$3.4 M/month**.

**Reflection (Bar‑raiser check)**  
I owned the end‑to‑end solution, dove deep into hash distribution math, quantified impact with real metrics, and learned that over‑replication can hurt cost more than resilience; thus I settled on a 3‑way replication balance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
