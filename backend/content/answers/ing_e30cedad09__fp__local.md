---
qid: ing_e30cedad09__fp__local
question: 'Explain: Why is MSE a bad loss for classification, even though it "works"?
  Connect it to the probabilistic view of loss functions.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 436
total_tokens: 624
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:02:34-05:00'
sources: []
---

**Why Mean‑Squared Error (MSE) is a poor loss for classification**

The core task in classification is *predicting a probability distribution* over discrete labels. A principled way to evaluate such predictions is the **negative log‑likelihood** (cross‑entropy), which directly measures how well the model’s output probabilities match the true categorical distribution.  

MSE treats each class score as an independent real number and penalises squared deviation from a one‑hot target vector. This ignores that the outputs should sum to 1 and are interdependent: increasing the probability of the correct class necessarily reduces some others. Consequently, MSE does not reflect the **Kullback–Leibler (KL) divergence** between predicted and true distributions; it only measures Euclidean distance in score space.

Two practical problems follow:

| Issue | Why it hurts |
|-------|--------------|
| **Vanishing gradients** | For a correct class with high logit, MSE’s derivative w.r.t. that logit is proportional to the *difference* between predicted and target (≈ 1). When the network already outputs ≈ 1 for the right class, this difference shrinks rapidly, yielding tiny updates. Cross‑entropy keeps gradients large until probabilities are near 0 or 1. |
| **Misaligned incentives** | MSE rewards “spread out” predictions that still keep the correct logit high, because it only cares about squared error on each component separately. Cross‑entropy penalises any mass placed on wrong classes through the logarithm term. |

A non‑obvious insight: *MSE implicitly assumes a Gaussian noise model for logits*, which is inappropriate when the target is categorical (a multinomial). This mismatch leads to suboptimal learning dynamics and poorer calibration of probabilities, even if classification accuracy may appear acceptable.

In short, MSE lacks the probabilistic grounding that guarantees optimality under the true generative process of labels; cross‑entropy does.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
