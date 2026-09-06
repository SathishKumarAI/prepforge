---
qid: ing_8c04a840cb__fp__local
question: 'Explain: Why does in-context learning work at all? The model''s weights
  don''t change.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 406
total_tokens: 583
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:02:38-05:00'
sources: []
---

In‑context learning is a *meta‑level* inference phenomenon rather than a weight‑update process.  
At the core of any neural language model is a parametric mapping \(f_\theta: \mathcal{X}\to\mathcal{Y}\) that has been trained to approximate a conditional distribution \(p(y|x)\). The training objective forces the network to internalize *latent structure*—syntax, semantics, and inductive biases—into its weights. Once this representation is fixed, inference proceeds by conditioning on an extended input that concatenates both the new query and a short “prompt” containing example pairs \((x_i,y_i)\).

Mathematically, the prompt induces a conditional distribution
\[
p_\theta(y|x,\{(x_i,y_i)\}) = f_\theta(x;\;h(\{(x_i,y_i)\})),
\]
where \(h\) is an implicit *attention* or *positional* mechanism that re‑weights hidden activations according to similarity with the examples. Because the transformer’s self‑attention operates over the entire token sequence, the model can effectively “look up” relevant patterns from the prompt and steer its output accordingly. The weights themselves remain unchanged; the prompt merely reshapes the context window’s activation landscape.

A non‑obvious insight: in‑context learning exploits *representation overlap*. Even though the network was never exposed to a particular prompt during training, the distribution of prompts encountered at inference is drawn from the same token space as its training data. Thus, any new prompt that shares substructure with learned patterns will activate similar hidden states, allowing the model to generalize without fine‑tuning. This explains why a single pass through a few examples can guide generation—because the model already knows how to *use* such information, and the prompt simply selects the relevant part of its internal knowledge base.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
