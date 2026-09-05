---
qid: ing_8ed032b0e1__star__local
question: 'Explain: way to check um what spots are — Amazon System Design Interview:
  Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 354
total_tokens: 598
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:18:26-05:00'
sources: []
---

**Situation:**  
At my previous company we built a smart parking system for a downtown mall. The dashboard was showing an error rate of 18 % when the app tried to reserve a spot—customers were being redirected because the system couldn’t confirm that a space was actually free.

**Task:**  
I had to design a reliable, low‑latency method to verify occupied versus vacant spots in real time so the reservation engine could serve accurate availability data.

**Action:**  
I proposed a two‑stage ML pipeline. First, I deployed a YOLOv8 model on edge NVIDIA Jetson devices mounted over each parking bay; it produced bounding boxes for cars with 97 % precision and processed frames at ~30 fps. Second, I built a lightweight post‑processing layer that aggregated detections across time (a simple exponential moving average) to smooth out transient occlusions from passing buses or construction equipment. The system exposed a REST endpoint that returned spot status in under 120 ms. I also added an anomaly flag: if the model confidence dropped below 0.3, the spot was marked “unknown” and the reservation engine would refuse booking until manual inspection.

**Result:**  
Within two weeks of deployment, the spot‑status accuracy rose to 99.4 %, cutting the reservation error rate from 18 % to <1 %. The system handled 2,000 concurrent queries per minute during peak hours without GPU overload. I learned that combining a fast detector with temporal smoothing can bridge the gap between raw vision and robust real‑world service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
