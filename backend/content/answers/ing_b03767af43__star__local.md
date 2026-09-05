---
qid: ing_b03767af43__star__local
question: 'Q: When is a self-hosted individual GPU cluster cheaper than an API?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 365
total_tokens: 606
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:24:28-05:00'
sources: []
---

**Situation**  
During the launch of our recommendation engine at a mid‑size e‑commerce startup, we were pulling real‑time predictions from a third‑party AI service. The model cost us $0.0008 per inference and we expected to run ~15 M requests per month for the next year.

**Task**  
I had to decide whether to keep paying the API or build an on‑prem GPU cluster that could handle those inferences in-house, balancing upfront capital, operational costs, and latency requirements.

**Action**  
1. I profiled our traffic: peak load 3 k requests/second, average inference time 120 ms.  
2. I calculated the API cost: $0.0008 × 15 M = **$12 k/month**.  
3. For a self‑hosted option, I scoped an NVIDIA RTX A6000 (24 GB) + NVMe SSD, estimating CAPEX $4 k and OPEX $300/month for power/maintenance.  
4. Using TensorRT I reduced batch latency to 30 ms per GPU; with 2 GPUs we could sustain peak load comfortably.  
5. I factored in a 20% discount from our data center lease, bringing total monthly cost to **$650**.

**Result**  
The cluster saved us about **$11.3 k/month**, a 94% reduction, while keeping inference latency below 35 ms and giving us full control over model updates. I learned that the break‑even point occurs when API usage exceeds ~10 M calls per month or when real‑time latency constraints rule out cloud variance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
