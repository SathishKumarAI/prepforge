---
qid: ing_d8ba943b79__faang__local
question: 'Explain: Core Process — Mobile System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 522
total_tokens: 754
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:03:25-05:00'
sources: []
---

**Clarify**  
We’re asked to outline the *core process* for designing a mobile ML system—i.e., how you’d go from problem statement to an end‑to‑end on‑device solution. Key assumptions:  
1. User data is sensitive → privacy matters.  
2. Latency ≤ 200 ms and battery < 5 % per inference.  
3. Model size < 50 MB for App Store compliance.

**Approach**  
1. **Define objective & constraints** (accuracy, latency, power).  
2. **Data pipeline**: collection → labeling → augmentation → privacy‑preserving split.  
3. **Model selection**: start with a lightweight architecture (e.g., MobileNetV2) and quantify FLOPs.  
4. **Training strategy**: transfer learning + knowledge distillation; use quantization‑aware training.  
5. **Edge deployment**: convert to TensorFlow Lite/ONNX, apply post‑training quantization, bundle with the app.  
6. **Runtime optimization**: leverage NNAPI / CoreML, schedule inference on idle CPU/GPU, batch inputs when possible.  
7. **Monitoring & OTA updates**: collect anonymized usage stats → retrain → push new model.

**Depth**  
- **Model size vs accuracy trade‑off**: 1‑bit quantization can drop ~5 % top‑1 accuracy but halves memory and energy.  
- **Latency budget**: using TensorFlow Lite’s delegate for GPU reduces inference time from 120 ms (CPU) to <50 ms on modern phones.  
- **Privacy**: differential privacy during training, local data storage, no raw image upload.

**Edge Cases**  
- Devices lacking NNAPI → fallback to CPU with reduced batch size.  
- Extremely low‑battery state → skip inference or use cached predictions.  
- Model drift due to concept shift → trigger re‑training cycle after a threshold of misclassifications.

**Optimize & Communicate**  
Explain that we iteratively profile on target devices, adjust quantization bits, and monitor energy per inference via Android BatteryStats. Summarize the trade‑offs in a decision matrix and present it to stakeholders: “We chose MobileNetV2 + 8‑bit quantization because it meets latency & battery constraints while keeping accuracy within 2 % of the baseline.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
