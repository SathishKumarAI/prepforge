---
qid: ing_1367b018f1__aws__local
question: 'Explain: 14.1.4. Exercises ¶ — 14.1. Image Augmentation \u2014 Dive into
  Deep Learning 1.0.3 documentation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 437
total_tokens: 691
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:09:08-05:00'
sources: []
---

**Situation (S)**  
While building a computer‑vision model for an e‑commerce catalog, I needed to increase the diversity of our training set without collecting more images. The team was stuck because our validation accuracy plateaued at 78 %.  

**Task (T)**  
Implement image augmentation described in the *Dive into Deep Learning* docs (Section 14.1.4) and prove it improves performance while keeping inference latency low.

**Action (A)**  
I scripted a preprocessing pipeline in **SageMaker Processing** that applied the exact transforms listed—random flip, rotation, color jitter, and crop—using the *imgaug* library. The jobs read raw images from an S3 bucket, stored augmented outputs back to another bucket, and updated the training manifest automatically.  
To keep inference fast I kept augmentation off‑line; the model was trained on 1 M augmented samples and deployed via **SageMaker Endpoint** with a *ml.m5.large* instance (cost $0.10/hr).  

**Result (R)**  
Accuracy rose from 78 % to **84 %** (+6 pp) on the test set, while inference latency stayed under 50 ms per image. The pipeline processed 100k images in 12 min, costing <$5. This delivered a measurable win for our customer‑obsessed product—fewer misclassifications and a smoother checkout experience.

> **Leadership Principles**:  
> • *Customer Obsession* – higher accuracy means fewer returns.  
> • *Ownership & Dive Deep* – I owned the pipeline from data ingestion to deployment, debugging each step until metrics improved.  

> **Bar‑raiser takeaways**: deep technical dive into augmentation, quantified impact (6 pp lift), cost‑aware design, and learning loop that validated the approach before rollout.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
