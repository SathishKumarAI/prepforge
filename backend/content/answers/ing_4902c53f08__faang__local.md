---
qid: ing_4902c53f08__faang__local
question: 'Explain: Position Information — Transformer Architecture'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 489
total_tokens: 718
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:33:49-05:00'
sources: []
---

**Position Information in Transformers**

---

### 1️⃣ Clarify  
*Problem:* How do transformers encode *where* tokens appear when they lack recurrence?  
*Assumptions:* We’re working with the vanilla Transformer (Vaswani et al., 2017), using positional encodings added to input embeddings before multi‑head attention.

### 2️⃣ Approach  
1. **Define a positional vector for each index** \(p_i\).  
2. **Add it element‑wise** to the token embedding \(x_i\) → \(\tilde{x}_i = x_i + p_i\).  
3. Pass \(\{\tilde{x}_i\}\) through self‑attention; attention weights remain position‑agnostic, but queries/keys now carry positional cues.

### 3️⃣ Depth  
- **Sinusoidal encodings**: \(p_{i,2k}   = \sin(i / 10000^{2k/d})\),  
  \(p_{i,2k+1}= \cos(i / 10000^{2k/d})\).  
  *Why?* Allows the model to extrapolate to longer sequences and provides a smooth, continuous representation.  
- **Learned embeddings**: trainable vectors per position (works well on fixed‑length data).  
- Complexity: \(O(Ld)\) memory for storing encodings; negligible runtime cost since addition is linear.

### 4️⃣ Edge Cases  
- **Very long sequences:** sinusoidal ensures extrapolation; learned positions may overfit.  
- **Variable sentence lengths across batches:** pad with a special “pos‑pad” vector or mask out attention to padding.  
- **Bidirectional vs unidirectional decoding:** decoder can use *causal* masks, but still benefits from positional cues.

### 5️⃣ Optimize & Communicate  
- For extremely long inputs, consider relative position encodings (e.g., T5) to reduce memory.  
- In practice, I’d start with sinusoidal for its generality, then benchmark against learned embeddings on a validation set.  
- When explaining to stakeholders: “We give each word a unique coordinate in space; the attention mechanism then respects those coordinates without needing an RNN.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
