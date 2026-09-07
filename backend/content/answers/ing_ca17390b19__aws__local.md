---
qid: ing_ca17390b19__aws__local
question: 'Explain: 🏗️ System Design — Ai Engineer 75'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 409
total_tokens: 641
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:58:19-05:00'
sources: []
---

**Situation & Task (S)**  
At my previous role I was tasked to build a real‑time recommendation engine for a video platform that needed to serve 2 M active users per day while keeping latency < 200 ms and cost < $10k/month.

**Action (A)**  
I owned the end‑to‑end solution, starting with a *Dive Deep* audit of user behavior logs. I designed an event pipeline on **Amazon Kinesis Data Streams** → **Lambda** for feature extraction → **DynamoDB** for hot features. For model inference I chose **Amazon SageMaker Endpoint** (multi‑node auto‑scaling) and cached predictions in **ElastiCache‑Redis** to hit the 200 ms SLA.  
To reduce spend, I leveraged **SageMaker Neo** to compile the model for edge‑optimized inference on **AWS Inferentia**, cutting GPU cost by 35%. All data was stored in **Amazon S3** with lifecycle policies, and backups were managed via **Glacier Vaults**.

**Result (R)**  
Within 6 weeks of deployment, recommendation click‑through rate rose from 4.2 % to 7.8 % (+85 %) while the monthly cost stayed below $9k. User churn dropped by 12 %.  

**Leadership Principles Highlighted**  
- **Customer Obsession**: focused on latency and relevance that directly improved user engagement.  
- **Ownership & Bias for Action**: I took full responsibility from data ingestion to model deployment, iterating quickly on feedback loops.  

*Bar‑raiser takeaway*: deep understanding of AWS services, clear quantification of impact, ownership of both success and failure (I logged a 3 % prediction error spike during peak traffic and automated anomaly detection to mitigate it).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
