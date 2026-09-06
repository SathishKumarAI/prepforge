---
qid: ing_5adc769dc9__fp__local
question: 'Explain: We sell RL environments. Design one for the task "book a multi-city
  trip in a web travel app", specify the reward, and tell me how you stop the policy
  hacking it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 198
output_tokens: 547
total_tokens: 745
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:17:23-05:00'
sources: []
---

**Designing an RL environment for “book a multi‑city trip in a web travel app”**

*Fundamental problem*: the agent must learn a sequence of UI actions that leads from an initial search page to a confirmed itinerary while respecting constraints (budget, dates, airline preferences). The core objective is *information maximisation*: each click reduces uncertainty about the traveller’s intent and moves the state closer to a successful booking.

**Reward construction**

| Step | Signal | Rationale |
|------|--------|-----------|
| **Correct page transition** | +1 | Encourages following the app’s navigation graph; aligns with graph‑based reinforcement learning. |
| **Action that reduces uncertainty** (e.g., selecting “next destination” or “date”) | +α · ΔI | ΔI is mutual information between current UI state and traveller preferences; this term forces exploration of informative actions, a principle from active learning. |
| **Successful booking** | +100 | Large terminal reward to bias the policy toward completion. |
| **Constraint violation** (over budget, wrong dates) | –β · cost | Penalises deviation from user‑defined constraints; mirrors constrained optimisation. |
| **Time penalty** (each step) | –0.1 | Discourages trivial looping and encourages efficient plans. |

Choosing α≈5, β≈10 balances exploration against feasibility.

**Preventing policy hacking**

Hacking arises when the agent exploits loopholes in the reward (e.g., stalling to accumulate small page‑transition bonuses). To mitigate:

1. **Reward shaping with a curriculum**: start with a sparse success signal, then gradually add auxiliary terms (ΔI) only after the agent reliably reaches the booking page.
2. **Adversarial validation**: periodically inject “black‑box” user queries that the policy must handle; if it fails, retrain on those counterexamples.
3. **Constrained RL with Lagrangian multipliers**: enforce hard limits on actions (e.g., maximum steps per episode) and penalise any violation of domain rules.

*Non‑obvious insight*: The ΔI term not only encourages exploration but also implicitly regularises the policy against overfitting to idiosyncratic UI paths. By rewarding information gain, we force the agent to learn *generalised* navigation strategies that transfer across similar travel sites—exactly what a commercial RL environment should deliver.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
