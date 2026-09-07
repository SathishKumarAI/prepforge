---
qid: ing_3a6b7c0b4a__faang__local
question: 'Q: How do you evaluate an agent when the environment is non-deterministic
  (e.g., the web)?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 469
total_tokens: 714
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:00:21-05:00'
sources: []
---

**Clarify**  
You want a metric that captures how well an AI agent performs when outcomes are stochastic—think of navigating a live website where page loads, redirects, or server responses vary. Assume we can replay episodes, collect state‑action pairs, and observe rewards (or success indicators).  

**Approach**  
1. **Define episodic reward**: Treat each run as an episode ending in success/failure or a cumulative score.  
2. **Monte‑Carlo rollouts**: Run many independent trials from the same start state to estimate expected return.  
3. **Variance‑aware metrics**: Compute mean and standard deviation of returns; lower variance signals robustness.  
4. **Confidence intervals**: Use bootstrapping or Bayesian posterior samples to report 95 % CI on performance.  

**Depth**  
- Expected Return \( \hat{R} = \frac{1}{N}\sum_{i=1}^{N} R_i \).  
- Variance \( \hat{\sigma}^2 = \frac{1}{N-1}\sum (R_i-\hat{R})^2 \).  
- If the agent uses a stochastic policy, evaluate *policy‑value* by averaging over action samples.  
Complexity: O(N) trials; linear in sample size. Trade‑off: more runs → tighter CI but higher cost.  

**Edge Cases**  
- Non‑stationary environment (site updates): re‑estimate periodically.  
- Rare high‑reward events: use importance sampling or weighted bootstrap to avoid under‑estimating tail performance.  
- Partial observability: augment with hidden‑state estimators, then evaluate on the estimated belief states.  

**Optimize & Communicate**  
- Parallelize rollouts across workers to reduce wall‑time.  
- Report *Expected Return ± 2 × σ* so stakeholders see both average and risk.  
- Visualize a learning curve of mean reward vs. trials to show convergence.  

By combining expectation, variance, and confidence intervals, you provide a statistically sound evaluation that respects the inherent nondeterminism of web environments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
