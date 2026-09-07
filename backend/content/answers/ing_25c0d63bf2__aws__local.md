---
qid: ing_25c0d63bf2__aws__local
question: 'Explain: TCP vs UDP — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 369
total_tokens: 601
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:51:34-05:00'
sources: []
---

**Situation –** While redesigning a real‑time telemetry platform for an IoT fleet, my team had to decide whether to use TCP or UDP for data ingestion.  
**Task –** Deliver >1 M messages/sec with <5 ms latency while keeping cost ≤$0.05/GB.

**Action –**  
- **Customer Obsession & Ownership:** I mapped user‑needs (real‑time alerts vs batch analytics).  
- **Dive Deep & Bias for Action:** Ran a 48‑hour benchmark on EC2 m6i.large with Kinesis Data Streams.  
  - *TCP* (via AWS IoT Core) gave 99.9 % delivery, but latency spiked to 18 ms under burst and incurred ~$0.08/GB due to retransmissions.  
  - *UDP* (direct UDP over VPC + SQS DLQ) dropped <0.1 % packets, kept latency at 4 ms, and cut bandwidth cost by 35 %.  
- **Invent & Simplify:** Implemented a lightweight ACK scheme on the client to recover from occasional drops, preserving reliability without full TCP overhead.

**Result –** Adopted UDP with custom recovery: throughput ↑2.5×, latency ↓65 %, and costs ↓$0.03/GB, achieving 99.8 % SLA for mission‑critical alerts.  
**Bar‑raiser takeaway:** I owned the experiment, dove deep into metrics, quantified impact, and learned that “perfect reliability” is not always required; a hybrid approach can deliver better customer value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
