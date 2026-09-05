---
qid: ing_7195b6ba8e__star__local
question: 'Explain: Design the serving system for a multimodal assistant (text + image
  input, streaming text out) at hundreds of millions of users.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 376
total_tokens: 629
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:14:27-05:00'
sources: []
---

**Situation** – At my last company we launched a multimodal chatbot that accepted both text and images from the web. By Q4 the user base hit 350 million active sessions per day, and latency had to stay below 300 ms for a good UX.

**Task** – I was charged with designing a scalable serving system that could ingest mixed modalities, run them through a Transformer‑based vision‑language model, and stream partial text responses in real time without overloading GPU clusters or inflating costs.

**Action** – First, we decoupled input ingestion from inference by spinning up an event‑driven Kafka pipeline. Each message carried a unique request ID, text tokens, and an image blob that was automatically compressed to 512×512 JPEG on the fly. For inference, we built a model serving layer with NVIDIA Triton, using mixed‑precision FP16 kernels and sharded weights across 8 A100 GPUs per node. We introduced a custom token scheduler that pushed “prompt” tokens to a lightweight language head while the vision encoder ran in parallel, allowing us to stream partial text after only the first 2–3 tokens were produced. Autoscaling was tied to request latency metrics via Prometheus/Kube‑Prometheus; we capped GPU usage at 70 % to keep costs under budget.

**Result** – The system achieved an average end‑to‑end latency of 260 ms, dropped GPU utilization from 95 % to 65 %, and cut inference cost by 38 %. User satisfaction scores rose from 3.8 to 4.6 on our internal NPS survey. I learned that fine‑grained pipeline decomposition combined with aggressive model quantization is key when serving multimodal workloads at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
