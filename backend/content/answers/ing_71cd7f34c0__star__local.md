---
qid: ing_71cd7f34c0__star__local
question: 'Explain: Sources — Mistral'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 356
total_tokens: 588
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:14:49-05:00'
sources: []
---

**Situation:**  
At my last role as a data scientist for a fintech startup, we were building an in‑house recommendation engine to personalize loan offers. Our internal model was accurate but lagging behind competitors that leveraged large language models (LLMs) for intent extraction.

**Task:**  
I needed to integrate an open‑source LLM that could understand customer queries and extract key financial intents without incurring heavy cloud costs or licensing fees, while keeping inference latency below 200 ms per request.

**Action:**  
After evaluating several options, I chose Mistral-7B because of its small footprint (4 GB) and strong natural‑language understanding. I fine‑tuned it on a curated corpus of customer emails (≈30k examples) using LoRA adapters, which reduced the number of trainable parameters to 1 M. I deployed the model with Triton Inference Server behind an edge cache in our data center, enabling GPU batching and reducing per‑query latency to ~150 ms. I also built a monitoring dashboard that tracked extraction accuracy (F1) and response times in real time.

**Result:**  
Within two weeks of rollout, intent extraction accuracy jumped from 78% to 91%, and the recommendation engine’s click‑through rate increased by 18%. The model ran on our existing GPU cluster at ~30 % capacity, saving us $12k/month versus a commercial API. I learned that carefully selecting an open‑source LLM like Mistral and applying lightweight fine‑tuning can deliver enterprise‑grade performance while keeping costs under control.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
