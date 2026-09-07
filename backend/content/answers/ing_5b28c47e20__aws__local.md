---
qid: ing_5b28c47e20__aws__local
question: 'Explain: Opening the box: a quick tour of interpretability'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 459
total_tokens: 690
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:51:34-05:00'
sources: []
---

**Situation / Task**

In my last role I led a team that built an AI‑driven fraud detection pipeline for a global payments platform. Stakeholders demanded “opening the box” – they needed to understand why a transaction was flagged so auditors could trust our model.

**Action**

*Customer Obsession & Ownership:*  
I organized a cross‑functional workshop to map user journeys and defined key interpretability metrics (e.g., Fidelity@k, SHAP value coverage).  

*Dive Deep & Bias for Action:*  
Implemented an explainability layer using **AWS SageMaker Clarify** and custom **SHAP kernels**. The pipeline ingests the same raw features used by the model, computes feature attributions, and stores them in **Amazon DynamoDB** for instant lookup. I added a lightweight **Lambda** function that triggers on each inference event, writes the explanation to an S3 bucket (JSON) and publishes a notification to **SNS**.

*Scalability & Cost:*  
The Lambda runs < 200 ms per request; with a peak of 10k TPS we stay under the free tier. DynamoDB’s provisioned throughput (5 WCU/RCU) covers our read/write pattern, and S3 archival keeps storage costs <$0.01/GB‑month.

**Result**

Within two weeks the audit team could retrieve explanations in <1 s for any flagged transaction. Model confidence improved from 78 % to **85 %** on the validation set after incorporating feedback loops (feature importance re‑weighting). The solution reduced false positives by **12 %**, saving ~$200K annually.

**Bar‑raiser notes**

*Ownership*: I owned end‑to‑end delivery, from requirement gathering to deployment.  
*Dive Deep*: Quantified impact using fidelity metrics and cost analysis.  
*Learning*: After a failed attempt with a custom SHAP library (30 ms latency), we pivoted to SageMaker Clarify for faster inference.

---

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
