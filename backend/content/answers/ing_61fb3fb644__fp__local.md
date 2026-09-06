---
qid: ing_61fb3fb644__fp__local
question: What is loss masking in SFT, and why do you mask the prompt tokens?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 417
total_tokens: 593
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:33:50-05:00'
sources: []
---

**Loss masking in supervised fine‑tuning (SFT) – why we silence the prompt**

In a language model, training minimizes the *cross‑entropy* between the predicted next token distribution and the ground‑truth token. For an input sequence  

\[
x = [p_1,\dots ,p_m \;|\; t_1,\dots ,t_n]
\]

where \(p_i\) are prompt tokens (the “question” or system instruction) and \(t_j\) are target tokens (the answer we want the model to generate), the loss is normally summed over every position.  

The *problem* is that the prompt tokens are **not** something the model should learn to predict—they are given. If we back‑propagate through them, the gradient will try to adjust the network so that it predicts the next prompt token from its own earlier part of the prompt. That’s a spurious objective: the model could overfit to the exact wording of prompts and waste capacity on memorizing prompt patterns rather than learning to map *prompt → answer*.

**Loss masking** simply zeroes the loss contribution for all indices corresponding to \(p_i\). Mathematically:

\[
L = -\sum_{j=1}^{n} \log P(t_j | x) \quad
(\text{no terms for } p_i)
\]

This forces gradients only from answer tokens, ensuring that updates are driven by the *desired* mapping.  

**Non‑obvious insight:** Masking also prevents the model from learning a “prompt‑to‑prompt” shortcut where it predicts prompt continuations instead of genuine responses. By removing any signal from the prompt side, we guarantee that the network’s internal representation of prompts is purely an *input feature*, not something it tries to predict itself. This subtle change dramatically improves generalization when the model encounters new prompts during inference.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
