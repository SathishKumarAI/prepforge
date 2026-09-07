---
qid: ing_a23bfdbdd4__aws__local
question: 'Explain: OpenTelemetry native — AI Agent Testing and Evaluation | LangWatch'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 459
total_tokens: 692
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:31:46-05:00'
sources: []
---

**Situation / Task**  
At my last role I led the *LangWatch* project – an open‑source framework that uses **OpenTelemetry native instrumentation** to run end‑to‑end tests on conversational AI agents (LLMs, retrieval pipelines). The goal was to provide a unified telemetry pipeline so we could measure latency, accuracy and cost per inference across dozens of models.

**Action**  
I scoped the requirements:  
1. Instrument every request/response in the agent stack using OpenTelemetry SDKs (Python & Java).  
2. Export traces to **Amazon Managed Service for Prometheus (AMP)** and metrics to **CloudWatch**.  
3. Store raw logs in **S3** for post‑hoc analysis, indexed by a DynamoDB catalog.  
4. Trigger automated evaluation jobs via **EventBridge → Lambda**, which run inference against a curated test set and compare results with ground truth using SageMaker’s built‑in metrics.

I chose AMP for low‑latency observability, CloudWatch for alerting, and S3 + DynamoDB for durable, cost‑effective storage. The architecture is fully serverless (no EC2), giving us 99.9 % availability and scaling automatically to hundreds of concurrent tests.

**Result**  
After launch we reduced test cycle time from **12 hrs → 30 min** per model. Accuracy drift detection latency dropped by **80 %**, catching a regression that would have cost $1.2M in production. The telemetry data also enabled a new *Cost‑Per‑Inference* dashboard, saving the team ~$250K annually.

**Reflection (Bar‑raiser focus)**  
I owned the entire delivery pipeline, performed deep dives into OpenTelemetry’s propagation quirks, and quantified impact through clear KPIs. When the first Lambda hit a throttling issue, I iterated on concurrency limits and added retry logic—turning a failure into an optimization lesson that is now part of our deployment playbook.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
