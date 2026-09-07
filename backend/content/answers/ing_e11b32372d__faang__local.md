---
qid: ing_e11b32372d__faang__local
question: 'Explain: Relationships ¶'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 688
total_tokens: 915
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:22:41-05:00'
sources: []
---

## Clarify  
The interview asks you to describe *relationships* in ML – i.e., how we model dependence between variables, capture interactions, and encode structure (e.g., causal, temporal).  
Assumptions:  
- You’re speaking about supervised learning, but the concepts generalize.  
- The audience knows basic stats (correlation) but may not know advanced graph models.

## Approach  
1. Define “relationship” in ML terms.  
2. Enumerate common relationship types (linear, nonlinear, conditional, causal).  
3. Show how each is captured by popular models or techniques.  
4. Discuss validation and pitfalls.

## Depth  

| Relationship | Typical ML model / technique | Key idea & complexity |
|--------------|-----------------------------|------------------------|
| **Linear/affine** | Linear regression, logistic regression, linear SVM | Weight vector *w* gives ∂y/∂x; O(nd) fit (n=examples, d=features). |
| **Non‑linear** | Kernel methods, decision trees, neural nets | Implicit basis expansion or hierarchical feature learning. Complexity grows with depth/size. |
| **Conditional / Interaction** | Polynomial regression, interaction terms, tree splits, attention mechanisms | Captures *f(x1,x2)* ≠ f(x1)+f(x2). Requires combinatorial exploration; trees learn by greedy splits. |
| **Temporal (sequence)** | RNNs/LSTMs, Temporal Convolution, Transformers | State transition *h_t = g(h_{t-1}, x_t)*; O(n·T) where T is sequence length. |
| **Causal** | Structural causal models (SCM), Do‑calculus, propensity score matching | Explicit graph G(V,E); inference via backdoor/IV adjustment. Complexity depends on DAG size but can be NP‑hard to learn. |

- **Feature engineering**: transforms (log, polynomial) explicitly encode relationships before modeling.  
- **Regularization / sparsity**: L1 encourages simple relationships; group lasso enforces structured interactions.

## Edge Cases  

| Scenario | Breaks if | Test |
|----------|-----------|------|
| Highly correlated features → multicollinearity | Linear models give unstable weights | VIF > 10 |
| Non‑stationary time series | RNNs trained on past data underpredict future | Split train/val by time, monitor drift |
| Unobserved confounders in causal graph | Estimated effect biased | Sensitivity analysis, instrumental variables |

## Optimize & Communicate  
- **Explain trade‑offs**: linear models are fast and interpretable but miss interactions; deep nets capture complex patterns but need data and tuning.  
- **Narration tip**: “We start by assuming the simplest relationship—linear—and progressively add complexity (non‑linearity, interactions, temporal dynamics) until validation metrics plateau.”  
- **Show complexity**: linear O(nd), tree splits O(n log n), neural nets O(∑ layers·units²).  

This structured answer demonstrates clear problem framing, systematic exploration of relationship types, depth in modeling choices, awareness of edge cases, and a concise narrative—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
