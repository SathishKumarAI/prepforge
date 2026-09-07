---
qid: ing_d01c2f1154__aws__local
question: 'Explain: Where to start — Event-Driven Architecture'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 431
total_tokens: 661
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:11:32-05:00'
sources: []
---

**S**ituation – In my last role I was tasked to build a real‑time fraud detection pipeline for a payment platform that had 1 M+ daily transactions.  
**T**ask – The requirement was to ingest events as they arrive, run an ML model, and trigger alerts with minimal latency while keeping cost predictable.  

**A**ction – I started by **customer obsession**: interviewed merchants to understand their SLA expectations (≤ 200 ms for alert delivery). I chose an **event‑driven architecture** using **Amazon EventBridge** as the central bus, coupled with **SQS FIFO queues** to guarantee order and deduplication.  
For compute I leveraged **AWS Lambda** (1 s timeout) to invoke a **SageMaker BatchTransform endpoint** that scored each transaction. The results were written back to **DynamoDB** for real‑time lookups, while an **SNS topic** pushed notifications to merchants’ dashboards.  

I implemented **step functions** for orchestration, enabling retries and dead‑letter handling—ensuring **availability** (99.9 % uptime). To keep costs low I used **Lambda’s provisioned concurrency** only during peak hours and **S3 event triggers** for batch re‑runs, reducing spend by 35 %.  

**R**esult – The new pipeline cut alert latency from 1.2 s to 180 ms (70 % improvement) and increased fraud detection accuracy from 82 % to 92 %, directly boosting merchant revenue by $4.5M annually.  

*Bar‑raiser notes:* I demonstrated ownership, deep dive into event patterns, quantified impact, and learned from an initial failure where unhandled duplicate events caused false positives—resolved with SQS deduplication.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
