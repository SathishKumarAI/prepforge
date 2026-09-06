---
qid: ing_b1c5d26c0e__fp__local
question: 'Explain: Repetition Penalties — Inference Pipeline'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 533
total_tokens: 702
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:22:00-05:00'
sources: []
---

### Why Repetition Penalties Exist

When a language model predicts the next token it optimises a *conditional probability* \(p(t\mid h)\) over all vocabulary items \(t\).  
If the context \(h\) contains many repeated phrases, the optimiser will keep looping those phrases: the probability mass for each repeated token is reinforced by the very same context.  
Mathematically, the log‑likelihood gradient for a token \(t_i\) in a repetitive sequence grows roughly linearly with its frequency in \(h\), so the model *over‑fits* to self‑reinforced patterns.

### The Penalty Mechanism

A repetition penalty multiplies (or adds a negative bias to) the logits of tokens that have appeared before:

\[
\tilde{z}_t = 
\begin{cases}
\alpha \, z_t & t \text{ not in } h\\[4pt]
\beta \, z_t & t \in h
\end{cases},
\quad 0<\beta<1,\;\alpha=1.
\]

The factor \(\beta\) shrinks the probability of repeating tokens by a constant fraction.  
Because softmax is *log‑concave*, this multiplicative shrinkage corresponds to adding a **convex regulariser** that penalises high token frequency—an instance of *entropy maximisation* under a constraint.

### Why It Works

1. **Breaks the self‑reinforcement loop**: by dampening already seen logits, the model must look for new tokens.
2. **Preserves diversity without hard constraints**: unlike beam search pruning, it retains all tokens in the vocabulary, allowing the model to recover if a repeated token is genuinely needed later.
3. **Parameter‑free**: only one scalar \(\beta\) per inference run.

### Non‑Obvious Insight

The penalty’s effect is *context‑sensitive*: for rare vocab items that accidentally appear early (e.g., a typo), the same \(\beta\) will still suppress them, potentially erasing useful signals. A more principled approach is to make \(\beta\) **adaptive**—decay it with token frequency or use a learned penalty per token. This turns the repetition penalty into an *attention‑based regulariser*, aligning it with transformer self‑attention and preserving the model’s expressivity while still curbing runaway loops.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
