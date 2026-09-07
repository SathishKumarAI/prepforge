---
qid: ing_d6a1cbae46__aws__local
question: 'Explain: Consistency, Availability & Partition Tolerance'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 363
total_tokens: 592
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:24:36-05:00'
sources: []
---

**Answer – “Consistency, Availability & Partition Tolerance” (CAP)**  

During a redesign of our recommendation engine at **Amazon**, I led the migration from an on‑prem SQL cluster to a **DynamoDB + S3 data lake** solution.  
- **Situation:** We had 200 M daily users; latency spikes during peak traffic caused cart abandonment rates to rise by **12%**.  
- **Task:** Build a highly available system that could tolerate network partitions while keeping user‑viewed recommendations accurate.  
- **Action:** I applied the CAP theorem: chose *AP* (availability + partition tolerance) with DynamoDB’s eventual consistency for read‑heavy traffic, and added a **DAX cache** for sub‑5 ms reads. For critical writes (e.g., cart updates), we used *CP* by coupling DynamoDB Streams to a Lambda that writes to an RDS Aurora cluster—ensuring strong consistency where needed.  
- **Result:** Read latency dropped from 120 ms to <4 ms, and cart‑abandonment fell to **2%** (a 83% reduction). Costs were down 18% due to reduced EC2 usage.  

*Leadership Principles:* **Customer Obsession** – we measured real user impact; **Ownership** – I championed the hybrid consistency strategy.  
*Bar‑raiser cues:* deep dive into trade‑offs between eventual and strong consistency, quantifiable business lift, and lessons from a failed pilot that highlighted the need for dual storage layers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
