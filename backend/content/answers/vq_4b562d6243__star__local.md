---
qid: vq_4b562d6243__star__local
question: path-er. Does one of these career paths best "t you?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 298
total_tokens: 538
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:58:08-05:00'
sources: []
---

**Situation:**  
During my senior year at university I was part of a research team building an anomaly‑detection system for industrial IoT sensors. The dataset had 10 million records, but our baseline model’s precision was only 72%, causing false alarms that could cost the client $200k per month.

**Task:**  
I was tasked with improving detection accuracy to at least 90% while keeping inference latency under 50 ms so the system could run on edge devices.

**Action:**  
I first performed feature engineering, extracting temporal patterns and normalizing sensor drift. Then I switched from a simple random forest to a lightweight LSTM‑CNN hybrid trained in PyTorch, using mixed precision to reduce memory usage. To meet latency constraints, I applied ONNX Runtime with dynamic quantization and deployed the model on NVIDIA Jetson Nano, profiling with Nsight Systems to identify bottlenecks.

**Result:**  
The new pipeline achieved 92% precision and 88% recall, cutting false alarms by 65%, saving the client ~$130k annually. Inference latency dropped to 38 ms, meeting edge requirements. I learned how model choice, quantization, and deployment tooling directly impact real‑world ROI, guiding me toward a career focused on production ML at the intersection of research and engineering.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
