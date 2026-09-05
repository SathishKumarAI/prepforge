---
qid: ing_54ee3adc73__star__local
question: Want Results with Deep Learning for Computer Vision?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 335
total_tokens: 569
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:17:53-05:00'
sources: []
---

**Situation:**  
In my last role I was tasked with improving the defect detection rate of our manufacturing line from 85 % to over 95 % within six months. The existing rule‑based system struggled with subtle surface variations and high false positives.

**Task:**  
Build a deep‑learning pipeline that could reliably identify defects in real time, integrate it into the existing QC workflow, and meet the tight production schedule.

**Action:**  
I started by curating a balanced dataset of 25 k labeled images using our camera rigs and augmenting it with rotation, brightness shifts, and synthetic noise to simulate edge cases. I chose EfficientNet‑B3 as the backbone because of its strong accuracy‑to‑parameter ratio, then fine‑tuned it on our GPU cluster (4×NVIDIA A100) for 12 epochs, monitoring loss with TensorBoard. To reduce inference latency, I applied TensorRT optimization and converted the model to ONNX for deployment in our C++ pipeline. I also implemented a sliding‑window inference strategy that processed each frame in under 40 ms on an edge device.

**Result:**  
After rollout, defect detection accuracy jumped to 96.7 %, reducing false positives by 70 % and cutting inspection time from 1.2 s to 0.4 s per item—saving roughly $15k/month in labor costs. I learned the importance of dataset quality, model choice driven by deployment constraints, and continuous monitoring to catch drift early.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
