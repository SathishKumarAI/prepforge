---
qid: ing_124974f163__aws__local
question: 'Explain: What Information to Capture — Ai Evals Comprehensive Study Guide'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 383
total_tokens: 615
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:06:59-05:00'
sources: []
---

**Situation & Task (S)**  
At my previous company we launched an AI‑evaluation platform that needed to benchmark thousands of models across multiple domains. The product manager asked me to design the data capture strategy so we could compare model performance, detect drift, and feed results back into continuous learning.

**Action (A)**  
I first *dive deep* into each evaluation pipeline: metric types (accuracy, F1, AUC), input distributions, runtime characteristics, and audit logs. I mapped these to a **single schema** in DynamoDB, using composite keys (`model_id#epoch`) for fast queries and TTLs for stale data. For raw telemetry (latency, CPU/GPU usage) I streamed events to Kinesis Data Streams, which triggered Lambda functions that aggregated stats into Amazon Timestream—ideal for time‑series analytics. To ensure **availability**, all services ran in a multi‑AZ VPC with auto‑scaling groups. Cost was kept low by using on‑demand DynamoDB tables for hot keys and reserved capacity for cold ones, and by compressing Kinesis payloads.

**Result (R)**  
Within three months we reduced evaluation latency from 12 min to 3 min and cut storage costs by 35 %. The consolidated metrics enabled the data science team to identify model drift 2× faster, leading to a 15 % improvement in overall product accuracy.  

**Leadership Principles Highlighted**  
- **Customer Obsession & Deliver Results**: Built a system that directly improved user experience and ROI.  
- **Ownership & Dive Deep**: Took full responsibility for end‑to‑end data flow and engineered a scalable, cost‑efficient architecture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
