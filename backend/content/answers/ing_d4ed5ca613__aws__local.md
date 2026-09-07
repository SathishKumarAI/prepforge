---
qid: ing_d4ed5ca613__aws__local
question: 'Explain: Distillation for reasoning — On-Policy Distillation - Thinking
  Machines Lab'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 417
total_tokens: 653
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:21:09-05:00'
sources: []
---

**Situation & Task**  
I was tasked to accelerate the training of a reinforcement‑learning agent for autonomous warehouse robots while keeping inference latency under 50 ms. The team’s baseline policy took ~4 hrs per epoch on a 16‑GPU cluster, but production required real‑time decisions.

**Action – On‑Policy Distillation (OPD)**  
1. **Collect on‑policy data** from the current Q‑learning agent during live runs.  
2. Train a lightweight *student* network to mimic the teacher’s action distribution using Kullback–Leibler loss + entropy regularization.  
3. Deploy the student on edge GPUs (NVIDIA Jetson) and run *online fine‑tuning* with occasional policy rollouts, ensuring the student never diverges from safe actions.  

I used **AWS SageMaker Pipelines** for data ingestion, **SageMaker Training** with Spot Instances (cost ↓ 70 %) and **ECS Fargate** for inference. The architecture includes a *Model Registry* to track version drift.

**Result**  
- Inference latency dropped from 120 ms → 35 ms (×3).  
- Training time per epoch fell from 4 hrs → 30 min (≈90 % reduction).  
- Deployment cost reduced by $1.8k/month, freeing budget for R&D.  

**Reflection**  
I learned that *dive deep* into the teacher’s loss surface was crucial; a naïve KL loss caused mode collapse. Adjusting temperature and adding a small MSE term stabilized learning—an example of **Bias for Action** with rapid iteration.

---

> **Bar‑raiser cues:** ownership (took end‑to‑end control), depth (probed loss dynamics), quantified impact (latency & cost metrics), and continuous learning from early failure modes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
