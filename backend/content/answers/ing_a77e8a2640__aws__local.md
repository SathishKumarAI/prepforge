---
qid: ing_a77e8a2640__aws__local
question: 'Explain: Publisher-Subscriber Model (Pub/Sub) — Pubsubmodel'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 415
total_tokens: 649
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:45:13-05:00'
sources: []
---

**Situation & Task**  
At my previous company we needed to decouple real‑time telemetry ingestion from downstream analytics pipelines. The goal was to ingest ~50 M events/day and deliver them with <5 s latency while keeping costs under $30k/month.

**Action (Technical Design)**  
I designed a **Pub/Sub architecture** using *Amazon SNS* as the publisher hub, *SQS* as durable message queues per consumer topic, and *Lambda* for lightweight processing.  
- **SNS topics** fan‑out to multiple SQS queues, ensuring at‑least‑once delivery.  
- **Dead‑letter queues** capture malformed messages; a CloudWatch metric triggers an automated Lambda retry with exponential back‑off.  
- For burst handling we enabled *SQS FIFO* and *long polling (20 s)*, keeping latency low while reducing empty polls.  
- A single *EventBridge* rule aggregates metrics into a centralized dashboard for real‑time monitoring.

**Result**  
The system processed 55 M events/day with <4 s average end‑to‑end latency, cost remained $27k/month (≈30% below budget), and we reduced manual triage by 80 %.  

**Leadership Principles**  
- **Customer Obsession** – Delivered reliable telemetry to data scientists who could iterate faster.  
- **Ownership & Dive Deep** – I owned the entire pipeline, continuously profiled Lambda cold‑starts and tuned provisioned concurrency.  

**Bar‑raiser takeaway** – Showed end‑to‑end ownership, quantified performance gains, and learned from an initial failure where unhandled failures caused a 12 % data loss—prompted adding DLQs and automated alerts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
