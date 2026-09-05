---
qid: vq_7085e82a7f__fp__local
question: What is the difference between regression and classification?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 425
total_tokens: 593
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:40:21-05:00'
sources: []
---

**From the core objective**

Both regression and classification are supervised learning tasks: given labeled data \((x_i,y_i)\) we learn a function \(f\) that predicts \(y\) from a new input \(x\).  
The *difference* is what the target space of \(y\) looks like.

|  | Regression | Classification |
|---|---|---|
| **Target set** | Continuous numerical values (ℝ or ℝⁿ) | Finite discrete categories (labels) |
| **Goal** | Approximate a mapping that preserves *similarity* in the real‑valued output space. | Assign each input to one of several mutually exclusive “bins” with minimal mis‑assignment probability. |

**Why the distinction matters**

- In regression we care about *distance*: errors are measured by norms (MSE, MAE). The model must capture gradients and continuity; small changes in \(x\) should produce small changes in \(y\).
- In classification we care about *separability*: a decision boundary is sufficient. The model only needs to rank probabilities or scores; the exact numeric values of those scores are irrelevant beyond ordering.

**Deeper principle**

Both problems can be cast as **optimization over probability distributions**.  
For regression, we maximize the likelihood under a continuous density (e.g., Gaussian) → leads to mean‑squared error.  
For classification, we maximize the likelihood under a categorical distribution → cross‑entropy loss. The choice of loss reflects whether the target space is metric or discrete.

**Non‑obvious insight**

Even though classification treats labels as unordered, *calibrated probabilities* (softmax outputs) encode an implicit continuous structure. A well‑calibrated classifier can be turned into a regression model by treating these probabilities as coordinates in a simplex—revealing that the boundary between “regression” and “classification” is more of a spectrum than a hard divide.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
