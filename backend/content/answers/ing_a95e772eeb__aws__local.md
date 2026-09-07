---
qid: ing_a95e772eeb__aws__local
question: Why ML + Rules, Not Just ML? — Fraud Detection
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 413
total_tokens: 644
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:49:30-05:00'
sources: []
---

**Situation** – At my previous fintech role I led the fraud‑detection engine for a payment platform that processed ~$2 B/month. A pure ML model drifted after a sudden surge in synthetic card usage, causing a 35 % spike in false positives and a $120K loss in revenue.

**Task** – Design a system that keeps high precision while remaining cost‑effective and auditable.

**Action** –  
1. **Hybrid architecture**: A *rule‑based* layer (AWS Lambda + DynamoDB) filters obvious fraud patterns (e.g., same IP, device fingerprint).  
2. The filtered stream feeds *SageMaker Real‑Time Inference* for probabilistic scoring.  
3. I added a *feedback loop* using Kinesis Data Firehose to ingest operator flags back into the training pipeline on S3, retraining nightly with SageMaker Pipelines.  
4. All decisions are logged in CloudWatch Logs and archived in Glacier for compliance audits.

**Result** – After deployment: false positives dropped 28 %, true fraud capture improved by 12 % (≈$150K/month saved), and model training cost fell 18 % because the rule layer cut inference volume by ~40 %.  

> **Leadership Principles:**  
> • *Customer Obsession* – We kept merchants’ user experience intact.  
> • *Ownership & Dive Deep* – I owned the end‑to‑end pipeline, continuously monitored drift, and iterated on rules based on real data.

**Bar‑raiser cues** – The interviewers looked for ownership of a complex problem, deep dive into trade‑offs (latency vs cost), measurable impact, and learning from an initial failure (model drift).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
