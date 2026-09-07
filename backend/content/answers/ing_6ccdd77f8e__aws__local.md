---
qid: ing_6ccdd77f8e__aws__local
question: Tell me about a time a technical decision you championed turned out to be
  wrong. What happened, and what did you change afterward?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 392
total_tokens: 638
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:29:53-05:00'
sources: []
---

**Situation & Task (Customer Obsession / Ownership)**  
I led the rollout of a recommendation engine for our e‑commerce catalog. The goal was to boost cross‑sell revenue by 15 % within six months.

**Action (Dive Deep + Bias for Action)**  
We chose a *single‑node* inference cluster on EC2 Spot Instances to cut costs, assuming traffic would be predictable. I architected the model pipeline with SageMaker for training and deployed it via an ALB behind a single Auto Scaling group of t3.medium instances.

**Result (Deliver Results – Wrong Decision)**  
Within two weeks, peak‑hour latency spiked to 1 s, causing a 12 % drop in conversion rates. Revenue fell by $350K vs the projected lift. The root cause was that the model required >500 MB memory and suffered from bursty traffic; Spot Instances were frequently interrupted.

**What I Changed (Invent & Simplify + Ownership)**  
1. Switched to **ECS Fargate with spot‑and‑on‑demand mix**, adding a 20 % on‑demand buffer for high‑traffic periods.  
2. Enabled **SageMaker Neo** to compile the model for ARM, cutting inference time by 40 %.  
3. Implemented **CloudWatch Alarms + Lambda auto‑recovery** to scale out instantly during spot terminations.

**Learnings (Bar‑raiser)**  
- Always test under realistic traffic patterns before production.  
- Treat cost savings as a hypothesis; validate with A/B metrics.  
- Own the failure: I documented the incident, updated our playbook, and introduced mandatory “cost‑vs‑performance” checkpoints for future AI projects.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
