---
qid: ing_f0f639ea35__faang__local
question: 'Explain: Junior to mid-level engineers — Mobile System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 484
total_tokens: 719
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:59:44-05:00'
sources: []
---

**Clarify**  
The interviewer wants to hear how a junior‑to‑mid engineer would architect a mobile system that supports ML inference (e.g., image classification) on-device. Confirm: is it purely on‑device or edge‑cloud hybrid? What latency/throughput targets? Battery budget? Supported OSes?

**Approach**  
1. **Model selection & quantization** – pick a lightweight architecture (MobileNetV2, EfficientNet‑Lite). Quantize to 8‑bit INT8 or use TensorFlow Lite’s dynamic range.  
2. **Framework choice** – use platform‑native ML SDKs (TensorFlow Lite for Android/iOS) to avoid heavy runtimes.  
3. **Data pipeline** – capture image → preprocess (resize, normalize) in a single native thread; batch if possible.  
4. **Inference loop** – run inference on GPU/NNAPI/CoreML when available, fall back to CPU.  
5. **Result handling** – cache predictions, throttle UI updates.  
6. **Monitoring & OTA** – log inference latency and accuracy metrics locally; push model updates via secure OTA.

**Depth**  
- **Latency**: target < 100 ms end‑to‑end by keeping preprocessing in C++/Swift, using NNAPI’s asynchronous calls.  
- **Memory**: load the model once into a shared memory pool; free tensors after inference to stay under 50 MB RAM usage.  
- **Battery**: schedule heavy workloads during charging or when device idle; use power‑aware APIs (e.g., `setPowerMode`).  
- **Accuracy**: evaluate on-device vs server baseline; use confidence thresholds to trigger cloud fallback.

**Edge Cases**  
- Device lacks GPU/NNAPI → degrade gracefully to CPU.  
- Low battery → skip inference or reduce frame rate.  
- Corrupted model file → fall back to a cached default model.

**Optimize & Communicate**  
Explain trade‑offs: heavier models improve accuracy but increase latency and battery drain; quantization reduces both. Emphasize iterative profiling (Android Profiler, Instruments) to validate assumptions. Conclude by summarizing the end‑to‑end flow and how each component meets the constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
