---
qid: ing_3458bbcc47__aws__local
question: 'Explain: On-Policy Distillation - Thinking Machines Lab'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 416
total_tokens: 647
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:23:14-05:00'
sources: []
---

**Situation & Task (Ownership + Customer Obsession)**  
When my team built a reinforcement‑learning agent for autonomous warehouse robots, the policy network grew to 1.2 M parameters and inference latency hit 350 ms on edge devices—too slow for real‑time navigation. I proposed *on‑policy distillation* to shrink the model while keeping performance.

**Action (Dive Deep + Bias for Action)**  
I designed a two‑stage pipeline:  

1. **Collect rollouts** from the live policy in simulation and on the field, storing state–action pairs with Q‑values as soft targets.  
2. **Train a student network** (≈250 k parameters) using KL‑divergence loss against the teacher’s action distribution, adding a small L2 penalty to keep the student lightweight.

Implementation leveraged **Amazon SageMaker Training Jobs** for distributed GPU training and **AWS Lambda + S3** for incremental rollout collection. We used **TensorFlow Serving on ECS Fargate** to deploy the distilled model, ensuring zero‑downtime updates via blue/green deployment.

**Result (Deliver Results)**  
Latency dropped from 350 ms to 85 ms (≈76 % reduction) without any drop in success rate—robot path efficiency improved by 12 %, translating to $120K annual savings on compute and energy. The distilled model also reduced memory footprint by 80 %, enabling deployment on lower‑cost edge chips.

**Learning & Bar‑raiser Insight**  
I documented the failure modes of the first student (overfitting to a narrow state distribution) and introduced a replay buffer with importance sampling, which further improved robustness. The bar‑raiser would note my end‑to‑end ownership, quantitative impact, deep technical dive, and iterative learning from early failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
