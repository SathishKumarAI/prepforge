---
qid: ing_656ab057f9__fp__local
question: 'Explain: Title: SelfBudgeter: Adaptive Token Allocation for Efficient LLM
  Reasoning'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 489
total_tokens: 666
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:40:46-05:00'
sources: []
---

**Self‑Budgeter: Why an LLM should learn when to stop reasoning**

The core problem is *budgeted inference*: we want a large language model (LLM) to generate correct answers while spending as few tokens as possible, because every token costs compute and latency.  
Formally, for each prompt \(x\), the model produces a sequence of intermediate states \(\{h_t\}\) until it emits an answer \(a\). We wish to minimize expected cost
\[
\mathbb{E}_{(x,a)}[\,T(x)\,] \quad\text{s.t.}\quad \Pr[\hat a_T = a] \ge 1-\varepsilon,
\]
where \(T(x)\) is the stopping time. This is a classic sequential decision problem under uncertainty.

Self‑Budgeter casts this as an *adaptive thresholding* of the model’s own confidence: at each step it evaluates a learned scalar score \(s_t = f(h_t)\). If \(s_t\) exceeds a dynamic threshold \(\tau(x)\), the model stops; otherwise it continues. The threshold is conditioned on the input and current state, allowing the policy to allocate more tokens for hard cases (e.g., ambiguous or multi‑step reasoning) and fewer for easy ones.

Why must this work?  
- **Information‑theoretic guarantee**: The score \(s_t\) approximates the posterior probability that the current partial answer is correct. By stopping when this exceeds a target, we enforce an error bound.  
- **Optimization view**: Training jointly on loss and token count yields a Lagrangian where the multiplier balances accuracy against cost; the learned threshold naturally implements this trade‑off.

A non‑obvious insight: *the stopping policy can be learned purely from self‑supervised signals (e.g., comparing partial outputs to ground truth) without external labels for “when to stop.”* By treating each token as a data point and using reinforcement‑style rewards that penalize unnecessary tokens, the model internalizes the cost structure and discovers its own budget. This turns the expensive inference into a self‑regulated, input‑aware process, achieving both speed and precision.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
