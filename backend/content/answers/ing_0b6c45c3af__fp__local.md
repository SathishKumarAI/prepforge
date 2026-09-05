---
qid: ing_0b6c45c3af__fp__local
question: Images are 2D and video is 3D, but an LLM's positional encoding is 1D. What
  breaks if you just flatten the patches, and how do modern VLMs handle it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 202
output_tokens: 530
total_tokens: 732
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:30:27-05:00'
sources: []
---

**Why a flat sequence hurts**

A transformer treats its input as an unordered set of tokens.  
If you flatten image patches into a single 1‑D list, the model loses any *geometric* ordering: neighbouring pixels in the 2‑D plane become arbitrarily distant in token order. The attention mechanism then has to learn, from scratch, that “patch (i,j) is adjacent to (i±1,j)” and that “pixels along a row share a common axis”.  
This erases two powerful inductive biases:

| Bias lost | Consequence |
|-----------|-------------|
| Locality (neighbouring patches influence each other strongly) | Attention must now rely on global weights, inflating parameters and training data. |
| Translational symmetry (shifting an object should produce the same representation) | The model cannot reuse learned patterns across spatial locations; it has to relearn for every shift. |

**Modern VLMs restore geometry**

1. **Explicit 2‑D/3‑D positional encodings** – each patch token is appended with a learnable vector that encodes its row, column (and frame) indices, so the transformer can recover spatial relationships.  
2. **Patchwise embeddings from CNN backbones** – convolutional layers first process patches locally, preserving locality before feeding tokens to the transformer.  
3. **Relative/structured attention** – some architectures modify the attention matrix to penalise distant pairs or to enforce a grid‑like sparsity pattern.

The non‑obvious insight: *flattening destroys the model’s inductive bias more severely than merely adding positional tags*. Even with perfect position embeddings, without a convolutional or hierarchical scaffold the transformer must learn locality from data alone—a prohibitively expensive endeavor. Hence modern VLMs combine early geometric processing with transformers to keep both flexibility and efficiency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
