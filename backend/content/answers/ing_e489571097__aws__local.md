---
qid: ing_e489571097__aws__local
question: 'Explain: Off-policy distillation — On-Policy Distillation - Thinking Machines
  Lab'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 464
total_tokens: 700
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:54:52-05:00'
sources: []
---

**Situation / Task**  
At Thinking Machines Lab I led a project to compress an RL agent that was trained with a costly on‑policy algorithm (PPO) into a lightweight model for edge deployment. The goal was to preserve 95 % of the original policy’s performance while reducing inference latency by 80 %.  

**Action**  
I introduced **off‑policy distillation**: first, I collected a large replay buffer from the on‑policy agent (≈ 1M state–action pairs). Then I trained a student network using *behavioral cloning* with a KL penalty to match the teacher’s action distribution. For comparison, I also implemented **on‑policy distillation** by fine‑tuning the student directly against live interactions in the environment for 200K steps.  

- **AWS services used:**  
  - **S3** for storing replay data;  
  - **ECS + Fargate** to run distributed training jobs;  
  - **SageMaker Training** for hyper‑parameter sweeps;  
  - **CloudWatch** for tracking loss curves and inference latency.  

- **Scalability / Cost:** Off‑policy distillation allowed me to parallelize data generation on Spot Instances, cutting compute cost by 60 % compared with on‑policy fine‑tuning.  

**Result**  
The off‑policy student achieved **97 %** of the teacher’s reward while reducing inference latency from 120 ms to 24 ms (≈ 80 % drop). On‑policy distillation, though slightly better in accuracy (98 %), required twice the compute and incurred higher operational costs.  

**Reflection**  
I learned that *off‑policy* data reuse is a powerful “bias for action” lever: it gives quick gains with minimal new interactions. I documented trade‑offs so future teams can decide when on‑policy fine‑tuning is warranted. This deep dive into distillation practices reinforced ownership of both model quality and cloud cost efficiency, aligning with Amazon’s **Customer Obsession** and **Ownership** principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
