---
qid: ing_c4758b64aa__star__local
question: 'Explain: Self-Hosting Options — Llm Infrastructure'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 386
total_tokens: 621
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:02:50-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup, we were required to provide a private AI-powered chat assistant for our compliance team. The regulatory environment demanded that all data never leave the company’s on‑premise servers, and any cloud solution would incur unacceptable egress costs.

**Task** – I had to design a self‑hosted LLM stack that delivered near‑real‑time inference (≤ 200 ms per request), maintained GDPR compliance, and stayed within our $120K yearly budget for GPU resources.

**Action** – I evaluated three open‑source models: GPT‑NeoX, LLaMA‑2, and Falcon. After benchmarking on an NVIDIA A100 cluster, I chose LLaMA‑2 7B due to its superior perplexity/size trade‑off. I containerized the model with Docker, orchestrated it via Kubernetes, and deployed a custom inference server using Triton Inference Server for efficient batching. To cut costs, I set up GPU scheduling on an existing 4‑node cluster and leveraged mixed precision (FP16) to halve memory usage. I also implemented a lightweight JWT auth gateway to enforce strict access controls.

**Result** – The solution achieved 180 ms latency under peak load, reduced inference cost by 35% compared to the prior cloud run, and passed all compliance audits with zero data leaks. I learned that careful model selection combined with Kubernetes‑based orchestration can deliver secure, cost‑effective LLM hosting without sacrificing performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
