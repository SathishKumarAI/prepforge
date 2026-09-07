---
qid: ing_4d435f6b32__aws__local
question: 'Explain: Deploy — GitHub - Arize-ai/phoenix: AI Observability & Evaluation
  \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 431
total_tokens: 676
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:19:52-05:00'
sources: []
---

**Situation (S)** – While leading a data‑science squad at my previous firm, we deployed an end‑to‑end ML pipeline on AWS that served real‑time fraud predictions. After launch, latency spiked and model drift caused a 12 % drop in precision.

**Task (T)** – I needed to observe, evaluate, and remediate the models continuously without manual interventions, aligning with *Customer Obsession* (ensuring accurate fraud alerts) and *Ownership* (owning the full ML lifecycle).

**Action (A)** –  
1. **Integrated Arize‑Phoenix** into our CI/CD: built a Docker image from `arize-ai/phoenix`, pushed to ECR, and orchestrated deployment via CodePipeline + ECS Fargate.  
2. Configured Phoenix to pull metrics from CloudWatch Logs (predictions, latency) and S3 (ground truth), using the Arize SDK to push evaluation data to the Arize platform.  
3. Leveraged **Amazon SageMaker Model Monitor** for drift alerts; set thresholds at 0.02 MMD, triggering Lambda to auto‑redeploy a fresh model from the latest training artifact stored in S3.  
4. Optimized cost: used Fargate spot instances (70 % cheaper) and scheduled nightly batch evaluations on Batch, keeping latency <50 ms.

**Result (R)** – Within 48 h of deployment, drift alerts reduced precision loss by **30 %**, overall latency dropped to **35 ms**, and we saved ~$4k/month in compute. The bar‑raiser praised my *Dive Deep* into metric pipelines and the quantitative impact on customer experience.

> *Key AWS services:* CodePipeline, ECS Fargate, S3, SageMaker Model Monitor, CloudWatch, Lambda, Batch.  
> *Trade‑offs considered:* Spot vs On‑Demand for cost; batch vs real‑time evaluation for freshness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
