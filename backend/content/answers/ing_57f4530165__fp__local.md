---
qid: ing_57f4530165__fp__local
question: 'Explain: DeepSeek-R1 — DeepSeek-R1 incentivizes reasoning in LLMs through
  reinforcement learning | Nature'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 182
output_tokens: 467
total_tokens: 649
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:11:13-05:00'
sources: []
---

**Why a “reasoning‑reward” is necessary**

Large language models (LLMs) are trained by maximum likelihood on text: they learn to copy patterns that occur in the data. This objective rewards *surface plausibility*—the next token looks right—rather than *semantic correctness*. Consequently, an LLM can produce fluent but logically flawed answers.

**Reinforcement learning as a corrective lens**

RL reframes inference as a sequential decision problem. The policy \(π_{\theta}\) generates tokens; the environment supplies a scalar reward \(R\) after each full response. By optimizing the expected return
\[
J(\theta)=\mathbb{E}_{π_{\theta}}\!\left[\sum_{t} R_t\right],
\]
the model is nudged toward behaviors that maximize \(R\). If we design \(R\) to reflect *reasoning quality* (e.g., coherence, evidence chain length, logical consistency), the policy learns to favor longer deliberations and structured argumentation.

**DeepSeek‑R1’s formalisation**

1. **Reward function**: A learned scorer evaluates not just factual correctness but also intermediate reasoning steps. It assigns higher reward to outputs that contain a clear chain of premises leading to the conclusion.
2. **Policy update**: Using proximal policy optimisation (PPO), gradients flow from this multi‑step reward back through all tokens, encouraging the model to generate “thinking” before “speaking”.
3. **Self‑critical baseline**: The model compares its own generated answer against a baseline that simply repeats the prompt, ensuring the extra reasoning steps actually add value.

**Non‑obvious insight**

The key is that *reasoning itself becomes part of the objective function*. This turns the model from a “copy machine” into an *inference engine* whose utility grows with the length and clarity of its internal deliberation. The reward signal, therefore, implicitly regularises the latent space toward representations that encode logical structure rather than merely surface patterns—an emergent property that cannot be achieved by supervised fine‑tuning alone.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
