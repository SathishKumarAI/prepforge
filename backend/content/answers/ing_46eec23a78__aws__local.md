---
qid: ing_46eec23a78__aws__local
question: 'Explain: 3.1 CP: Consistency + Partition Tolerance'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 377
total_tokens: 611
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:06:13-05:00'
sources: []
---

**Situation / Task**  
At my previous company we built a global recommendation engine that had to serve 10 M users per day while guaranteeing *exact* results even under network partitions. The challenge was to reconcile **Consistency + Partition Tolerance (CP)** from the CAP theorem without sacrificing latency.

**Action**  
I led a small team to redesign the data layer as an **event‑sourced, multi‑region DynamoDB Global Table** backed by **AWS DAX** for in‑memory caching. To satisfy *consistency* we enabled **DynamoDB’s transactional writes** and set **strong read consistency** on all user‑facing queries. For *partition tolerance*, we used **DynamoDB’s built‑in cross‑region replication**; if a region went down, traffic was routed to the next nearest region via Route 53 latency routing. I also introduced an **AWS Step Functions** workflow that replayed failed events from SQS DLQs, ensuring no data loss.

**Result**  
After deployment we saw:
- **99.999% (5‑nines) availability** during a 2‑hour regional outage.
- **Latency < 120 ms** for 95th percentile user requests, down from 350 ms.
- **Cost savings of 18 %** by eliminating the legacy on‑prem cluster.

**Reflection**  
I owned the end‑to‑end system, dove deep into DynamoDB’s consistency models, and learned that *partition tolerance* can be achieved without sacrificing strong consistency when you architect for failure from day one. This aligns with **Customer Obsession** (zero downtime) and **Ownership** (full lifecycle responsibility).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
