---
qid: ing_dd7b5427af__fp__local
question: 'Explain: Role Prompting — Prompt Engineering Fundamentals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 320
total_tokens: 488
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:50:25-05:00'
sources: []
---

**Prompt engineering** is the art of coaxing a language model into solving a problem with minimal data.  
At its core, a prompt is *input* plus an *objective*. The model’s loss function—cross‑entropy over token probabilities—doesn’t care about intent; it only sees a sequence of tokens. Therefore, to make the model “understand” what you want, you must shape that sequence so that the *most likely next token* aligns with your goal.

1. **Define the task space**: identify the latent variable you wish to influence (e.g., sentiment, code style).  
2. **Anchor with examples** (few‑shot) or constraints (zero‑shot). Each example adds a prior over the hidden representation that biases decoding toward the target distribution.  
3. **Control temperature and top‑k**: these hyper‑parameters shrink or broaden the token probability mass, trading creativity for determinism.

The deeper principle is *information bottleneck*: prompts act as a compressed summary of the desired output distribution. The model must infer a latent variable that maximizes mutual information with the prompt while minimizing redundancy with irrelevant tokens.

A non‑obvious insight: **prompt length matters exponentially**—adding a single carefully chosen token can shift the posterior over thousands of hidden units, because transformer attention is content‑aware and self‑attentive. Thus, subtle phrasing changes can dramatically alter the model’s internal representation, enabling fine‑grained control without retraining.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
