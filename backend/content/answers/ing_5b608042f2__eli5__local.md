---
qid: ing_5b608042f2__eli5__local
question: 'Explain: Convolution in Computer Vision — How Do Convolutional Layers Work
  in Deep Learning Neural Networks? - MachineLearningMastery.com'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 190
total_tokens: 364
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:00:56-05:00'
sources: []
---

Imagine a window that slides over a big black‑and‑white photo. Inside the window is a small checkerboard of numbers—this is the *kernel* (or filter). As the window moves one pixel at a time, it multiplies each number in the kernel with the corresponding pixel value underneath and adds them up; the result becomes a single new pixel in a fresh image called the *feature map*. Repeating this for every possible position builds a whole new picture that highlights certain patterns—edges, corners, or textures—depending on what the kernel was trained to detect.

In a convolutional neural network (CNN), many such kernels run in parallel. Each learns a different pattern from data during training, so the layers gradually transform raw pixels into increasingly abstract features, enabling the network to recognize objects and scenes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
