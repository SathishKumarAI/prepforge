---
qid: ing_150ab9b18d__star__local
question: How to Use Transfer Learning? — A Gentle Introduction to Transfer Learning
  for Deep Learning - MachineLearningMastery.com
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 358
total_tokens: 605
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:10:23-05:00'
sources: []
---

**Situation** – In early 2023 I was leading a computer‑vision sprint for a startup that needed to detect rare plant diseases from leaf images. Our dataset had only 1,200 labeled samples, far too few for training a ResNet from scratch without overfitting.

**Task** – My goal was to build a model that achieved ≥90 % top‑5 accuracy on a held‑out test set within two weeks, while keeping inference latency under 50 ms on a mobile device.

**Action** – I chose a pre‑trained ImageNet ResNet‑50 as the backbone and froze its first 30 layers. Using TensorFlow 2.x, I fine‑tuned the remaining layers with a reduced learning rate (1e-4) and added a global average pooling + dense layer for our 12 disease classes. To mitigate overfitting, I applied MixUp augmentation and early stopping based on validation loss. I also experimented with two transfer strategies: feature extraction only vs. full fine‑tuning; the latter improved accuracy by ~2 % but increased training time by ~20 %.

**Result** – The final model reached 92.3 % top‑5 accuracy, ran at 42 ms on a Snapdragon 865, and reduced our annotation budget by 75 %. I learned that judiciously freezing layers and using data augmentation can turn a small dataset into a production‑ready model with minimal engineering effort.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
