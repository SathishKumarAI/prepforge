---
qid: ing_b4ee53c55b__faang__local
question: 'Explain: Self-Attention (without masking) — The Illustrated GPT-2 (Visualizing
  Transformer Language Models) \u2013 Jay Alammar \u2013 Visualizing machine learning
  one concept at a time.'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 267
output_tokens: 512
total_tokens: 779
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:44:16-05:00'
sources: []
---

**Self‑Attention (no masking)**  
*Illustrated GPT‑2 – Jay Alammar*

---

### 1️⃣ Clarify  
We’re asked to explain how self‑attention works in a Transformer block when *masking is absent*, i.e., the model can attend to every token in the sequence. Confirm: we focus on the core mechanics (query, key, value), scaling, softmax, and the role of multi‑head attention.

### 2️⃣ Approach  
1. **Embed tokens → Q,K,V matrices**  
2. **Compute pairwise scores** `S = Q·Kᵀ / √d_k`  
3. **Softmax over each row** to get attention weights `α`.  
4. **Weighted sum of V**: `out = α · V`.  
5. **Multi‑head fusion & linear projection** → final output.

### 3️⃣ Depth  
- **Q,K,V creation**: Each token’s embedding is multiplied by learned weight matrices `W_Q, W_K, W_V` (shape `[d_model→d_k]`).  
- **Scaling** (`1/√d_k`) prevents large dot‑products from pushing softmax into extremes.  
- **Softmax row‑wise** yields a probability distribution over all tokens for each query token—every token can attend to every other.  
- **Weighted sum** gives a context‑aware representation of each position, blending information across the sequence.  
- **Multi‑head** splits `d_model` into `h` heads (`d_k = d_v = d_model/h`), allowing the model to capture diverse relationships (e.g., syntax vs semantics).  
- Final linear layer (`W_O`) projects concatenated head outputs back to `d_model`.

### 4️⃣ Edge Cases  
- **Very long sequences** → quadratic memory/time.  
- **Sparse or repetitive inputs** may cause attention to collapse; training tricks (dropout, relative position encodings) mitigate this.

### 5️⃣ Optimize & Communicate  
For efficiency: use *linearized* or *sparse* attention variants. In production, batch‑wise matrix multiplication and GPU kernels keep the O(n²d) cost manageable. I’d explain that masking is simply a binary mask applied before softmax; omitting it allows full context sharing, which is essential for language modeling in GPT‑2.

---

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
