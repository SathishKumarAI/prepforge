---
qid: ing_74194e7b75__star__local
question: 'Explain: Decisiveness — Careers | Harvey'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 393
total_tokens: 628
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:26:29-05:00'
sources: []
---

**Situation:**  
During a product launch at my previous company we were integrating an image‑classification model into a mobile app that needed to deliver results within 200 ms. The initial inference pipeline, built with TensorFlow Lite, was taking ~350 ms and the latency metric was 3× higher than the SLA.

**Task:**  
I had to decide whether to keep the existing model architecture or switch to a more efficient one without compromising accuracy beyond 1 %. I also needed to present a clear recommendation to senior leadership before the launch deadline.

**Action:**  
First, I benchmarked several lightweight architectures—MobileNetV2, EfficientNet‑B0, and pruned ResNet‑50—using real device profiling. I measured FLOPs, memory usage, and top‑1 accuracy on our validation set. MobileNetV2 achieved 78 % accuracy with a 120 ms inference time, while EfficientNet‑B0 was only marginally better in accuracy but still 200 ms. Based on the trade‑off curve, I chose MobileNetV2. I then implemented quantization‑aware training to recover 0.5 % accuracy loss and integrated the model into the app’s CI pipeline. Finally, I prepared a concise slide deck with latency graphs and risk mitigation steps for the leadership meeting.

**Result:**  
The new pipeline reduced inference time from 350 ms to 115 ms, meeting the SLA and leaving a 15 % buffer for future scaling. Accuracy dropped only 0.3 %, staying within our acceptable margin. The launch proceeded on schedule, and we later adopted this approach across three additional product lines. I learned that decisive action—backed by data, rapid prototyping, and clear communication—is essential when time‑to‑market is critical in ML deployments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
