---
qid: ing_9342e160cc__think__local
question: Why Scale by √d_k? — Llm Internals
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 596
total_tokens: 786
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T10:48:59-05:00'
sources: []
---

**Meta‑thinking guide: “Why scale by √dₖ?”**

1. **Clarify the context and assumptions**  
   - *What is dₖ?* – the dimensionality of key/query vectors in a transformer attention layer.  
   - *Why do we care about scaling?* – to keep dot‑products at a stable magnitude so that softmax behaves well (avoids vanishing/exploding gradients).  
   - *Assume*: standard scaled‑dot‑product attention, keys/queries drawn from roughly isotropic Gaussian distributions.

2. **Apply the statistical mental model**  
   - Treat each key/query component as an independent random variable with mean 0 and variance σ².  
   - The dot product is a sum of dₖ such terms → its variance ≈ dₖ·σ⁴ (by independence).  
   - Taking the square root normalizes this variance back to O(1), preventing it from growing linearly with dₖ.

3. **Step‑by‑step reasoning**  
   1. Compute dot product z = Q·Kᵀ → z ∼ N(0, dₖσ⁴).  
   2. Divide by √dₖ: z' = z/√dₖ → Var(z') = dₖσ⁴ / dₖ = σ⁴ (≈ 1 if σ²=1).  
   4. Softmax operates on z', so its inputs stay in a numerically stable range.  
   5. Empirically, this keeps gradients from exploding/vanishing during back‑prop.

4. **Common traps to avoid**  
   - *Mixing up scaling for attention vs. other layers*: the √dₖ factor is specific to dot‑product attention, not for MLPs or residual connections.  
   - *Assuming dₖ is always 64 or 128*: the derivation holds for any dimensionality; the factor just keeps variance constant.  
   - *Overlooking initialization*: if weights aren’t properly initialized (e.g., Xavier), even √dₖ scaling may not suffice.

5. **Sanity‑check & verbalizing**  
   - Verify that after scaling, typical dot‑product values lie roughly in [−3, 3] so softmax isn’t saturated.  
   - Explain aloud: “Because each dot product is a sum of dₖ random terms, its spread grows with √dₖ; dividing by √dₖ keeps the spread constant, ensuring stable gradients.”  

Follow this scaffold whenever you need to justify a scaling factor in neural‑network design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
