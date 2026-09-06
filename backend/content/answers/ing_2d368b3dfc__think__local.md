---
qid: ing_2d368b3dfc__think__local
question: 'Explain: Parameter Counts — Transformer Architecture'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 185
output_tokens: 526
total_tokens: 711
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T05:38:40-05:00'
sources: []
---

**1️⃣ Clarify & set assumptions**  
   - Decide the audience’s background (e.g., undergrad CS vs. industry practitioner).  
   - Assume a standard transformer block: self‑attention + feed‑forward, no exotic variants.  
   - Fix vocab size \(V\), embedding dim \(d_{\text{model}}\), number of heads \(h\), and hidden dim \(d_{\text{ff}}\).

**2️⃣ Adopt a mental model**  
   - View the transformer as a collection of linear layers (weights + biases).  
   - Count parameters per layer type: embeddings, query/key/value projections, output projection, feed‑forward weights, layer‑norms.

**3️⃣ Step‑by‑step reasoning**  
   1. **Embedding layer:** \(V \times d_{\text{model}}\).  
   2. **Self‑attention (per head):**  
      - Q/K/V: each \(d_{\text{model}} \times d_k\) (with \(d_k = d_{\text{model}}/h\)).  
      - Output proj: \(d_{\text{model}}^2\).  
   3. **Feed‑forward:** \(d_{\text{model}}\times d_{\text{ff}}\) + \(d_{\text{ff}}\times d_{\text{model}}\).  
   4. **LayerNorms:** two per block, each \(\approx d_{\text{model}}\) parameters.  
   5. Sum over all blocks and add the output head (softmax weights).

**4️⃣ Avoid common traps**  
   - Forget biases or layer‑norm scales/gammas.  
   - Miscount heads: use \(h\) instead of total projection size.  
   - Overlook token‑type embeddings or position encodings if present.

**5️⃣ Sanity‑check & communicate**  
   - Cross‑validate with a known model (e.g., BERT‑Base ≈ 110 M).  
   - Express the result in millions and explain each component’s share.  
   - Use a diagram to map layers ↔ parameter counts, reinforcing the mental model for future reuse.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
