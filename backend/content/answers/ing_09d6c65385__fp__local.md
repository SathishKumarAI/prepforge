---
qid: ing_09d6c65385__fp__local
question: Why can't you initialize all weights to zero? What do Xavier and He initialization
  actually do?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 464
total_tokens: 641
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:26:42-05:00'
sources: []
---

**Why zero‑weight initialization fails**

A neural network learns by adjusting its parameters so that the gradient of a loss function w.r.t. each weight points in a direction that reduces error.  
If every weight is set to **0**, then for any input \(x\) all neurons in a given layer produce identical pre‑activations:
\(z = W\,x + b = 0\).  
Consequently, after applying a symmetric activation (e.g., ReLU or tanh), every neuron outputs the same value.  
During back‑propagation each weight receives the *same* gradient because the error signal is distributed equally across all units.  
Thus all weights are updated identically and remain equal for every training step—**symmetry is never broken**, so the network collapses to a single linear function regardless of depth.

---

### Xavier (Glorot) & He initializations

Both aim to keep the variance of activations constant across layers, preventing exploding or vanishing signals.  
Let \(n_{\text{in}}\) and \(n_{\text{out}}\) be fan‑in and fan‑out of a weight matrix.

| Initialization | Variance of weights |
|-----------------|---------------------|
| Xavier (tanh/linear) | \(\displaystyle \frac{2}{n_{\text{in}}+n_{\text{out}}}\) |
| He (ReLU) | \(\displaystyle \frac{2}{n_{\text{in}}}\) |

They are derived by equating the expected variance of pre‑activations to that of post‑activations, assuming inputs and weights are independent Gaussian variables.  
For ReLU, only half the units activate on average; hence He scales by \(1/n_{\text{in}}\) instead of the symmetric term.

---

### Non‑obvious insight

Both initializations implicitly enforce *orthogonality* in a statistical sense: they keep the dot product between random input vectors and weight columns near zero.  
This property preserves information flow through deep stacks, allowing gradients to propagate without distortion—an effect that is often overlooked when people attribute success solely to “non‑zero” weights.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
