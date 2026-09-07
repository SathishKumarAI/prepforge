---
qid: ing_d557f4e192__aws__local
question: 'Explain: Transfer Learning in Keras with Computer Vision Models - MachineLearningMastery.com'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 430
total_tokens: 667
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:22:04-05:00'
sources: []
---

**Answer – Amazon Way**

> **Leadership Principles:** *Customer Obsession* (the model must solve a real user problem) and *Ownership* (own the entire ML pipeline).  

**Situation & Task**  
I was tasked to improve a mobile‑app image classifier that lagged behind competitors in accuracy. The product team demanded a 5 % lift within two sprints.

**Action**  
1. **Dive Deep into Data** – I profiled the dataset (≈12k images, 10 classes) and discovered severe class imbalance and low resolution for rare classes.  
2. **Transfer Learning with Keras** – I froze a pre‑trained ResNet50 backbone (`imagenet`) and added a custom `GlobalAveragePooling` + dense head tuned to our 10‑class problem.  
3. **Fine‑tuning & Data Augmentation** – Unfroze the top 4 blocks, used Adam with `1e-5`, applied random flips, rotations, and MixUp.  
4. **AWS Services** – Trained on SageMaker Notebook (p3.2xg) to leverage GPU; used S3 for data storage, ECR to version Docker images, and CloudWatch for metric logging.  
5. **Evaluation & Deployment** – Achieved 82 % top‑1 accuracy vs baseline 77 %. Deployed via SageMaker Endpoint with autoscaling (min 2, max 10 instances). Cost ≈ $0.45/hour; latency < 200 ms.

**Result**  
- Accuracy ↑ 5 % in 14 days → directly improved user engagement by 12 % (app usage metrics).  
- Reduced training time from 48 h to 4 h, saving ~$300/month.  

**Bar‑raiser notes** – I owned the entire stack, performed deep diagnostics on data & model, quantified impact with real business metrics, and iterated quickly after a failed initial fine‑tune (learning: keep early layers frozen longer).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
