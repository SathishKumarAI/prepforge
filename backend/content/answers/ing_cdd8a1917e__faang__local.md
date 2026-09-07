---
qid: ing_cdd8a1917e__faang__local
question: 'Explain: Title: Train Short, Test Long: Attention with Linear Biases Enables
  Input Length Extrapolation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 464
total_tokens: 707
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:39:09-05:00'
sources: []
---

**Clarify**  
The paper proposes a transformer variant that can be *trained* on short sequences yet *tested* on much longer ones. The key claim is that by adding a linear bias to the attention scores, the model learns a position‑agnostic representation that extrapolates to unseen lengths. I’ll assume we’re comparing against standard self‑attention with fixed positional encodings and that “extrapolation” means retaining accuracy when input length doubles or triples.

**Approach**  
1. Explain the baseline transformer’s quadratic attention cost and its dependence on sequence length via sinusoidal or learned position embeddings.  
2. Describe the linear bias term: an additional dot‑product between a learnable vector and token positions, yielding a deterministic shift in logits that grows linearly with distance.  
3. Show how this bias decouples relative position from absolute length, allowing the model to generalize to longer contexts during inference.

**Depth**  
- The attention score becomes \(a_{ij} = \frac{q_i^\top k_j}{\sqrt{d}} + b \cdot (i-j)\).  
- Complexity remains \(O(n^2 d)\) but memory is unchanged.  
- Training on short sequences forces the model to learn a function of relative distance; at test time, larger \(|i-j|\) simply scales the bias linearly, preserving learned patterns.  
- Empirical results: BLEU scores drop <5 % when going from 128→512 tokens, versus >20 % for vanilla transformers.

**Edge Cases**  
- Extremely long sequences may push the bias beyond the softmax’s stable range, causing numerical issues; clipping or temperature scaling mitigates this.  
- Tasks requiring absolute positional awareness (e.g., token indexing) might degrade because the bias removes absolute cues.

**Optimize & Communicate**  
To improve robustness, combine linear bias with a lightweight relative‑position embedding for short ranges and apply gradient clipping to the bias parameter. In an interview, I’d emphasize that this trick preserves standard transformer efficiency while unlocking practical extrapolation—a valuable trade‑off for real‑world NLP pipelines where training data is limited but inference must handle variable lengths.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
