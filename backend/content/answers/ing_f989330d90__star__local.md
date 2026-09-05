---
qid: ing_f989330d90__star__local
question: 'Explain: Overview — Transfer Learning in Keras with Computer Vision Models
  - MachineLearningMastery.com'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 299
total_tokens: 544
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:47:29-05:00'
sources: []
---

**Situation**  
At my previous company we were building a plant‑disease detection app, but our dataset had only ~3 k images and the model kept overfitting on the validation set.

**Task**  
I needed to produce a robust classifier that could generalize to unseen leaf varieties while keeping training time under two hours on a single GPU.

**Action**  
I chose ResNet50 as a base in Keras, loading ImageNet weights with `include_top=False`. After freezing all convolutional layers, I added a global average pooling layer followed by a dense block (Dropout 0.5 → 256 units ReLU → output softmax). I compiled with Adam (lr=1e-4) and used `ImageDataGenerator` to augment crops, flips, and brightness shifts. During fine‑tuning I unfroze the top three residual blocks and lowered the learning rate to 1e-5, training for 15 epochs with early stopping on validation loss.

**Result**  
Accuracy jumped from 78 % to 92 % on a held‑out test set, and inference time stayed at ~25 ms per image. I learned that careful layer freezing plus targeted fine‑tuning yields high performance without needing massive data or compute.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
