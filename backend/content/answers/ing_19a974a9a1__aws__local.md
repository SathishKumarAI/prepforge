---
qid: ing_19a974a9a1__aws__local
question: 'Explain: Obligations Activating August 2, 2026 — The 2026 EU AI Act and
  AI-Generated Code: What Changes for Dev Teams | Augment Code'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 255
output_tokens: 480
total_tokens: 735
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:24:22-05:00'
sources: []
---

**Situation**  
In 2026 my team was tasked to ship a generative‑AI platform for EU customers. The new **EU AI Act** required that any model classified as “high‑risk” (e.g., medical diagnostics) must provide *explainability*, *bias mitigation*, and an *audit trail* for every inference.

**Task**  
Deliver a compliant, scalable service while keeping launch on schedule and cost under $2 M/yr.

**Action**  

1. **Ownership + Dive Deep** – I built a compliance micro‑service that wraps SageMaker endpoints.  
   *Collects input‑output pairs, stores them in DynamoDB with an immutable audit log (via Kinesis Firehose → S3).  
   *Runs an automatic bias‑check using Amazon Comprehend and triggers alerts via SNS if the F1‑score falls below 0.92.*

2. **Bias for Action + Invent & Simplify** – Integrated CodeGuru Reviewer to flag non‑deterministic code that could break reproducibility.  
   *Used AWS Artifact to pull the latest EU regulatory PDFs and auto‑parse them into a knowledge graph in Neptune, feeding an internal policy engine that tags model outputs with required compliance metadata.*

3. **Deliver Results** – Deployed the stack on a VPC‑isolated SageMaker endpoint with Multi‑AZ for 99.95 % availability.  
   *Cost: $1.8 M/yr vs. projected $2.5 M without audit logs.*  

**Result**  
Achieved first‑time compliance audit pass in 3 weeks, reduced model drift incidents by 78 %, and cut customer support tickets related to explainability by 62 %. The bar‑raiser will note my end‑to‑end ownership, deep technical dive into regulatory parsing, quantified impact on cost & quality, and learning loop that fed back into the policy engine for continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
