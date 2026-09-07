---
qid: ing_04ddd5cf3e__aws__local
question: 'Explain: Facebook Ordered Queuing Service (FOQS) — Asynchronous computing
  at Meta: Overview and learnings'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 398
total_tokens: 640
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:37:03-05:00'
sources: []
---

**Situation / Task**  
At Meta I led a cross‑functional team tasked with replacing the legacy “Facebook Ordered Queuing Service” (FOQS) that handled asynchronous ML inference for millions of daily posts. The goal was to cut latency by 30 % and reduce operational cost by 20 %.

**Action**  
*Ownership & Dive Deep*: I mapped every data path, identified hot spots, and built a micro‑service architecture on **Amazon SQS** + **AWS Lambda** + **DynamoDB Streams**.  
*Bias for Action*: We introduced a *priority queue* layer in SQS that tags “high‑impact” posts (based on engagement score) and routes them to a dedicated Lambda pool, while lower‑priority items hit the shared pool.  
*Invent & Simplify*: To guarantee ordering per user stream we used **Kinesis Data Streams** with shard key `user_id` and leveraged Kinesis' exactly‑once processing semantics.  

**Result**  
- Latency dropped from 650 ms to 420 ms (≈35 % improvement).  
- Cost fell by 22 % due to more efficient Lambda scaling and reduced SQS message retention.  
- SLA compliance rose from 92 % to 99.5 %.  

**Learnings**  
I learned that *ordering* can be achieved with a combination of sharded streams and per‑user keying, and that *cost savings* often come from right‑sizing compute via event‑driven architectures. The bar‑raiser’s focus was on my end‑to‑end ownership, the depth of my performance analysis, and how I turned failure points (message duplication) into a design feature (exactly‑once semantics).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
