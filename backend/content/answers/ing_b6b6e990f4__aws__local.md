---
qid: ing_b6b6e990f4__aws__local
question: 'Explain: rely heavily on pattern recognition and intuition'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 385
total_tokens: 614
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:17:06-05:00'
sources: []
---

**Customer Obsession & Ownership**

*Situation:* In my last role I was tasked with improving fraud detection for a fintech app that processed ~10 M transactions/month. The existing rule‑engine missed 12% of fraudulent activities while flagging 8% of legitimate users.

*Task:* Build an ML model that leverages pattern recognition and domain intuition to reduce false positives by at least 30% without increasing latency.

*Action:*  
1. **Dive Deep** – I extracted 500 k transaction features, performed exploratory analysis in SageMaker Studio, and discovered a strong temporal‑pattern signal (time‑of‑day + device‑type).  
2. Built an XGBoost pipeline on SageMaker Training Jobs, adding engineered “intuition” features (e.g., “transaction velocity per user”).  
3. Deployed the model with **SageMaker Endpoint** behind an API Gateway, auto‑scaling to 200 RPS; used **Lambda@Edge** for edge inference to keep latency < 120 ms.  
4. Implemented CI/CD via CodePipeline and automated A/B testing in CloudWatch.

*Result:*  
- False positives dropped from 8% to 5.2% (≈35% improvement).  
- Fraud detection rate increased by 9%.  
- Operational cost decreased by 22% due to efficient autoscaling.

**Learning:** The intuition‑driven features were the key differentiator; without them, the model plateaued at 6% FP. This experience reinforced that pattern recognition is powerful only when combined with domain insight and rigorous testing—exactly what Amazon expects from a bar‑raiser.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
