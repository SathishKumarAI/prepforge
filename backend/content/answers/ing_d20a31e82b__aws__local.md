---
qid: ing_d20a31e82b__aws__local
question: 'Explain: Handling Images and Video — Compliance Automation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 456
total_tokens: 684
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:15:43-05:00'
sources: []
---

**Situation (S)**  
In my last role I led a compliance‑automation engine for a fintech that had to scan every user‑uploaded image and video for prohibited content (e.g., money‑laundering imagery, extremist material). The volume was 12 TB/day with a 99.9 % SLA on detection latency.

**Task (T)**  
Build a fully automated pipeline that ingests media, runs compliance checks, flags violations in real time, and stores audit logs for regulators—all while keeping costs under $2M/yr.

**Action (A)**  
1. **Architecture** – S3 EventBridge → Lambda (Python) triggers Step Functions orchestrator.  
2. **Processing** – Use Amazon Rekognition Video for video streams; Rekognition Image + custom SageMaker model for image‑level detection. Results written to DynamoDB and sent to SNS topic.  
3. **Compliance & Auditing** – All events logged in CloudTrail → Kinesis Firehose → S3 Glacier Deep Archive (audit retention 7 years).  
4. **Cost/Scale** – Serverless components auto‑scale; Lambda concurrency capped at 500 for cost control. I added a caching layer with ElastiCache Redis to avoid re‑processing identical thumbnails, cutting compute by ~30%.  

**Result (R)**  
- Reduced detection latency from 8 s to <1 s per media file (99th percentile).  
- Flagged 2,300 violations in the first quarter; manual review time dropped 70 % (from 4 hrs to 1.2 hrs per batch).  
- Annual cost was $1.6M—20 % below budget.  

**Leadership Principles Highlighted**  
*Customer Obsession*: Delivered instant compliance feedback to users, reducing friction. *Dive Deep & Ownership*: Built the end‑to‑end serverless pipeline, iterated on model accuracy and cost metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
