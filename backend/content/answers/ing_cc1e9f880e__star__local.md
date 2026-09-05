---
qid: ing_cc1e9f880e__star__local
question: What Is Transfer Learning? — Transfer Learning in Keras with Computer Vision
  Models - MachineLearningMastery.com
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 309
total_tokens: 556
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:17:08-05:00'
sources: []
---

**Situation**  
Last year I was working on a startup’s facial‑recognition feature for a mobile app. The training data we had—about 3,000 labeled faces—was far too small to train a deep CNN from scratch without overfitting.

**Task**  
I needed to build a robust model that could generalize to new users while keeping the inference latency under 200 ms on a smartphone.

**Action**  
I chose transfer learning with Keras: I loaded a pre‑trained ResNet50 (ImageNet weights), froze all but the last two convolutional blocks, and added a global average pooling layer followed by a dense classifier with softmax. I then fine‑tuned this top part on our dataset using a low learning rate (1e-4) and data augmentation (random flips, rotations). To reduce latency, I pruned the model to 50 % of its original size using TensorFlow Lite’s post‑training quantization.

**Result**  
The final model achieved 92 % top‑1 accuracy on a held‑out test set and ran in ~180 ms per inference. We deployed it within two weeks, cutting user onboarding time by 30%. I learned that selecting the right pre‑trained backbone and carefully controlling which layers to fine‑tune can dramatically accelerate development while preserving performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
