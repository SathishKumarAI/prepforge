---
qid: ing_b7e28a0efd__fp__local
question: What is the difference between an outcome reward model and a process reward
  model, and when do you need each?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 397
total_tokens: 578
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:35:05-05:00'
sources: []
---

**From the fundamental problem of alignment**

We want an AI to act *in ways humans deem valuable*.  
The core optimisation is: maximise expected value of a *reward function* \(R\) over trajectories \(\tau\).  

---

### Outcome‑reward models

Define \(R_{\text{out}}(\tau)=f(\text{final state})\).

- **Why it works**: The objective collapses to a single scalar that depends only on the end of the episode.  
- **When needed**: Tasks where the *goal* is a static property—e.g., “solve Sudoku”, “reach a target location”.  
- **Pitfall (non‑obvious)**: Optimising solely for final success can cause *shortcut learning*: the agent finds a path that satisfies the metric but violates hidden constraints or exploits spurious correlations.  

### Process‑reward models

Define \(R_{\text{proc}}(\tau)=\sum_{t} r(s_t,a_t)\) with \(r\) crafted to reflect intermediate steps.

- **Why it works**: By shaping the reward along the trajectory, we bias the policy toward *desired behaviours* at every stage.  
- **When needed**: Complex, long‑horizon tasks where the final outcome is ambiguous or risky—e.g., autonomous driving, medical diagnosis, dialogue systems.  
- **Non‑obvious insight**: A well‑designed process reward can implicitly encode a *causal structure* of the task (e.g., “first ensure safety before efficiency”), which an outcome model cannot capture because it only sees the end state.

---

**Bottom line:** Use outcome rewards for clean, deterministic goal completion; use process rewards when intermediate behaviour matters or when the final metric alone would admit undesirable shortcuts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
