---
qid: ing_f0fc1ddb9a__star__local
question: Your model file is 800MB. How does it get onto users' devices?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 378
total_tokens: 620
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:30:09-05:00'
sources: []
---

**Situation**  
At my previous company we built a real‑time object detection app for retail stores. The base TensorFlow model was 800 MB, far too big to ship in an iOS/Android bundle without killing download speed and storage usage.

**Task**  
I had to reduce the model size so it could be packaged with the app (target <30 MB) while keeping accuracy within 2% of the original and ensuring inference latency stayed under 200 ms on a mid‑tier phone.

**Action**  
First, I applied post‑training quantization to 8‑bit weights and activations, cutting size by ~4×. Then I used TensorFlow Lite’s built‑in pruning API, training for 10 epochs with a sparsity schedule that pruned 70% of parameters; the sparse model still achieved 93% mAP. After pruning, I leveraged “dynamic range quantization” to compress further, and finally bundled the .tflite file into the app package. For devices that couldn’t run the full model, we provided a lightweight fallback model (≈5 MB) that performed only the most common classes.

**Result**  
The final deployable bundle was 28 MB, download time dropped from ~3 min to under 30 seconds on average networks, and real‑world latency stayed at ~180 ms. Accuracy loss was just 1.2% mAP, keeping user experience intact. I learned that combining quantization, pruning, and platform‑specific tooling can make even large models mobile‑friendly without sacrificing performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
