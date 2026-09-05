---
qid: ing_d7e0faac10__star__local
question: 'Explain: Company context — Waymo'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 333
total_tokens: 565
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:40:43-05:00'
sources: []
---

**Situation** – While working on Waymo’s autonomous driving stack, we noticed that the perception module’s false‑positive rate for pedestrians had spiked from 1.2 % to 3.8 % during a new urban test corridor, threatening safety and regulatory approval.

**Task** – My goal was to reduce pedestrian false positives back below 2 % without increasing latency beyond the 10 ms per frame budget, ensuring real‑time performance on the vehicle’s embedded GPUs.

**Action** – I led a cross‑team effort that began with a data audit: we collected 12 k new annotated frames from the corridor and ran an error‑analysis pipeline in PyTorch to pinpoint misclassified “sitting” versus “standing” pedestrians. We then engineered a lightweight attention module (using depthwise separable convolutions) that highlighted motion cues, integrating it into the existing ResNet‑50 backbone. Using ONNX Runtime with TensorRT, we quantized the updated model to 8‑bit INT and profiled GPU memory, keeping inference at 7 ms per frame. Finally, I coordinated a phased rollout in simulation and on‑road tests.

**Result** – The false‑positive rate dropped to 1.6 %, meeting safety targets while maintaining latency. The project also revealed that motion‑based attention can be generalized to other dynamic classes, informing future perception updates. I learned the value of end‑to‑end profiling and iterative data‑driven model tuning in a production AI system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
