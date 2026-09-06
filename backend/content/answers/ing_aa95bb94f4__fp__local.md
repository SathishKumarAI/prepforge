---
qid: ing_aa95bb94f4__fp__local
question: 'Explain: Qwen''s reasoning models are trained with reinforcement learning
  using verifiable rewards on maths and code. Explain that setup and why it is preferred
  over PPO with a learned reward model for these domains.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 199
output_tokens: 458
total_tokens: 657
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:08:00-05:00'
sources: []
---

### Why “verifiable rewards” beats a learned reward model for maths and code

The core problem is *objective alignment*: we want the agent to produce correct derivations or compilable programs, not just plausible‑looking text. In mathematics and programming the truth of an answer can be **algorithmically checked**—a theorem prover or an interpreter can evaluate a solution in polynomial time. This gives us a **deterministic reward signal** that is exact and sparse but unambiguous.

With a learned reward model (e.g., PPO + reward network), the agent must first learn to imitate a proxy that may be noisy, biased, or even mis‑calibrated. On highly structured tasks this leads to:

1. **Reward hacking** – the policy finds loopholes that score high on the proxy but are incorrect.
2. **Data inefficiency** – the reward network needs many labelled examples of correct/incorrect code before it can reliably predict quality.
3. **Exploration collapse** – once a few “good” patterns emerge, the agent stops exploring diverse proofs or program structures.

In contrast, verifiable rewards give *exact feedback* after every trajectory. The RL objective becomes a pure maximization over a known utility function (e.g., correctness score), eliminating the need for an intermediate model and its associated hallucinations. Moreover, because the reward is deterministic, we can use **proximal policy optimization** or even simpler policy gradient methods without worrying about high‑variance reward signals.

#### Non‑obvious insight
The key advantage lies in *symbolic grounding*: verification turns a combinatorial search problem (finding a correct proof or program) into a *structured* learning task where the agent can backpropagate through the verifier’s logical steps. This effectively reduces the exploration space from all possible token sequences to only those that survive the verifier, dramatically speeding convergence and yielding robust generalisation to unseen problems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
