---
qid: ing_b1d72d016e__think__local
question: 'Explain: Part 3: Intro to Policy Optimization ¶ — Part 3: Intro to Policy
  Optimization \u2014 Spinning Up  documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 208
output_tokens: 570
total_tokens: 778
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T12:44:33-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**

- The user wants a *plain‑English* summary of the “Intro to Policy Optimization” section in the Spinning‑Up for Deep RL docs (Part 3).  
- Assume the reader knows basic reinforcement learning (states, actions, rewards) but not policy gradients.  
- Keep it short (≈200 words) and focus on key ideas: why we need policy optimisation, what a policy is, how gradients are computed, and what the algorithm looks like.

**2️⃣ Mental model to apply**

Treat policy‑optimization as *gradient descent in function‑space*.  
Map the RL problem → objective (expected return) → differentiate w.r.t. policy parameters → update rule.  
Use the “policy gradient theorem” as the bridge between expected return and a tractable gradient estimate.

**3️⃣ Step‑by‑step reasoning**

1. **Define a stochastic policy πθ(a|s)**: parameterised by θ (e.g., neural net).  
2. **Goal**: maximise J(θ) = Eπ[∑ γᵗ rₜ].  
3. **Policy gradient theorem** gives ∇J(θ)=Eπ[∇θ log πθ(a|s) Qπ(s,a)].  
4. **Monte‑Carlo estimate**: sample trajectories → compute returns Gₜ as Q̂, then average ∇θ log π Gₜ.  
5. **Update rule**: θ←θ+α∇J(θ).  
6. Highlight the two main variants introduced: REINFORCE (plain MC) and Actor‑Critic (use critic to estimate Q).

Mention why we use *stochastic* policies (exploration) and how variance reduction tricks (baseline, advantage) help.

**4️⃣ Common traps**

- Mixing up “policy” vs. “value function”.  
- Forgetting that the gradient is taken w.r.t. policy parameters, not rewards.  
- Assuming the return estimate is exact; in practice we use sampled returns.  
- Ignoring that learning rates and discount factors matter.

**5️⃣ Sanity‑check & communicate**

- Verify dimensionalities: ∇θ log π(a|s) has same shape as θ.  
- Check signs: higher rewards → positive gradient → policy more likely to choose those actions.  
- Explain in plain terms: “We adjust the neural net weights so that actions that led to good outcomes become slightly more probable, while bad ones become less probable.”

With this structure, you can confidently explain Part 3 of Spinning‑Up’s intro to policy optimisation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
