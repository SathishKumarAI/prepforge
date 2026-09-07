---
qid: ing_b46ea5ce05__faang__local
question: 'Explain: How do you evaluate an agent? Compare trajectory evals and final-outcome
  evals.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 412
total_tokens: 654
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:43:19-05:00'
sources: []
---

**Clarify**  
You’re asking how to assess an autonomous AI agent’s performance. I’ll assume we have a well‑defined environment (reward function or goal), a set of test trajectories, and that “evaluation” means quantifying success over time versus at the end of an episode.

**Approach**  
1. Pick metrics (cumulative reward, task completion rate).  
2. Decide on evaluation horizon: per‑step (trajectory) or terminal (final outcome).  
3. Run multiple episodes to gather statistics.  

**Depth**  
- *Trajectory evals* measure **intermediate signals**—reward at each step, safety violations, resource usage. They expose learning dynamics, credit assignment issues, and can be used for curriculum design. Complexity is linear in trajectory length; memory‑wise we store the full trace.  
- *Final‑outcome evals* look only at the episode’s end state or cumulative reward. Simpler to implement, lower variance if rewards are sparse, but miss early failures that could be fixed by policy tweaks. They’re O(1) per episode in terms of storage.

Trade‑offs: trajectory evals give richer feedback but require more computation and careful handling of delayed rewards; final outcome evals are robust to noisy intermediate signals but can hide suboptimal behavior that still yields a good final score.

**Edge cases**  
- Sparse or delayed reward signals → trajectory evals may be misleading.  
- Non‑stationary environments → need adaptive evaluation windows.  
- Multi‑objective tasks → must weight per‑step vs final metrics appropriately.

**Optimize & communicate**  
Combine both: use trajectory metrics for online learning (e.g., policy gradients) and reserve final outcome metrics for leaderboard or safety certification. Communicate results with confidence intervals, showing how intermediate improvements translate to better finals. This layered evaluation aligns with FAANG’s focus on rigorous, scalable assessment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
