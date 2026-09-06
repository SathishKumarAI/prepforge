---
qid: ing_963d0051cc__fp__local
question: 'Explain: DeepSeek-R1-Zero — DeepSeek-R1 incentivizes reasoning in LLMs
  through reinforcement learning | Nature'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 184
output_tokens: 424
total_tokens: 608
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:24:48-05:00'
sources: []
---

**DeepSeek‑R1‑Zero: Why a “reasoning‑reward” makes language models think**

At its core, a large‑language model (LLM) is a probability distribution \(P_\theta(\text{output}\mid\text{prompt})\). It learns by minimizing cross‑entropy on next‑token prediction, which optimizes *surface* fluency but not *cognitive structure*. The fundamental problem is that the objective function rewards any token sequence that matches training data, regardless of whether it reflects a chain of logical steps.  

DeepSeek‑R1 addresses this by **augmenting the loss with a reinforcement signal**: after the model generates an answer, human evaluators (or automated proxies) score how well the answer *explains* its reasoning. The policy \(\pi_\theta\) is updated to maximize expected reward \(J(\theta)=\mathbb{E}_{a\sim\pi_\theta}[R(a)]\). By treating reasoning as a latent trajectory that leads to the final token, RL forces the model to allocate probability mass to intermediate “explanatory” tokens.  

The deeper principle is **information bottleneck**: the policy must compress the prompt into an internal representation that preserves only information useful for maximizing \(R\). This compels the network to learn *structured* representations—logical predicates, causal links—that survive the bottleneck, rather than memorized surface patterns.

A non‑obvious insight: **the reward is sparse but informative**. Even a single scalar “does this answer make sense?” can guide the model toward generating long, coherent reasoning chains because the policy learns to anticipate that each token influences the eventual reward. Thus, reinforcement learning does not simply add a new loss; it reshapes the latent geometry of the model’s internal states so that *reasoning* becomes an emergent, high‑utility strategy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
