---
qid: ing_cd0eb56e52__star__local
question: 'Explain: Like initially you are watching this video'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 398
total_tokens: 633
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:18:53-05:00'
sources: []
---

**Situation:** At a streaming startup, our “watch‑time per session” metric slipped from 32 minutes to 26 minutes over two months, and churn was creeping up. The product team wanted a fresh recommendation engine that could understand video content better than the current keyword‑based system.

**Task:** I had to design, prototype, and deploy a machine‑learning model that could predict user interest in new titles with at least 5 % higher precision than the baseline, all while keeping inference latency under 50 ms on our CDN edge nodes.

**Action:** I built a 3D‑CNN + Transformer hybrid trained on a 1.2 M sample of click‑through logs and raw video frames. Using PyTorch Lightning, I leveraged mixed‑precision training to reduce GPU memory usage by 30 %. For inference, I distilled the model into an ONNX runtime graph optimized for edge CPUs. I also set up A/B testing with a 10 % traffic split and automated drift monitoring via Evidently.

**Result:** The new system lifted precision from 0.62 to 0.68, boosting average watch time by 12 % (32→35 min) and cutting churn by 3 %. I learned that balancing model depth with deployment constraints is key to a successful ML product roll‑out.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
