---
qid: ing_d42f3552d1__fp__local
question: 'Explain: F5: Base-model upgrade breaks legacy adapters'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 431
total_tokens: 601
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:32:11-05:00'
sources: []
---

**Why a base‑model upgrade can break legacy adapters**

A language model is essentially a *function approximator* that maps an input sequence to a probability distribution over tokens. When the base architecture (e.g., GPT‑4 → GPT‑5) changes, its internal representation space—layer dimensions, attention patterns, token embeddings—shifts in a high‑dimensional manifold. Legacy adapters are small neural nets trained to sit on top of this manifold and “translate” the raw outputs into user‑friendly formats or domain‑specific vocabularies.

1. **Manifold mismatch**  
   The adapter was tuned to a specific projection of hidden states (say, 12 k‑dim vectors). If GPT‑5 re‑scales these vectors or rearranges their semantic axes, the projection that once yielded clean logits no longer aligns with the adapter’s learned weights. Mathematically, the Jacobian of the new model wrt its inputs differs from the one assumed during adapter training, so the linearized mapping the adapter relies on is invalid.

2. **Feature drift**  
   The distribution of activations changes: a token that was once encoded in a particular subspace may now be distributed differently. Adapters trained with supervised signals (e.g., classification heads) assume stationary features; when those shift, their loss surface becomes ill‑posed and gradients vanish or explode.

3. **Implicit assumptions**  
   Many adapters use layer‑norm statistics, positional encodings, or token‑type embeddings that are baked into the base model’s architecture. A new architecture may alter these (e.g., removing type tokens), breaking the adapter’s conditioning logic.

**Non‑obvious insight:**  
Adapters are *not* merely fine‑tuning knobs; they act as *coordinate transforms* between two manifolds. When the source manifold deforms, the transform must be recomputed. Thus, upgrading a base model is analogous to changing the coordinate system in which a physical theory is expressed—without re‑deriving the transformation equations, predictions collapse.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
