---
qid: ing_806d1eb0ff__aws__local
question: 'Explain: Training an internal assistant — On-Policy Distillation - Thinking
  Machines Lab'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 450
total_tokens: 686
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:15:27-05:00'
sources: []
---

**Situation & Task (S)**  
At Thinking Machines Lab I led the project to train an internal virtual assistant that could answer engineering queries in real time. The goal was to reduce ticket volume by 30 % and cut average resolution time from 2 h to <10 min.

**Approach (T)**  
We adopted **on‑policy distillation**: a reinforcement‑learning agent interacted with the live chat API, collecting trajectories that were then distilled into a lightweight policy network.  
*AWS stack:*  
- **SageMaker Pipelines** orchestrated data ingestion from S3 and training jobs on GPU instances (p3.2xlarge).  
- **Step Functions** coordinated nightly distillation cycles, invoking Lambda to generate synthetic dialogues and update the policy.  
- The distilled model was deployed via **SageMaker Endpoint** behind an Application Load Balancer for 99.9 % availability.  
*Scalability & Cost:* Horizontal scaling of endpoints handled peak traffic (≈10k QPS) while Spot instances reduced training spend by ~40 %.  

**Result (R)**  
Within three months we saw a **32 % drop in ticket volume** and an **average resolution time of 8.3 min**, exceeding the target. The model’s precision improved from 0.78 to 0.87, validated through A/B testing on live traffic.

**Learning & Ownership (L)**  
I instituted weekly “failure reviews” where we dissected policy missteps; this drove a 15 % increase in downstream reward signals and reinforced the principle of **Ownership**. I also championed a **Dive Deep** culture by publishing internal notebooks that exposed hidden bottlenecks, enabling peers to replicate the approach across domains.

*Leadership Principles highlighted: Customer Obsession, Ownership.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
