---
qid: ing_9111fc510e__star__local
question: 'Explain: Multiple Filters — How Do Convolutional Layers Work in Deep Learning
  Neural Networks? - MachineLearningMastery.com'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 340
total_tokens: 589
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:23:01-05:00'
sources: []
---

**Situation:**  
In my senior thesis I built a CNN to classify plant diseases from leaf images for an agricultural tech startup. The dataset had over 10,000 photos but many were noisy and varied in lighting.

**Task:**  
I needed to design the convolutional part of the network so it could learn robust features—color gradients, edges, textures—across all classes while keeping training time reasonable.

**Action:**  
I started with a stack of three convolutional blocks. Each block used *multiple filters* (32, 64, and 128 kernels) of size 3×3. The first layer’s 32 filters captured low‑level edges; the second layer’s 64 filters combined those edges into motifs like veins or spots; the third layer’s 128 filters detected higher‑order patterns such as disease blotches. I applied *stride=1* and *padding='same'* to preserve spatial resolution, then added a ReLU activation after each conv operation. Between blocks I inserted max‑pooling (2×2) to reduce dimensionality and guard against overfitting. Finally, I flattened the feature maps and fed them into two fully connected layers before the softmax output.

**Result:**  
The model achieved 92 % top‑1 accuracy on a held‑out test set—up from 78 % with a single‑filter baseline—and converged in under 15 epochs. I learned that carefully layering multiple filters lets the network build hierarchical representations, dramatically improving performance without excessive computational cost.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
