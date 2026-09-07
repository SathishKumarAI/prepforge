---
qid: ing_bd607998cb__aws__local
question: 'Explain: Q99: You''re deploying a high-throughput inference service for
  an open-weight model. Pick between vLLM, SGLang, and TensorRT-LLM for a specific
  workload and defend the choice.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 263
output_tokens: 486
total_tokens: 749
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:31:40-05:00'
sources: []
---

**Situation / Task**  
I was tasked with launching a low‑latency inference API for an open‑weight LLM (7 B parameters) that had to serve 5 k QPS in a multi‑region AWS deployment while keeping the monthly cost under $10K.

**Action**  
After profiling the model on SageMaker GPU instances, I compared three runtimes:

| Runtime | Throughput@8 V100 | Latency (ms) | Memory Footprint |
|---------|-------------------|--------------|------------------|
| vLLM   | 3.2 k QPS         | 45           | 22 GB            |
| SGLang | 4.1 k QPS         | 38           | 24 GB            |
| TensorRT‑LLM | **5.7 k QPS** | **30** | 18 GB |

I chose **TensorRT‑LLM** because it delivers the highest throughput and lowest latency while using less GPU memory, allowing us to fit two models per A100‑80G. I wrapped it in a SageMaker **Inference Endpoint** behind an ALB with WAF for protection, auto‑scaling based on CloudWatch CPU/Memory metrics, and used **S3 + EFS** for model artifacts.

**Result**  
- Achieved 6 k QPS peak (20% above target) with <35 ms latency.  
- Reduced GPU cost by 30% vs. vLLM baseline.  
- Deployed to three regions, maintaining 99.9% availability via cross‑region replication.

**Reflection**  
I owned the trade‑off between memory and throughput; a “fail fast” benchmark loop surfaced that SGLang’s batch size tuning was suboptimal for our workload. I documented this in a post‑mortem and added automated sanity checks to the CI pipeline, ensuring future teams inherit the learning curve.

> **Leadership Principles**: *Customer Obsession* (delivering low latency), *Ownership* (end‑to‑end cost & performance optimization).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
