---
qid: ing_fca05591f2__fp__local
question: 'Explain: Model Output — The Illustrated GPT-2 (Visualizing Transformer
  Language Models) \u2013 Jay Alammar \u2013 Visualizing machine learning one concept
  at a time.'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 198
output_tokens: 411
total_tokens: 609
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:56:42-05:00'
sources: []
---

**Why the “output” is what it is**

At its core, GPT‑2 is a *sequence‑to‑sequence* model that learns to predict the next token given all previous tokens.  
Mathematically, for a prompt \(x_{1:n}\) it estimates  

\[
P(x_{n+1}=w \mid x_{1:n}) = \frac{\exp(\mathbf{h}_n^\top \mathbf{W}_w)}{\sum_{v} \exp(\mathbf{h}_n^\top \mathbf{W}_v)}
\]

where \(\mathbf{h}_n\) is the hidden state after processing token \(x_n\).  
The *output* visualised by Alammar shows two key components:

1. **Attention heat‑maps** – each head learns a geometric partition of the sequence space; heads that attend to “contextual cues” (e.g., previous nouns or syntactic markers) encode long‑range dependencies, while others focus on local patterns.
2. **Token probabilities** – the softmax vector over the vocabulary reflects *information compression*: GPT‑2 compresses the entire past into \(\mathbf{h}_n\), and the output distribution is a probability density over a discrete codebook.

**Non‑obvious insight**

The heat‑maps reveal that most heads converge to **relative positional biases**: they learn to weight tokens not by absolute position but by *distance* from the current token. This aligns with the principle of *translation invariance* in convolutional nets, showing that transformers implicitly discover a form of “shift‑equivariance” even without explicit recurrence or convolution. Recognising this bias explains why GPT‑2 can generate coherent text over arbitrarily long contexts—its heads maintain consistent relational structure rather than memorising fixed patterns.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
