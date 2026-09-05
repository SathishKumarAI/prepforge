---
qid: ing_3d07367a74__fp__local
question: 'Explain: Cost Comparison Example — Model Selection Guide'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 434
total_tokens: 602
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:14:03-05:00'
sources: []
---

**Cost‑Comparison in Model Selection**

The *fundamental problem* is: given a finite budget \(B\), which predictive model maximises expected performance?  
Let each candidate \(m\) incur an **operational cost** \(c(m)\) (compute, memory, latency) and yield a **utility** \(u(m)=\mathbb{E}[\,\text{score}\mid m\,]\).  
We want the allocation \(\arg\max_{m} u(m)\) subject to \(\sum c_i \le B\).  

From *optimization* theory, this is a knapsack‑style problem: maximize linear utility under linear cost. The Lagrangian
\[
\mathcal{L}(m,\lambda)=u(m)-\lambda(c(m)-B)
\]
implies the optimality condition \( \frac{\partial u}{\partial m} = \lambda\,\frac{\partial c}{\partial m}\).  
Thus, a model is worthwhile only if its marginal gain per unit cost exceeds the *shadow price* \(\lambda\), the opportunity cost of consuming budget.

**Why it must work:**  
- **Information‑theoretic bound**: \(u(m)\) cannot exceed the entropy of the target; cost limits the number of parameters we can learn.  
- **Geometric view**: each model defines a hypothesis subspace; higher capacity models trace tighter manifolds but require more samples (cost).  

**Non‑obvious insight:**  
The *effective* cost is not just runtime or memory; it includes **data acquisition** and **labeling effort**, often the dominant term. Ignoring these inflates perceived savings, leading to overfitting on cheap compute while starving the model of informative data.  
Thus, a rigorous cost comparison must aggregate all resource streams into a single \(c(m)\) before applying the marginal‑gain rule above.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
