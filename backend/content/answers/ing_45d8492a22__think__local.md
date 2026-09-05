---
qid: ing_45d8492a22__think__local
question: 'Explain: Baselines in Policy Gradients ¶ — Part 3: Intro to Policy Optimization
  \u2014 Spinning Up  documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 206
output_tokens: 448
total_tokens: 654
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:08:56-05:00'
sources: []
---

**1️⃣ Clarify the goal & scope**  
- Identify that the user wants an explanation of *baselines in policy gradients* as presented in the “Intro to Policy Optimization” section of Spinning Up’s docs.  
- Assume they’re familiar with basic RL concepts but may not know why baselines matter.

**2️⃣ Choose a mental model**  
- Think of policy gradient as estimating a direction to improve a stochastic policy.  
- A baseline is a value subtracted from the return that doesn’t change the expectation but reduces variance—like centering data before training a linear regression.

**3️⃣ Step‑by‑step reasoning**  
1. Recall the REINFORCE estimator: ∇θ Eπ[Σ r_t] ≈ (1/N) Σ ∇θ log π(a_t|s_t) G_t.  
2. Observe that G_t can be large and noisy → high variance updates.  
3. Introduce a baseline b(s_t): replace G_t with (G_t – b(s_t)).  
4. Show mathematically that E[∇θ log π·b] = 0, so the expectation stays unchanged but variance shrinks if b ≈ expected return.  
5. Explain common choices: state‑value function Vπ(s), learned critic, or a simple constant.

**4️⃣ Common traps to avoid**  
- Forgetting that the baseline must not depend on the action chosen; otherwise bias is introduced.  
- Mixing up “baseline” with “advantage” without noting that advantage = return – baseline.  
- Assuming any function can be used as a baseline—highlight need for consistent estimation.

**5️⃣ Sanity‑check & communicate**  
- Verify by plugging in a constant baseline: variance should drop but mean gradient stays the same.  
- Relate to intuitive picture: like subtracting the mean from data before fitting a line, we center returns so policy updates are more stable.  
- End with a short recap that baselines keep learning efficient without altering the true objective.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
