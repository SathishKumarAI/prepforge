---
qid: ing_7a2716738f__faang__local
question: 'Explain: Typical flow — Mobile System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 517
total_tokens: 749
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:28:08-05:00'
sources: []
---

**Typical ML Flow in a Mobile System‑Design Interview**

| Step | What you’ll cover |
|------|-------------------|
| **1️⃣ Clarify** | *Restate:* “We’re designing an end‑to‑end mobile ML pipeline.”  Ask: target device (iOS/Android), latency goal, data source (camera, sensor), privacy constraints, offline mode, update strategy. Confirm if the model is pre‑trained or trained on‑device. |
| **2️⃣ Approach** | Outline high‑level layers: <br>• Data ingestion & preprocessing <br>• Feature extraction / model inference <br>• Post‑processing & UI feedback <br>• Model training/updating (on‑device vs cloud) <br>• Monitoring & rollback. Sketch the data flow diagram and identify bottlenecks. |
| **3️⃣ Depth** | *Ingest:* use Camera2/ML Kit APIs, buffer frames, compress to JPEG or YUV420 for bandwidth. *Preprocess:* resize, normalize, quantize. *Inference:* TensorFlow Lite or Core ML with delegates (GPU/NNAPI). Use edge‑TPU for latency <10 ms. *Post‑process:* thresholding, NMS for object detection. *Update:* periodic OTA of .tflite weights; differential updates via delta patches. Complexity: inference O(1) per frame; memory O(model size + buffer). Trade‑offs: larger models → higher accuracy but more latency & battery drain. |
| **4️⃣ Edge Cases** | • Sudden drop in connectivity → fallback to cached model.<br>• Sensor failure → default predictions or prompt user.<br>• Model drift → trigger retraining pipeline.<br>• Privacy breach → on‑device only inference, no raw data sent. Test with varied lighting, device CPU loads, and concurrent background tasks. |
| **5️⃣ Optimize & Communicate** | • Quantize to 8‑bit or use dynamic quantization for speed. <br>• Batch frames if latency allows. <br>• Profile GPU vs NNAPI; choose the faster delegate. Narrate: “We start with data capture, ensure minimal preprocessing overhead, run a lightweight model on the edge, and only fall back to cloud when needed.” Highlight trade‑offs between accuracy, latency, battery, and privacy. |

**Word count:** ~190 words.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
