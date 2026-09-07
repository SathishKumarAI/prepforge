---
qid: ing_f7cb1e9da4__faang__local
question: 'Q: An agent works fine for short tasks but degrades on long-running ones.
  How do you fix it?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 451
total_tokens: 696
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:16:16-05:00'
sources: []
---

**Clarify**

You’re describing an RL or planning agent that performs well on horizon‑short episodes but its performance drifts over long horizons.  
Assumptions to confirm:  

1. Is the degradation due to value estimation bias (e.g., bootstrapping errors, reward discounting)?  
2. Are exploration/exploitation trade‑offs changing as time passes?  
3. Does the environment’s dynamics or reward structure change over longer runs?

**Approach**

1. Diagnose the source of error (value drift vs. policy drift).  
2. Apply a correction method tailored to that source: e.g., return‑to‑goal shaping, hierarchical policies, or curriculum learning.  
3. Validate with long‑horizon benchmarks.

**Depth**

- **Value drift:** Use multi‑step TD targets or Monte Carlo rollouts for longer horizons; increase discount factor λ in TD(λ) to reduce bias.  
- **Policy drift:** Introduce a high‑level planner (e.g., hierarchical RL) that schedules sub‑tasks, limiting the depth of each policy’s decision tree.  
- **Reward shaping:** Add potential‑based shaping terms that provide intermediate signals, keeping the optimal policy unchanged while giving richer gradients over long runs.  
Complexity: extra computation per step but keeps overall O(|S|+|A|) growth; memory for hierarchical buffers is linear in depth.

**Edge Cases**

- If environment rewards are sparse, potential shaping may still be insufficient—test with synthetic sparse tasks.  
- Hierarchical policies can suffer from mis‑aligned subgoal definitions; validate with ablation on subgoal granularity.  
- Over‑shaping can create local optima—check via reward distribution histograms.

**Optimize & Communicate**

Explain that fixing long‑run degradation is essentially a bias–variance trade‑off: we reduce bias by giving the agent richer signals (shaping, multi‑step returns) while controlling variance through hierarchical abstraction. Present empirical curves showing return vs. horizon before and after changes, emphasizing both theoretical justification and practical gains in training stability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
