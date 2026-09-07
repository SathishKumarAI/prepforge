---
qid: ing_7b114c15d0__aws__local
question: 'Explain: Pitfall 3: Evaluation Set Leakage — Capability Assessment'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 348
total_tokens: 580
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:03:40-05:00'
sources: []
---

**Pitfall 3 – Evaluation‑Set Leakage (Capability Assessment)**  
*Leadership Principles: Customer Obsession & Dive Deep*

> **Situation:** I led a data‑science team building an intent‑recognition model for a voice assistant. The test set inadvertently contained transcriptions that were also present in the training pipeline because of a shared S3 bucket path.

> **Task:** Detect and eliminate leakage to ensure the model’s true generalization before launch.

> **Action:**  
1️⃣ Implemented a strict “train/test split” policy with separate IAM roles and bucket prefixes.  
2️⃣ Wrote an automated Lambda that hashes each utterance and flags duplicates across splits (AWS Glue + Athena).  
3️⃣ Re‑trained the model on the cleaned data, added a 10% hold‑out for real‑world user logs (SQS → SageMaker), and scheduled nightly Drift Detection via CloudWatch metrics.

> **Result:** Post‑cleaning accuracy dropped from 94 % to 88 %, but the model’s precision in live A/B tests rose by **12 pp**—a 15 % lift in customer satisfaction scores. The audit process reduced downstream support tickets by **30 %** and cut manual review time from 3 hrs to 30 min per week.

*What a bar‑raiser looks for:* clear ownership of data hygiene, deep dive into root causes, quantified impact on business metrics, and proactive learning loop that turned a leakage bug into a robust pipeline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
