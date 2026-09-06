---
qid: ing_acf1c5e4a2__think__local
question: 'Explain: Estimate the KV-cache memory for a 3B on-device model at 4k context,
  and name the levers that shrink it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 208
output_tokens: 575
total_tokens: 783
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T12:24:20-05:00'
sources: []
---

**1️⃣ Clarify & set assumptions**  
- Identify what “KV‑cache” means: key/value activations per token in a transformer.  
- Assume 3 B parameter model uses ~12‑bit/16‑bit precision for KV (common on-device).  
- 4 k context → up to 4,000 tokens; each token produces one KV pair per layer.  
- Model depth ≈ 24 layers (typical for a 3 B GPT‑style net).  

**2️⃣ Mental model / framework**  
- Memory = (#layers) × (#tokens) × (size of one KV pair).  
- Size of one KV pair = (hidden_dim/precision).  
- Hidden dimension ≈ 1,536 (since 3 B ≈ 24×1.5k).  

**3️⃣ Step‑by‑step reasoning**  
1. Compute hidden dim: \(h \approx \frac{3\,\text{B}}{24} \approx 125\,\text{M}\) → ~1,536.  
2. KV pair size (16‑bit float): \(1,536 × 2 bytes ≈ 3 kB\).  
3. Per token per layer: 3 kB; for 24 layers → 72 kB.  
4. For 4,000 tokens: \(72\,\text{kB} × 4{,}000 ≈ 288\,\text{MB}\).  
5. If using 12‑bit (or int8) quantization, divide by ~1.33 → ~217 MB.  

**4️⃣ Common traps to avoid**  
- Mixing up bits vs bytes; double‑counting precision.  
- Forgetting that KV cache is per layer *and* per token.  
- Assuming every context position needs a full cache (some pruning possible).  

**5️⃣ Sanity‑check & verbalize**  
- 300 MB for 4k tokens feels reasonable for a mobile device; matches typical “on‑device” budgets (~512 MB).  
- State assumptions clearly: “Assuming 16‑bit floats, 24 layers…” so the estimate is reproducible.  

**Levers to shrink KV cache**  
1. **Quantization** (12‑bit → int8).  
2. **Sparse attention / block‑locality** to keep only recent tokens.  
3. **KV caching policies** (e.g., evict older keys).  
4. **Reduce hidden dimension or depth** during model design.  
5. **Shared KV across layers** (weight tying of key/value matrices).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
