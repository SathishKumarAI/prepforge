---
qid: ing_0fd00d3651__aws__local
question: 'Explain: Only 2 (of 3 CAP properties) possible at the same time'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 344
total_tokens: 581
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:01:12-05:00'
sources: []
---

**Answer – CAP Theorem**

*Situation:*  
While designing a globally‑distributed key‑value store for a high‑traffic e‑commerce catalog, I had to decide which two CAP properties to guarantee.

*Task:*  
Ensure that customers always see the most recent product prices (Consistency) while keeping the service highly available during network partitions.

*Action:*  
I chose **Consistency + Partition Tolerance** and relaxed Availability.  
- Implemented a primary–secondary replication model with DynamoDB Global Tables, where the primary node processes writes.  
- On partition detection, secondary nodes become read‑only; clients receive *“read‑only”* responses until connectivity is restored.  
- Used AWS Global Accelerator to route traffic to the nearest healthy region, reducing latency.

*Result:*  
During a simulated 5 % inter‑region network outage, the system maintained strong consistency for 98 % of writes and dropped availability only for ~2 % of read requests—well below SLA thresholds. Cost increased by 12 %, but we avoided stale price displays that could have cost $1M in lost sales.

**Leadership Principles Highlighted**

- **Customer Obsession:** Prioritized accurate pricing over brief unavailability.  
- **Ownership & Dive Deep:** Analyzed trade‑offs, quantified impact, and iterated on the replication strategy.  

*Bar‑raiser takeaway:* I showed ownership by making a hard choice, dove deep into failure scenarios, delivered measurable results, and learned that sometimes sacrificing availability is the best customer‑centric decision.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
