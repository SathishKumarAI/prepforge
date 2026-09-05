---
qid: ing_a7edce6257__star__local
question: 'Explain: DoorDash System Design — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 350
total_tokens: 587
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:08:57-05:00'
sources: []
---

**Situation:**  
While working on a last‑minute feature for DoorDash’s surge pricing engine, the team noticed that our model’s latency was creeping up to 350 ms per request during peak hours, far above the 100 ms SLA needed for real‑time driver dispatch.

**Task:**  
I had to redesign the inference pipeline so that we could keep predictions accurate while cutting response time by at least 60%, and do it without disrupting the existing deployment workflow.

**Action:**  
First, I profiled the current TensorFlow Serving stack with *py-spy* and discovered that GPU‑to‑CPU context switches were a bottleneck. I switched to an ONNX Runtime backend on a dedicated inference node, using batch‑size 16 and quantized 8‑bit weights, which lowered per‑inference compute from 2 ms to 0.5 ms. Next, I added a caching layer with Redis for the most frequent feature vectors (top 20 % of drivers), achieving an additional 30 % speedup. Finally, I automated the rollout with canary releases in Kubernetes and set up Prometheus alerts to monitor latency drift.

**Result:**  
The new pipeline cut average inference time from 350 ms to 110 ms, meeting the SLA with a margin. During the next surge event, we handled 40 % more orders without any driver‑side delays. I learned that small architectural tweaks—like switching runtimes and adding smart caching—can deliver outsized performance gains in production ML systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
