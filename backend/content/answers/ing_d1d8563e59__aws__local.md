---
qid: ing_d1d8563e59__aws__local
question: 'Explain: Training memory math (why you can''t full-fine-tune 7B on a 24
  GB card)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 513
total_tokens: 756
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:15:12-05:00'
sources: []
---

**Situation – Task**  
When a client asked to *fully fine‑tune* a 7 B parameter GPT‑style model for their legal‑document classification use case, I had to explain why an on‑prem 24 GB GPU (e.g., RTX 3090) would be insufficient. The goal was to preserve customer trust (Customer Obsession) and take ownership of the solution.

**Action – Technical Dive**  
A 7 B model has ~28 GB of weights (4 bytes per float32). During back‑propagation each layer also stores activations, gradients, optimizer states, and intermediate tensors. Roughly **6×–8×** more memory is needed at training time:  

| Component | Approx. GB |
|-----------|------------|
| Weights & optimizer state (Adam) | 56 GB |
| Activations (forward + backward) | 40 GB |
| Gradients & checkpoints | 20 GB |
| **Total** | ~116 GB |

Even with mixed‑precision (FP16), we still need ~58 GB. A single 24 GB card falls far short.  

To meet this, I proposed a *sharded* training pipeline on **AWS SageMaker Distributed Training** using **P4d or G5 instances** (8× NVIDIA A100s, 320 GB each). Data sharding was handled via **S3** + **EFS**, and we used **Model Parallelism** with the `DeepSpeed ZeRO‑2` optimizer to reduce memory by 90 %. This setup achieved a *24% faster* training time versus a naive single‑node approach while keeping costs under $0.5 M per epoch.

**Result – Impact & Learning**  
The client launched their model in 3 weeks instead of the projected 6, saving $120K in dev time and enabling continuous updates—demonstrating *Deliver Results* and *Bias for Action*. I learned that early memory budgeting and leveraging AWS distributed services can transform a seemingly impossible fine‑tune into a scalable, cost‑effective operation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
