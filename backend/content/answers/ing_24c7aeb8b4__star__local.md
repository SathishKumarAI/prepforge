---
qid: ing_24c7aeb8b4__star__local
question: 'Explain: Using Parse Models on Different Platforms'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 410
total_tokens: 644
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:42:42-05:00'
sources: []
---

**Situation:**  
When my team was preparing the next release of our cross‑platform mobile app, we had a trained image‑classification model that performed well in Python using PyTorch. However, our Android and iOS apps required a lightweight inference engine, and we also wanted to support a web dashboard for real‑time analytics.

**Task:**  
Convert the single PyTorch model into formats that could run efficiently on Android (TensorFlow Lite), iOS (Core ML), and the browser (ONNX.js), while keeping accuracy within 2% of the original and inference latency under 50 ms on a mid‑range phone.

**Action:**  
1. Exported the PyTorch checkpoint to ONNX, then used `tf.lite.TFLiteConverter` for Android and Apple’s `coremltools.converters.tensorflow.convert` for iOS.  
2. Performed quantization (dynamic 8‑bit) during conversion to reduce model size from 28 MB to 4 MB.  
3. Benchmarked each platform on identical test images, tuning batch sizes and thread counts; added a fallback path in the Android app that reverts to CPU if GPU acceleration is unavailable.  
4. Integrated a shared C++ inference wrapper for the web dashboard using ONNX.js, ensuring consistent preprocessing pipelines across all platforms.

**Result:**  
The final models ran under 30 ms on average across devices, with accuracy loss of only 1.3%. Deployment time was cut by 35%, and we gained confidence that future model updates could be rolled out simultaneously to mobile and web without re‑engineering each platform. This experience taught me the importance of a unified conversion workflow and early performance testing when porting ML models across heterogeneous environments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
