---
qid: ing_e02b689a83__think__local
question: 'Q89: Design a Process Reward Model (PRM) for a customer-support agent.
  What signals do you score, and how do you avoid degenerate reward?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 211
output_tokens: 826
total_tokens: 1037
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T15:46:05-05:00'
sources: []
---

**1️⃣ Clarify the goal & assumptions**  
- *Goal*: Incentivize high‑quality, efficient support that satisfies customers.  
- *Assumptions*: We have access to ticket metadata (timestamps, categories), agent actions (responses, escalations), and outcome signals (CSAT, NPS, resolution time). The PRM will be used in a reinforcement‑learning loop, so it must be smooth, interpretable, and resistant to gaming.

**2️⃣ Mental model: multi‑objective reward decomposition**  
Treat the reward as a weighted sum of *performance* and *behavioral* components. Each component maps observable signals to scalar scores; we then combine them while guarding against over‑emphasis on any single metric (the “degenerate” case).

**3️⃣ Step‑by‑step reasoning**

| Signal | Why it matters | How to score | Normalization / scaling |
|--------|----------------|--------------|--------------------------|
| **Resolution time** | Faster help → better UX. | `-log(1 + t_resolve)` (negative log gives diminishing returns). | Map to [−1,0] with a cap at e.g., 30 min. |
| **CSAT / NPS** | Direct customer feedback. | Use the raw score or a calibrated mapping (`score = (feedback - min)/(max-min)`). | Scale to [0,1]. |
| **Escalation rate** | Indicates agent competence. | `-log(1 + escalations)` – penalize frequent escalations. | Cap at 5% of tickets. |
| **First‑contact resolution** | Reduces friction. | Binary bonus (`+1`) if solved on first reply, else `0`. | Normalized to [0,1]. |
| **Knowledge‑base usage** | Promotes consistency & reduces errors. | Count KB articles referenced; give a small positive per article up to a threshold. | Scale to [0,0.2] so it’s a subtle bonus. |
| **Peer review / supervisor flag** | Quality check beyond metrics. | Binary penalty for flagged tickets (`-1`). | Keep rare events from dominating. |

Combine:  
`R = w₁·t_resolve + w₂·CSAT + w₃·escalation + w₄·FC_res + w₅·KB_use – w₆·flag`.  
Weights are tuned via grid search or Bayesian optimization, ensuring the total reward stays within a bounded range (e.g., [−1,1]) to keep gradients stable.

**4️⃣ Avoiding degenerate rewards**

- **Penalty‑reward balance**: Ensure that negative terms (time, escalations) never outweigh positives; cap each term so one metric can’t dominate.  
- **Regularization**: Add a small L₂ penalty on the reward weights during training to prevent over‑fitting to a single signal.  
- **Diversity constraints**: Enforce that the agent must score above a threshold on *at least* two different signals; otherwise, the episode receives a zero or negative reward.  
- **Monitoring & drift detection**: Continuously log per‑metric distributions; trigger alerts if any metric suddenly spikes (indicative of gaming).  

**5️⃣ Sanity‑check & verbalize**

1. Verify that higher CSAT and faster resolution both increase `R`.  
2. Confirm that a ticket resolved quickly but with low CSAT still yields a modest reward, discouraging “speed over quality.”  
3. Test edge cases: an agent who never escalates but also never uses KB should see diminishing returns from the escalation penalty and missing KB bonus.  

By explicitly mapping each observable signal to a bounded, interpretable component, weighting them thoughtfully, and embedding safeguards against single‑metric domination, we build a PRM that aligns with real customer‑support objectives while remaining robust to degenerate reward exploitation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
