---
qid: ing_556906e4e1__star__local
question: 'Explain: LLM Infrastructure'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 373
total_tokens: 603
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:18:52-05:00'
sources: []
---

**Situation:**  
When I joined the product team at a fintech startup, we were tasked with launching an AI‑powered chatbot that could answer complex regulatory queries in real time. Our existing infrastructure was built for small NLP models and couldn’t handle the latency or scale required for large language models (LLMs).  

**Task:**  
I had to design and deploy an end‑to‑end LLM infrastructure that would support inference at 10+ requests per second with sub‑200 ms latency, while keeping costs under $5k/month.  

**Action:**  
First, I containerized the open‑source GPT‑2 model using Docker and orchestrated it on Kubernetes, leveraging NVIDIA GPUs in a spot‑instance pool to keep compute costs low. I implemented a token‑level caching layer with Redis to reuse embeddings for frequently asked questions. For scaling, I set up an autoscaling group that spun up additional GPU nodes when CPU usage hit 70 %. To monitor performance, I integrated Prometheus and Grafana dashboards, exposing key metrics like queue depth and inference time. Finally, I used Triton Inference Server to batch requests efficiently and applied quantization (int8) to reduce memory footprint without hurting accuracy.  

**Result:**  
The new LLM pipeline handled 12 req/s with an average latency of 180 ms, exceeding our SLA while cutting infrastructure spend by 35 %. I learned that thoughtful containerization, dynamic scaling, and smart caching are critical when bringing large models into production at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
