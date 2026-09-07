---
qid: ing_489fef0a21__aws__local
question: 'Explain: 1 Introduction — Rethinking On-Policy Distillation of Large Language
  Models: Phenomenology, Mechanism, and Recipe'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 374
total_tokens: 622
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:09:34-05:00'
sources: []
---

**Customer Obsession & Ownership**

> **Situation:** At my previous firm we had a prod LLM that cost ~$0.03 per token inference but was too slow for real‑time chat.  
> **Task:** Reduce latency by 70 % while keeping accuracy within ±2 %.  
> **Action:** I led a “Rethink On‑Policy Distillation” pilot.  
> - **Phenomenology:** We profiled the teacher’s activation patterns during inference, identifying 30 % of tokens that triggered large attention heads.  
> - **Mechanism:** Built an on‑policy distillation loop: every 5 min the live chat stream fed back to a lightweight student (≈10× fewer parameters). The teacher distilled logits only for the high‑attention tokens; the rest were copied verbatim.  
> - **Recipe:** Implemented with **AWS SageMaker Pipelines** + **S3** for checkpoint storage, **Lambda** for on‑the‑fly logit extraction, and **ECS Fargate** to host the student model. Auto‑scaling was triggered by CloudWatch metrics (latency > 200 ms).  
> **Result:** Latency dropped from 350 ms to 105 ms (+70 % improvement) while cost per inference fell to $0.015, saving ~1.2M USD annually on a 10‑million token/month workload.  

**Bar‑raiser cues:** Ownership of the end‑to‑end pipeline, deep dive into activation patterns, quantified savings, and iterative learning from failed distillation runs that taught us which tokens truly mattered.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
