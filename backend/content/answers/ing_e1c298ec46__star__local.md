---
qid: ing_e1c298ec46__star__local
question: 'Explain: Anduril System Design — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 373
total_tokens: 611
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:00:16-05:00'
sources: []
---

**Situation**  
At a startup I was tasked with building an autonomous surveillance platform for a defense contractor that needed to process high‑resolution video feeds in real time on edge devices while meeting strict latency and accuracy requirements.

**Task**  
Design a scalable, low‑latency ML system that could ingest live camera streams, run object detection, and trigger alerts within 200 ms per frame, all without exceeding the limited GPU budget of the field‑deployed units.

**Action**  
I first profiled the existing pipeline with PyTorch on a Raspberry Pi cluster to identify bottlenecks. I then refactored the model to a lightweight YOLOv5s architecture and converted it to TensorRT for inference acceleration, reducing per‑frame runtime from 350 ms to 90 ms. To maintain accuracy, I implemented knowledge distillation using a larger ResNeXt teacher, boosting mAP from 72% to 84%. For scalability, I containerized the inference service with Docker and orchestrated it via Kubernetes on the edge gateway, enabling dynamic model roll‑outs and A/B testing of new weights without downtime. Finally, I added a lightweight telemetry module that sent performance metrics back to a central dashboard for continuous monitoring.

**Result**  
The end system achieved 95% of frames processed under the 200 ms deadline, with overall accuracy improving by 12 percentage points. Deployment time per unit dropped from two days to 4 hours, and I learned how to balance model size, latency, and maintainability in a constrained edge environment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
