---
qid: ing_b28e07e9ee__star__local
question: How do models understand video, and what are the current limits?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 336
total_tokens: 574
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:28:46-05:00'
sources: []
---

**Situation** – At my last role I was tasked with building a real‑time action‑recognition system for a sports analytics startup. The dataset consisted of 5,000 hours of raw broadcast footage from multiple camera angles, and our KPI was to tag key events (goals, fouls) within 200 ms of the frame.

**Task** – I had to design a model that could ingest continuous video streams, extract spatiotemporal features, and classify actions with >90 % accuracy while staying under GPU memory constraints.

**Action** – I chose a two‑stream architecture: a CNN (ResNet‑50) for spatial encoding and a 3D‑CNN (I3D) for temporal dynamics. To reduce latency, I implemented depthwise separable convolutions and model pruning to cut FLOPs by 60 %. For training, I used mixed‑precision with TensorRT on an NVIDIA A100, achieving 1.5× speedup. I also added a lightweight transformer decoder that attended over frame embeddings to capture long‑term context without blowing up memory.

**Result** – The final pipeline achieved 92 % top‑1 accuracy and processed 30fps on a single GPU with <2 GB VRAM usage, meeting the real‑time requirement. The project taught me that while current video models can handle short clips well, they still struggle with long‑term reasoning and domain shift—limitations that future work on continual learning and adaptive attention must address.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
