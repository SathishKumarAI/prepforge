---
qid: ing_c0c05f74e6__star__local
question: When to Use Transfer Learning? — A Gentle Introduction to Transfer Learning
  for Deep Learning - MachineLearningMastery.com
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 289
total_tokens: 536
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:55:50-05:00'
sources: []
---

**Situation:** In my last role, we were building a medical imaging model to detect early-stage lung cancer from CT scans. Our internal dataset had only 2,000 labeled images, but the baseline accuracy hovered around 70 %, far below the clinical threshold of 90 %.

**Task:** I needed to boost performance without collecting thousands more scans, and we had to keep inference latency low for real‑time triage in emergency rooms.

**Action:** I applied transfer learning by taking a ResNet‑50 pre‑trained on ImageNet, then fine‑tuned its top layers on our CT dataset. To address the domain shift, I first froze all convolutional blocks except the last two, added a small dropout layer (0.3) to mitigate overfitting, and trained with a cyclical learning rate schedule. I also used MixUp augmentation to increase robustness. We monitored validation AUROC every epoch and stopped training once it plateaued at 92 %.

**Result:** Accuracy jumped from 70 % to 93 % (AUROC 0.96), meeting the clinical target while keeping inference under 120 ms per scan. I learned that judiciously freezing layers and augmenting with domain‑specific tricks can unlock powerful transfer learning even when source and target domains differ significantly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
