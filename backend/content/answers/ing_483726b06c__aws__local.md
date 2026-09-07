---
qid: ing_483726b06c__aws__local
question: 'Explain: Papers — Transfer Learning in Keras with Computer Vision Models
  - MachineLearningMastery.com'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 391
total_tokens: 630
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:08:49-05:00'
sources: []
---

**Situation & Task (Customer Obsession / Ownership)**  
I was tasked with reducing the time our data‑science team spent training new computer‑vision models from weeks to days while keeping inference latency under 200 ms for a mobile app.

**Action (Dive Deep / Bias for Action)**  
1. **Requirement clarification:** Models needed to be fine‑tuned on <10 k labeled images, with ≥95 % accuracy.  
2. **Design & AWS services:**  
   * Use **SageMaker JumpStart** to pull pre‑trained ImageNet models (ResNet50, EfficientNet).  
   * Leverage **transfer learning**: freeze all but the last 3 layers and train on our dataset.  
   * Deploy with **SageMaker Endpoint** behind a **CloudFront CDN** for global low‑latency inference.  
   * Automate training via **SageMaker Pipelines**; log metrics to **CloudWatch** and model artifacts to **S3**.  
3. **Scalability & Cost:** Spot instances (p3.xlarge) reduce training cost by 70 %. Multi‑node hyper‑parameter tuning cuts epochs from 30 to 5.

**Result (Deliver Results)**  
- Training time dropped from 7 days → 6 hours (≈90 % reduction).  
- Inference latency: 180 ms average, meeting mobile requirement.  
- Accuracy improved to 97.2 %.  

**Bar‑raiser takeaways:** I owned the end‑to‑end pipeline, dived deep into transfer learning mechanics, quantified impact with clear metrics, and iterated quickly after a failed first run that mis‑configured layer freezing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
