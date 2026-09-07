---
qid: ing_0794d7620c__aws__local
question: 'Explain: Posts — Transfer Learning in Keras with Computer Vision Models
  - MachineLearningMastery.com'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 477
total_tokens: 716
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:43:03-05:00'
sources: []
---

**Situation & Task**

I was leading a proof‑of‑concept for an e‑commerce recommendation engine that needed to classify user‑generated images (product photos, lifestyle shots) into 12 categories. The dataset had only ~3 k labeled examples per class, so training a deep CNN from scratch would overfit and cost weeks of GPU time.

**Action**

I adopted **Transfer Learning in Keras** with pre‑trained ImageNet models (ResNet50, InceptionV3).  
1. *Feature extraction*: froze all convolutional layers, added a global average pooling + two dense layers (512 → 12) and trained only the top 20 % of parameters.  
2. *Fine‑tuning*: unwrapped the last block, re‑initialized with a low learning rate (1e‑4), and retrained for 5 epochs.  
3. Leveraged **AWS SageMaker** for distributed training on two `ml.p3dn.24xlarge` instances; used Keras callbacks to checkpoint every epoch.

**Result**

Accuracy jumped from 63 % (baseline CNN) to **82 %** top‑1, and inference latency dropped below 30 ms per image on a single `ml.c5.xlarge`. Cost was < $0.12/image compared with $2.35 if we had trained a ResNet50 from scratch for 200 epochs.

**Amazon Leadership Principles**

- **Ownership** – I scoped the entire ML pipeline, from data prep to deployment, and drove it to production on SageMaker.
- **Dive Deep** – I dissected layer‑wise learning rates, monitored GPU utilization, and tuned batch size to balance speed vs. overfitting.
- **Deliver Results** – Quantified improvement (19 % lift) and cost reduction (≈ 94 %) in a 2‑week sprint.

**Bar‑raiser Takeaway**

- Showed *ownership* by leading the full cycle.  
- Demonstrated *depth* with layer‑wise fine‑tuning and cloud cost analysis.  
- Quantified impact and reflected on the trade‑off between pre‑training vs. training-from-scratch, learning that early stopping + selective fine‑tuning yields better ROI.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
