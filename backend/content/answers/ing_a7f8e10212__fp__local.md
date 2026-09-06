---
qid: ing_a7f8e10212__fp__local
question: 'Explain: The Decoder Side — The Illustrated Transformer \u2013 Jay Alammar
  \u2013 Visualizing machine learning one concept at a time.'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 497
total_tokens: 687
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:02:46-05:00'
sources: []
---

### The Decoder Side – from first principles

At its core the Transformer decodes a sequence by **predicting each token conditioned on all previous tokens and the encoded source**.  
1. **Why this conditioning?**  
   In language generation, every word’s likelihood depends on *what has come before* (syntax, semantics) and on *the context we are translating from*. The decoder must therefore model a conditional distribution  

   \[
   P(y_1,\dots,y_T\mid X)=\prod_{t=1}^T P(y_t\mid y_{<t},X).
   \]

2. **Why self‑attention?**  
   To compute \(P(y_t\mid y_{<t})\) we need a representation that captures dependencies at all lags without a fixed window. Multi‑head self‑attention lets each position attend to every earlier position, yielding a weighted sum of *contextualized embeddings*. This is an instance of **optimal transport**: the attention weights are learned probabilities that redistribute information from past tokens to the current one.

3. **Why masking?**  
   The causal mask enforces the *autoregressive* property—future positions cannot influence the present, which preserves causality and ensures that during training we mimic inference.

4. **Why encoder‑decoder attention?**  
   The decoder’s second attention layer projects the source sequence into a query space derived from the current decoding state. This is a form of **information bottleneck**: it forces the decoder to extract only those bits of the encoded representation that are useful for predicting the next token, filtering out irrelevant noise.

5. **Non‑obvious insight:**  
   The *sum* of self‑attention and encoder‑decoder attention can be viewed as a **two‑step message passing** in a bipartite graph: first within the target sequence (capturing linguistic structure), then between source and target (aligning semantics). This duality explains why Transformers excel at both translation and language modeling without recurrence.

In short, the decoder is an autoregressive neural network that learns to *transport* information from past tokens and the encoded input through attention, guided by causality constraints and the information bottleneck principle.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
