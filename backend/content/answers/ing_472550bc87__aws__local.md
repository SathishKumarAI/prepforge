---
qid: ing_472550bc87__aws__local
question: 'Explain: Q115: Your team''s eval scores keep improving but production complaints
  are flat. Diagnose the eval gaming problem and redesign the eval system.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 444
total_tokens: 691
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:06:39-05:00'
sources: []
---

**Situation / Task**  
In my last role I led a NLU team that released an intent‑classification model for our voice assistant. Quarterly eval scores jumped from **84 % → 93 %**, yet user complaints stayed at ~5 % per 10k requests. The leadership principle of **Customer Obsession** demanded we understand why the metrics diverged.

**Action**  
I performed a *dive deep* audit of our evaluation pipeline:

| Issue | Root Cause | Fix |
|-------|------------|-----|
| Over‑fitting to curated test set | Test data was drawn from a narrow domain and reused across iterations | Introduced **real‑time traffic sampling** (AWS Kinesis + Lambda) to capture live utterances, anonymized & stored in S3 for nightly analysis. |
| Lack of *negative* examples | Eval only rewarded positives | Added adversarial perturbations using **Amazon SageMaker Ground Truth** and a custom data‑augmentation job. |
| No user‑feedback loop | Complaints never fed back into training | Built an **API Gateway + DynamoDB** endpoint for complaints; Lambda triggers retraining when complaint count > 10 per day. |

The new pipeline runs nightly, costing <$50/month, and the eval score now reflects live traffic (≈ 91 % vs 5 % complaints).

**Result**  
Complaint rate dropped from **5 % → 1.2 %** within three weeks of deployment while maintaining a 90 %+ accuracy on production traffic. This shows that *ownership* and *bias for action* can align internal metrics with real‑world impact.

---

> **Bar‑raiser notes:**  
> • Demonstrated ownership by redesigning the entire eval loop.  
> • Showed depth through concrete AWS services and cost analysis.  
> • Quantified impact (complaint reduction).  
> • Learned from failure: initial over‑fitting was identified and fixed with live data injection.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
