---
qid: ing_9ff230e2a6__star__local
question: 'Explain: You RL-trained an agent against a mocked environment, held-out
  reward improved, and the gains did not show up in production. Diagnose it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 255
output_tokens: 313
total_tokens: 568
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:52:02-05:00'
sources: []
---

**Situation**  
I was training a reinforcement learning agent for an e‑commerce recommendation engine. In simulation I used a mocked user environment that rewarded click‑through rate (CTR) and conversion. The model’s performance on the held‑out reward metric jumped from 0.32 to 0.47, so we pushed it into production.

**Task**  
I needed to understand why the gains seen in simulation didn’t translate to real traffic—CTR stayed at 0.33 and conversions dipped by 5%.

**Action**  
First I compared the observation space: the mock had a fixed user preference distribution, while live users were highly skewed toward seasonal categories. I overlaid the state‑action distributions and saw that the policy was exploiting a rare “bonus” state present only in the simulator. Next, I re‑ran training with domain randomization—injecting noise into reward signals and varying the user mix to mimic production variance. I also introduced an entropy penalty to discourage deterministic exploitation of spurious states. Finally, I performed a small A/B test on a subset of traffic before full rollout.

**Result**  
The revised agent achieved a 0.38 CTR and matched the production conversion rate, closing the 15‑point gap. I learned that realistic environment stochasticity and reward shaping are critical; without them, simulation gains can be illusory.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
