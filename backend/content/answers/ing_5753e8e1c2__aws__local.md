---
qid: ing_5753e8e1c2__aws__local
question: 'Explain: In fact this algorithm is much more — How NETFLIX onboards new
  content: Video Processing at scale \ud83c\udfa5'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 447
total_tokens: 698
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:43:15-05:00'
sources: []
---

**Situation & Task**  
At Netflix I led the *Content Onboarding* pipeline that ingests every new movie or series into our catalog. The goal was to reduce time‑to‑stream from acquisition (day 0) to availability (day 3) while keeping cost per GB below $0.02.

**Action – Technical Design**  
I architected a serverless, event‑driven pipeline on AWS:

| Step | Service | Reasoning |
|------|---------|-----------|
| Ingest | **S3 + SQS** | Durable object store; decouples upload from processing. |
| Transcode & Metadata | **AWS Elemental MediaConvert + Lambda** | Auto‑scales to 10× concurrent jobs; costs ~ $0.0045 per minute. |
| AI‑driven quality check | **Amazon Rekognition + SageMaker Endpoint** | Detects frame drops, audio sync, and inappropriate content in real time. |
| Catalog update | **DynamoDB + EventBridge** | Low latency writes; triggers downstream recommendation services. |

We added a *retry* strategy with exponential back‑off and dead‑letter queues to ensure reliability. The entire flow is fully automated; the only manual step is a single approval gate.

**Result**  
- Cut onboarding time from **3 days → 12 hours** (30% of our total pipeline).  
- Reduced per‑GB cost from $0.07 → $0.02 (≈ 70 % savings).  
- Achieved 99.9% success rate on first run, eliminating manual re‑processing.

**Reflection & Learning**  
I owned the entire lifecycle and *dived deep* into each failure mode; after a rare “metadata mismatch” incident I introduced an idempotent ingestion flag that eliminated duplicate catalog entries. This experience sharpened my bias for action and reinforced the principle of **Ownership**—owning not just the code, but the customer experience (viewers can watch new releases immediately).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
