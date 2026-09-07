---
qid: ing_885d335166__faang__local
question: Compare L1 and L2 regularization. Why does L1 produce sparse weights?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 751
total_tokens: 990
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:01:19-05:00'
sources: []
---

**Clarify**  
We’re asked to contrast **L1** (ℓ₁) vs **L2** (ℓ₂) regularization and explain why ℓ₁ tends to drive many model weights exactly to zero, yielding sparse solutions.

---

### 1️⃣ Approach  

| Step | What I’ll cover |
|------|-----------------|
| Definition | Penalty terms added to the loss |
| Geometric intuition | Shape of the constraint region vs. loss contours |
| Effect on coefficients | How the optimizer chooses a point on the boundary |
| Resulting sparsity | Why ℓ₁ “touches” axes more often than ℓ₂ |

---

### 2️⃣ Depth  

**L1 Regularization**  
\[
\mathcal{L}(\mathbf{w}) = \text{Loss} + \lambda \|\mathbf{w}\|_1
= \sum_i |w_i|
\]
The feasible set defined by \(\|\mathbf{w}\|_1 \leq t\) is a **diamond** (an ℓ₁ ball).  
When the loss contours are smooth and convex, their first intersection with this diamond often occurs at a corner—where one or more coordinates are exactly zero. Mathematically, the sub‑gradient of |wᵢ| forces wᵢ to snap to 0 unless the gradient of the loss is large enough to overcome λ.

**L2 Regularization**  
\[
\mathcal{L}(\mathbf{w}) = \text{Loss} + \lambda \|\mathbf{w}\|_2^2
= \sum_i w_i^2
\]
The constraint region is a **sphere** (ℓ₂ ball). Its smooth boundary rarely aligns with coordinate axes, so the optimizer typically lands on a point where all coordinates are non‑zero. The gradient of \(w_i^2\) is proportional to \(w_i\), which shrinks coefficients but never forces them exactly to zero unless λ → ∞.

**Why L1 yields sparsity**  
- Geometry: corners of the ℓ₁ ball lie on axes → optimizer can “hit” zero without increasing loss.  
- Sub‑gradient: |wᵢ| has a flat region at 0, allowing exact zeros when regularization dominates.  
- Practical effect: L1 behaves like feature selection; useful for high‑dimensional data.

---

### 3️⃣ Edge Cases  

| Scenario | What could go wrong |
|----------|--------------------|
| Highly correlated features | Both ℓ₁ and ℓ₂ may arbitrarily pick one, but ℓ₁ can select an arbitrary subset. |
| λ too large | All weights collapse to zero (under‑fit). |
| Non‑convex loss | The argument about corners still holds locally but global minima may be missed. |

Testing: Vary λ, generate synthetic data with known sparse true weights, and verify recovery rates.

---

### 4️⃣ Optimize & Communicate  

- **Improvement**: Use **Elastic Net** (α ∈ [0,1]) to blend L1’s sparsity with L2’s stability.  
- **Narrative**: Emphasize the geometric picture first—people remember a diamond vs. a sphere. Then connect that intuition to sub‑gradient mechanics. Finally, give a quick sanity check for edge cases.

*Result:* Clear, concise explanation that showcases structured reasoning and depth, meeting FAANG interview expectations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
