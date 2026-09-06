---
qid: ing_b67e845d69__fp__local
question: 'Explain: In-context learning — Prompt Engineering And Context'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 396
total_tokens: 565
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:31:56-05:00'
sources: []
---

**In‑context learning (ICL)** is the phenomenon that a language model, given a short *prompt* containing a few examples of an input–output pair, can perform the same task on new inputs without any weight updates.  
To understand why this works, consider the transformer’s objective: it maximises the probability  

\[
P(x_1,\dots ,x_n)=\prod_{t=1}^{n} P(x_t|x_{<t}),
\]

i.e. it learns to predict the next token conditioned on everything that precedes it.  
When we feed a prompt such as

```
Q: 2+2 = ?
A: 4
Q: 3+5 = ?
A:
```

the tokens “Q:” and “A:” act as *meta‑tokens* that encode the structure of the task (a question–answer pair). The model’s internal representation now contains a context vector summarising:

1. **Task specification** – the pattern “question → answer”.
2. **Parameter values for the mapping** – inferred from the few examples.

Because transformers compute hidden states as weighted sums over all prior tokens, the *context window* essentially becomes a tiny neural network that can be re‑parameterised on the fly by the prompt itself. This is an instance of **meta‑learning**: the model learns how to learn from data presented in its own input stream.

A subtle but powerful insight is that ICL exploits **positional attention** rather than explicit gradient updates. The prompt’s tokens are not “training signals”; they are *instructions* encoded as additional conditioning information. Thus, any task that can be expressed as a sequence transformation can, in principle, be solved by an appropriately crafted context—without ever touching the model’s weights.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
