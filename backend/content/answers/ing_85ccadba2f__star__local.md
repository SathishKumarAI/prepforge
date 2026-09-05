---
qid: ing_85ccadba2f__star__local
question: 'Explain: Accessibility — Careers with Waymo - Autonomous Vehicle Industry'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 333
total_tokens: 571
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:00:40-05:00'
sources: []
---

**Situation**  
During my internship at a mid‑size robotics firm, we were tasked with building an object detection pipeline for the company’s new delivery robot. The prototype struggled to recognize people with mobility aids—wheelchairs, walkers—which made the system unsafe for public deployment.

**Task**  
I had to redesign the training data and model architecture so that the detector would reliably identify assistive devices and the users carrying them, without sacrificing overall accuracy or latency on the embedded GPU.

**Action**  
First, I collaborated with a local disability advocacy group to capture a diverse set of images featuring people in wheelchairs, crutches, and other aids. I then used data augmentation (random crops, perspective shifts) to simulate real‑world variations. On the modeling side, I switched from a single‑stage SSD to a lightweight two‑stage Faster R‑CNN with feature pyramid networks, which gave me better small‑object recall. To keep inference under 30 ms, I pruned the network using TensorRT and quantized weights to INT8.

**Result**  
The updated model achieved 92% mAP on our validation set for assistive devices—up from 68%—and maintained a 28 ms latency on the Jetson Xavier. The robot was cleared for beta testing in a public park, and user feedback highlighted a significant improvement in safety perception. I learned that inclusive design requires both community partnership and targeted engineering trade‑offs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
