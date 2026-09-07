---
qid: ing_3944ed58b0__aws__local
question: 'Explain: ML & Deep Learning Foundations - Interview Questions'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 473
total_tokens: 702
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:34:28-05:00'
sources: []
---

**Situation:**  
I led a cross‑functional team at my previous company to build an image‑classification model that would power our product recommendation engine. The goal was to reduce the manual labeling cost by 70 % while keeping accuracy above 92 %.

**Task:**  
Design and implement the ML pipeline, choose appropriate deep‑learning frameworks, and deploy it on AWS so it could scale to millions of images per day.

**Action (Dive Deep + Invent & Simplify):**  
1. **Data preparation** – Used Amazon SageMaker Ground Truth with custom labeling jobs; added active learning loops that reduced annotation volume by 60 % before training.  
2. **Modeling** – Trained a ResNet‑50 fine‑tuned on our domain data using SageMaker Experiments, tracking hyperparameters in SageMaker Studio. Leveraged transfer learning to cut training time from 48 h (custom GPU cluster) to 6 h on an `ml.p3dn.24xlarge` instance.  
3. **Deployment** – Deployed the model as a real‑time inference endpoint (`ml.m5.xlarge`) behind API Gateway, auto‑scaling based on CloudWatch metrics. Added a batch transform job on Spot instances for nightly re‑training, saving ~30 % in compute cost.  
4. **Monitoring & Feedback** – Integrated SageMaker Model Monitor to detect drift; used Amazon CloudWatch dashboards for latency (<50 ms) and error rates.

**Result:**  
- Accuracy reached 94 %, surpassing the target.  
- Manual labeling cost dropped from $120K/month to $36K/month (70 % reduction).  
- Inference latency stayed below 45 ms at peak load of 2M requests/day, with 99.9 % availability.

**Learnings:**  
Took full ownership of the end‑to‑end pipeline, iterated quickly using SageMaker’s experiment tracking, and validated assumptions through A/B tests before production rollout. This approach exemplifies **Customer Obsession** (delivering a better recommendation experience) and **Ownership** (owning metrics, cost, and reliability).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
