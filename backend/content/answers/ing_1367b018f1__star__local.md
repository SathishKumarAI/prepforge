---
qid: ing_1367b018f1__star__local
question: 'Explain: 14.1.4. Exercises ¶ — 14.1. Image Augmentation \u2014 Dive into
  Deep Learning 1.0.3 documentation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 260
output_tokens: 317
total_tokens: 577
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:07:16-05:00'
sources: []
---

**Situation** – While leading a computer‑vision sprint for our retail analytics app, the training set had only 2,500 images of product labels taken under controlled lighting. The test accuracy on new store footage was stuck at 72 %, far below the target of 88 %.

**Task** – I needed to expand and diversify the dataset so the CNN could generalize across varied backgrounds, angles, and illumination without gathering thousands more photos.

**Action** – I scripted a custom augmentation pipeline in PyTorch’s `torchvision.transforms`. First, I applied random horizontal flips (probability 0.5) and rotations up to ±15°. Next, I used color jitter (brightness ±0.2, contrast ±0.3) to mimic lighting changes, followed by a random resized crop that preserved the label bounding box. Finally, I added Gaussian noise and a slight blur to simulate camera shake. The pipeline was integrated into the `DataLoader` with on‑the‑fly augmentation during training, ensuring each epoch saw a fresh mix of views.

**Result** – After one week of training, validation accuracy rose from 72 % to 87 %, and real‑world footage tests reached 89 %. The model’s confusion matrix showed a 35 % reduction in misclassifying similar product types. I learned that carefully tuned augmentation can be as powerful as enlarging the dataset, but it requires balancing realism with computational cost.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
