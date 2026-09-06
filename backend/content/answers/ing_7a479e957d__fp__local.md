---
qid: ing_7a479e957d__fp__local
question: 'Explain: One Difference From BERT — The Illustrated GPT-2 (Visualizing
  Transformer Language Models) \u2013 Jay Alammar \u2013 Visualizing machine learning
  one concept at a time.'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 201
output_tokens: 363
total_tokens: 564
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:24:44-05:00'
sources: []
---

**Why GPT‑2’s attention “looks” different from BERT**

The core problem each model solves is *sequence modeling*.  
BERT learns a bidirectional context: every token attends to **both** past and future tokens (via masked self‑attention). This is optimal for downstream tasks that need an understanding of the whole sentence, but it requires the training objective to predict a missing word.

GPT‑2 flips this paradigm. It imposes a *causal* mask so that token *i* can only attend to positions < i. The transformer therefore learns **autoregressive probability** P(x₁,…,xₙ) = ∏ P(xᵢ | x₁:ᵢ₋₁). The objective is next‑token prediction, which naturally trains the network to *generate* coherent text rather than just classify it.

From an optimization viewpoint this changes the loss landscape: every training step updates only those weights that influence the probability of a single future token. Consequently GPT‑2’s attention heads specialize—early layers capture local syntax; deeper layers encode long‑range discourse because they must “plan” ahead while obeying the causal constraint.

**Non‑obvious insight:**  
The causal mask forces the model to *learn a predictive distribution*, which in turn induces an implicit “look‑ahead” strategy: higher layers build a compressed representation of all seen tokens that can be reused to predict many future words. This explains why GPT‑2’s deeper heads often attend to far‑away tokens even though they never see them during the forward pass—because those tokens are encoded implicitly in the hidden state via earlier causal interactions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
