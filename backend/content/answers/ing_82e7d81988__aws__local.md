---
qid: ing_82e7d81988__aws__local
question: 'What is the rejection rate? — Cursor Software Engineer Interview: Process,
  Questions, and Prep Guide (2026) | Interview Coder'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 462
total_tokens: 709
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:20:49-05:00'
sources: []
---

**Question:** *“What is the rejection rate?”*  

**Answer (Amazon style)**  

> **Situation & Task** – In my last role I built a real‑time fraud‑prevention pipeline for a payment gateway that handled 10 M transactions/day. The business asked me to expose the daily “rejection rate” (fraud‑flagged / total) to senior leadership so they could tie it to risk budgets.  
> 
> **Action** – I designed an event‑driven architecture:  
> * **Kinesis Data Streams** ingested transaction events,  
> * a **Lambda** function performed lightweight fraud scoring and wrote two counters (rejected/total) into a **DynamoDB** table with atomic `ADD` operations.  
> * A scheduled **Step Function** aggregated the daily counts every hour, calculated the ratio, and published it to an **SNS** topic that triggers a CloudWatch dashboard.  
> 
> I chose DynamoDB for its low latency and built‑in horizontal scaling; Kinesis guarantees >99.9 % availability with auto‑sharding. Costs were < $0.02/transaction, and the solution scaled seamlessly during peak load (up to 30 M tx/day).  
> 
> **Result** – The new metric was available in <5 min after a batch finished, giving leadership instant visibility. Over six months it helped reduce fraud costs by **12 %** while maintaining a *rejection rate* of **0.8 %**, meeting the SLA of ≤1 %.  
> 
> **Learnings** – I realized that exposing raw counters can hide drift; thus I added anomaly detection in the Step Function to flag sudden spikes, turning a simple KPI into a proactive alert system.  

**Leadership Principles Anchored:** *Customer Obsession* (quick, accurate insight for risk managers), *Ownership* (full responsibility from ingestion to dashboard), and *Dive Deep* (quantified cost savings & performance trade‑offs).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
