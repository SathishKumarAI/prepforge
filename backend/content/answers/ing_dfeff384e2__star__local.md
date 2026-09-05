---
qid: ing_dfeff384e2__star__local
question: 'Explain: Blurring Pipeline — How Google/Apple Maps Blur License Plates
  and Faces'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 329
total_tokens: 571
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:56:34-05:00'
sources: []
---

**Situation:** While working on a mobile mapping feature for a ride‑hailing app, we noticed that our live video feed was capturing drivers’ license plates and passengers’ faces—an obvious violation of privacy regulations in several markets.

**Task:** I had to design a real‑time blurring pipeline that would detect and obscure sensitive content before the footage ever left the device, without compromising user experience or battery life.

**Action:** First, I integrated a lightweight YOLOv5 model trained on a custom dataset of plates and faces. To keep latency low, I ran inference on the GPU via Core ML (iOS) / TensorFlow Lite (Android). Detected bounding boxes were fed into a fast Gaussian blur routine that adjusted kernel size based on box area. I added an edge‑aware mask to preserve surrounding context, and throttled frame processing to 15 fps during heavy traffic. For fallback, the pipeline fell back to a simpler Haar cascade when GPU resources were scarce. I also built a privacy audit log that recorded each blur event for compliance.

**Result:** The solution processed 90% of frames with <30 ms latency on average, reducing user-reported privacy incidents by 97%. Battery impact was under 3% compared to baseline video capture. This experience taught me how to balance model accuracy, edge deployment constraints, and regulatory compliance in a consumer product.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
