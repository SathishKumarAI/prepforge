---
qid: ing_2723f5e334__aws__local
question: What should you log for every LLM call in production, and what are the pitfalls?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 563
total_tokens: 800
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:54:22-05:00'
sources: []
---

**Situation / Task**  
In my last role I was responsible for the production LLM inference layer that served 10 M requests/day to a global e‑commerce recommendation engine. We needed a logging strategy that enabled rapid incident response, cost monitoring and compliance without blowing up storage or latency.

**Action**  
I defined a *minimum viable log* schema and implemented it with AWS services:

| Field | Why it matters | AWS Service |
|-------|----------------|-------------|
| `request_id` (UUID) | Correlate request/response across micro‑services | CloudWatch Logs + X-Ray |
| `timestamp` | Latency & SLA tracking | CloudWatch Logs |
| `prompt_length`, `response_tokens` | Estimate compute cost & detect anomalous token spikes | Kinesis Data Firehose → S3 (cold storage) |
| `model_version`, `endpoint_name` | Version‑aware debugging, rollback | DynamoDB for metadata lookup |
| `latency_ms`, `error_code` | SLA breach alerts, root‑cause analysis | CloudWatch Alarms |
| `user_context_hash` | GDPR compliance – no PII in logs | Kinesis Data Streams → Athena (query) |

We *sampled* 1 % of successful calls for full payload capture to keep storage costs < $200/month while still enabling post‑mortem analysis. The pipeline runs on **Kinesis** so ingestion is horizontally scalable, and the data lands in S3 with lifecycle policies moving it to Glacier after 90 days.

**Result**  
After deployment, we reduced mean time to recovery (MTTR) from 4 h to 30 min for LLM‑related incidents. Cost of log storage stayed under budget, and compliance audits passed without manual effort. The system also surfaced a token‑burst anomaly that saved $12K in wasted GPU hours.

**Learning & Pitfalls Avoided**  
*Over‑logging payloads* caused unnecessary I/O latency; *missing correlation IDs* made root‑cause tracing impossible. By keeping the schema lean and sampling intelligently, we balanced observability with performance—exactly what Amazon’s **Ownership** and **Dive Deep** principles demand.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
