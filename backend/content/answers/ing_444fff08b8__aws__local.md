---
qid: ing_444fff08b8__aws__local
question: 'Explain: Software Engineer, Agent - Travel & Hospitality'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 406
total_tokens: 636
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:00:33-05:00'
sources: []
---

**Situation (S)** – At my previous company we built a travel‑booking bot that handled 30 k daily queries. The bot’s accuracy was only 68 % for flight‑price predictions, causing user frustration and low conversion.

**Task (T)** – As the lead ML engineer, I owned the end‑to‑end model pipeline to lift prediction accuracy above 90 % while keeping latency < 200 ms on a serverless stack.

**Action (A)**  
1. **Data & Feature Engineering** – Collected 2 M booking logs, engineered time‑series features and user intent embeddings using Amazon SageMaker Processing Jobs.  
2. **Model Training** – Trained an XGBoost ensemble on SageMaker with hyperparameter tuning via SageMaker Hyperband (cost ~$3k/month).  
3. **Deployment** – Deployed the model as a real‑time endpoint in SageMaker Hosting Services, auto‑scaling to 50 concurrent requests per second; cold‑start < 120 ms.  
4. **Observability** – Integrated Amazon CloudWatch metrics and SageMaker Model Monitor for drift detection (threshold: MAE > 0.05).  

**Result (R)** – Accuracy jumped from 68 % to 92 %, boosting booking conversions by 18 % (+$2.3M ARR) while keeping compute cost down 25 % through spot‑instance usage and auto‑scaling.  

*Leadership Principles:* **Customer Obsession** – delivered a higher‑quality experience; **Ownership & Dive Deep** – I drove the full ML lifecycle, quantified impact, and iterated on failures (e.g., early drift alerts).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
