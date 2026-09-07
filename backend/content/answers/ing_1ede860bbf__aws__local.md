---
qid: ing_1ede860bbf__aws__local
question: About 10% of your training labels are wrong. What happens, and what do you
  do about it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 393
total_tokens: 634
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:37:11-05:00'
sources: []
---

**Situation / Task**  
In my last role I built a fraud‑detection model for a payment gateway. During a quarterly audit we discovered that ~10 % of the training labels were incorrect—half of the “fraud” cases had been mis‑tagged as legitimate. The risk was twofold: inflated recall and degraded customer trust.

**Action**  
*Ownership & Dive Deep*: I immediately convened the data‑engineering, QA, and product teams to audit the labeling pipeline. Using **AWS Glue** we re‑run a data quality job that flags inconsistencies against a gold‑standard rule set.  

I then introduced an **active learning loop** in **Amazon SageMaker**:  
1. Retrain the model on the cleaned subset (≈90 % of data).  
2. Run it on the flagged 10 % and surface high‑confidence predictions to human reviewers via **SageMaker Ground Truth**.  
3. Iterate until the labeling error rate drops below 0.5 %.  

*Bias for Action & Deliver Results*: Within two weeks we reduced false positives by **32 %**, cut the fraud‑review cost per transaction from $4.20 to $2.90, and increased model precision from 78 % to 88 %.

**Result**  
The improved labeling pipeline now operates at **99.5 % accuracy** and is fully automated with CloudWatch alerts for drift. I documented lessons learned in a post‑mortem, which became the basis for our organization’s data‑quality playbook—demonstrating clear ownership, measurable impact, and continuous learning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
