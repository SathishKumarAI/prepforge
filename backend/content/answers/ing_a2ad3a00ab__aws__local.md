---
qid: ing_a2ad3a00ab__aws__local
question: 'Explain: Explain distillation for LLMs - black-box vs logit distillation
  - and the licensing caveats.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 452
total_tokens: 695
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:33:00-05:00'
sources: []
---

**Situation & Task**  
At my last role I led a project to ship an LLM‑based chatbot into production on **AWS SageMaker** while keeping model costs below $200 k/yr. The business required us to reduce inference latency from 1.2 s to <300 ms and comply with open‑source licensing constraints.

**Action (Technical)**  
I chose *logit distillation* over black‑box distillation because the teacher’s logits expose richer supervisory signals, enabling a smaller student (~40M params) to match the teacher’s accuracy (+1.2 BLEU).  
- **Design**:  
  - Teacher: HuggingFace `gpt-neo` (2B) hosted on SageMaker RealTime endpoints.  
  - Student training on GPU‑optimized **Neptune** for experiment tracking, using **SageMaker Training Jobs** with mixed precision and *TensorRT* for inference.  
  - Deploy student via **ECR + ECS Fargate**, auto‑scaling to 0–50 concurrent requests (95th percentile <300 ms).  
- **Licensing**: I audited the teacher’s Apache‑2.0 license, verified that the distilled model is a derivative work but still under Apache‑2.0; we included a copy of the license in our repo and added a `NOTICE` file.  

**Result**  
Inference latency dropped 75 % (1.2 s → 0.3 s). Cost fell from $180 k to $45 k/yr (≈ 74 % reduction). The distilled model passed all internal QA with no accuracy loss >0.5 %.  

**Reflection**  
I took full ownership, dove deep into the licensing nuances, and balanced speed, cost, and compliance—aligning with **Customer Obsession**, **Ownership**, and **Bias for Action**. I learned that choosing logit distillation early saved us from costly re‑licensing headaches later.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
