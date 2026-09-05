---
qid: ing_ae07927c39__star__local
question: 'Explain: Articles — Transfer Learning in Keras with Computer Vision Models
  - MachineLearningMastery.com'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 334
total_tokens: 579
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:20:12-05:00'
sources: []
---

**Situation:**  
When I joined a startup developing an app for plant disease detection, our dataset only had 3,000 labeled images—far too few to train a deep CNN from scratch without overfitting.

**Task:**  
I needed to build a robust classifier that could achieve at least 85 % accuracy on unseen species while keeping inference time under 200 ms on mobile devices.

**Action:**  
I leveraged the article “Transfer Learning in Keras with Computer Vision Models” as a blueprint. First, I imported a pre‑trained ResNet50 from Keras’ applications and froze its convolutional base to preserve learned low‑level features. Then I added a global average pooling layer followed by two dense layers (512 units ReLU, dropout 0.5) and a final softmax for our 12 disease classes. Using `ImageDataGenerator`, I applied on‑the‑fly augmentation (random flips, rotations up to 20°, zoom 1.2×) to artificially expand the dataset. I compiled with Adam (lr=1e-4), trained for 15 epochs, and employed early stopping based on validation loss.

**Result:**  
The model hit 88 % accuracy on a held‑out test set and ran at ~150 ms per inference on a Pixel 5. I learned that judiciously freezing layers and augmenting data can turn a small dataset into a production‑ready vision system, all following the best practices outlined in the Keras transfer learning guide.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
