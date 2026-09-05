---
qid: ing_3823ce5645__star__local
question: 'Explain: Summary — Transfer Learning in Keras with Computer Vision Models
  - MachineLearningMastery.com'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 326
total_tokens: 571
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:20:32-05:00'
sources: []
---

**Situation:**  
When I joined a startup developing an on‑device plant disease detector, the training data set was only ~3 k labeled images—far too small for a deep CNN from scratch. The product needed <1 s inference and >85 % accuracy.

**Task:**  
I had to build a high‑accuracy model quickly while keeping the footprint under 10 MB, so I decided to use transfer learning with Keras.

**Action:**  
I imported ResNet50 pre‑trained on ImageNet, froze all convolutional layers, and added a new GlobalAveragePooling2D followed by two dense layers (512 → 128) with ReLU and dropout. The final layer used softmax for the 12 disease classes. I compiled the model with Adam (lr=1e-4), categorical cross‑entropy, and trained only the top layers for 15 epochs on my dataset, using data augmentation (random flips, rotations, zoom). After a quick fine‑tune of the last two ResNet blocks (learning rate 5e-5) I reduced overfitting.

**Result:**  
Accuracy rose from 68 % (baseline CNN) to 91 % after transfer learning, and the model size dropped to 8.3 MB. Inference on a Raspberry Pi 4 took ~0.9 s per image. This experience taught me how to balance pre‑trained knowledge with task‑specific fine‑tuning while respecting device constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
