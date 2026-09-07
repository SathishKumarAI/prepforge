---
qid: ing_dcd65e0edd__aws__local
question: 'Explain: The VLM pattern: vision encoder → projector → LLM'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 467
total_tokens: 700
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:38:24-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led a project to build an AI‑driven product recommendation engine for a large e‑commerce platform. The requirement was to fuse image understanding (product photos) with natural language explanations in real time, while keeping latency under 200 ms per request.

**Action**  
I architected the *Vision‑Language Model* (VLM) pipeline:  

1. **Vision Encoder** – a ResNet‑50 pre‑trained on ImageNet, fine‑tuned on our catalog images.  
2. **Projector** – a lightweight 3×3 convolution + GELU that maps the encoder output to a 768‑dimensional embedding (the same space as GPT‑3’s token embeddings).  
3. **LLM** – an open‑source Llama‑2‑7B, prompted with “Describe this product and recommend similar items.”  

I deployed each component in separate ECS Fargate containers behind an Application Load Balancer, using *AWS Inferentia* for the encoder (10 × cost savings vs. GPU) and *SageMaker Neo* to compile the LLM for inference on Graviton3. I added a caching layer (ElastiCache Redis) for repeated image embeddings.

**Result**  
Latency dropped from 350 ms to **180 ms**; throughput rose to 5,000 QPS with an average cost of $0.003 per request—30 % cheaper than the baseline. User engagement increased by **12 %**, and conversion rate climbed 4.8 pp in A/B tests.

**Learning & Ownership**  
I documented every trade‑off (Inferentia vs GPU, Llama‑2 vs GPT‑3) and iterated on the projector until we hit the target embedding dimensionality. This deep dive and end‑to‑end ownership earned a “Best Innovation” award from the CTO.  

> *Leadership Principles*: **Customer Obsession** (improved user experience), **Ownership** (full stack responsibility), **Dive Deep** (data‑driven tuning).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
