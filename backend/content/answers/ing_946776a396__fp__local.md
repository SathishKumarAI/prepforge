---
qid: ing_946776a396__fp__local
question: Why are the data elements weighted? — What is the difference between Bagging
  and Boosting? | Quantdare
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 183
output_tokens: 533
total_tokens: 716
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:20:57-05:00'
sources: []
---

### Why weight data points?

In supervised learning we minimize an expected loss  
\(L = \mathbb{E}_{(x,y)\sim P}[\,\ell(f(x),y)\,]\).  
When only a finite sample \(S=\{(x_i,y_i)\}\) is available, the empirical objective
\(\hat L = \frac1{|S|}\sum_{i}\ell(f(x_i),y_i)\) approximates \(L\).  
If some observations are more informative—e.g. they lie near a decision boundary or come from a rare class—they should contribute more to the gradient of the loss. Assigning a weight \(w_i>0\) turns the empirical risk into  
\(\hat L_w = \frac{\sum_i w_i\,\ell(f(x_i),y_i)}{\sum_i w_i}\).  
Mathematically this is equivalent to sampling from an *importance‑weighted* distribution, preserving unbiasedness while reducing variance (importance sampling principle). Hence weighting reflects the *information content* of each example, not merely its count.

---

### Bagging vs. Boosting

| Aspect | Bagging (Bootstrap Aggregating) | Boosting |
|--------|----------------------------------|----------|
| **Goal** | Reduce variance by averaging many *independent* models | Reduce bias by sequentially correcting errors |
| **Sampling** | Draw \(B\) bootstrap samples independently; each tree sees a random subset of the data. | Train models one after another, re‑weighting misclassified instances to focus on hard examples. |
| **Model dependence** | Models are uncorrelated (ideally). | Models are highly correlated; later ones depend on earlier errors. |
| **Ensemble output** | Majority vote / average of identical loss functions. | Weighted sum where weights reflect each learner’s accuracy (often via exponential weighting). |

---

### Non‑obvious insight

Both techniques are *sampling* strategies in disguise: bagging samples the data space, boosting samples the *error space*. By viewing them through the lens of **importance sampling**, we see that boosting implicitly learns a *distribution over errors* that concentrates on hard-to‑predict regions. This explains why boosting often achieves lower bias but can overfit if too many weak learners are added—its sampling distribution becomes too concentrated on noise. Understanding this duality clarifies how to tune ensemble size and regularization in practice.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
