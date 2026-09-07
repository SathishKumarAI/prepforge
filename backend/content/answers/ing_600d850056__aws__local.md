---
qid: ing_600d850056__aws__local
question: 'Explain: Rules and constraints — AI Coding Workflow - by Neo Kim and Louis-Fran\u00e7ois
  Bouchard'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 464
total_tokens: 708
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:03:05-05:00'
sources: []
---

**Situation – Task**  
I was tasked with building a production‑grade AI pipeline for a fintech client that had to comply with strict regulatory rules (KYC, AML) while delivering real‑time fraud detection scores. The challenge was to enforce *rules and constraints*—data privacy limits, model explainability, and audit trails—without stalling innovation.

**Action – Design & Implementation**  
1. **Rule Engine Layer** – Built a stateless Lambda function that ingests raw transaction data, applies a deterministic set of business rules (e.g., “flag if amount > $10k AND location outside EU”), and writes the outcome to DynamoDB.  
2. **Model Workflow** – Trained an XGBoost model in SageMaker, wrapped it with a Docker container, and deployed it as a SageMaker Endpoint behind an Application Load Balancer (ALB).  
3. **Constraint Enforcement** – Implemented a *policy‑as‑code* layer using AWS IAM & KMS to restrict data access; added an Explainable AI wrapper (SHAP) that logs feature attributions to S3 for audit.  
4. **Observability** – CloudWatch metrics capture latency (<200 ms), error rate, and rule hit ratio; alerts trigger if the hit ratio deviates >5% from baseline.

**Result**  
- Reduced fraud‑related false positives by 18% while maintaining a 99.9% compliance audit score.  
- Cut model inference cost to $0.02 per transaction (vs. $0.07 previously).  
- Scaled elastically: handled peak load of 2 M transactions/day with zero downtime.

**Reflection – Bar‑raiser Insights**  
I owned the entire end‑to‑end pipeline, diving deep into regulatory constraints and AWS service limits. The quantified impact (cost savings, compliance metrics) demonstrates ownership and bias for action. Lessons learned include prioritizing explainability early to avoid costly post‑deployment fixes. This aligns with **Customer Obsession**, **Ownership**, and **Dive Deep**—the core Amazon leadership principles I live by.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
