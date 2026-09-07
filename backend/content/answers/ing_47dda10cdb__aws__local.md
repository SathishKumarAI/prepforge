---
qid: ing_47dda10cdb__aws__local
question: 'Explain: Title: Deep reinforcement learning from human preferences'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 432
total_tokens: 661
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:08:03-05:00'
sources: []
---

**Title: Deep Reinforcement Learning from Human Preferences**

**Situation & Task (Customer Obsession + Ownership)**  
At my previous role I led a team that built an AI assistant for a SaaS platform. Users complained the bot’s responses were “generic” and “unhelpful.” I owned the turnaround, aiming to increase user satisfaction by 20 % within six months.

**Action (Dive Deep + Bias for Action)**  
I introduced *Deep RL from Human Preferences* (HRL). First, we crowdsourced 50k preference pairs (“A better than B”) via a custom UI. Using **Amazon SageMaker Pipelines**, we trained an initial reward model with **PyTorch Lightning** on Spot Instances (cost $0.05/hr).  
Next, we fine‑tuned the policy network with Proximal Policy Optimization, leveraging **AWS Inferentia** for inference at 1 ms latency per request. The RL loop ran on a fleet of **EC2 g4dn.xlarge** instances, auto‑scaled via **Application Auto Scaling** based on queue depth.

**Result (Deliver Results + Invent & Simplify)**  
Within three months we saw a **23 % lift in Net Promoter Score** and a **15 % drop in support tickets**, exceeding the 20 % target. Cost was kept below $3k/month by using Spot and Inferentia, a 30 % reduction from our baseline GPU fleet.

**Bar‑raiser notes**  
- Demonstrated *ownership* of end‑to‑end pipeline.  
- *Dive deep* into reward modeling and RL hyper‑parameters; shared A/B test logs.  
- Quantified impact with NPS and ticket metrics.  
- Learned from an early rollout where the reward model over‑fit to noisy data—fixed by adding entropy regularization, a lesson I documented for future teams.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
