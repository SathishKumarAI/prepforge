---
qid: ing_fac387bf3a__think__local
question: How do sinusoidal positional encodings work, and how do they compare to
  learned positional embeddings?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 197
output_tokens: 566
total_tokens: 763
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T17:32:05-05:00'
sources: []
---

**Thought Process for Explaining Sinusoidal Positional Encodings vs Learned Embeddings**

1. **Clarify the Goal & Assumptions**  
   - *Goal*: Describe how sinusoidal encodings encode position and why they’re used in transformers; compare them to learned positional embeddings.  
   - *Assumptions*: Reader knows basic transformer architecture, embedding layer, and that positions are 1‑D indices.

2. **Mental Model / Framework**  
   - Treat the encoder as a mapping from integer position *p* → vector *h(p)* of dimension *d*.  
   - For sinusoidal encodings, *h(p)* is deterministic via trigonometric functions; for learned embeddings, *h(p)* is a trainable lookup table.

3. **Step‑by‑Step Reasoning**  
   - *Sinusoid Construction*: For each dimension *i*, compute  
     \[
       h_i(p)=\begin{cases}
          \sin(p/10000^{2i/d}) & i \text{ even}\\
          \cos(p/10000^{2i/d}) & i \text{ odd}
       \end{cases}
     \]  
     Explain the choice of wavelength scaling (powers of 10⁴) to give each dimension a distinct frequency, enabling linear interpolation between positions.  
   - *Properties*:  
     - **Deterministic**: same position always maps to same vector; no extra parameters.  
     - **Continuity**: nearby positions have similar encodings → facilitates extrapolation beyond training range.  
   - *Learned Embeddings*: Each position has a dedicated trainable vector, often initialized randomly or with a sinusoid. They capture dataset‑specific positional biases but lack the interpolation property and add *O(n·d)* parameters.

4. **Common Traps to Avoid**  
   - Don’t conflate “position” with “time”; emphasize that these encodings are purely spatial indices in sequence models.  
   - Avoid claiming sinusoids are always superior; mention trade‑offs (parameter count vs flexibility).  
   - Don’t omit the role of relative position encoding variants that combine both ideas.

5. **Sanity Check & Communication**  
   - Verify dimensional consistency: each *h(p)* has dimension *d*.  
   - Use a concrete example (e.g., position 3 in a 4‑dim embedding) to illustrate both formulas.  
   - Conclude by summarizing when one might choose sinusoids (small vocab, need extrapolation) versus learned embeddings (large datasets, positional patterns that are not smoothly varying).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
