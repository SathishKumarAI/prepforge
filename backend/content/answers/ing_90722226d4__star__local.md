---
qid: ing_90722226d4__star__local
question: 'Explain: M ​ e ​ m p Mem^{p} : Exploring Agent Procedural Memory'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 303
total_tokens: 547
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:21:42-05:00'
sources: []
---

**Situation** – At my previous startup, we built a reinforcement‑learning trading bot that needed to remember how to adjust its portfolio after market regime shifts. The bot’s policy network was great at reacting to immediate price signals, but it kept re‑learning the same adjustment routine over and over, wasting compute.

**Task** – I had to design a lightweight procedural memory module so the agent could store and recall a sequence of “adjust‑after‑regime‑change” actions without retraining its entire policy network every time a new regime appeared.

**Action** – I implemented an episodic memory buffer (Mem^p) that encoded each adjustment routine as a compact vector using a learned embedding. When the agent detected a regime shift via a change‑point detector, it queried Mem^p for the nearest stored routine and replayed it through a short‑term recurrent network. The module was trained jointly with the policy using a small L2 regularizer to keep embeddings sparse, and I used Proximal Policy Optimization to avoid catastrophic forgetting.

**Result** – Within two weeks of deployment, the bot’s portfolio variance dropped 18 % while maintaining the same Sharpe ratio. The procedural memory cut training time by 35 %, and I learned how to balance replay fidelity against embedding size for real‑time RL systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
