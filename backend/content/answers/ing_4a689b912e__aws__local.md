---
qid: ing_4a689b912e__aws__local
question: 'Explain: AI Governance and Compliance'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 225
output_tokens: 442
total_tokens: 667
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:13:31-05:00'
sources: []
---

**Situation & Task**  
At my last role, the Data‑Science team was rolling out a predictive model for credit risk that fed into a real‑time API used by 200k daily users. Regulators demanded that we demonstrate *AI Governance*—audit trails, bias checks, and model drift monitoring—without breaking SLA of <50 ms latency.

**Action**  
I led the **“Governance Sprint”**:  

| Step | AWS Service | Reasoning |
|------|-------------|-----------|
| 1. Model lineage & metadata | *AWS SageMaker Model Registry* + *AWS Glue Data Catalog* | Guarantees immutable versioning and auditability. |
| 2. Bias & fairness testing | *Amazon Comprehend* for text, *SageMaker Clarify* for tabular data | Provides bias scores (e.g., demographic parity <5 %) before deployment. |
| 3. Drift detection | *AWS CloudWatch Metrics* + *Amazon Lookout for Metrics* | Triggers alerts when feature distribution changes >10 %. |
| 4. Secure inference | *Amazon API Gateway*, *Lambda@Edge* with *KMS* | Keeps latency <45 ms while encrypting payloads. |

I also built a **continuous‑validation pipeline** that ran nightly in an isolated VPC, costing <$200/month and adding zero operational overhead.

**Result**  
- Compliance audit passed on first attempt (0 violations).  
- Model drift alerts reduced manual review time by 75 %.  
- Latency stayed within SLA; user churn dropped from 4.2 % to 1.8 % in three months.

**Reflection**  
I learned that *Ownership* means anticipating regulator needs early, and *Dive Deep* requires building lightweight, reusable audit primitives. The bar‑raiser will notice my data‑driven impact, cross‑team collaboration, and the trade‑off between cost (AWS services) and compliance robustness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
