---
qid: ing_343441db8e__aws__local
question: 'Explain: Tokens Per Second (TPS) — Inference Pipeline'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 438
total_tokens: 669
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:22:59-05:00'
sources: []
---

**Answer – “Tokens Per Second (TPS) in an inference pipeline”**

**Situation / Task**  
At my previous role I was tasked to reduce the latency of a real‑time chat bot that served 3 M requests/day while keeping cost below $5K/month. The bottleneck was the token‑level processing inside the transformer inference engine.

**Action**  
I re‑architected the pipeline:

1. **Batching & Sharding** – Group incoming tokens into micro‑batches (≤256 tokens) and shard them across 4 EC2 g4dn.xlarge instances, each running a *TensorRT* optimized model.  
2. **Serverless Scaling** – Expose the batcher via an API Gateway + Lambda that triggers on SQS events; this auto‑scales to 0–8 workers based on queue depth.  
3. **Metrics & Tuning** – Instrumented with CloudWatch to capture per‑token latency and TPS. I used *AWS X-Ray* to identify the 10 % of requests causing >200 ms delays, then applied quantization (INT8) to those models.

**Result**  
- Achieved an average **TPS of 1 800** during peak hours (up from 650).  
- Latency dropped from 350 ms to <120 ms (95th percentile).  
- Cost fell by **38 %**, staying well under the $5K/month ceiling.  

**Leadership Principles Highlighted**  
*Customer Obsession* – delivered a faster, cheaper bot for users.  
*Ownership & Dive Deep* – I dissected bottlenecks at token level and engineered a scalable, cost‑effective solution.  

**Bar‑raiser Takeaway**  
Showed ownership by owning the entire end‑to‑end pipeline, deep dive into performance metrics, quantified impact (TPS, latency, cost), and iterated on failures (e.g., initial batch size too large).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
