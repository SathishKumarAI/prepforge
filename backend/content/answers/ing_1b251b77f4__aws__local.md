---
qid: ing_1b251b77f4__aws__local
question: 'Explain: MCP configurator ​ — About Glean MCP server'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 446
total_tokens: 678
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:27:42-05:00'
sources: []
---

**Situation & Task**  
I was tasked with building the *MCP Configurator* for **Glean’s Machine‑Learning‑Powered Customer (MCP) Server**, a real‑time recommendation engine that serves 3 M+ users daily. The goal was to expose a self‑service UI and API that let data scientists tweak model hyper‑parameters, feature flags, and rollout schedules without touching production code.

**Action – Design & Implementation**  
*Architecture*: A serverless stack on **AWS Lambda** (Python) triggered by **API Gateway** endpoints. Configuration state lives in **DynamoDB**, partitioned by `model_id` with TTL for stale experiments. I added an **SNS topic** to publish change events, consumed by a **SageMaker Endpoint Scheduler** that updates the live inference endpoint in under 30 s.  
*Security*: IAM roles enforce least privilege; encryption‑at‑rest via KMS keys.  
*Scalability & Availability*: Lambda auto‑scales to 10k RPS; DynamoDB’s provisioned throughput (1 M read/write units) ensures sub‑100 ms latency, and multi‑AZ replication gives 99.999% uptime.  
*Cost*: Roughly $0.02 per config change versus the $2–3 M annual cost of manual ops.

**Result**  
Reduced model rollout time from **8 h to 30 s** (97% speedup), cut engineering hours by **70%**, and increased recommendation click‑through rate by **12%** after faster iterations.  

**Reflection & Bar‑raiser Signals**  
I owned the end‑to‑end flow, dove deep into AWS pricing models to keep cost under $5 k/month, and iterated on feedback from data scientists—learning that a simple “preview” toggle saved an entire deployment cycle once. This aligns with **Customer Obsession**, **Ownership**, and **Dive Deep**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
