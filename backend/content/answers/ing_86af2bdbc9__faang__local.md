---
qid: ing_86af2bdbc9__faang__local
question: 'Explain: The decoder-only transformer, top to bottom'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 516
total_tokens: 748
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:57:00-05:00'
sources: []
---

**1️⃣ Clarify**  
> *Problem:* Describe the architecture of a **decoder‑only Transformer** (e.g., GPT) from input to output.  
> *Assumptions:* We’re dealing with language modeling, single‑head self‑attention, no encoder or cross‑attention, and causal masking.

---

**2️⃣ Approach**  
1. Tokenize → embed → add position encodings.  
2. Pass through a stack of identical decoder layers.  
3. Each layer: masked multi‑head self‑attention → residual + norm → feed‑forward → residual + norm.  
4. Final linear layer maps hidden states to vocab logits.

---

**3️⃣ Depth**  
- **Embedding**: `E ∈ ℝ^{V×d}`; input tokens → `X₀ = E(t) + P`.  
- **Causal Mask**: ensures attention only on ≤ current token, preserving autoregressiveness.  
- **Self‑Attention**: for each head `h`, compute `Q_h = XW_Q^h`, `K_h = XW_K^h`, `V_h = XW_V^h`; output `softmax((QKᵀ)/√d_k) V`. Concatenate heads → `X'`.  
- **Feed‑Forward**: `FF(x)=ReLU(xW₁ + b₁)W₂ + b₂` (usually 4× d).  
- **Residuals & LayerNorm** keep gradients stable.  
- Complexity per layer: `O(n²d)` for attention, linear in sequence length *n*.

---

**4️⃣ Edge Cases**  
- Extremely long sequences → quadratic memory; use sparse or rotary positional encodings to mitigate.  
- Tokenization mismatches → out‑of‑vocab tokens break embeddings.  
- Numerical underflow/overflow in softmax if mask not applied correctly.

---

**5️⃣ Optimize & Communicate**  
- Replace dense attention with linearized self‑attention (e.g., Performer) for `O(n)` scaling.  
- Cache key/value tensors during inference to avoid recomputation.  
- Explain trade‑offs: higher parallelism vs. memory cost, accuracy vs. speed.  

*Result:* A clear, top‑to‑bottom view of a decoder‑only Transformer suitable for FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
