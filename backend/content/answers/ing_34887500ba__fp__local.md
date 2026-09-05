---
qid: ing_34887500ba__fp__local
question: 'Explain: Ensemble Methods Taxonomy'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 419
total_tokens: 584
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:56:24-05:00'
sources: []
---

**Ensemble Methods: A First‑Principles Taxonomy**

At its core an ensemble tackles *model variance* and *bias* by combining multiple predictors \(h_1,\dots,h_T\). The objective is to approximate a target function \(f(\mathbf{x})\) more accurately than any single learner.  

1. **Aggregation Strategy**  
   - *Homogeneous vs. heterogeneous*: all \(h_t\) share the same hypothesis class (e.g., trees) or not (e.g., tree + SVM).  
   - *Static vs. dynamic weighting*: fixed weights (bagging, boosting) versus input‑dependent weights (stacking, mixture models).

2. **Data Resampling**  
   - *Bootstrap aggregation (Bagging)*: each \(h_t\) trained on a bootstrap sample; variance is reduced by averaging uncorrelated errors.  
   - *Boosting*: sequentially reweight data to focus on previously mispredicted instances; the ensemble becomes an additive model minimizing a loss.

3. **Model Diversity Mechanism**  
   - *Input perturbation* (bagging, random forests) or *output perturbation* (boosting, gradient boosting).  
   - *Algorithmic variation* (heterogeneous ensembles).

4. **Optimization Objective**  
   - Bagging implicitly optimizes the empirical risk under an expectation over bootstrap draws; boosting minimizes a convex surrogate loss via coordinate descent in function space.

**Non‑obvious insight:**  
The *effective ensemble capacity* is not merely the sum of individual capacities but bounded by the *mutual information* between base learners’ errors. Maximizing diversity without sacrificing accuracy equates to maximizing this mutual information, a principle that unifies bagging and boosting under an information‑theoretic framework. This explains why adding highly correlated models can hurt performance even if each is strong.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
