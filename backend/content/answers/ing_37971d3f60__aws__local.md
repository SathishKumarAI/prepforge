---
qid: ing_37971d3f60__aws__local
question: When does model merging work, and what's actually going on underneath?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 494
total_tokens: 726
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:30:19-05:00'
sources: []
---

**Situation & Task**  
In 2023 I led a cross‑functional team at Amazon Web Services to reduce inference latency for our recommendation engine by 30 %. We had two fine‑tuned Transformer models (Model A: 12M params, Model B: 24M) trained on distinct customer segments. The challenge was to combine them into a single deployment without sacrificing accuracy.

**Action – Technical Design**  
I proposed *parameter averaging* followed by *knowledge distillation*.  
1. **Parameter Averaging** – Weighted mean of corresponding weights (α = 0.6 for A, 0.4 for B) using SageMaker Training Jobs with distributed training on `ml.p3dn.24xlarge`.  
2. **Distillation** – The averaged “teacher” model generated soft targets for a smaller 8M‑parameter student, trained via an inference‑optimized endpoint on `ml.m5.large` instances behind an Application Load Balancer (ALB).  
AWS services: SageMaker Training, SageMaker Endpoint, ALB, CloudWatch for monitoring.

**Result**  
Latency dropped from 350 ms to 210 ms (40 % improvement) while accuracy (AUC‑ROC) stayed at 0.92 vs 0.93 baseline. Cost per inference fell by $0.0003, saving ~$1.2M annually on the recommendation service.

**Reflection – Leadership Principles**  
- **Customer Obsession**: Faster responses directly improved shopper experience.  
- **Ownership & Dive Deep**: I owned the end‑to‑end pipeline, iterated on weight ratios until convergence, and documented trade‑offs (e.g., memory vs speed).  
- **Bias for Action**: Deployed within two sprints instead of waiting for a full quarterly release.  

The bar‑raiser would note my data‑driven impact, deep technical understanding, and willingness to learn from early distillation failures that initially degraded accuracy by 5 %. I adjusted the temperature hyperparameter, re‑evaluated, and achieved the final metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
