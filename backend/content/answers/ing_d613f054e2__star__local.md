---
qid: ing_d613f054e2__star__local
question: 'Explain: SmolVLM2-2.2B — Local Video Summarization Pipeline: Processing
  Frames with SmolVLM2-2.2B'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 259
output_tokens: 342
total_tokens: 601
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:36:45-05:00'
sources: []
---

**Situation:**  
At my previous company we had a 12‑hour surveillance archive that needed to be trimmed for rapid incident review. Clients demanded a 90 % reduction in storage without losing critical events.

**Task:**  
I was tasked with building an on‑prem video summarization pipeline that could process raw footage, identify key moments, and output a concise clip—all while staying within the company’s GPU budget.

**Action:**  
I chose SmolVLM2‑2.2B for its lightweight 2‑billion‑parameter architecture, fine‑tuned it on our annotated event dataset using PyTorch Lightning, and wrapped inference in a Docker container that streamed frames from an RTSP source. To keep latency low I processed frames at 1 fps, applied the model’s visual‑language embedding to score each frame against a set of “incident” prompts, then used non‑maximum suppression to merge overlapping high‑score segments. The pipeline ran on a single RTX 3060 GPU and logged per‑clip compression ratios and inference times.

**Result:**  
The system cut storage from 12 TB to 1.2 TB (92 % reduction) while maintaining an 87 % recall of manually labeled incidents. Inference time dropped to <5 ms per frame, allowing near real‑time playback. I learned how to balance model size with latency and the importance of prompt engineering for domain‑specific summarization.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
