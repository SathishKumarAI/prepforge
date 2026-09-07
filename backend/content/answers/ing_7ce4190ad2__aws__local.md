---
qid: ing_7ce4190ad2__aws__local
question: Prompts and completions contain user data. How do you redact PII in traces
  without destroying your ability to debug?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 382
total_tokens: 625
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:07:32-05:00'
sources: []
---

**Situation & Task**  
When launching the new *ChatGPT‑for‑Enterprise* product we discovered that user prompts and completions were being logged to CloudWatch for debugging. Each trace could contain PII (emails, SSNs), violating GDPR and our internal privacy policy.

**Action**  
I took full ownership:  

1. **Redaction Pipeline** – Built a Lambda layer that runs before logs hit CloudWatch. It scans the payload with a regex/NER model, replaces matched tokens with `REDACTED`, and adds a side‑car field `pii_present:true`.  
2. **Audit & Replay** – Enabled *AWS Kinesis Data Firehose* to stream original logs (still encrypted at rest) into an S3 bucket with fine‑grained IAM policies; only the compliance team can decrypt.  
3. **Debugability** – Stored a cryptographic hash of each original prompt in DynamoDB keyed by trace ID, so developers can request a full payload via a secure API when needed.  

This design keeps 99.9% availability (Lambda + Firehose), scales to millions of traces per day, and costs <$0.02 per million log events.

**Result**  
Within two weeks we passed the internal privacy audit with zero findings. PII exposure risk dropped from **~15 %** of logs to **<0.1 %**, while developers still logged 95 % of debugging data. The solution is now part of the standard CI pipeline for all new services.

> *Leadership Principles:* **Ownership** – I drove the end‑to‑end fix; **Dive Deep** – I quantified PII leakage and engineered a scalable, auditable redaction flow.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
