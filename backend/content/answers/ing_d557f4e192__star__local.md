---
qid: ing_d557f4e192__star__local
question: 'Explain: Transfer Learning in Keras with Computer Vision Models - MachineLearningMastery.com'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 334
total_tokens: 577
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:35:32-05:00'
sources: []
---

**Situation** – In my last role I was tasked with building an image classification app for a startup that had only 3,000 labeled photos of rare plant species—far too few for training a deep CNN from scratch without overfitting.

**Task** – My goal was to produce a model that could accurately distinguish between 12 classes while keeping inference time below 150 ms on a mobile device.

**Action** – I used Keras’ transfer‑learning workflow:  
1. Loaded the pre‑trained ResNet50 (`include_top=False`, `weights='imagenet'`) and froze its convolutional base.  
2. Added a global average pooling layer, followed by a dense block (128 units, ReLU) and an output softmax.  
3. Compiled with Adam (lr=1e-4), categorical cross‑entropy, and early stopping on validation loss.  
4. Fine‑tuned the top 10 layers of ResNet50 for 5 epochs while monitoring GPU memory usage to keep the model under 60 MB.  
5. Used data augmentation (random flips, rotations, brightness) to simulate a larger dataset.

**Result** – The fine‑tuned model achieved 92% top‑1 accuracy on a held‑out test set and ran at ~120 ms per image on an ARM‑based phone. I learned that judiciously unfreezing only the upper layers balances performance with overfitting risk, and that Keras’ functional API makes swapping backbones trivial for future experiments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
