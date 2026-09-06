---
qid: ing_8d36656f2c__fp__local
question: For a reasoning model, describe reinforcement learning with verifiable rewards
  (RLVR) and how you would design the reward. How does it differ from classic RLHF?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 628
total_tokens: 820
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:05:11-05:00'
sources: []
---

### From “what is a good outcome?” to “how do we prove it?”

Reinforcement learning (RL) treats an agent as a **decision-maker** who receives a scalar signal \(r_t\) after each action and maximises the expected return \(\sum_{t} \gamma^t r_t\).  
The *fundamental problem* is that in many AI tasks we cannot hand‑craft a reward function that faithfully captures human intent.  RLHF (reinforcement learning from human feedback) circumvents this by letting humans rank or rate generated text, and then fitting a **reward model** \( \hat r_\theta(\text{output})\). The policy is updated to maximise the *learned* reward.

**Reinforcement Learning with Verifiable Rewards (RLVR)** replaces the learned reward with one that can be **algorithmically checked** against an objective.  Think of a puzzle solver: the goal “solve the Rubik’s cube” is verifiable—once a configuration satisfies the solved state, we know it is correct.  RLVR formalises this by defining a *verifier* \(V(\text{output}) \in \{0,1\}\) that tests whether an output meets the specification (e.g., “does the generated code compile and pass all unit tests?”). The reward becomes

\[
r = V(\text{output}) \times w_{\text{success}} + (1-V)\times w_{\text{penalty}},
\]

where \(w_{\text{success}}\) and \(w_{\text{penalty}}\) are tunable weights.  Crucially, the verifier is *deterministic* and **independent** of the policy, so the reward signal is guaranteed to be accurate and immune to human bias or noise.

### Key differences from RLHF

| Aspect | RLHF | RLVR |
|--------|------|------|
| Reward source | Learned from noisy human preferences | Deterministically verified by an algorithm |
| Training stability | Sensitive to reward‑model drift | Stable, as verifier never changes |
| Sample efficiency | Requires many human judgments | Can use inexpensive automated checks |

### One non‑obvious insight

Because the reward is *binary* (success/failure), RLVR naturally encourages **search over discrete solution spaces** rather than gradient‑based fine‑tuning.  This aligns with combinatorial optimisation principles: once a viable candidate is found, the policy can be updated to **exploit** it while still exploring new solutions that pass verification.  Classic RLHF, in contrast, tends to push the policy toward *soft* preferences, potentially overlooking sharp constraints that only a verifier can enforce.

In short, RLVR reframes reinforcement learning as an optimisation problem over verifiable objectives, ensuring that every reward signal truly reflects success and eliminating the brittleness inherent in learned human judgments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
