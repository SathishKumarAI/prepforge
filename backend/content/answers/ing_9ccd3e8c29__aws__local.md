---
qid: ing_9ccd3e8c29__aws__local
question: 'Explain: Both theory and practice — Designing Data-Intensive Applications
  (DDIA) \u2014 an O\u2019Reilly book by Martin Kleppmann (The Wild Boar Book)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 261
output_tokens: 495
total_tokens: 756
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:19:21-05:00'
sources: []
---

**Situation & Task**  
When I joined the data‑science team at a fintech startup, we had to build an ML pipeline that ingested ~2 TB of daily transactional logs and produced real‑time fraud scores for every user. The team was skeptical because the existing architecture was monolithic and couldn’t scale.

**Action (Design)**  
I mapped the problem to *Design Data‑Intensive Applications* principles: *partitioning*, *eventual consistency*, and *streaming*. I proposed a Lambda‑driven, serverless pipeline:

1. **S3 + Kinesis Data Streams** – raw logs → durable storage & low‑latency ingestion.  
2. **Glue ETL** – schema inference (DDL) + transformation to Parquet on S3 for cost‑effective analytics.  
3. **Amazon SageMaker** – train a LightGBM model nightly; deploy via SageMaker Endpoints with autoscaling.  
4. **Step Functions** – orchestrate the workflow, retry logic, and audit trail.

This architecture satisfies *scalability* (auto‑scale Lambda & Kinesis shards), *availability* (S3 durability + multi‑AZ endpoints), and *cost* (pay‑as‑you‑go for compute; S3 lifecycle to Glacier).

**Result**  
Within 6 weeks we reduced the fraud detection latency from 30 min to <5 s, increased true‑positive rate by 18%, and cut infra spend by 35%. The system also logged every step in CloudWatch, enabling rapid debugging.

**Reflection (Bar‑raiser notes)**  
- **Ownership:** I owned the entire pipeline end‑to‑end.  
- **Dive Deep:** I benchmarked Lambda memory/timeout combinations to hit the sweet spot.  
- **Quantified Impact:** 18% lift in detection accuracy and $200k annual savings.  
- **Learning from Failure:** Early tests on EC2 had 3× higher costs; switching to serverless was a pivot that paid off.

**Leadership Principles Anchored**  
*Customer Obsession* (faster, more accurate fraud alerts), *Ownership* (full responsibility for the solution), and *Bias for Action* (rapid prototyping & iteration).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
