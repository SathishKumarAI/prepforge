---
qid: ing_c1e63e6f2d__star__local
question: 'Explain: Example of 2D Convolutional Layer — How Do Convolutional Layers
  Work in Deep Learning Neural Networks? - MachineLearningMastery.com'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 256
output_tokens: 348
total_tokens: 604
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:57:36-05:00'
sources: []
---

**Situation** – At my previous company I was tasked with building a real‑time image classification pipeline for a mobile app that had to detect road signs in urban traffic. The model needed to run on a Snapdragon chip with less than 50 ms latency per frame.

**Task** – My goal was to design a lightweight CNN that could extract spatial features from the input images while keeping memory usage below 8 MB and inference time under 40 ms.

**Action** – I started by implementing a single 2D convolutional layer with a 3×3 kernel, stride = 1, and padding “same” to preserve spatial dimensions. Using TensorFlow‑Lite, I set the filter count to 32 and applied ReLU activation. The input was a 224×224 RGB image; after convolution we obtained a 224×224×32 feature map. I then added depthwise separable convolutions to reduce computation, followed by max‑pooling (2×2) to downsample before feeding the flattened vector into a dense classifier. I profiled GPU usage on an Android emulator, iterating kernel sizes and batch normalization placement until latency hit 35 ms.

**Result** – The final model achieved 92 % top‑1 accuracy on our test set, ran at 34 ms per frame, and used only 6.5 MB of RAM. I learned that careful kernel sizing and depthwise separable layers can dramatically reduce cost while preserving representational power.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
