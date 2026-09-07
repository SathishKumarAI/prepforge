---
qid: ing_a79027b274__aws__local
question: 'Explain: Hard Label Distillation — Knowledge Distillation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 414
total_tokens: 643
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:45:20-05:00'
sources: []
---

**Hard‑Label Distillation (Knowledge Distillation)**  
*Leadership Principles: Customer Obsession & Dive Deep*

**Situation:** Our recommendation engine ran on a 10 GB Transformer model that scored 0.84 AUC but exceeded the latency budget of 200 ms for our mobile app, hurting user engagement.

**Task:** Deliver an “on‑device” student network that retains >90 % of the teacher’s performance while staying <5 MB and <30 ms inference time.

**Action:**  
1. **Architectural Dive Deep:** Trained a lightweight CNN (student) using hard‑label distillation: the teacher’s top‑k predictions were treated as ground truth for the student, reducing label noise.  
2. **AWS Glue + SageMaker Pipelines** orchestrated data preprocessing and model training; **SageMaker Neo** compiled the student for ARM64 edge devices.  
3. **Scalability & Cost:** Leveraged **SageMaker Training Spot** (spot instances) to cut GPU cost by 70 %; used **ECS Fargate** for inference micro‑services, auto‑scaling on CloudWatch metrics.  
4. **Availability:** Deployed the student via **AWS AppConfig** for A/B rollout, ensuring zero downtime and rollback capability.

**Result:** Deployment reduced latency from 350 ms to 18 ms (≈90 % improvement) and cut inference cost by $0.003 per request, saving ~$12k/month. The model’s AUC dropped only 1.2 %, keeping user satisfaction high.

**Learning:** Hard‑label distillation simplifies the teacher’s soft targets into deterministic signals, making student training more stable on edge hardware—an insight I now apply to all latency‑critical ML services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
