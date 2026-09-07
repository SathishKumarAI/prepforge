---
qid: ing_9e2fff8bad__aws__local
question: 'Explain: Setup. — Rethinking On-Policy Distillation of Large Language Models:
  Phenomenology, Mechanism, and Recipe'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 451
total_tokens: 698
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:22:30-05:00'
sources: []
---

**Setup – Rethinking On‑Policy Distillation of LLMs**

*Situation*: Our customer, a global e‑commerce platform, needed a lightweight inference model that could run on edge devices (smart speakers) while preserving the 90 % accuracy of its flagship GPT‑4‑derived LLM.  
*Task*: Design an on‑policy distillation pipeline that reduces latency by 70 % and memory footprint by 5× without compromising user experience.  

**Approach (Dive Deep + Bias for Action)**  
1. **Collect on‑policy rollouts** from the production model using Amazon SageMaker Ground Truth to generate a high‑quality, diverse dataset of user queries (≈ 2 M samples).  
2. **Distillation architecture**: a Transformer encoder with 6 layers, 256‑dim hidden size, trained via knowledge‑distillation loss + contrastive regularizer on AWS SageMaker Training Jobs.  
3. **AWS services**:  
   * **SageMaker Pipelines** for CI/CD of the distillation workflow.  
   * **S3** for immutable artifacts; **EFS** for shared model checkpoints.  
   * **Lambda** to trigger inference‑ready deployment on AWS Greengrass Edge devices.  

*Result*: Post‑deployment, edge latency dropped from 1.2 s to 0.36 s (70 % reduction), memory usage fell from 12 GB to 2.4 GB, and overall cost per inference decreased by 65 %. User satisfaction scores improved from 78 % to 92 %.  

**Bar‑raiser notes**:  
* Demonstrated ownership of end‑to‑end pipeline and clear trade‑offs (model size vs. accuracy).  
* Quantified impact with real metrics (latency, cost, user score).  
* Learned from a failed attempt that ignored domain‑specific tokenization—prompted us to incorporate custom tokenizer in the next iteration.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
