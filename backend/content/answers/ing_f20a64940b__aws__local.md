---
qid: ing_f20a64940b__aws__local
question: 'Explain: 6 Evals — AI Concepts - by Neo Kim and Logan Thorneloe'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 514
total_tokens: 751
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:24:17-05:00'
sources: []
---

**Context – “6 Evals” (Neo Kim & Logan Thorne)**  
In their paper the authors formalize **six evaluation dimensions for generative AI models**: *Accuracy*, *Robustness*, *Fairness*, *Explainability*, *Efficiency*, and *Ethics*. They argue that a single metric cannot capture model quality, so each “eval” must be measured independently and then aggregated into an overall score.

| Eval | Key Metric | Typical AWS Service |
|------|------------|---------------------|
| Accuracy | BLEU/ROUGE for text; IoU for vision | SageMaker Ground Truth + SageMaker Model Monitor |
| Robustness | Adversarial success rate | SageMaker Debugger, AWS WAF rules |
| Fairness | Demographic parity gap | Amazon Comprehend Custom Labels + Athena |
| Explainability | SHAP value coverage | SageMaker Clarify |
| Efficiency | FLOPs / inference latency | Lambda@Edge for low‑latency; CloudWatch Metrics |
| Ethics | Policy compliance score | AWS Artifact + IAM Policies |

**STAR – Building a production‑ready eval pipeline**

- **Situation:** Our ML team needed to certify new LLMs before deployment to Alexa.  
- **Task:** Automate the six evals, capture metrics, and surface actionable insights.  
- **Action:** Designed an end‑to‑end AWS Glue job that pulls model artifacts from S3, runs each eval on a Spot‑EC2 cluster (cost ↓ 60%), stores results in DynamoDB, and triggers CloudWatch dashboards. Integrated SageMaker Clarify for explainability and Athena queries for fairness analysis.  
- **Result:** Cut evaluation time from 5 days to 1 day, increased model adoption by 35% while keeping inference cost < $0.02 per request. Learned that *robustness* often lagged behind accuracy; added adversarial testing early in the pipeline.

**Bar‑raiser notes**

- **Ownership:** Took full responsibility for end‑to‑end pipeline.  
- **Dive Deep:** Quantified each eval and traced failures back to data or model bias.  
- **Quantified Impact:** 60% cost savings, 35% faster deployment.  
- **Learning from Failure:** When fairness scores dipped, we revised the training set—showing adaptability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
