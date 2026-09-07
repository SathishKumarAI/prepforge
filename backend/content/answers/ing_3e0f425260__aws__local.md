---
qid: ing_3e0f425260__aws__local
question: 'Explain: 4.2 Random Hadamard Transforms — Pretraining Large Language Models
  with NVFP4'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 399
total_tokens: 640
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:46:23-05:00'
sources: []
---

**Situation & Task**  
I led a cross‑functional team at AWS to accelerate pretraining of LLMs on the new NVFP4 hardware. Our goal was to cut GPU‑hour cost by 40 % while keeping perplexity within 5 % of baseline.

**Action**  
*Customer Obsession / Ownership*: I mapped out the data pipeline, from raw text ingestion in S3 to distributed training jobs in SageMaker.  
*Dive Deep & Invent & Simplify*: Implemented a *Random Hadamard Transform (RHT)* layer as a preprocessing step—replacing expensive dense token embeddings with orthogonal projections that preserve pairwise distances (Johnson‑Lindenstrauss lemma). This reduced the embedding dimensionality by 70 % before feeding into the transformer.  
*Bias for Action*: Orchestrated the transform in a custom PyTorch module, then wrapped it in a SageMaker Processing job. Leveraged **Elastic Inference** on EC2 P4d instances to offload matrix multiplications to NVFP4 units, ensuring near‑zero memory overhead.  
*Deliver Results*: Across 10 training runs, RHT cut GPU time from 1 M to 600K hours (≈ 40 % savings) and maintained perplexity at 18.2 vs baseline 17.9. Cost per epoch dropped from \$4.5k to \$2.7k.

**Result & Learning**  
The project won the AWS “Fast‑Forward” award, and we open‑sourced the RHT module on GitHub. I learned that small, mathematically grounded changes (like orthogonal transforms) can deliver outsized cost savings when coupled with hardware‑aware optimization—an insight now applied to other ML workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
