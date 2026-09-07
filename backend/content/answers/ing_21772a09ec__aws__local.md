---
qid: ing_21772a09ec__aws__local
question: What about initial and ongoing costs? — Use vertical partitioning to scale
  data efficiently in Amazon DynamoDB | AWS Database Blog
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 415
total_tokens: 659
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:42:58-05:00'
sources: []
---

**Situation / Task**  
While leading a data‑science team for a real‑time recommendation engine, we hit a 30 % spike in write traffic that pushed our DynamoDB table to its provisioning limits. The goal was to keep latency <5 ms while cutting costs by 25 %.

**Action**  
I applied **vertical partitioning**: split the 500‑GB item into two tables—`UserProfile` (static user attributes) and `UserActivity` (high‑write, event‑driven data). Each table uses its own key schema and provisioned throughput.  
*AWS services used:* DynamoDB (with on‑demand mode for the activity table), **Amazon CloudWatch** for monitoring, **AWS Lambda** to sync profile updates across tables, and **AWS Cost Explorer** for tracking savings.  
I modeled traffic patterns with **DynamoDB Capacity Planner**, ensuring each partition’s read/write units matched 95 % of peak load. The on‑demand activity table avoided over‑provisioning during off‑peak hours.

**Result**  
- Latency dropped from 12 ms to 3 ms (a 75 % improvement).  
- Monthly spend fell from $18,000 to $13,500— a **25 % cost reduction**.  
- System uptime stayed at 99.999%, meeting SLA.

**Reflection**  
This exercise reinforced **Ownership**: I owned the end‑to‑end pipeline and iterated based on real metrics. The deep dive into traffic patterns exemplified **Dive Deep**, while the rapid migration to on‑demand mode showcased **Bias for Action**. Future failures will be mitigated by adding a predictive scaling rule that pre‑emptively adjusts provisioned throughput during identified traffic surges.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
