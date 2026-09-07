---
qid: ing_c785ae9051__aws__local
question: 'Explain: Our policy for using AI in our application process'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 542
total_tokens: 773
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:53:20-05:00'
sources: []
---

**Situation & Goal**  
In my last role I led the design of an AI‑powered applicant screening tool for a large financial institution. The policy we drafted had to balance *Customer Obsession* (fair, transparent hiring) with *Ownership* (compliance and risk mitigation).

**Task**  
Create a governance framework that defines when, how, and by whom machine‑learning models may be used in the application process.

**Action**  

| Step | AWS Service | Why |
|------|-------------|-----|
| 1. Data collection & labeling | **Amazon SageMaker Ground Truth** | Ensures high‑quality, bias‑checked training data. |
| 2. Model training & validation | **SageMaker Training** + **Model Monitor** | Continuous drift detection; automatic retraining triggers. |
| 3. Policy enforcement | **AWS Step Functions** orchestrating *Lambda* checks that read the model’s risk score and compare it against a pre‑approved threshold set in **Systems Manager Parameter Store**. |
| 4. Audit & explainability | **Amazon SageMaker Explainability** + **CloudTrail** logs | Generates per‑candidate explanations (feature importance) and immutable audit trails. |

The policy mandates:

1. **Bias review** before each model release – measured by a *fairness delta* < 2 %.  
2. **Human‑in‑the‑loop** override for scores > 0.8; 99.5 % of overrides are logged.  
3. Quarterly *model health reports* to leadership (accuracy ≥ 92 %, latency ≤ 200 ms).  
4. Cost cap: < $1,000/month on SageMaker usage by using spot instances and auto‑scaling.

**Result**  
After deployment, hiring time dropped 35 % (from 12 days to 7 days) while maintaining a candidate satisfaction score of 4.8/5. The bias delta remained below 1.3 % across all demographic groups.  

**Bar‑raiser takeaways**  
- Demonstrated **Ownership**: I owned the entire lifecycle, from data prep to policy enforcement.  
- Showed **Dive Deep**: quantified fairness metrics and latency/cost trade‑offs.  
- Highlighted learning: initial model had a 3 % bias spike; we pivoted to an ensemble approach, improving equity by 1.2 %.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
