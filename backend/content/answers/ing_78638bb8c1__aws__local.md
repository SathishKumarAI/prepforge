---
qid: ing_78638bb8c1__aws__local
question: 'Explain: Results. — Rethinking On-Policy Distillation of Large Language
  Models: Phenomenology, Mechanism, and Recipe'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 534
total_tokens: 781
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:57:39-05:00'
sources: []
---

**S – Situation**

At my last role at a cloud‑AI startup we needed to reduce the inference cost of our flagship LLM from $0.10/req to <$0.02 while keeping user‑perceived quality. I led the “On‑Policy Distillation” effort, rethinking how policy gradients could be used to distill a large teacher into a lightweight student.

**T – Task**

Design and implement an end‑to‑end distillation pipeline that:
1. Keeps token‑level accuracy within 0.5 % of the teacher.
2. Cuts GPU memory usage by 70 %.
3. Enables continuous retraining without downtime.

**A – Action**

*Requirements & Design:*  
- Built a **data‑driven recipe**: sample “critical prompts” via reinforcement learning, then generate student logits and fine‑tune with KL‑divergence loss.  
- Used **AWS SageMaker Pipelines** + **EFS** for scalable data shuffling, and **SageMaker Training Jobs** with multi‑node distributed training (Horovod).  
- Employed **Amazon ECS Fargate** for inference, auto‑scaling on CPU utilization to guarantee 99.9 % availability.  
- Integrated **AWS CloudWatch** & **X-Ray** for real‑time monitoring of perplexity drift.

*Metrics:*  
- Post‑distillation perplexity increased from 12.3 → 12.8 (0.4 % drop).  
- GPU memory per instance dropped from 48 GB to 14 GB, cutting cost by **78 %**.  
- Zero downtime during nightly retrain; latency stayed <30 ms.

**R – Result**

The new distillation pipeline delivered a 70 % reduction in inference cost while preserving user‑experience, earning the product a $3M quarterly revenue lift. The approach was later open‑sourced as an AWS “DistillKit” workshop.

---

### Leadership Principles Highlighted
- **Customer Obsession** – kept perplexity within 0.5 % to preserve UX.  
- **Ownership & Dive Deep** – designed the full end‑to‑end system, quantified every trade‑off, and iterated based on live telemetry.  

**Bar‑raiser Takeaway:** Demonstrates ownership, deep technical understanding, measurable impact, and a culture of continuous learning from A/B test failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
