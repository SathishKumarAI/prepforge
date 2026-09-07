---
qid: ing_1f76c289a5__aws__local
question: 'Explain: Examples of Using Pre-Trained Models — Transfer Learning in Keras
  with Computer Vision Models - MachineLearningMastery.com'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 413
total_tokens: 658
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:38:13-05:00'
sources: []
---

**Situation & Task**  
At a mid‑size e‑commerce firm I was tasked to improve product‑search accuracy by 20 % within three months. The team had no in‑house computer‑vision expertise and limited GPU budget.

**Action**  
I led a **Transfer Learning** effort using Keras’ pre‑trained ResNet‑50/ MobileNetV2 models from ImageNet.  
1. *Data prep*: Curated 15 k labeled images, split 80/10/10.  
2. *Model fine‑tuning*: Frozen top 70 layers, retrained last 3 with a learning rate schedule (Adam).  
3. *Deployment*: Wrapped the model in an AWS Lambda@Edge function behind CloudFront for real‑time inference; used Amazon S3 to store feature vectors and DynamoDB for quick lookup.  
4. *Monitoring*: Integrated CloudWatch metrics; set up alerts on prediction latency > 200 ms.

**Result**  
- Accuracy jumped from **68 % → 89 %** (precision@1).  
- Latency stayed <150 ms, meeting SLA.  
- Cost per inference fell by **$0.02** thanks to serverless architecture, saving ~30 % annually versus a dedicated GPU cluster.

**Reflection**  
I *owned* the entire pipeline, ensuring cross‑team alignment (Engineering, Data, Ops). By diving deep into Keras internals and AWS limits, I avoided over‑engineering. The failure point was initial overfitting; adding dropout and early stopping corrected it—an important learning loop for future projects.

**Leadership Principles Highlighted**  
- **Customer Obsession**: Delivering faster, more accurate search improves user experience.  
- **Ownership & Bias for Action**: Took full responsibility and executed the solution within the deadline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
