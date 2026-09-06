---
qid: ing_91f27c2bbb__fp__local
question: 'Explain: Basic Requirements — Interviewnotes 2Ndjune2022'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 507
total_tokens: 681
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:15:39-05:00'
sources: []
---

**Why a “basic‑requirements” list is essential**

At its core, a machine‑learning (ML) model is an *optimization problem*: we search a hypothesis space \( \mathcal{H} \) for a function \(h\) that minimises expected loss  
\(L(h)=\mathbb{E}_{(x,y)\sim P}[\,\ell(h(x),y)\,]\).  
The interviewer’s goal is to assess whether you can *formulate* and *solve* such problems reliably. Therefore the interview notes must cover four pillars that guarantee a sound solution:

| Pillar | Why it matters | Typical questions |
|--------|----------------|-------------------|
| **Data hygiene** | The loss depends on the empirical distribution \(\hat P\); garbage in → garbage out. | “How would you handle missing values?” / “Explain bias–variance trade‑off.” |
| **Model choice & capacity** | \( \mathcal{H} \) must be rich enough to approximate \(P\) but not too large to overfit. | “When would you pick a linear model vs a deep net?” |
| **Training algorithm** | We need an efficient optimiser that converges to a good local minimum in high‑dimensional space. | “Describe stochastic gradient descent and why it works.” |
| **Evaluation & validation** | Guarantees generalisation; the risk is measured on unseen data. | “What cross‑validation strategy would you use for time‑series?” |

---

### Non‑obvious insight

Most candidates focus on *hyperparameters* or *regularisation*, but a deeper principle is **the geometry of the loss surface**.  
If the loss is convex, any local minimum is global; optimisation is trivial.  
For non‑convex losses (deep nets), the *landscape’s curvature* dictates that many saddle points exist but are easier to escape than bad minima. Modern training relies on this fact: tiny stochastic noise in SGD acts as a “saddle‑escape” mechanism, enabling convergence to wide, flat minima that generalise better.

So, when you discuss optimisation, emphasise *why* the loss surface matters, not just *what* algorithm you use. This demonstrates mastery of the underlying mathematics and shows you can navigate the practical pitfalls of real‑world ML systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
