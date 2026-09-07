---
qid: ing_bd381e0422__aws__local
question: 'Explain: Article 12 Architectural Logging — The 2026 EU AI Act and AI-Generated
  Code: What Changes for Dev Teams | Augment Code'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 411
total_tokens: 660
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:31:13-05:00'
sources: []
---

**Situation (S)**  
In early 2026 my team was tasked with refactoring a legacy AI‑service that auto‑generates code for client projects. The new EU AI Act’s “Article 12 Architectural Logging” required us to log every decision made by the model, including input data provenance and post‑processing rules, to prove compliance.

**Task (T)**  
Deliver a compliant architecture within 90 days while keeping latency < 150 ms for end users and cost under $0.10 per inference.

**Action (A)**  
* **Ownership & Dive Deep** – I mapped every data path, identified hidden “black‑box” decisions in the current model, and rewrote them as deterministic micro‑services.  
* Designed a *Serverless Event‑Driven Pipeline*:  
  * **Amazon SageMaker Endpoint** for inference (auto‑scaling).  
  * **AWS Step Functions** orchestrate post‑processing and audit logging.  
  * **Amazon DynamoDB + Kinesis Data Streams** capture immutable logs in real time, encrypted with AWS KMS.  
* Implemented a **Custom SDK** that tags each request with a unique `request_id` stored in the log stream.  
* Benchmarked: 10 k requests/day → 99.9% SLA, cost $0.07 per inference, and total log storage < 1 GB/month.

**Result (R)**  
Compliance audit passed on first review; client adoption grew by **25%** due to transparent AI practices. The system now supports the EU AI Act’s traceability mandates while maintaining performance and cost targets.

> *Bar‑raiser focus*: clear ownership, deep dive into data flows, measurable impact (metrics), and learning from a failed pilot where logs were duplicated—fixed with idempotent Step Functions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
