---
qid: ing_87f97713dd__fp__local
question: 'Explain: Main — DeepSeek-R1 incentivizes reasoning in LLMs through reinforcement
  learning | Nature'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 390
total_tokens: 569
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:53:49-05:00'
sources: []
---

**Why “DeepSeek‑R1” needs reinforcement to reason**

A language model (LLM) learns a mapping  
\(p_{\theta}(y\mid x)\) by maximizing likelihood on huge corpora.  
This objective is *local*: it rewards token‐by‐token matches with the training text, but it offers no signal for *global* coherence or logical validity.  

Reinforcement learning (RL) supplies that missing *task‑level* reward \(R(y,x)\).  In DeepSeek‑R1 the reward is a function of how well the generated answer satisfies an external reasoning benchmark—e.g., the correctness of chain‑of‑thought steps.  
Formally, we solve  

\[
\max_{\theta}\; \mathbb{E}_{x\sim D}\big[\,\mathbb{E}_{y\sim p_{\theta}(\cdot|x)} R(y,x)\,\big].
\]

Because the reward is non‑differentiable (it depends on discrete outputs), policy gradient methods (e.g., REINFORCE) are used.  The key insight: **RL turns a static language model into an *adaptive* reasoning agent**—the model learns to trade off fluent wording against steps that maximize \(R\).

The deeper principle is *optimality of control under uncertainty*: the policy must balance exploitation (known good tokens) with exploration (trying new token sequences that might yield higher reward).  The non‑obvious twist in DeepSeek‑R1 is that it **penalizes hallucinated intermediate states**—the RL objective incorporates a *confidence* term derived from the model’s own entropy.  This discourages reckless guessing and encourages the model to generate explicit, verifiable reasoning chains rather than opaque conclusions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
