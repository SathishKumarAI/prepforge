---
qid: ing_77a4248032__star__local
question: 'Explain: T - Technical Details — Answer Frameworks'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 324
total_tokens: 559
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:33:07-05:00'
sources: []
---

**Situation** – When I joined the product team at a fintech startup, we had to build an automated fraud detection model that could score each transaction in real time while staying under a 50 ms latency budget.

**Task** – My goal was to design and implement a production‑ready inference pipeline that leveraged modern AI frameworks (PyTorch for training, ONNX Runtime for deployment) without compromising accuracy or violating our strict latency constraints.

**Action** – I first profiled the model in PyTorch, identifying that the transformer encoder was the bottleneck. I converted the trained network to ONNX and then used ONNX Runtime’s GPU execution provider with batch‑size tuning. To keep inference fast, I applied dynamic quantization (int8) on the linear layers and pruned low‑impact attention heads. I also wrapped the runtime in a lightweight FastAPI service, using async workers to handle concurrent requests. Finally, I built a CI/CD pipeline that automatically ran end‑to‑end latency tests against a synthetic transaction stream before each release.

**Result** – The new pipeline reduced average inference time from 180 ms to 32 ms, meeting our target and allowing us to process 10× more transactions per second. Accuracy dropped less than 0.2 % compared to the original model. I learned how to balance framework features (quantization, batching) against real‑world constraints, a skill that’s now part of my standard engineering toolkit.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
