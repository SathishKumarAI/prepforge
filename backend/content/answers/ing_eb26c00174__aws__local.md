---
qid: ing_eb26c00174__aws__local
question: 'Explain: Tensor Parallelism (TP) — Serving Infrastructure'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 428
total_tokens: 658
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:09:50-05:00'
sources: []
---

**Situation / Task**  
I led a team that had to deploy a large language model (~12 B parameters) for real‑time inference in our e‑commerce recommendation engine. The latency requirement was < 50 ms per request, but a single GPU could only hold ~3 B params, so we needed *Tensor Parallelism (TP)* across many GPUs.

**Action**  
I scoped the problem:  
1. **Design** – Split model tensors across 8 NVIDIA A100s using PyTorch‑Distributed and DeepSpeed’s TP engine.  
2. **AWS services** – Launched an **ECS cluster** on **EC2 Spot Instances** (p4d.24xlarge) for cost efficiency, with **Elastic Load Balancer** to route 10 k QPS requests.  
3. **Scalability & Availability** – Added a **Spot Fleet** strategy and **Auto Scaling** based on CPU/GPU utilization; used **AWS Global Accelerator** for low‑latency routing.  
4. **Cost vs. Performance** – Benchmarked TP vs. model sharding: TP reduced inference latency by 70 % (from 120 ms to 36 ms) while cutting GPU count from 16 to 8, saving ~40 % on compute spend.

**Result**  
- Achieved < 35 ms average latency under peak load, meeting SLAs.  
- Cut infrastructure cost by $15k/month vs. baseline.  
- Received “Customer Obsession” kudos for delivering faster recommendations that increased conversion by 3%.

**Reflection (Bar‑raiser)**  
I owned the end‑to‑end pipeline, dove deep into tensor math to avoid bottlenecks, quantified every metric, and iterated after a failed first TP run that caused out‑of‑memory errors—learning that fine‑tuning `world_size` was critical.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
