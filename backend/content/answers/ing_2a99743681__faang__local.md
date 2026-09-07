---
qid: ing_2a99743681__faang__local
question: 'Explain: The Assumption That Turned Out to Be Wrong'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 459
total_tokens: 694
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:22:23-05:00'
sources: []
---

**Clarify**  
The interview asks for a concrete example of an ML assumption that was widely held but later proved false. A classic case is the **“independent and identically distributed (i.i.d.)” data assumption** used in most supervised learning pipelines.

Assumptions to confirm:  
- Data points are drawn independently from the same underlying distribution.  
- Test data follows the same distribution as training data.  

**Approach**  
1. Identify where i.i.d. is baked into algorithms (e.g., loss functions, regularization).  
2. Explain real‑world violations (time series, user behavior drift, domain shift).  
3. Discuss consequences: overconfident confidence estimates, poor generalization.

**Depth**  
- **Why it mattered:** Many statistical guarantees (PAC bounds, convergence rates) rely on i.i.d.  
- **What went wrong:** In recommendation systems, a user’s clickstream is temporally correlated; in autonomous driving, sensor data distribution shifts with weather or lighting.  
- **Technical impact:** Models trained under i.i.d. assumptions exhibit *covariate shift*—the feature distribution changes while the conditional label distribution stays similar. Standard empirical risk minimization then minimizes the wrong objective, leading to biased predictions and inflated error bars.

**Edge Cases**  
- Short‑term vs long‑term drift: models may perform well initially but degrade rapidly.  
- Hidden confounders that create spurious correlations during training.

**Optimize & Communicate**  
To mitigate, practitioners now employ techniques such as *domain adaptation*, *online learning*, and *calibration* (e.g., Platt scaling). When explaining this to a non‑technical stakeholder, I’d say: “We assumed each sample was independent, but in reality user behavior follows patterns. Ignoring that caused our model to over‑predict certain outcomes; we’re now training with sequential data and re‑weighting samples to reflect real usage.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
