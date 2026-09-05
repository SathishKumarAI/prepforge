---
qid: ing_6db95965b9__star__local
question: 'Explain: Key Architectural Decisions — ChatGPT System Design - by Neo Kim
  and Hayk'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 356
total_tokens: 599
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:06:29-05:00'
sources: []
---

**Situation** – At my previous company we were tasked to roll out an internal chatbot that could answer technical queries in real time for 20,000 developers. The existing LLM had a 2‑second latency and was running on a single GPU, which meant it couldn’t handle peak load.

**Task** – I needed to design an architecture that would reduce inference latency below 500 ms while keeping cost per query under $0.01 and ensuring zero downtime during traffic spikes.

**Action** – I broke the problem into three layers: (1) a lightweight transformer‑based “retrieval” module built with Hugging Face’s 🤗 Transformers, fine‑tuned on our knowledge base; (2) a cache layer using Redis to serve hot queries instantly; and (3) an autoscaling inference cluster on Kubernetes that spun up 8x NVIDIA A10 GPUs only during traffic surges. I also implemented model sharding with DeepSpeed ZeRO‑1 to cut memory usage by 30 % and added a fallback rule engine for edge cases.

**Result** – Latency dropped from 2.0 s to 350 ms, cost per query fell to $0.006, and uptime stayed at 99.97 %. The project also reduced engineering effort on support tickets by 45 %, proving the architecture was both performant and cost‑effective.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
