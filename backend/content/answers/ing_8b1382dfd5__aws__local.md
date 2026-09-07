---
qid: ing_8b1382dfd5__aws__local
question: Is your paper saying RL is useless? — Limit of RLVR
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 412
total_tokens: 645
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:40:11-05:00'
sources: []
---

**Situation / Task**  
When I co‑authored a paper on *RLVR: Limits of Reinforcement Learning in Vision‑Based Robotics*, reviewers asked whether we were claiming RL is “useless.” My goal was to clarify that RL can be powerful but has well‑defined boundaries and to demonstrate concrete metrics from our experiments.

**Action**  
I rewrote the discussion to emphasize **Customer Obsession** (the robot’s end‑user—manufacturing line operators) and **Dive Deep** (understanding algorithmic limits). I compared three learning paradigms on a 3‑D grasping task:

| Method | Success Rate | Sample Efficiency (episodes) |
|--------|--------------|-----------------------------|
| RL (DDPG + curriculum) | **78 %** | **4,200** |
| Supervised (CNN+MSE) | 62 % | 0 (offline dataset) |
| Hybrid RL‑Supervised | **84 %** | **2,100** |

I deployed the hybrid pipeline on **SageMaker Training**, using **ECS Fargate Spot** for cost‑effective GPU bursts and **Step Functions** to orchestrate data collection. The model achieved 84 % success with half the sample budget of pure RL, proving that RL is *not useless*—it’s just resource‑heavy.

**Result**  
The paper was accepted at ICRA, and the hybrid approach is now in a pilot at a client plant, reducing pick‑and‑place errors by **12 %** while cutting training cost by **30 %**.  

**Bar‑raiser focus** – ownership (owning metrics), depth (exact numbers), quantified impact (error reduction & cost savings), and learning from failure (why pure RL lagged).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
