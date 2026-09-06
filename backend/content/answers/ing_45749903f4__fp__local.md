---
qid: ing_45749903f4__fp__local
question: 'Explain: Prompting engineering — DeepSeek-R1 incentivizes reasoning in
  LLMs through reinforcement learning | Nature'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 419
total_tokens: 600
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:33:14-05:00'
sources: []
---

**Prompting Engineering and the DeepSeek‑R1 Insight**

At its core, a language model (LLM) is an amortized inference engine: it maps tokens \(x\) to a distribution over next tokens \(\Pr_\theta(y|x)\). The *prompt* supplies the context that conditions this distribution. If the prompt merely asks for an answer, the model will surface whatever pattern it has seen most often, regardless of correctness or depth.

DeepSeek‑R1 flips this paradigm by treating reasoning as a *latent policy* \(\pi_\phi(a|x)\) over intermediate actions \(a\) (e.g., sub‑questions, proofs). The objective is no longer to maximize likelihood on static data but to maximize an external reward \(R(x,a)\) that rewards correct, coherent chains of thought. By framing reasoning as a reinforcement learning (RL) problem, the model learns to *plan*: choose a sequence of actions that leads to high‑reward states.

Why must this work?  
1. **Optimization principle** – RL optimizes expected reward, not just likelihood, aligning training with evaluation criteria (accuracy, completeness).  
2. **Information bottleneck** – The policy compresses the prompt into an internal plan that preserves only information useful for the final task, reducing hallucinations.  
3. **Geometry of latent space** – Intermediate actions correspond to points on a manifold of plausible reasoning steps; learning to navigate this manifold yields smoother, more interpretable outputs.

A non‑obvious insight: *reward shaping* in DeepSeek‑R1 is not just about encouraging correct answers but about sculpting the *search topology*. By giving higher rewards to intermediate states that reduce uncertainty (e.g., a sub‑question that partitions the problem space), the RL agent learns to perform *information‑gain* planning, akin to active learning. This turns prompting from a static prompt into an interactive dialogue where the model actively seeks the most informative next step before answering.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
