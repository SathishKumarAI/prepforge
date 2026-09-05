---
qid: vq_152fbfa61e__fp__local
question: Q16- How is a decision tree pruned?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 565
total_tokens: 736
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:24:11-05:00'
sources: []
---

**Pruning a decision tree from first principles**

A decision tree partitions feature space into axis‑aligned leaves; each split is chosen greedily to reduce impurity (e.g., Gini or entropy).  
The *fundamental problem* is that this greedy construction can fit noise: the empirical error on the training set keeps decreasing, but the expected test error eventually rises once the model captures idiosyncratic patterns.  
Thus we seek a **regularized objective**:

\[
\min_T \Bigl( R_{\text{emp}}(T) + \lambda\,|T|\Bigr),
\]

where \(R_{\text{emp}}\) is training error, \(|T|\) the number of leaves (model size), and \(\lambda>0\) a penalty weight.  
The first term encourages fit; the second imposes parsimony—exactly the bias‑variance trade‑off: more splits lower bias but increase variance.

**How pruning implements this objective**

1. **Post‑pruning (cost–complexity)**: starting from the fully grown tree, iteratively replace a subtree by its root leaf if doing so reduces  
   \[
   R_{\text{emp}}(T) + \alpha\,|T|
   \]
   for a chosen \(\alpha\). The critical insight is that each replacement step can be evaluated locally: only the impurity of the replaced leaves matters. This yields an efficient algorithm that produces a sequence of nested subtrees.

2. **Pre‑pruning**: stop splitting when further reduction in impurity would exceed a threshold (e.g., minimum information gain). This is equivalent to setting \(\lambda\) high enough so that no additional node satisfies the cost–complexity criterion.

**Non‑obvious insight**

Pruning can be viewed as *estimating a Bayes decision rule under a sparsity prior* on tree structure. The penalty term \(\lambda|T|\) is analogous to an L1 norm on the indicator vector of splits, encouraging many zero entries (no split). Thus pruning is not merely “cutting off over‑grown branches” but enforcing a *prior belief* that only a few informative partitions are needed—a principle shared by modern regularized learning methods such as lasso or sparse decision forests.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
