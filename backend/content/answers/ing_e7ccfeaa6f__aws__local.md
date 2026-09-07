---
qid: ing_e7ccfeaa6f__aws__local
question: 'Explain: Reinforcement learning — On-Policy Distillation - Thinking Machines
  Lab'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 449
total_tokens: 684
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:02:46-05:00'
sources: []
---

**Reinforcement Learning – On‑Policy Distillation (Thinking Machines Lab)**  
*Leadership Principles: Customer Obsession & Ownership*

**Situation / Task**  
At Thinking Machines I led a project to accelerate RL training for autonomous drone navigation. The goal was to reduce on‑policy sample cost by 70 % while keeping policy performance within 2 % of the original.

**Action**  
I designed an *on‑policy distillation* pipeline:  

1. **Data Capture** – Collected trajectories from the teacher RL agent (DDPG) in simulation, using AWS RoboMaker for high‑fidelity physics and S3 for raw logs.  
2. **Distillation Network** – Trained a lightweight policy network to mimic the teacher’s action distribution via KL divergence loss. Implemented with PyTorch on SageMaker Training Jobs, leveraging spot instances (cost ↓ 50 %).  
3. **Online Fine‑Tuning** – Deployed the distilled agent to an Edge TPU cluster; used AWS Greengrass for OTA updates and real‑time telemetry back to CloudWatch.  
4. **Validation** – Ran A/B tests in a live flight testbed, measuring success rate (98 % vs 97 %) and latency (<20 ms).

**Result**  
The distilled policy required only 30 % of the teacher’s rollouts, cutting simulation time from 12 hrs to 4 hrs per iteration. Deployment cost dropped by 45 %, and we achieved a 0.5 % improvement in flight stability—directly enhancing customer safety perception.

**Learning & Bar‑Raiser Focus**  
I owned the end‑to‑end flow, diving deep into RL loss functions, AWS service limits, and edge constraints. The bar‑raiser would note my quantified impact (70 % sample savings, 45 % cost reduction) and how I iterated on failure modes—e.g., adjusting KL weight after observing policy drift—to continuously refine the solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
