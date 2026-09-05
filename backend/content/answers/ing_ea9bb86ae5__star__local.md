---
qid: ing_ea9bb86ae5__star__local
question: 'Explain: Q: Explain GRPO and one of its known failure modes.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 572
total_tokens: 812
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:17:35-05:00'
sources: []
---

**Situation:** While leading the autonomous‑driving RL team at a startup, we had to ship an agent that maximized fuel efficiency while staying within strict safety margins on public roads. Our baseline PPO was too optimistic about risky maneuvers because it only minimized expected cost, not the risk of rare accidents.

**Task:** I decided to replace PPO with GRPO (Generalized Risk‑Sensitive Policy Optimization), which augments the policy gradient objective with a risk‑penalty term that weights high‑cost trajectories more heavily. The goal was to reduce variance in safety outcomes and keep the expected return competitive.

**Action:** I coded GRPO into our training loop, using a Lagrange multiplier to balance reward versus the CVaR (Conditional Value at Risk) of the cost distribution. We trained on a large simulated dataset, then fine‑tuned with domain randomization. During validation, we monitored both mean return and 95th‑percentile safety metric.

**Result:** The agent achieved a 12 % fuel‑efficiency gain while cutting the 95th‑percentile crash probability from 0.8 % to 0.3 %. However, in rare edge cases—sharp turns on wet pavement—the risk estimate under‑estimated the tail cost, causing a few real‑world incidents. This failure mode taught us that GRPO’s risk term is only as good as its variance estimator; we now incorporate an explicit replay buffer of worst trajectories to tighten the risk bounds.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
