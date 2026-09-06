---
qid: ing_8b4e5ae8cd__fp__local
question: 'Explain: Bringing The Tensors Into The Picture — The Illustrated Transformer
  \u2013 Jay Alammar \u2013 Visualizing machine learning one concept at a time.'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 367
total_tokens: 561
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:01:02-05:00'
sources: []
---

**Why the “tensor‑in‑picture” trick is essential**

The Transformer’s core operation is *attention*: a weighted sum of value vectors where the weights come from dot‑products between query and key vectors. In code these are just multi‑dimensional NumPy arrays, but that abstraction hides how each element moves through the network.

Think of a tensor as a *grid of data points* in high‑dimensional space. Each attention head is a *projection* onto a new basis: queries, keys, and values are linear maps (matrices) applied to the input token embeddings. The dot product between query and key gives a similarity score; applying softmax turns it into a probability distribution over positions. Finally we take a weighted sum of values—this is exactly the matrix‑vector multiplication *V × softmax(QKᵀ)*.

**Deep insight:** Attention is just *probabilistic interpolation* in the embedding space. The softmax enforces that every output token is a convex combination of input tokens, preserving locality while allowing long‑range dependencies. The tensor view makes it clear that the “weights” are not fixed but computed on‑the‑fly from data, which explains why Transformers can handle arbitrary sequence lengths.

**Non‑obvious takeaway:** If you visualize each head’s attention matrix as a heat map over tokens, you’ll see that some heads specialize in *positional patterns* (e.g., detecting “next word”) while others capture *semantic relations* (e.g., coreference). This emergent specialization arises automatically from the tensor operations—no explicit architectural bias is needed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
