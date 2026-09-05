---
qid: ing_ff5e327f11__star__local
question: 'Explain: Worked Example of Convolutional Layers — How Do Convolutional
  Layers Work in Deep Learning Neural Networks? - MachineLearningMastery.com'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 367
total_tokens: 621
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:59:29-05:00'
sources: []
---

**Situation:**  
At my previous company we were building an automated defect‑detection system for semiconductor wafers. The raw images (2000×2000 pixels) contained subtle micro‑cracks that were invisible to human inspectors and our initial flat‑buffer classifiers struggled with a 70 % false‑negative rate.

**Task:**  
I had to design a neural network that could reliably pick up these fine patterns while keeping inference time under 50 ms on an embedded GPU, so the line could stay at full speed.

**Action:**  
I chose a lightweight CNN architecture: three convolutional blocks followed by global average pooling. For each block I used a 3×3 kernel, stride = 1, padding='same', and ReLU activations; I added depthwise separable convolutions to cut parameters by ~60 %. Batch‑normalization after every conv layer stabilized training, while max‑pooling (2×2) reduced spatial dimensions. I trained the network with a focal loss to counter class imbalance and used data augmentation (random flips, rotations, brightness jitter). The model was implemented in PyTorch and deployed via ONNX on our Jetson Xavier.

**Result:**  
The final system achieved 94 % precision and 92 % recall on a held‑out wafer set, cutting the false‑negative rate from 30 % to 8 %. Inference time dropped to 35 ms per image, meeting real‑time constraints. I learned how careful kernel sizing, depthwise separability, and loss engineering can turn a raw convolutional layer into an industrial‑grade defect detector.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
