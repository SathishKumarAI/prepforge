---
qid: ing_18eea53170__faang__local
question: 'Explain: How do you evaluate agents? Compare trajectory-based and outcome-based
  approaches.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 475
total_tokens: 713
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:42:48-05:00'
sources: []
---

**Clarify**

We need to assess how an autonomous agent’s performance is measured.  
*Assumptions*: the agent operates in a sequential decision‑making environment; we have access to its state trajectory and final outcomes (e.g., reward, success flag). We’re comparing **trajectory‑based** metrics (step‑by‑step) versus **outcome‑based** metrics (end‑state).

---

### Approach

1. List the two families of evaluation criteria.  
2. For each, enumerate typical metrics, their computational cost, and what they reveal about agent behavior.  
3. Contrast strengths/weaknesses and when to prefer one over the other.

---

### Depth

| Evaluation Type | Typical Metrics | What It Captures | Complexity |
|-----------------|-----------------|------------------|------------|
| **Trajectory‑based** | *Cumulative reward*, *step‑wise regret*, *policy entropy*, *state visitation counts* | Fine‑grained learning dynamics, exploration vs exploitation trade‑off, safety per step | O(T) per episode; linear in horizon |
| **Outcome‑based** | *Success rate*, *final cost*, *average return over episodes* | Overall mission success, long‑term goals, sample efficiency | O(N) where N = #episodes |

- Trajectory metrics enable debugging (e.g., high regret early).  
- Outcome metrics are robust to transient noise but may miss subtle failures.

---

### Edge Cases

- **Sparse rewards**: trajectory signals become weak; outcome still meaningful.  
- **Non‑stationary environments**: trajectory entropy spikes signal adaptation needs.  
- **Safety‑critical tasks**: per‑step violation counts (trajectory) are essential even if overall success is high.

---

### Optimize & Communicate

- Combine both: use a *weighted loss* that penalizes early deviations while rewarding final success.  
- When presenting results, show both curves (reward over time vs success rate) to illustrate learning dynamics and end performance.  

**Summary**: Trajectory‑based metrics give insight into the agent’s process; outcome‑based metrics capture its ultimate effectiveness. A balanced evaluation harnesses both for a complete picture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
