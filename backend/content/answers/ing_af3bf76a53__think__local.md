---
qid: ing_af3bf76a53__think__local
question: Why does the transformer use multiple attention heads instead of one large
  one?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 478
total_tokens: 670
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T12:31:58-05:00'
sources: []
---

**1️⃣ Clarify the question & set assumptions**  
- *What* is being asked? “Why multiple heads vs a single wide head?”  
- Assume we know the basics of self‑attention: query/key/value projections, dot‑product scaling, softmax weighting, and linear output.  
- We’ll ignore implementation tricks (e.g., sparse attention) and focus on the *conceptual* benefit.

**2️⃣ Mental model / framework**  
Treat each head as a **sub‑representation learner**: it projects queries/keys/values into its own low‑dimensional subspace, learns to attend to particular patterns or relationships.  
The overall layer is a weighted sum of these independent attentions followed by a linear merge.

**3️⃣ Step‑by‑step reasoning**  
1. *Expressivity*: A single wide head has one set of projection matrices; its attention pattern is a single convex combination of all token pairs.  
2. *Specialization*: Multiple heads allow each to focus on different “aspects” (e.g., syntax vs semantics, local vs global).  
3. *Gradient flow*: Separate heads provide multiple independent gradient paths, mitigating vanishing gradients and encouraging diverse feature learning.  
4. *Capacity scaling*: Doubling the number of heads doubles the effective capacity without increasing per‑head dimensionality, keeping computational cost roughly constant (since total hidden dimension stays fixed).  
5. Empirically: Ablation studies show that ensembles of heterogeneous attentions outperform a single homogeneous attention.

**4️⃣ Common traps to avoid**  
- Don’t conflate “more heads = more parameters” with *worse* performance; the key is shared total dimensionality.  
- Avoid assuming heads learn *distinct* topics automatically; they still benefit from regularization and training data diversity.  
- Beware of over‑interpretation: heads are a tool for modeling, not guaranteed interpretable modules.

**5️⃣ Sanity‑check & verbalize**  
Check that the argument covers expressivity, specialization, gradient benefits, and empirical evidence.  
When explaining aloud, start with “Imagine each head as a separate lens…” then outline the four points above, ending with a quick note on why this design balances capacity and efficiency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
