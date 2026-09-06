---
qid: ing_f6cd1c54c2__fp__local
question: 'Explain: Coursework — Home | CS324'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 421
total_tokens: 589
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:44:12-05:00'
sources: []
---

**CS 324 – “Machine Learning” Coursework Overview**

The syllabus is built around the *optimization‑information trade‑off* that underlies all supervised learning: we want a model that generalises well (low expected loss) while remaining tractable to train and interpret.  
1. **Core modules**  
   - **Statistical foundations** – probability spaces, KL divergence, PAC bounds. These give the *why* behind empirical risk minimisation.  
   - **Optimization engines** – gradient descent, stochastic variants, convexity guarantees. They are the *mechanism* that turns theory into practice.  
   - **Model families** – linear, kernel, neural nets. Each is a family of functions with a capacity measure (VC‑dimension, Rademacher complexity). The coursework asks you to *derive* these measures rather than quote them.  
2. **Project cycle**  
   - **Data ingestion → feature engineering → hypothesis selection → evaluation**. At each step the assignment forces you to write out the objective function and its gradients analytically before coding, reinforcing the link between math and code.  
3. **Assessment design**  
   - *Problem sets* test analytical derivations (e.g., proving that hinge loss upper‑bounds misclassification error).  
   - *Programming labs* require implementation of a new optimiser from scratch; this exposes the *bias–variance* consequences of step‑size schedules.  

**Non‑obvious insight:** The curriculum’s insistence on deriving gradients analytically before coding reveals that *backpropagation is not just a computational trick but a universal method for enforcing the chain rule across nested optimisation problems*. By seeing the derivation, students realise why automatic differentiation works and how it can be extended to non‑differentiable layers (e.g., max‑out) through subgradient calculus. This perspective turns every assignment into an exercise in *mathematical engineering*, not merely a programming chore.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
